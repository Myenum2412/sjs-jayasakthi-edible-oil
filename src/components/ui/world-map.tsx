"use client";

import { useRef, useEffect, useState, useMemo, memo } from "react";
import { motion, useInView } from "motion/react";
import DottedMap from "dotted-map";

import { useTheme } from "next-themes";

interface MapProps {
  dots?: Array<{
    start: { lat: number; lng: number; label?: string };
    end: { lat: number; lng: number; label?: string };
  }>;
  lineColor?: string;
}

// Memoize the DottedMap instance to avoid recreation
const createMapInstance = () => new DottedMap({ height: 100, grid: "diagonal" });

function WorldMapComponent({
  dots = [],
  lineColor = "#0ea5e9",
}: MapProps) {
  const svgRef = useRef<SVGSVGElement>(null);
  const containerRef = useRef<HTMLDivElement>(null);
  const [computedLineColor, setComputedLineColor] = useState(lineColor);
  const isInView = useInView(containerRef, { once: true, margin: "100px" });

  const { theme } = useTheme();

  // Memoize the map instance
  const map = useMemo(() => createMapInstance(), []);

  // Memoize the SVG map string
  const svgMap = useMemo(() => {
    return map.getSVG({
      radius: 0.22,
      color: theme === "dark" ? "#FFFFFF" : "#000000",
      shape: "circle",
      backgroundColor: "transparent",
    });
  }, [map, theme]);

  // Convert CSS variable to computed color if needed
  useEffect(() => {
    if (lineColor.includes('var(--primary)') || lineColor.includes('hsl(var(--primary))')) {
      if (typeof window !== 'undefined') {
        // Create a temporary element to get computed color
        const tempEl = document.createElement('div');
        tempEl.style.color = 'hsl(var(--primary))';
        tempEl.style.position = 'absolute';
        tempEl.style.visibility = 'hidden';
        document.body.appendChild(tempEl);
        const computedColor = getComputedStyle(tempEl).color;
        document.body.removeChild(tempEl);

        // If we got a valid color, use it; otherwise use a green fallback
        if (computedColor && computedColor !== 'rgba(0, 0, 0, 0)' && computedColor !== 'transparent') {
          setComputedLineColor(computedColor);
        } else {
          // Fallback to a green color matching the theme (okl5383 0ch(0..1413 131.8329) ≈ #4e7e12)
          setComputedLineColor('#4e7e12');
        }
      }
    } else {
      setComputedLineColor(lineColor);
    }
  }, [lineColor, theme]);

  const projectPoint = (lat: number, lng: number) => {
    const x = (lng + 180) * (800 / 360);
    const y = (90 - lat) * (400 / 180);
    return { x, y };
  };

  const createCurvedPath = (
    start: { x: number; y: number },
    end: { x: number; y: number }
  ) => {
    const midX = (start.x + end.x) / 2;
    const midY = Math.min(start.y, end.y) - 50;
    return `M ${start.x} ${start.y} Q ${midX} ${midY} ${end.x} ${end.y}`;
  };

  // Memoize projected points
  const projectedDots = useMemo(() => {
    return dots.map(dot => ({
      start: projectPoint(dot.start.lat, dot.start.lng),
      end: projectPoint(dot.end.lat, dot.end.lng)
    }));
  }, [dots]);

  return (
    <div ref={containerRef} className="w-full aspect-[2/1] relative font-sans">
      <img
        src={`data:image/svg+xml;utf8,${encodeURIComponent(svgMap)}`}
        className="h-full w-full [mask-image:linear-gradient(to_bottom,transparent,white_10%,white_90%,transparent)] pointer-events-none select-none"
        alt="world map"
        height="495"
        width="1056"
        loading="lazy"
        draggable={false}
      />
      {isInView && (
        <svg
          ref={svgRef}
          viewBox="0 0 800 400"
          className="w-full h-full absolute inset-0 pointer-events-none select-none"
        >
          {projectedDots.map((dot, i) => (
            <g key={`path-group-${i}`}>
              <motion.path
                d={createCurvedPath(dot.start, dot.end)}
                fill="none"
                stroke="url(#path-gradient)"
                strokeWidth="1"
                initial={{ pathLength: 0 }}
                animate={{ pathLength: 1 }}
                transition={{
                  duration: 1,
                  delay: 0.3 * i,
                  ease: "easeOut",
                }}
              />
            </g>
          ))}

          <defs>
            <linearGradient id="path-gradient" x1="0%" y1="0%" x2="100%" y2="0%">
              <stop offset="0%" stopColor="white" stopOpacity={0} />
              <stop offset="5%" stopColor={computedLineColor} stopOpacity={1} />
              <stop offset="95%" stopColor={computedLineColor} stopOpacity={1} />
              <stop offset="100%" stopColor="white" stopOpacity={0} />
            </linearGradient>
          </defs>

          {projectedDots.map((dot, i) => (
            <g key={`points-group-${i}`}>
              <g key={`start-${i}`}>
                <circle
                  cx={dot.start.x}
                  cy={dot.start.y}
                  r="2"
                  fill={computedLineColor}
                />
                <circle
                  cx={dot.start.x}
                  cy={dot.start.y}
                  r="2"
                  fill={computedLineColor}
                  opacity="0.5"
                >
                  <animate
                    attributeName="r"
                    from="2"
                    to="8"
                    dur="1.5s"
                    begin="0s"
                    repeatCount="indefinite"
                  />
                  <animate
                    attributeName="opacity"
                    from="0.5"
                    to="0"
                    dur="1.5s"
                    begin="0s"
                    repeatCount="indefinite"
                  />
                </circle>
              </g>
              <g key={`end-${i}`}>
                <circle
                  cx={dot.end.x}
                  cy={dot.end.y}
                  r="2"
                  fill={computedLineColor}
                />
                <circle
                  cx={dot.end.x}
                  cy={dot.end.y}
                  r="2"
                  fill={computedLineColor}
                  opacity="0.5"
                >
                  <animate
                    attributeName="r"
                    from="2"
                    to="8"
                    dur="1.5s"
                    begin="0s"
                    repeatCount="indefinite"
                  />
                  <animate
                    attributeName="opacity"
                    from="0.5"
                    to="0"
                    dur="1.5s"
                    begin="0s"
                    repeatCount="indefinite"
                  />
                </circle>
              </g>
            </g>
          ))}
        </svg>
      )}
    </div>
  );
}

// Memoize the component to prevent unnecessary re-renders
export default memo(WorldMapComponent);

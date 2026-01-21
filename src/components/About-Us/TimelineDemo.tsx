"use client";

import { Timeline } from "@/components/ui/timeline";

export function TimelineDemo() {
  const data = [
    {
      title: "2024 – Third Generation Leadership",
      content: (
        <div>
          <p className="mb-4 text-xs font-normal text-foreground md:text-sm">
            In 2024, the third generation took charge, modernizing operations, improving quality standards, and achieving a production scale of 50,000+ average output, while maintaining our legacy of trust.
          </p>
        </div>
      ),
    },
    {
      title: "2018 – Large-Scale Vanaspati Production",
      content: (
        <div>
          <p className="mb-4 text-xs font-normal text-foreground md:text-sm">
            By 2018, our Vanaspati operations scaled up to 25,000 boxes, reinforcing our strength in bulk and commercial supply.
          </p>
        </div>
      ),
    },
    {
      title: "2015 – Entry into Vanaspati",
      content: (
        <div>
          <p className="mb-4 text-xs font-normal text-foreground md:text-sm">
            In 2015, we entered the Vanaspati segment, catering to bakery, hotel, and bulk consumption markets, opening new growth avenues.
          </p>
        </div>
      ),
    },
    {
      title: "2002 – Product Diversification",
      content: (
        <div>
          <p className="mb-4 text-xs font-normal text-foreground md:text-sm">
            In 2002, we diversified our portfolio by launching refined oils, including:
          </p>
          <div className="mb-4 space-y-2">
            <div className="flex items-center gap-2 text-xs text-muted-foreground md:text-sm">
              • Cottonseed refined oil
            </div>
            <div className="flex items-center gap-2 text-xs text-muted-foreground md:text-sm">
              • Rice bran oil
            </div>
            <div className="flex items-center gap-2 text-xs text-muted-foreground md:text-sm">
              • Palm oil
            </div>
          </div>
          <p className="mb-4 text-xs font-normal text-foreground md:text-sm">
            Production capacity increased significantly to approximately 50,000 tins, positioning us as a trusted edible oil manufacturer.
          </p>
        </div>
      ),
    },
    {
      title: "1992 – Expansion Beyond Borders",
      content: (
        <div>
          <p className="mb-4 text-xs font-normal text-foreground md:text-sm">
            By 1992, under the leadership of Sri Boopathi, the business expanded into interstate markets, scaling production to nearly 8,000 tins, strengthening our distribution network and brand presence.
          </p>
        </div>
      ),
    },
    {
      title: "1990 – Entering Manufacturing",
      content: (
        <div>
          <p className="mb-4 text-xs font-normal text-foreground md:text-sm">
            In 1990, Sri Srinivasan and Sri Ramalu expanded the vision by establishing an oil mill, producing coconut oil and castor oil with a capacity of around 3,000 tins. This marked our transition from retail to manufacturing.
          </p>
        </div>
      ),
    },
    {
      title: "1980 – The Humble Beginning",
      content: (
        <div>
          <p className="mb-4 text-xs font-normal text-foreground md:text-sm">
            Our journey began in 1980 with Sri Raghavan and Sri Tirupathiyar, who laid the foundation by running a small grocery and oil shop, producing approximately 200 tins. This phase established our values of quality, trust, and customer commitment.
          </p>
        </div>
      ),
    },
  ];
  return (
    <div className="relative w-full overflow-clip">
      <div className="mb-8 text-center">
        <p className="text-base md:text-lg font-normal text-foreground">
          Established in 1985, we've been serving customers with premium quality edible oils for over four decades. Here's our journey.
        </p>
      </div>
      <Timeline data={data} />
    </div>
  );
}

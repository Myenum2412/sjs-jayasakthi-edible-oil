"use client";

import { useState } from "react";

interface GoogleMapProps {
  address?: string;
  latitude?: number;
  longitude?: number;
  zoom?: number;
  className?: string;
}

// Default Salem location for Sri Jayasakthi Edible Oils
const DEFAULT_LAT = 11.6643;
const DEFAULT_LNG = 78.1460;

export function GoogleMap({
  latitude = DEFAULT_LAT,
  longitude = DEFAULT_LNG,
  zoom = 14,
  className = "w-full h-96",
}: GoogleMapProps) {
  const [isLoaded, setIsLoaded] = useState(false);

  // Generate static map URL (no API key required for basic static maps)
  const mapUrl = `https://www.openstreetmap.org/export/embed.html?bbox=${longitude - 0.01}%2C${latitude - 0.01}%2C${longitude + 0.01}%2C${latitude + 0.01}&layer=mapnik&marker=${latitude}%2C${longitude}`;

  return (
    <div className={`relative rounded-lg overflow-hidden border ${className}`}>
      {!isLoaded && (
        <div className="absolute inset-0 bg-muted animate-pulse flex items-center justify-center">
          <span className="text-muted-foreground">Loading map...</span>
        </div>
      )}
      <iframe
        width="100%"
        height="100%"
        frameBorder="0"
        scrolling="no"
        marginHeight={0}
        marginWidth={0}
        src={mapUrl}
        onLoad={() => setIsLoaded(true)}
        title="Sri Jayasakthi Edible Oils Location"
        className="w-full h-full"
        style={{ border: 0 }}
        allowFullScreen
        loading="lazy"
      />
      <div className="absolute bottom-4 left-4 bg-background/90 backdrop-blur-sm px-3 py-2 rounded-lg shadow-md">
        <p className="text-sm font-medium">Sri Jayasakthi Edible Oils</p>
        <p className="text-xs text-muted-foreground">NH-44, Attur Main Road, Salem</p>
      </div>
    </div>
  );
}

// Interactive Google Maps with API (for production use with API key)
export function InteractiveGoogleMap({
  latitude = DEFAULT_LAT,
  longitude = DEFAULT_LNG,
  zoom = 14,
  className = "w-full h-96",
}: GoogleMapProps) {
  const apiKey = process.env.NEXT_PUBLIC_GOOGLE_MAPS_API_KEY;
  const mapUrl = apiKey
    ? `https://www.google.com/maps/embed/v1/place?key=${apiKey}&q=${latitude},${longitude}&zoom=${zoom}`
    : `https://www.openstreetmap.org/export/embed.html?bbox=${longitude - 0.01}%2C${latitude - 0.01}%2C${longitude + 0.01}%2C${latitude + 0.01}&layer=mapnik&marker=${latitude}%2C${longitude}`;

  return (
    <div className={`relative rounded-lg overflow-hidden border ${className}`}>
      <iframe
        width="100%"
        height="100%"
        frameBorder="0"
        scrolling="no"
        marginHeight={0}
        marginWidth={0}
        src={mapUrl}
        title="Sri Jayasakthi Edible Oils Location"
        className="w-full h-full"
        style={{ border: 0 }}
        allowFullScreen
        loading="lazy"
        referrerPolicy="no-referrer-when-downgrade"
      />
    </div>
  );
}

export default GoogleMap;

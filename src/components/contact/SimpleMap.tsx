'use client';
import { useEffect, useRef, useState } from 'react';

interface SimpleMapProps {
  center?: [number, number];
  zoom?: number;
  popupText?: string;
}

const SimpleMap: React.FC<SimpleMapProps> = ({
  center = [-7.9797, 112.6304],
  zoom = 15,
  popupText = "PT. Greenovate Energy Solutions<br />Jl. Soekarno Hatta, Malang"
}) => {
  const mapRef = useRef<HTMLDivElement>(null);
  const mapInstanceRef = useRef<any>(null);
  const [isClient, setIsClient] = useState(false);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    setIsClient(true);
  }, []);

  useEffect(() => {
    if (!isClient || !mapRef.current) return;

    let mounted = true;

    const initMap = async () => {
      try {
        // Clean up existing map instance
        if (mapInstanceRef.current) {
          mapInstanceRef.current.remove();
          mapInstanceRef.current = null;
        }

        // Dynamic import of Leaflet
        const L = await import('leaflet');
        
        // Import CSS
        await import('leaflet/dist/leaflet.css');

        if (!mounted || !mapRef.current) return;

        // Clear container and remove any existing Leaflet reference
        const container = mapRef.current;
        container.innerHTML = '';
        
        // Remove Leaflet's internal tracking
        if ((container as any)._leaflet_id) {
          delete (container as any)._leaflet_id;
        }

        // Wait a bit to ensure DOM is ready
        await new Promise(resolve => setTimeout(resolve, 100));

        if (!mounted || !mapRef.current) return;

        // Create map with dragging disabled
        const map = L.map(container, {
          attributionControl: false,
          dragging: false,  // Disable dragging
          scrollWheelZoom: false, // Optionally disable scroll zooming as well
        }).setView(center, zoom);

        mapInstanceRef.current = map;

        // Add tile layer
        L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
          attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
        }).addTo(map);

        // Create custom icon
        const customIcon = L.icon({
          iconUrl: 'https://cdnjs.cloudflare.com/ajax/libs/leaflet/1.7.1/images/marker-icon.png',
          iconRetinaUrl: 'https://cdnjs.cloudflare.com/ajax/libs/leaflet/1.7.1/images/marker-icon-2x.png',
          shadowUrl: 'https://cdnjs.cloudflare.com/ajax/libs/leaflet/1.7.1/images/marker-shadow.png',
          iconSize: [25, 41],
          iconAnchor: [12, 41],
          popupAnchor: [1, -34],
          shadowSize: [41, 41]
        });

        // Add marker
        L.marker(center, { icon: customIcon })
          .addTo(map)
          .bindPopup(popupText)
          .openPopup();

        // Invalidate size after everything is loaded
        setTimeout(() => {
          if (map && mounted) {
            map.invalidateSize();
          }
        }, 200);

        setIsLoading(false);

      } catch (error) {
        console.error('Error initializing map:', error);
        setIsLoading(false);
      }
    };

    initMap();

    return () => {
      mounted = false;
      if (mapInstanceRef.current) {
        try {
          mapInstanceRef.current.remove();
        } catch (e) {
          console.error('Error removing map:', e);
        }
        mapInstanceRef.current = null;
      }
    };
  }, [isClient, center, zoom, popupText]);

  if (!isClient) {
    return (
      <div
        style={{ height: '400px', width: '100%', borderRadius: '0.375rem' }}
        className="bg-gray-200 flex items-center justify-center"
      >
        <div className="text-gray-600">Loading map...</div>
      </div>
    );
  }

  return (
    <div className="relative">
      {isLoading && (
        <div
          style={{ height: '400px', width: '100%', borderRadius: '0.375rem' }}
          className="bg-gray-200 flex items-center justify-center absolute inset-0 z-10"
        >
          <div className="text-gray-600">Loading map...</div>
        </div>
      )}
      <div
        ref={mapRef}
        style={{ height: '400px', width: '100%', borderRadius: '0.375rem' }}
        className="bg-gray-200"
      />
    </div>
  );
};

export default SimpleMap;

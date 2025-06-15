'use client';

import { useEffect, useRef, useState } from 'react';

interface SimpleMapProps {
  center?: [number, number];
  zoom?: number;
  popupText?: string;
}

const SimpleMap = ({ 
  center = [-7.983908, 112.621391], 
  zoom = 15, 
  popupText = "PT Greenovate Teknologi Indonesia" 
}: SimpleMapProps) => {
  const mapRef = useRef<HTMLDivElement>(null);
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  useEffect(() => {
    if (!mounted) return;

    const initMap = async () => {
      if (!mapRef.current) return;

      try {
        // Clean up existing map instance
        if (mapRef.current) {
          mapRef.current.innerHTML = '';
        }

        // Dynamic import of Leaflet
        const L = await import('leaflet');

        // Import CSS by adding link to head
        if (!document.querySelector('link[href*="leaflet.css"]')) {
          const link = document.createElement('link');
          link.rel = 'stylesheet';
          link.href = 'https://unpkg.com/leaflet@1.9.4/dist/leaflet.css';
          document.head.appendChild(link);
        }

        if (!mounted || !mapRef.current) return;

        // Clear container and remove any existing Leaflet reference
        mapRef.current.innerHTML = '';
        
        // Remove Leaflet's internal tracking
        delete (mapRef.current as any)._leaflet_id;

        // Wait a bit to ensure DOM is ready
        await new Promise(resolve => setTimeout(resolve, 100));

        // Create map with dragging disabled
        const map = L.map(mapRef.current, {
          dragging: false,  // Disable dragging
          scrollWheelZoom: false, // Optionally disable scroll zooming as well
          doubleClickZoom: false,
          touchZoom: false,
          boxZoom: false,
          keyboard: false,
        }).setView(center, zoom);

        // Add tile layer
        L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
          attribution: '© OpenStreetMap contributors'
        }).addTo(map);

        // Create custom icon
        const customIcon = L.icon({
          iconUrl: 'https://unpkg.com/leaflet@1.9.4/dist/images/marker-icon.png',
          shadowUrl: 'https://unpkg.com/leaflet@1.9.4/dist/images/marker-shadow.png',
          iconSize: [25, 41],
          iconAnchor: [12, 41],
          popupAnchor: [1, -34],
          shadowSize: [41, 41]
        });

        // Add marker
        const marker = L.marker(center, { icon: customIcon }).addTo(map);
        
        if (popupText) {
          marker.bindPopup(popupText).openPopup();
        }

        // Invalidate size after everything is loaded
        setTimeout(() => {
          map.invalidateSize();
        }, 100);

      } catch (error) {
        console.error('Error initializing map:', error);
        
        // Fallback: show a simple div with location info
        if (mapRef.current) {
          mapRef.current.innerHTML = `
            <div class="flex items-center justify-center h-full bg-gray-100 rounded-lg border shadow-lg">
              <div class="text-center p-6 bg-white rounded-lg">
                <div class="text-lg font-semibold text-gray-700 mb-2">${popupText}</div>
                <div class="text-sm text-gray-500">Map temporarily unavailable</div>
                <div class="text-xs text-gray-400 mt-2">Location: ${center[0]}, ${center[1]}</div>
              </div>
            </div>
          `;
        }
      }
    };

    initMap();
  }, [mounted, center, zoom, popupText]);

  if (!mounted) {
    return (
      <div className="w-full h-96 lg:h-[500px] bg-gray-100 rounded-lg animate-pulse flex items-center justify-center">
        <div className="text-gray-500">Loading map...</div>
      </div>
    );
  }

  return (
    <div 
      ref={mapRef} 
      className="w-full h-96 lg:h-[500px] rounded-lg border border-gray-200 overflow-hidden z-10"
      style={{ minHeight: '384px' }}
      z-index={10}
    />
  );
};

export default SimpleMap;
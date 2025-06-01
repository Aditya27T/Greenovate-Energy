'use client';

import dynamic from 'next/dynamic';

// Import the LeafletMap component dynamically with no SSR
const DynamicMap = dynamic(() => import('./SimpleMap'), {
  ssr: false,
  loading: () => (
    <div className="h-[400px] w-full bg-gray-200 rounded-md flex items-center justify-center">
      <p>Loading map...</p>
    </div>
  ),
});

interface MapComponentProps {
  center?: [number, number];
  zoom?: number;
  markerPosition?: [number, number];
  popupText?: string;
  ssr?: boolean;
}

const MapComponent = (props: MapComponentProps) => {
  return <DynamicMap {...props} />;
};

export default MapComponent;
import React from 'react';
import LeafletMap from './LeafletMap';
import TrafficCountsTitle from './TrafficCountsTitle';

const TrafficComponent = () => {
  const imageUrl = 'https://live-traffic-count.s3.us-east-2.amazonaws.com/traffic_counts.png';

  return (
    <div>
      <TrafficCountsTitle />
      <LeafletMap imageUrl={imageUrl} />
    </div>
  );
};

export default TrafficComponent;

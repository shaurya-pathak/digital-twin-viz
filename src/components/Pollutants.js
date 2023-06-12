// Import React and useState hook
import React, { useState } from 'react';

// Import your other components
import LeafletMap from './LeafletMap';
import SelectionBar from './SelectionBar';
import MultipleImagesMap from './MultipleImagesMap';

function PollutantsComponent() {
  const [selectedItem, setSelectedItem] = useState('');

  const handleItemSelected = (selectedItem) => {
    const imageUrl = getImageUrl(selectedItem);
    setSelectedItem(imageUrl);
  };
  
  const getImageUrl = (selectedItem) => {
    return selectedItem;
  };

  const imageUrl = getImageUrl(selectedItem);

  const images = [
    'https://via.placeholder.com/400x300?text=Image%201',
    'https://via.placeholder.com/400x300?text=Image%202',
    'https://via.placeholder.com/400x300?text=Image%203',
    'https://via.placeholder.com/400x300?text=Image%204',
    'https://via.placeholder.com/400x300?text=Image%205',
  ];

  return (
    <>
      <SelectionBar onItemSelected={handleItemSelected} />
      <LeafletMap imageUrl={imageUrl} />
      {/* <MultipleImagesMap imageUrls={images} /> */}
    </>
  );
}

export default PollutantsComponent;

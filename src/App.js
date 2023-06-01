import React, { useState } from 'react';
import LeafletMap from './components/LeafletMap';
import TitleComponent from './components/Title';
import SelectionBar from './components/SelectionBar';
import FooterComponent from './components/Footer'; // import the FooterComponent

function App() {
  const [selectedItem, setSelectedItem] = useState('');

  const handleItemSelected = (selectedItem) => {
    const imageUrl = getImageUrl(selectedItem);
    setSelectedItem(imageUrl);
  };
  
  const getImageUrl = (selectedItem) => {
    return selectedItem;
  };

  const imageUrl = getImageUrl(selectedItem);

  return (
    <div>
      <TitleComponent />
      <SelectionBar onItemSelected={handleItemSelected} />
      <LeafletMap imageUrl={imageUrl} />
      <FooterComponent /> {/* add the FooterComponent here */}
    </div>
  );
}

export default App;

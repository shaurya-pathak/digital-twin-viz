import React, { useState } from 'react';
import { AppBar, Tabs, Tab } from '@mui/material';

function SelectionBar({ onItemSelected }) {
  const [value, setValue] = useState(0);

  const handleChange = (event, newValue) => {
    setValue(newValue);
    const imageUrl = getImageUrl(newValue);
    onItemSelected(imageUrl);
  };

  const getImageUrl = (index) => {
    switch (index) {
      case 0:
        return 'https://live-traffic-count.s3.us-east-2.amazonaws.com/pm25_counts.png';
      case 1:
        return 'https://live-traffic-count.s3.us-east-2.amazonaws.com/no2_counts.png';
      case 2:
        return 'https://live-traffic-count.s3.us-east-2.amazonaws.com/co2_counts.png';
      case 3:
        return 'https://live-traffic-count.s3.us-east-2.amazonaws.com/hc_counts.png';
      default:
        return 'https://live-traffic-count.s3.us-east-2.amazonaws.com/pm25_counts.png';
    }
  };

  
  return (
    <AppBar position="static" style={{ backgroundColor: 'transparent', borderRadius: '10px' }}>
      <Tabs
        value={value}
        onChange={handleChange}
        centered
        TabIndicatorProps={{ style: { backgroundColor: 'navy-blue' } }}
      >
        <Tab label={<span dangerouslySetInnerHTML={{__html: "PM<sub>2.5</sub>"}} />} 
            style={{ color: value === 0 ? 'navy-blue' : 'black' }} />
        <Tab label={<span dangerouslySetInnerHTML={{__html: "NO<sub>2</sub>"}} />} 
            style={{ color: value === 1 ? 'navy-blue' : 'black' }} />
        <Tab label={<span dangerouslySetInnerHTML={{__html: "CO<sub>2</sub>"}} />} 
            style={{ color: value === 2 ? 'navy-blue' : 'black' }} />
        <Tab label="HC" style={{ color: value === 3 ? 'navy-blue' : 'black' }} />




      </Tabs>
    </AppBar>
  );
}

export default SelectionBar;

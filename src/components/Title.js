import React from 'react';
import { Typography, Box, Avatar } from '@mui/material';

function TitleComponent() {
  const logoStyle = {
    width: '40px',
    height: '40px',
    marginRight: '10px',
    marginLeft: '20px',
  };

  const titleStyle = {
    fontFamily: 'Open Sans',
    fontSize: '48px',
    margin: '0',
    color: 'black',
    fontWeight: 'bold',
  };

  const cityLogoUrl = 'https://www.kindpng.com/picc/m/128-1282184_city-of-los-angeles-logo-hd-png-download.png';
  const nasaLogoUrl = 'https://gpm.nasa.gov/sites/default/files/NASA-Logo-Large.jpg';

  return (
    <Box display="flex" justifyContent="center" alignItems="center" paddingX={2}>
      <Typography style={titleStyle}>Digital Twin</Typography>
      <Box display="flex" alignItems="center">
        <Avatar src={cityLogoUrl} style={logoStyle} />
      </Box>
    </Box>
  );
}

export default TitleComponent;

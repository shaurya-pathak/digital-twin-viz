import React from 'react';
import { Typography, Box, Avatar, AppBar, Toolbar, Button } from '@mui/material';
import { Link } from 'react-router-dom';

function TitleComponent() {
  const logoStyle = {
    width: '40px',
    height: '40px',
    marginRight: '10px',
  };

  const titleStyle = {
    fontFamily: 'Open Sans',
    fontSize: '28px',
    margin: '0',
    color: 'white',
    fontWeight: 'bold',
    paddingRight: '20px', // add padding to the left of the title
  };

  const cityLogoUrl = 'https://www.kindpng.com/picc/m/128-1282184_city-of-los-angeles-logo-hd-png-download.png';

  return (
    <AppBar position="static">
      <Toolbar>
        <Box display="flex" alignItems="center">
          <Typography style={titleStyle}>Digital Twin</Typography>
          <Button color="inherit" component={Link} to="/pollutants">Pollutants</Button>
          <Button color="inherit" component={Link} to="/traffic">Traffic</Button>
          <Button color="inherit" component={Link} to="https://airquality.lacity.org/" target="_blank">Project</Button>
          <Button color="inherit" component={Link} to="https://www.calstatela.edu/research/data-science" target="_blank">Team</Button>
        </Box>
        <Box display="flex" flexGrow={1} />
        <Box display="flex" alignItems="center">
          {/* <Avatar src={cityLogoUrl} style={logoStyle} /> */}
        </Box>
      </Toolbar>
    </AppBar>
  );
}

export default TitleComponent;

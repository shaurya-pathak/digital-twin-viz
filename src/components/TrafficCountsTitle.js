import React from 'react';
import { Card, CardContent, Typography, Box } from '@mui/material';

function TrafficCountsTitle() {
  return (
    <Box display="flex" justifyContent="center" mb={0}>
      <Card style={{ backgroundColor: 'transparent', borderRadius: '5px', width: '100%' }}>
        <CardContent style={{ padding: '10px' }}>
          <Typography variant="h5" component="div" align="center" style={{ lineHeight: '1.2' }}>
            Traffic Counts Estimation
          </Typography>
        </CardContent>
      </Card>
    </Box>
  );
}

export default TrafficCountsTitle;

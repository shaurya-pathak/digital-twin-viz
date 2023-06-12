import React, { useState, useEffect, useRef } from 'react';
import { MapContainer, TileLayer, ImageOverlay } from 'react-leaflet';
import { Button, Icon, Box } from '@mui/material';
import PlayArrowIcon from '@mui/icons-material/PlayArrow';
import PauseIcon from '@mui/icons-material/Pause';
import ArrowForwardIosIcon from '@mui/icons-material/ArrowForwardIos';
import ArrowBackIosIcon from '@mui/icons-material/ArrowBackIos';

const MyMap = ({ imageUrls }) => {
  const [images, setImages] = useState([]);
  const [loading, setLoading] = useState(true);
  const [selectedImageIndex, setSelectedImageIndex] = useState(0);
  const [isPlaying, setIsPlaying] = useState(false);
  const intervalRef = useRef();

  const bounds = [
    [33.5, -118.75],
    [34.5, -117.5]
  ];

  useEffect(() => {
    const loadImages = async () => {
      try {
        const loadedImages = await Promise.all(
          imageUrls.map((url) => {
            return new Promise((resolve, reject) => {
              const image = new Image();
              image.src = url;
              image.onload = () => {
                resolve(url);
              };
              image.onerror = reject;
            });
          })
        );

        setImages(loadedImages);
        setLoading(false);
      } catch (error) {
        console.log('Failed to load images:', error);
      }
    };

    loadImages();
  }, [imageUrls]);

  const handlePlay = () => {
    setIsPlaying(true);
    intervalRef.current = setInterval(() => {
      setSelectedImageIndex((prevIndex) => {
        return (prevIndex + 1) % images.length;
      });
    }, 500);
  };

  const handlePause = () => {
    setIsPlaying(false);
    clearInterval(intervalRef.current);
  };

  const handleForward = () => {
    setSelectedImageIndex((prevIndex) => {
      return (prevIndex + 1) % images.length;
    });
  };

  const handleBackward = () => {
    setSelectedImageIndex((prevIndex) => {
      return (prevIndex - 1 + images.length) % images.length;
    });
  };

  return (
    <div>
      {loading ? (
        <p>Loading...</p>
      ) : (
        <div>
          <MapContainer center={[34, -118.2]} zoom={9} style={{ height: "500px", width: "100%" }}>
            <TileLayer
              url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
              attribution='&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
            />
            <ImageOverlay 
              url={images[selectedImageIndex]} 
              bounds={bounds} 
              opacity = {0.5}
            />

          </MapContainer>
          <Box display="flex" justifyContent="center" margin={2}>
            <Button variant="outlined" style={{ marginRight: '5px', background: 'white' }} onClick={handleBackward}>
              <ArrowBackIosIcon />
            </Button>
            <Button variant="outlined" style={{ margin: '0 5px', background: 'white' }} onClick={isPlaying ? handlePause : handlePlay}>
              {isPlaying ? <PauseIcon /> : <PlayArrowIcon />}
            </Button>
            <Button variant="outlined" style={{ marginLeft: '5px', background: 'white' }} onClick={handleForward}>
              <ArrowForwardIosIcon />
            </Button>
          </Box>

        </div>
      )}
    </div>
  );
};

export default MyMap;

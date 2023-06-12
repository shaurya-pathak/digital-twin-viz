import React from 'react';
import { HashRouter as Router, Routes, Route } from 'react-router-dom'; // use HashRouter instead of BrowserRouter
import TitleComponent from './components/Title';
import FooterComponent from './components/Footer'; // import the FooterComponent
import PollutantsComponent from './components/Pollutants';
import TrafficComponent from './components/Traffic'; // import the TrafficComponent

function App() {
  return (
    <Router>
      <div>
        <TitleComponent />
        <Routes>
          <Route path="/traffic" element={<TrafficComponent />} />
          <Route path="/pollutants" element={<PollutantsComponent />} />
          <Route path="/" element={<PollutantsComponent />} />
        </Routes>
        <FooterComponent />
      </div>
    </Router>
  );
}

export default App;

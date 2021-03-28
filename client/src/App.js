import React from 'react';
import LandingSection from "../src/Components/torum/LandingSection";
import Header from "../src/Components/torum/Header";
import Features from "../src/Components/torum/Features";
import MobileAppSection from "../src/Components/torum/MobileAppSection";

function App() {
  return (
    <div className="App">
      <Header />
      <LandingSection />
      <Features/>
      <MobileAppSection/>      
    </div>
  );
}

export default App;

import React from 'react';
import LandingSection from "../src/Components/torum/LandingSection";
import Header from "../src/Components/torum/Header";
import Features from "../src/Components/torum/Features";
import MobileAppSection from "../src/Components/torum/MobileAppSection";
import RoadmapSection from "../src/Components/torum/Roadmap";
import ComparisonSection from "../src/Components/torum/ComparisonSection";
import AmbassadorsSection from './Components/torum/Ambassadors';
import FeaturedOnSection from './Components/torum/FeaturedOn';

function App() {
  return (
    <div className="App">
      <Header />
      <LandingSection />
      <Features />
      <MobileAppSection />
      <RoadmapSection />
      <ComparisonSection />
      <FeaturedOnSection />
      <AmbassadorsSection />
    </div>
  );
}

export default App;

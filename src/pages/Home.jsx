import React, { useEffect } from "react";
import Slider from "../components/Slider";
import FeaturedGardeners from "../components/FeaturedGardeners";
import TopTips from "../components/TopTips";
import GardeningQuote from "../components/GardeningQuote";
import QuickTips from "../components/QuickTips";

const Home = () => {
  useEffect(() => {
    document.title = "GardenGlee - Home";
  }, []);

  return (
    <div>
      <Slider />
      <FeaturedGardeners />
      <TopTips />
      <GardeningQuote />
      <QuickTips />
    </div>
  );
};

export default Home;
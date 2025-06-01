import React from "react";
import Slider from "../components/Slider";
import FeaturedGardeners from "../components/FeaturedGardeners";
import TopTips from "../components/TopTips";
import GardeningQuote from "../components/GardeningQuote";
import QuickTips from "../components/QuickTips";

const Home = () => (
  <div>
    <Slider />
    <FeaturedGardeners />
    <TopTips></TopTips>
    <GardeningQuote />
    <QuickTips/>
  </div>
);

export default Home;
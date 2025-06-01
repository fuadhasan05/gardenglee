import React from "react";
import Slider from "../components/Slider";
import FeaturedGardeners from "../components/FeaturedGardeners";
import TopTips from "../components/TopTips";
import GardeningQuote from "../components/GardeningQuote";

const Home = () => (
  <div>
    <Slider />
    <FeaturedGardeners />
    <TopTips></TopTips>
    <GardeningQuote />
  </div>
);

export default Home;
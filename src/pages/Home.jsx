import React from "react";
import Slider from "../components/Slider";
import FeaturedGardeners from "../components/FeaturedGardeners";
import TopTips from "../components/TopTips";

const Home = () => (
  <div>
    <Slider />
    <FeaturedGardeners />
    <TopTips></TopTips>
  </div>
);

export default Home;
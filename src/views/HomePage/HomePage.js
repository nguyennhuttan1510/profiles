import React from "react";
import {
  BannerHeader,
  Contact,
  MyBest,
  MyExperience,
  TimeLines,
} from "../components";

const HomePage = () => {
  return (
    <div>
      {/* contents */}

      <MyBest />
      <MyExperience />
      <TimeLines />
      <Contact />
      {/* contents */}
    </div>
  );
};

export default HomePage;

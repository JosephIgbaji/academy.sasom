import React from "react";
import Hero from "../Components/Hero";
import Partners from "../Components/Partners";
import Ratings from "../Components/Ratings";
import KeyStrength from "../Components/KeyStrength";
import Courses from "../Components/Courses";
import AdmissionProcess from "../Components/AdmissionProcess";
import HomeFaq from "../Components/HomeFaq";
import { faq } from "../faq";

const Home = () => {
  return (
    <div>
      <Hero />
      <Ratings />
      <Partners />
      <KeyStrength />
      <Courses />
      <AdmissionProcess />
      <HomeFaq faq={faq} />
    </div>
  );
};

export default Home;

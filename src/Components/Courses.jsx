import React from "react";
import CourseCard from "./CourseCard";
import frontend from "../assets/frontend-dev.png";
import productDesign from "../assets/product-design.jpeg";
import backend from "../assets/backend-dev.jpeg";
import mobileApp from "../assets/mobile-dev.jpeg";
import productManagement from "../assets/product-management.png";
import machineLearning from "../assets/machine-learning.jpeg";
import dataAnalyst from "../assets/data-analysis.jpeg";
import digitalMarketting from "../assets/digital-marketing.png";

const Courses = () => {
  return (
    <div className="flex flex-col items-center">
      <h2 className="text-2xl mb-4 font-semibold">Available Courses</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10 justify-center">
        <CourseCard
          image={frontend}
          title="Frontend Development"
          details="Frontend development involves creating the visual interface and user experience of websites or web applications. It utilizes languages like HTML, CSS, and JavaScript, with additional frameworks and libraries like React or Angular for enhanced interactivity. "
          price="₦200,000"
        />
        <CourseCard
          image={productDesign}
          title="Product Design"
          details="Product design is the process of creating and refining products to meet user needs. It involves research, conceptualization, prototyping, user testing, and considerations for aesthetics, materials, and sustainability."
          price="₦150,000"
        />
        <CourseCard
          image={backend}
          title="Backend Development"
          details="Backend development involves building and maintaining the server-side of a website or application. It includes server-side coding, database management, API creation, security implementation, and performance optimization."
          price="₦250,000"
        />
        <CourseCard
          image={mobileApp}
          title="Mobile App Development"
          details="Mobile app development involves creating software applications for iOS and Android. The process includes idea generation, market research, planning, coding, testing, deployment, and ongoing maintenance. There are two main types: native and cross-platform."
          price="₦250,000"
        />
        <CourseCard
          image={productManagement}
          title="Product Management"
          details="Product management oversees the end-to-end lifecycle of a product, from ideation to launch and ongoing refinement. It involves strategic planning, collaboration with cross-functional teams, and a focus on meeting customer needs and business goals."
          price="₦500,000"
        />
        <CourseCard
          image={machineLearning}
          title="Machine Learning with Python"
          details="Machine Learning with Python involves using Python programming along with libraries like scikit-learn, TensorFlow, and PyTorch to build, train, and deploy machine learning models. It enables the development of intelligent systems that can learn."
          price="₦300,000"
        />
        <CourseCard
          image={dataAnalyst}
          title="Data Analysis"
          details="Data analysis is the process of examining, cleaning, and interpreting data to extract valuable insights for decision-making. It involves collecting, preprocessing, exploring, and modeling data, with visualization aiding effective communication of findings."
          price="₦150,000"
        />
        <CourseCard
          image={digitalMarketting}
          title="Digital Marketing"
          details="Digital marketing utilizes online channels such as search engines, social media, and email to promote products or services. It includes strategies like SEO, SEM, content marketing, and analytics to connect with and engage target audiences."
          price="₦180,000"
        />
      </div>
      <button className="bg-sasomRed text-white rounded-xl p-4 mt-8">
        Register Now
      </button>
    </div>
  );
};

export default Courses;

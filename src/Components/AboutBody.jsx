import React from "react";
import ValuesComponent from "./ValuesComponent";

const AboutBody = () => {
  return (
    <div className="md:px-20 px-5 mt-10">
      <div className="grid md:grid-cols-2 gap-10">
        <div className=" text-justify">
          <h2 className="text-xl font-semibold text-darkGreen mb-2">
            About Sasom
          </h2>
          <p>
            Sasom Academy is where excellence, innovation, and empowerment
            intersect to shape the future of Technology education. At Sasom,
            we&apos;re more than just a learning institution – we&apos;re a
            community dedicated to fostering excellence, driving innovation, and
            empowering individuals to make meaningful contributions to the world
            of Technology. Our Commitment to Excellence Excellence is the
            cornerstone of our philosophy at Sasom Academy. From the caliber of
            our instructors to the depth of our curriculum, we are committed to
            delivering nothing but the best to our students. We set high
            standards for ourselves and continually strive to surpass them,
            ensuring that our graduates have the knowledge, skills, and
            confidence to excel in their chosen fields. Embracing Innovation
          </p>
          <p>
            Innovation is at the heart of everything we do at Sasom Academy. We
            believe in pushing the boundaries of traditional education and
            embracing new Ideas, Technologies, and Methodologies to provide our
            students with a truly immersive and transformative learning
            experience. By fostering a culture of innovation, we empower our
            students to think creatively, adapt to change, and drive positive
            change in the world. Empowering Individuals, Driving Contribution
          </p>
          <p>
            At Sasom Academy, we believe in the power of education to transform
            lives and empower individuals to make a difference. We are committed
            to providing our students with the knowledge, skills, and resources
            they need to succeed in the Tech industry and beyond. Through our
            programs and initiatives, we aim to empower our students to become
            leaders, innovators, and changemakers who contribute positively to
            their communities and the world at large. Join Us Whether
            you&apos;re a seasoned professional looking to advance your career
            or a beginner eager to explore the world of Technology, we invite
            you to join us at Sasom Academy. Together, we&apos;ll embark on a
            journey of Excellence, Innovation, and Empowerment – shaping the
            future, one student at a time.
          </p>
        </div>
        <div>
          <h2 className="text-xl font-semibold text-darkGreen mb-2">
            Our Core Values
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <ValuesComponent
              heading="Excellence"
              details=" We are dedicated to pursuing excellence in all aspects of our operations. From the quality of our education to the support services we provide, we strive to exceed expectations and set new standards of excellence in the field of technology education.
"
            />
            <ValuesComponent
              heading="Innovation"
              details="Innovation is the driving force behind everything we do. We embrace new ideas, technologies, and methodologies to ensure that our programs remain cutting-edge and relevant in a rapidly evolving industry. We encourage creativity, experimentation, and forward-thinking to inspire innovation in our students and staff.
"
            />
            <ValuesComponent
              heading="Empowerment"
              details="We believe in the power of education to empower individuals and transform lives. Our programs and initiatives aim to empower our students to reach their full potential and make meaningful contributions to their communities and the world. 
We foster a culture of collaboration, mentorship, and giving back, where students are encouraged to share their knowledge, skills, and experiences to uplift others and create positive change."
            />
            {/* <ValuesComponent heading="Creativity" /> */}
          </div>
        </div>
      </div>
    </div>
  );
};

export default AboutBody;

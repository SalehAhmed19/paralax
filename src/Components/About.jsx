import React from "react";
import bg from "../Assets/images/bg.png";

const About = () => {
  return (
    <div
      style={{ background: `url(${bg})`, backgroundSize: "cover" }}
      className="h-screen"
    >
      <h2>About</h2>
    </div>
  );
};

export default About;

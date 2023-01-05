import React from "react";
import Typewriter from "typewriter-effect";
import { Parallax, ParallaxLayer, IParallax } from "@react-spring/parallax";
import bg from "../../Assets/images/bg.png";
import sea from "../../Assets/images/sea.png";
import stone from "../../Assets/images/stone.png";
import cloud from "../../Assets/images/cloud.png";
import liland from "../../Assets/images/liland.png";
import riland from "../../Assets/images/riland.png";
import moon from "../../Assets/images/moon.png";
import planet from "../../Assets/images/planet.png";

const Paralax = () => {
  return (
    <Parallax className="h-screen" pages={2} style={{ top: "0", left: "0" }}>
      <ParallaxLayer offset={0} speed={0.25}>
        <div
          className="h-screen"
          style={{
            background: `url(${bg})`,
            backgroundSize: "cover",
            backgroundRepeat: "no-repeat",
          }}
        ></div>
      </ParallaxLayer>
      <ParallaxLayer offset={0} speed={0.35}>
        <div
          className="h-screen"
          style={{
            background: `url(${moon})`,
            backgroundSize: "cover",
            backgroundRepeat: "no-repeat",
          }}
        ></div>
      </ParallaxLayer>
      <ParallaxLayer offset={0} speed={-0.1}>
        <div
          className="h-screen"
          style={{
            background: `url(${cloud})`,
            backgroundSize: "cover",
            backgroundRepeat: "no-repeat",
          }}
        ></div>
      </ParallaxLayer>
      <ParallaxLayer offset={0} speed={0.35}>
        <div
          className="h-screen"
          style={{
            background: `url(${planet})`,
            backgroundSize: "cover",
            backgroundRepeat: "no-repeat",
          }}
        ></div>
      </ParallaxLayer>
      <ParallaxLayer offset={0} speed={0.3}>
        <div
          className="h-screen"
          style={{
            background: `url(${stone})`,
            backgroundSize: "cover",
            backgroundRepeat: "no-repeat",
          }}
        ></div>
      </ParallaxLayer>
      <ParallaxLayer offset={0} speed={0.3}>
        <div
          className="h-screen"
          style={{
            background: `url(${sea})`,
            backgroundSize: "cover",
            backgroundRepeat: "no-repeat",
          }}
        ></div>
      </ParallaxLayer>
      <ParallaxLayer offset={0} speed={0.5}>
        <div
          className="h-screen"
          style={{
            background: `url(${liland})`,
            backgroundSize: "cover",
            backgroundRepeat: "no-repeat",
          }}
        ></div>
      </ParallaxLayer>
      <ParallaxLayer offset={0} speed={0.5}>
        <div
          className="h-screen"
          style={{
            background: `url(${riland})`,
            backgroundSize: "cover",
            backgroundRepeat: "no-repeat",
          }}
        ></div>
      </ParallaxLayer>
      <ParallaxLayer offset={0} speed={0.55}>
        <h1 className="text-white font-bold text-5xl p-20">
          <span className="text-3xl">
            Hi, <br />{" "}
          </span>
          <Typewriter
            options={{
              strings: ["Welcome to Saleh Ahmed's World!"],
              autoStart: true,
              loop: true,
            }}
          />
        </h1>
      </ParallaxLayer>
    </Parallax>
  );
};

export default Paralax;

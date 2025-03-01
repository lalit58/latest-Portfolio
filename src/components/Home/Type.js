import React from "react";
import Typewriter from "typewriter-effect";

function Type() {
  return (
    <Typewriter
      options={{
        strings: [
          "Software Developer",
          "React Native Developer",
          "Mobile App Developer(IOS & Android)",
          "Next.js Developer",
          "React.js Developer",
          "Web Developer",
          "MERN-STack Developer",
          "Data Scraper Expert",
          "Freelancer",
        ],
        autoStart: true,
        loop: true,
        deleteSpeed: 50,
      }}
    />
  );
}

export default Type;

"use client";
import Typewriter from "typewriter-effect";

const TypewriterCompo = () => {
  return (
    <Typewriter
      options={{
        strings: ["web developer", "fotograf", "backend developer"],
        autoStart: true,
        loop: true,
      }}
    ></Typewriter>
  );
};

export default TypewriterCompo;

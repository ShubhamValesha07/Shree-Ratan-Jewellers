import React from "react";
import Typewriter from "typewriter-effect";

function Type() {
  return (
    <Typewriter
      options={{
        strings: [
          "Unveil Timeless Beauty in Gold",
          "Adorn Yourself in the Radiance of Rose Gold",
          "Elegance Redefined, One Click Away.",
        ],
        autoStart: true,
        loop: true,
        deleteSpeed: 30,
      }}
    />
  );
}

export default Type;

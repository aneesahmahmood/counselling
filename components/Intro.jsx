import Image from "next/image";
import React from "react";
import Gaz from "../photos/Gaz.jpeg";

function Intro() {
  return (
    <>
      <div className="intro-div">
        <p className="intro-text">
          Your journey to mental wellness begins here.
        </p>
        <Image className="image" src={Gaz} alt="Ghazala Aziz" />
      </div>
    </>
  );
}

export default Intro;

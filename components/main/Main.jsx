import React from "react";
import Image from "next/image";
import photo from "../../photos/plantimage.jpeg";

export default function Main() {
  return (
    <div>
      <main className="main">
        <div className="intro">
          <h1>Welcome</h1>
          <p>
            I'm Ghazala Aziz, a licensed mental health counsellor with a passion
            for supporting individuals through tough times. Specialising in
            anxiety, depression, and trauma, I offer a supportive,
            evidence-based approach. My aim is to guide clients through personal
            growth, providing empathetic and client-centred care.
          </p>
        </div>
        <Image className="intro-image" src={photo} alt="Plant" />
      </main>
    </div>
  );
}

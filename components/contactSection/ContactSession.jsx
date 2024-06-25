import React from "react";
import "../contactSection/contactSection.css";
import { Cormorant_Garamond, Lustria, Fraunces } from "next/font/google";

const fraunces = Fraunces({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
});
export default function ContactSection() {
  const header = `${fraunces.className} contact-header`;
  const body = `${fraunces.className} contact-body`;

  return (
    <section className="contact-section">
      <div className="header1">
        <header className={header}>Let's Get in Touch</header>
        <div className={body}>
          Feel free to give me a call. I offer a 15 minute complimentary phone
          consultation and I would love to hear from you.
        </div>
      </div>
      <button className="contact-button">Contact Me</button>
    </section>
  );
}

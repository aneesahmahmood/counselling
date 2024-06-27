import React from "react";
import "../subheading/Subheading.css";
import { Cormorant_Garamond, Lustria, Fraunces } from "next/font/google";

const cormorant = Cormorant_Garamond({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
});

const fraunces = Fraunces({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
});
const lustria = Lustria({
  subsets: ["latin"],
  weight: ["400"],
});

function Subheading() {
  const subheading = `${fraunces.className} subheading`;
  return (
    <div className={subheading}>
      I have immediate openings for online therapy and would be honored to
      support you during this time of uncertainty.
    </div>
  );
}

export default Subheading;

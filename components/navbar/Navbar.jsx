import { Fraunces } from "next/font/google";

import NavElements from "./components/navElements/NavElements";

import "../navbar/Navbar.css";

const fraunces = Fraunces({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
});

const Navbar = () => {
  const titleOneClassName = `${fraunces.className} header-text1`;
  const titleTwoClassName = `${fraunces.className} header-text2`;
  const navElementsClass = `${fraunces.className} navbar`;

  return (
    <div className="main-header">
      <header className="header">
        <span className={titleOneClassName}>Ghazala Aziz&nbsp;</span>
        <span className={titleTwoClassName}>Counselling</span>
      </header>
      <NavElements className={navElementsClass} />
      
    </div>
  );
};

export default Navbar;

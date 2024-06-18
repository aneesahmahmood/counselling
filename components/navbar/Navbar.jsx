import { Button } from "antd";
import Link from "next/link";
import "../navbar/Navbar.css";
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

const Navbar = () => {
  const titleOneClassName = `${fraunces.className} header-text1`;
  const titleTwoClassName = `${fraunces.className} header-text2`;
  const navLinks = `${fraunces.className} navbar`;
  return (
    <div className="main-header">
      <header className="header">
        <span className={titleOneClassName}>Ghazala Aziz&nbsp;</span>
        <span className={titleTwoClassName}>Counselling</span>
      </header>
      <nav className={navLinks}>
        <ul>
          <li>
            <Link href="/">Home</Link>
          </li>
          <li>
            <Link href="/about">About</Link>
          </li>
          <li>
            <Link href="/services">Services</Link>
          </li>
          <li>
            <Link href="/contact">Contact</Link>
          </li>
        </ul>
      </nav>
    </div>
  );
};

export default Navbar;

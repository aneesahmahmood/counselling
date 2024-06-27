import "../footer/Footer.css";
import Link from "next/link";
import { Cormorant_Garamond, Lustria, Fraunces } from "next/font/google";
import Image from "next/image";
import logo from "../../photos/bacp.png";

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

export default function Footer() {
  const main = `${fraunces.className} footer-title`;
  const links = `${fraunces.className} footer-links`;
  const linkTitle = `${fraunces.className} link-title`;
  const footerContact = `${fraunces.className} footer-contact`;
  const contactTitle = `${fraunces.className} contact-title`;

  return (
    <footer className="footer">
      <div className="footer-content">
        <div className={main}>
          <h3>
            Ghazala Aziz <br></br>Counselling
          </h3>
          <div className="footer-logo">
            <Image className="logo" src={logo} alt="Member of BACP" />
            <p className="bacp">Member of BACP</p>
          </div>
        </div>
        <div className={links}>
          <h4 className={linkTitle}>Quick Links</h4>
          <ul>
            <li>
              <Link href="/about">About</Link>
            </li>
            <li>
              <Link href="/services">Services</Link>
            </li>
            <li>
              <Link href="/faq">FAQ</Link>
            </li>
          </ul>
        </div>
        <div className={footerContact}>
          <h4 className={contactTitle}>Contact</h4>
          <p>
            Email:{" "}
            <a href="mailto:ghazala_aziz@hotmail.com">
              ghazala_aziz@hotmail.com
            </a>
          </p>
          <p>
            Phone: <a href="tel:07817960066">07817960066</a>
          </p>
        </div>
      </div>
    </footer>
  );
}

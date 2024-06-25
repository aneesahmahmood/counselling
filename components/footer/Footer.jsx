import "../footer/Footer.css";
import Link from "next/link";

export default function Footer() {
  return (
    <footer className="footer">
      <div className="footer-content">
        <div className="footer-title">
          <h3>Ghazala Aziz Counselling</h3>
        </div>
        <div className="footer-links">
          <h4>Quick Links</h4>
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
        <div className="footer-contact">
          <h4>Contact</h4>
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
{
  /* <div className="footer-logo">
          <Image src={logo} alt="Member of BACP" />
          <p>Member of BACP</p>
        </div> */
}

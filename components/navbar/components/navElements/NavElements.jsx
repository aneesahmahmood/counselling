"use client";

import Link from "next/link";
import { useWindowSize } from "react-use";

import { Button } from "antd";
import { MenuOutlined } from "@ant-design/icons";

import { MOBILE_BREAKPOINT } from "@/src/app/constants";

const NavElements = ({ className }) => {
  const { width } = useWindowSize();

  console.log(width);
  
  if (width < MOBILE_BREAKPOINT) {
    return <Button icon={<MenuOutlined />} />;
  }

  return (
    <nav className={className}>
      <ul>
        <li>
          <Link href="/">Home</Link>
        </li>
        <li>
          <Link href="/about"> About Me</Link>
        </li>
        <li>
          <Link href="/services">Services</Link>
        </li>
        <li>
          <Link href="/FAQs">FAQs</Link>
        </li>
        <li>
          <button className="nav-button">
            <Link href="/contact">Say Hello</Link>
          </button>
        </li>
      </ul>
    </nav>
  );
};

export default NavElements;

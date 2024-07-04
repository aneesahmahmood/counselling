import React, { useState } from "react";
import { Drawer, Button } from "antd";
import Link from "next/link";

function CustomDrawer({ className }) {
  const [open, setOpen] = useState(false);

  const showDrawer = () => {
    setOpen(true);
  };
  const onClose = () => {
    setOpen(false);
  };

  return (
    <>
      <Button type="primary" onClick={showDrawer}>
        Open
      </Button>
      <Drawer title="Basic Drawer" onClose={onClose} open={open}>
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
      </Drawer>
    </>
  );
}

export default CustomDrawer;

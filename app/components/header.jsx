import Link from "next/link";
import { Button } from "antd";

export default function Header() {
  return (
    <nav class="flex items-center justify-between flex-wrap bg-third p-6">
      <div class="flex items-center flex-shrink-0  text-first mr-6">
        <span class="font-semibold text-xl tracking-tight">Ghazala Aziz</span>
      </div>

      <div class="w-full block flex-grow lg:flex lg:items-center lg:w-auto">
        <div class="text-sm lg:flex-grow">
          <Link
            href="/"
            class="block mt-4 lg:inline-block lg:mt-0 text-first hover:text-second mr-4"
          >
            Home
          </Link>
          <Link
            href="#responsive-header"
            class="block mt-4 lg:inline-block lg:mt-0 text-first hover:text-second mr-4"
          >
            Services
          </Link>
          <Link
            href="/about"
            class="block mt-4 lg:inline-block lg:mt-0 text-first hover:text-second mr-4"
          >
            About Me
          </Link>
          <Link
            href="#responsive-header"
            class="block mt-4 lg:inline-block lg:mt-0 text-first hover:text-second"
          >
            FAQs
          </Link>
        </div>
        <div>
          <a
            href="#"
            class="inline-block text-sm px-4 py-2 leading-none border rounded  text-first border-white hover:border-transparent hover:text-fourth hover:bg-first lg:mt-0"
          >
            Get in Touch
          </a>
        </div>
        <Button type="link" >Helllloooooo</Button>
      </div>
    </nav>
  );
}

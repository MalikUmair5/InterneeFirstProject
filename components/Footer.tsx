import React from "react";
import { Disclosure } from "@headlessui/react";
import { Copyright } from "lucide-react";

const Footer = () => {
  return (
    <Disclosure as="nav" className="bg-gray-800">
      <div className="mx-auto max-w-7xl px-2 sm:px-6 lg:px-8">
        <div className="relative flex h-16 items-center justify-between text-white">
          <Copyright />
          <p>All Rights reserved</p>
        </div>
      </div>
    </Disclosure>
  );
};
export default Footer;

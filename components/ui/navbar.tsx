"use client";

import { useState } from "react";
import { FaBars, FaTimes } from "react-icons/fa";

export default function Navbar() {
  const [open, setOpen] = useState(false);

  return (
    <nav className="bg-white border-b border-gray-200 dark:bg-gray-900 dark:border-gray-700">
      <div className="max-w-screen-xl flex flex-wrap items-center justify-between mx-auto p-4">
        {/* Logo */}
        <a href="/" className="flex items-center space-x-3">
          <span className="self-center text-2xl font-semibold whitespace-nowrap dark:text-white">
            Rakha
          </span>
        </a>

        {/* Mobile button */}
        <button
          onClick={() => setOpen(!open)}
          className="inline-flex items-center p-2 w-10 h-10 justify-center text-sm text-gray-500 rounded-lg md:hidden hover:bg-gray-100 dark:text-gray-400 dark:hover:bg-gray-700"
          aria-controls="navbar-default"
          aria-expanded={open}
        >
          {open ? <FaTimes /> : <FaBars />}
        </button>

        {/* Menu */}
        <div
          className={`${open ? "block" : "hidden"} w-full md:block md:w-auto`}
          id="navbar-default"
        >
          <ul className="font-medium flex flex-col p-4 md:p-0 mt-4 border border-gray-100 rounded-lg bg-gray-50 md:flex-row md:space-x-8 md:mt-0 md:border-0 md:bg-white dark:bg-gray-800 md:dark:bg-gray-900 dark:border-gray-700">
            <li>
              <a
                href="#about"
                className="block py-2 px-3 text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent md:hover:text-yellow-600 md:p-0 dark:text-white"
              >
                About
              </a>
            </li>
            <li>
              <a
                href="#portfolio"
                className="block py-2 px-3 text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent md:hover:text-yellow-600 md:p-0 dark:text-white"
              >
                Portfolio
              </a>
            </li>
            <li>
              <a
                href="#faq"
                className="block py-2 px-3 text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent md:hover:text-yellow-600 md:p-0 dark:text-white"
              >
                FAQ
              </a>
            </li>
            <li>
              <a
                href="#contact"
                className="block py-2 px-3 text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent md:hover:text-yellow-600 md:p-0 dark:text-white"
              >
                Contact
              </a>
            </li>
           
          </ul>
        </div>
      </div>
    </nav>
  );
}

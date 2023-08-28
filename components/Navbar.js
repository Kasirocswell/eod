"use client";

import { useState, useRef, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";

export default function Navbar() {
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const dropdownRef = useRef(null);

  // Close the dropdown if clicked outside
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
        setIsDropdownOpen(false);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  return (
    <nav className="flex flex-row justify-between align-middle font-bold bg-opacity-0 pt-[-50px] ">
      <div className="flex flex-row items-center space-x-[100px]">
        <Image
          src="/eod.png"
          width={200}
          height={200}
          alt="Picture of the book cover"
          className="ml-4 md:mt-[-50px]"
        />
        <div ref={dropdownRef} className="md:invisible">
          <Link href="/">
            <p onClick={() => setIsDropdownOpen(!isDropdownOpen)}>Menu</p>
          </Link>
          {isDropdownOpen && (
            <div className="absolute bg-white mt-2 rounded shadow-lg text-black z-10">
              <Link href={"/"}>
                <p
                  className="p-2 hover:bg-gray-200"
                  onClick={() => setIsDropdownOpen(false)}
                >
                  Home
                </p>
              </Link>
              <Link href={"/characters"}>
                <p
                  className="p-2 hover:bg-gray-200"
                  onClick={() => setIsDropdownOpen(false)}
                >
                  Characters
                </p>
              </Link>
              <Link href={"/fanArt"}>
                <p
                  className="p-2 hover:bg-gray-200"
                  onClick={() => setIsDropdownOpen(false)}
                >
                  Fan Art
                </p>
              </Link>
              <Link href={"/shop"}>
                <p
                  className="p-2 hover:bg-gray-200"
                  onClick={() => setIsDropdownOpen(false)}
                >
                  Shop
                </p>
              </Link>
            </div>
          )}
        </div>
      </div>
      <div className="flex flex-row space-x-6 invisible lg:flex md:visible md:mt-10 md:text-[24px] md:mr-10">
        <Link href={"/"}>
          <p>Home</p>
        </Link>
        <Link href={"/characters"}>
          <p>Characters</p>
        </Link>
        <Link href={"/fanArt"}>
          <p>Fan Art</p>
        </Link>
        <Link href={"/shop"}>
          <p>Shop</p>
        </Link>
      </div>
    </nav>
  );
}

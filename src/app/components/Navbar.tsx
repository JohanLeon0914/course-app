"use client"
import Image from "next/image";
import Link from "next/link";
import React, { useState, useEffect } from "react";
import { AiOutlineMenu, AiOutlineClose,  } from "react-icons/ai";

function Navbar() {
  const [nav, setNav] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 0) {
        setIsScrolled(true);
      } else setIsScrolled(false);
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);
  

  const handleNav = () => {
    setNav(!nav);
  };

  return (
    <div className={`fixed w-full h-20 z-[100] bg-bodyColor text-lightText ${isScrolled && "shadow-xl bg-bgDark" }`}>
      <div className="flex justify-between items-center w-full h-full px-2 2xl:px-16">
        <Link href='/'>
          <Image src="/assets/logo.png" alt="/" width="85" height="50" />
        </Link>
        <div>
          <ul className="hidden md:flex">
            <Link href="/">
              <li className="ml-10 text-sm uppercase hover:border-b"> Home </li>
            </Link>
            <Link href="/courses">
              <li className="ml-10 text-sm uppercase hover:border-b">
                {" "}
                Courses{" "}
              </li>
            </Link>
            <Link href="/our-professionals">
              <li className="ml-10 text-sm uppercase hover:border-b">
                {" "}
                Our professionals{" "}
              </li>
            </Link>
            <Link href="/about">
              <li className="ml-10 text-sm uppercase hover:border-b">
                {" "}
                About us{" "}
              </li>
            </Link>
            <Link href="/contact">
              <li className="ml-10 text-sm uppercase hover:border-b">
                {" "}
                Contact{" "}
              </li>
            </Link>
          </ul>
          <div onClick={handleNav} className="md:hidden cursor-pointer p-5">
            <AiOutlineMenu size={25} />
          </div>
        </div>
      </div>

      <div
        className={nav ? "md:hidden fixed left-0 top-0 w-full h-screen bg-black/70" : ""}
      >
        <div
          className={
            nav
              ? "fixed left-0 top-0 w-[75%] sm:w-[60%] md:w-[45%] h-screen  bg-[#141414] text-white p-10 ease-in duration-500"
              : "fixed left-[-100%] top-0 p-10 ease-in duration-500"
          }
        >
          <div>
            <div className="flex w-full items-center justify-between">
              <Link href='/'>
                <Image src="/assets/logo.png" alt="/" width="47" height="25" />
              </Link>
              <div
                onClick={handleNav}
                className="rounded-full shadow-lg shadow-gray-400 p-3 cursor-pointer"
              >
                <AiOutlineClose />
              </div>
            </div>
            <div className="border-b border-gray-300 my-4">
              <p className="w-[85%] md:w-[90%] py-4">
                Lets build something legendary together
              </p>
            </div>
          </div>
          <div className="py-4 flex flex-col">
            <ul className="uppercase">
              <Link href="/">
                <li onClick={() => setNav(false)} className="py-4 text-sm"> Home </li>
              </Link>
              <Link href="/courses">
                <li onClick={() => setNav(false)} className="py-4 text-sm"> Courses </li>
              </Link>
              <Link href="/our-professionals">
                <li onClick={() => setNav(false)} className="py-4 text-sm"> Our professionals </li>
              </Link>
              <Link href="/about">
                <li onClick={() => setNav(false)} className="py-4 text-sm"> About us </li>
              </Link>
              <Link href="/contact">
                <li onClick={() => setNav(false)} className="py-4 text-sm"> Contact </li>
              </Link>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Navbar;

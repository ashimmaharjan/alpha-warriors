"use client";

import Image from "next/image";

import { links } from "../../../utils/data/navlinks";
import Link from "next/link";
import { FaCopyright } from "react-icons/fa6";

import fbAnimation from "../../../public/animations/fb.json";
import instaAnimation from "../../../public/animations/insta.json";
import tiktokAnimation from "../../../public/animations/tiktok.json";
import Lottie from "lottie-react";

const socials = [
  {
    name: "facebook",
    link: "#",
    icon: fbAnimation,
  },
  {
    name: "insta",
    link: "#",
    icon: instaAnimation,
  },
  {
    name: "tiktok",
    link: "#",
    icon: tiktokAnimation,
  },
];

const Footer = () => {
  return (
    <footer className="w-full border-t border-t-gray-200 border-dotted h-auto bg-gradient-to-b from-[#261D36] to-[#070111] px-5 md:px-20 py-16">
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-5">
        <div className="col-span-1 h-auto">
          <Image
            alt="logo"
            width={500}
            height={500}
            src="/images/logo.png"
            loading="lazy"
            className="size-36 bg-gray-50 object-contain rounded-[19px] shadow shadow-gray-300"
          />

          <p className="text-xl text-gray-300 tracking-tight mt-16 w-full lg:w-[70%]">
            Champions in spirit, warriors in action. Bringing discipline,
            teamwork, and excellence to Nepal's indoor cricket.
          </p>

          <div className="flex items-center mt-12">
            {socials.map((social, index) => (
              <Link key={index} href={social.link}>
                <Lottie animationData={social.icon} className="size-14" />
              </Link>
            ))}
          </div>
        </div>

        <div className="col-span-1 h-auto grid grid-cols-1 gap-16 lg:grid-cols-2">
          <div>
            <h5 className="text-2xl text-gray-200 font-semibold uppercase">
              Site Map
            </h5>

            <div className="flex flex-col gap-4 mt-8 lg:mt-10">
              {links.map((link, index) => (
                <Link
                  key={index}
                  href={link.link}
                  className="text-gray-400 hover:text-gray-200 tracking-wide text-lg transition-all hover:translate-x-3 duration-300 ease-in-out w-fit hover:font-semibold hover:underline"
                >
                  {link.name}
                </Link>
              ))}
            </div>
          </div>

          <div>
            <h5 className="text-2xl text-gray-200 font-semibold uppercase">
              Contact
            </h5>

            <div className="flex flex-col gap-4 mt-8 lg:mt-10">
              <Link
                href="#"
                className="text-gray-400 hover:text-gray-200 tracking-wide text-lg transition-all hover:translate-x-3 duration-300 ease-in-out w-fit hover:font-semibold hover:underline"
              >
                Sponsorship
              </Link>

              <Link
                href="#"
                className="text-gray-400 hover:text-gray-200 tracking-wide text-lg transition-all hover:translate-x-3 duration-300 ease-in-out w-fit hover:font-semibold hover:underline"
              >
                Privacy Policy
              </Link>

              <Link
                href="#"
                className="text-gray-400 hover:text-gray-200 tracking-wide text-lg transition-all hover:translate-x-3 duration-300 ease-in-out w-fit hover:font-semibold hover:underline"
              >
                Terms & Conditions
              </Link>
            </div>
          </div>
        </div>
      </div>

      <div className="flex flex-col md:flex-row justify-between items-center mt-5 border-t border-t-gray-300 border-dotted">
        <div>
          <span className="text-base text-gray-300 mt-5 flex items-center gap-2">
            <FaCopyright /> 2025 Alpha Warriors - All rights reserved.
          </span>
        </div>

        <div className="flex items-center text-gray-300 gap-1 mt-4">
          <span>Created By:</span>

          <a href="https://www.ashimmaharjan.com.np/" className="underline">
            This Guy
          </a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;

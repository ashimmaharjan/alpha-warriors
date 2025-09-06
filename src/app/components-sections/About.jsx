"use client";

import { Trophy, Users } from "lucide-react";
import { Ripple } from "@/components/magicui/ripple";
import Image from "next/image";

import Lottie from "lottie-react";

import visionAnimation from "../../../public/animations/vision-animation.json";
import valuesAnimation from "../../../public/animations/values-animation.json";

import { FaHandshake, FaUserClock, FaUsers } from "react-icons/fa6";
import { RiSeedlingFill } from "react-icons/ri";

const About = () => {
  const ourValues = [
    {
      title: "Teamwork",
      desc: "Together we achieve more.",
      icon: <FaUsers />,
    },
    {
      title: "Discipline",
      desc: "Preparation, focus, and consistency.",
      icon: <FaUserClock />,
    },
    {
      title: "Respect",
      desc: "Value everyone and everything.",
      icon: <FaHandshake />,
    },
    {
      title: "Growth",
      desc: "Learn and improve always.",
      icon: <RiSeedlingFill />,
    },
  ];
  return (
    <section className="w-full h-auto bg-gray-800 px-5 md:px-20 py-16">
      <h3 className="text-white text-3xl md:text-4xl font-semibold tracking-tighter">
        About Us
      </h3>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-5 my-5">
        <div className="col-span-1 text-gray-400 w-full order-2 lg:order-1">
          <p className="text-lg md:text-xl text-justify tracking-tight">
            The Alpha Warriors were formed to bring together talented players
            with a shared commitment to teamwork, discipline, and performance.
            Backed by the Alpha Group of Companies, the team enters the Indoor
            Super League 2025 with the goal of competing at the highest level of
            indoor cricket. Our journey reflects the passion of our players, the
            support of our management, and the belief of our fans, as we strive
            to make our mark in one of Nepal’s most exciting tournaments.
          </p>

          <div className="flex items-center mt-6 gap-6">
            <div className="flex items-center gap-2 text-lg">
              <div className="w-fit h-fit p-1.5 bg-gray-50 rounded-md shadow-inner text-primary border border-gray-200">
                <Trophy />
              </div>
              <span className="text-sm md:text-base text-gray-200">
                Championship Winners
              </span>
            </div>

            <div className="flex items-center gap-2 text-lg">
              <div className="w-fit h-fit p-1.5 bg-gray-50 rounded-md shadow-inner text-primary border border-gray-200">
                <Users />
              </div>
              <span className="text-sm md:text-base text-gray-200">
                Elite Squad
              </span>
            </div>
          </div>
        </div>

        <div className="col-span-1 w-full h-auto order-1 lg:order-2">
          <div className="relative flex h-[450px] lg:-mt-20 w-full flex-col items-center justify-center rounded-lg bg-background">
            <Image
              src="/images/logo.png"
              alt="logo"
              width={500}
              height={500}
              loading="lazy"
              className="size-[230px] bg-white rounded-full"
            />
            <Ripple />
          </div>
        </div>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-14 mt-10">
        <div className="col-span-1 h-fit">
          <div className="flex items-center gap-3">
            <Lottie
              className="size-14 border border-gray-400 p-1.5 rounded-2xl"
              animationData={visionAnimation}
              loop
              autoPlay
            />
            <h3 className="text-white text-3xl md:text-4xl font-semibold tracking-tighter">
              Our Vision
            </h3>
          </div>

          <p className="text-lg md:text-xl tracking-tight text-gray-400 mt-5">
            Our vision is to build a team that plays competitive and
            entertaining cricket while representing the values of dedication,
            respect, and unity. Beyond winning matches, we want to contribute to
            the growth of indoor cricket in Nepal and create a platform where
            young players feel inspired to pursue the sport with confidence and
            ambition.
          </p>
        </div>

        <div className="col-span-1 h-fit">
          <div className="flex items-center gap-3">
            <Lottie
              className="size-14 border border-gray-400 p-1.5 rounded-2xl"
              animationData={valuesAnimation}
              loop
              autoPlay
            />

            <h3 className="text-white text-3xl md:text-4xl font-semibold tracking-tighter">
              Our Values
            </h3>
          </div>

          <div className="grid grid-cols-2 lg:grid-cols-4 gap-3 mt-8">
            {ourValues.map((value, index) => (
              <div key={index} className="col-span-1 h-fit">
                <div className="flex items-center justify-center gap-2.5">
                  <span className="text-primary text-2xl bg-gray-200/90 p-2 rounded-2xl border border-gray-50">
                    {value.icon}
                  </span>
                  <h3 className="text-gray-100 text-2xl text-center">
                    {value.title}
                  </h3>
                </div>

                <p className="text-gray-400 tracking-tight mt-3 text-center">
                  {value.desc}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;

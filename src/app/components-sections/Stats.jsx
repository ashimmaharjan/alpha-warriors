"use client";

import Lottie from "lottie-react";
import champAnimation from "../../../public/animations/champ.json";
import warriorAnimation from "../../../public/animations/warriors.json";
import chartAnimation from "../../../public/animations/chart.json";
import bdayAnimation from "../../../public/animations/bday.json";

const Stats = () => {
  const stats = [
    {
      title: "Matches",
      value: 5,
      animation: chartAnimation,
    },
    {
      title: "Warriors",
      value: 10,
      animation: warriorAnimation,
    },
    {
      title: "Championships",
      animation: champAnimation,
      value: 1,
    },
    {
      title: "Founded",
      value: 2025,
      animation: bdayAnimation,
    },
  ];
  return (
    <section className="w-full h-auto bg-gradient-to-b to-[#261D36] from-[#070111]/90 md:px-10 py-16">
      <div className="grid grid-cols-1 px-5 md:grid-cols-2 lg:grid-cols-4 gap-8">
        {stats.map((stat, index) => (
          <div
            key={index}
            className="col-span-1 relative border border-gray-300 skew-x-6 shadow-xl shadow-gray-800 py-5 flex flex-col px-5 gap-5"
          >
            <h4 className="text-2xl font-semibold uppercase -skew-x-6 tracking-tighter text-gray-300">
              {stat.title}
            </h4>

            <div className="absolute right-5 bottom-2 h-fit p-1 my-2 flex justify-center items-center rounded-full">
              <Lottie
                className="size-20"
                animationData={stat.animation}
                autoPlay
                loop
              />
            </div>

            <span className="text-5xl mt-10 md:text-6xl font-black text-[#08a88a] text-shadow-lg tracking-tighter">
              {stat.value}
            </span>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Stats;

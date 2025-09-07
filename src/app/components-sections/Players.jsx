"use client";

import Image from "next/image";
import { players } from "../../../utils/data/playerData";
import Lottie from "lottie-react";

import warriorsAnimation from "../../../public/animations/warriors.json";

const Players = () => {
  return (
    <section className="w-full h-auto bg-gradient-to-b from-[#070111] to-[#261D36] px-5 md:px-20 py-16">
      <div className="flex items-center gap-3">
        <Lottie
          className="size-14 border border-gray-400 p-1.5 rounded-2xl"
          animationData={warriorsAnimation}
          loop
          autoPlay
        />

        <h3 className="text-white text-3xl md:text-4xl font-semibold tracking-tighter">
          Warriors
        </h3>
      </div>

      <div className="mt-10 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
        {players.map((player) => (
          <div
            className="col-span-1 relative w-full h-fit p-5 md:p-6 border-2 border-gray-400 rounded-[14px] shadow shadow-gray-700 cursor-pointer transition-all duration-300 ease-in-out hover:scale-105 hover:-rotate-2 hover:shadow-2xl bg-gray-800 hover:bg-gray-600"
            key={player.id}
          >
            <div className="text-gray-400">
              <Image
                src={player.image}
                alt={player.name}
                width={500}
                height={500}
                loading="lazy"
                className="w-full aspect-square object-cover rounded-[10px] border border-gray-300"
              />

              <h3 className="text-gray-100 font-semibold tracking-tight text-center uppercase text-2xl mt-8">
                {player.name}
              </h3>

              <div className="flex items-center justify-between mt-3">
                <div
                  className={`${
                    player.badges.length > 0
                      ? "border border-gray-300 text-gray-50 shadow-xl"
                      : "border border-transparent"
                  } flex justify-center items-center size-10 bg-transparent rounded-full`}
                >
                  {player.badges.length > 0 ? player.badgeIcons[0] : ""}
                </div>

                <span className="tracking-tight text-gray-400 text-center text-xl">
                  {player.role}
                </span>

                <div
                  className={`${
                    player.role === "Wicket-Keeper" ? "rotate-180" : "rotate-90"
                  } size-10 bg-transparent border text-2xl border-gray-300 rounded-full text-gray-50 flex justify-center items-center`}
                >
                  {player.roleIcon}
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Players;

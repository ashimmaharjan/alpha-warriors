"use client";
import Lottie from "lottie-react";
import { fixtures } from "../../../utils/data/fixtures";

import micAnimation from "../../../public/animations/gong.json";
import Image from "next/image";

const Fixtures = () => {
  return (
    <section
      id="fixtures"
      className="w-full h-auto bg-gradient-to-b to-[#261D36] from-[#070111] px-5 md:px-20 py-16"
    >
      <div className="flex items-center gap-3">
        <Lottie
          className="size-14 border border-gray-400 p-1.5 rounded-2xl"
          animationData={micAnimation}
          loop
          autoPlay
        />

        <h3 className="heading">Fixtures</h3>
      </div>

      <div className="mt-8 flex flex-col">
        {fixtures.map((fixture, index) => (
          <div
            key={index}
            className="w-full h-auto px-6 py-3 border-b border-gray-600 grid grid-cols-12 gap-y-2 md:gap-y-0"
          >
            <div className="col-span-12 md:col-span-4 flex items-center gap-1.5">
              <div>
                <Image
                  width={100}
                  height={100}
                  quality={100}
                  loading="lazy"
                  alt="versus-img"
                  src="/images/vs.png"
                  className="size-12 object-cover"
                />
              </div>
              <h5 className="text-gray-200 font-semibold tracking-tight text-xl">
                {fixture.against}
              </h5>
            </div>

            <div className="col-span-12 md:col-span-2 flex items-center">
              <span className="text-gray-300 font-extralight tracking-tight">
                {fixture.date}
              </span>
            </div>

            <div
              className={`col-span-12 md:col-span-2 flex items-center size-9 ${
                fixture.result === "L" ? "bg-red-600" : "bg-green-600"
              } justify-center text-white`}
            >
              <span className="font-semibold uppercase">{fixture.result}</span>
            </div>

            <div className="col-span-12 md:col-span-4 flex items-center">
              <span className="text-gray-400 tracking-tight">
                {fixture.venue}
              </span>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Fixtures;

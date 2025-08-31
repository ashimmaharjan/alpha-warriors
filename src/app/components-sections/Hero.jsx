"use client";

import Plasma from "@/components/Plasma";
import SplitText from "@/components/SplitText";

import { PiCricketDuotone } from "react-icons/pi";
import { BiSolidCricketBall } from "react-icons/bi";
import { FaEye } from "react-icons/fa6";

import { motion } from "motion/react";

const Hero = () => {
  return (
    <section>
      <div className="w-full min-h-dvh bg-gray-950">
        <Plasma
          color="#de2424"
          speed={0.6}
          direction="forward"
          scale={0.8}
          opacity={0.8}
        />

        <div className="absolute left-0 top-0 w-full min-h-dvh flex flex-col gap-8 md:gap-12 justify-center items-center">
          <div className="glass-nav w-fit h-fit px-5 bg-gray-600/30 py-1.5 rounded-full border-[1px] border-gray-400 flex items-center gap-2 text-lg md:text-xl">
            <PiCricketDuotone />
            Indoor Cricket team
          </div>
          <SplitText
            text="WE DON'T PLAY CRICKET,"
            className="text-5xl px-5 md:text-6xl font-semibold text-center h-fit tracking-tighter text-tertiary md:px-10"
            delay={70}
            duration={2}
            ease="elastic.out(1,0.3)"
            splitType="chars"
            from={{ opacity: 0, y: 40 }}
            to={{ opacity: 1, y: 0 }}
            threshold={0.1}
            rootMargin="-100px"
          />
          <SplitText
            text="WE HUNT VICTORIES"
            className="text-5xl px-5 md:text-6xl font-semibold text-center h-fit tracking-tighter text-tertiary md:px-10 -mt-5 md:-mt-8"
            delay={100}
            duration={2}
            ease="elastic.out(1,0.3)"
            splitType="chars"
            from={{ opacity: 0, y: 40 }}
            to={{ opacity: 1, y: 0 }}
            threshold={0.1}
            rootMargin="-100px"
          />

          <div className="flex flex-col md:flex-row items-center gap-3 md:gap-5">
            <motion.button
              initial={{
                scale: 0,
                opacity: 0,
                filter: "blur(50px)",
              }}
              whileInView={{
                scale: 1,
                opacity: 1,
                filter: "blur(0px)",
                transition: {
                  duration: 0.3,
                },
              }}
              type="button"
              className="w-full md:w-fit px-6 flex justify-center items-center gap-1.5 cursor-pointer py-3 md:py-4 md:px-8 bg-gray-50 text-xl md:text-2xl text-gray-900 rounded-full font-light"
            >
              <BiSolidCricketBall />
              Join the hunt
            </motion.button>
            <motion.button
              type="button"
              initial={{
                scale: 0,
                opacity: 0,
                filter: "blur(50px)",
              }}
              whileInView={{
                scale: 1,
                opacity: 1,
                filter: "blur(0px)",
                delay: 0.5,
                transition: {
                  duration: 0.3,
                },
              }}
              className="w-full md:w-fit px-6 flex justify-center items-center gap-1.5 cursor-pointer py-3 md:py-4 md:px-8 glass-nav bg-gray-600/30 text-gray-400 text-xl md:text-2xl rounded-full font-light border border-gray-500"
            >
              <FaEye />
              Witness the power
            </motion.button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;

"use client";

import LanyardHeadCoach from "@/components/Lanyard-HeadCoach";
import LanyardCaptain from "@/components/Lanyard-Captain";
import Lottie from "lottie-react";

import micAnimation from "../../../public/animations/mic-animation.json";

import quoteAnimation from "../../../public/animations/quote-animation.json";

const LeadershipVoices = () => {
  return (
    <section className="w-full h-auto bg-gradient-to-b from-[#261D36] to-[#070111] px-5 md:px-20 py-16">
      <div className="flex items-center gap-3">
        <Lottie
          className="size-14 border border-gray-400 p-1.5 rounded-2xl"
          animationData={micAnimation}
          loop
          autoPlay
        />

        <h3 className="text-white text-3xl md:text-4xl font-semibold tracking-tighter">
          Leadership Voices
        </h3>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mt-8">
        <div className="col-span-1 h-auto flex flex-col pt-10 gap-5">
          <Lottie
            className="size-14 md:size-20"
            animationData={quoteAnimation}
            autoPlay
            loop
          />
          <p className="text-gray-300 text-lg md:text-2xl tracking-wide">
            Coaching the <b className="italic">Alpha Warriors</b> is an exciting
            opportunity because this team brings the right mix of skill, energy,
            and commitment. Our aim is to build a style of cricket that is
            competitive, entertaining, and consistent throughout the tournament.
            Each player understands their role, and together we are working to
            maximize our strengths while staying adaptable against different
            opponents. <b className="italic">The Indoor Super League 2025</b> is
            more than just a competition—it&apos;s a chance to showcase the
            growth of indoor cricket in Nepal. We are confident that the
            <b className="italic"> Alpha Warriors </b>
            will perform with determination and spirit.
          </p>
        </div>

        <div className="col-span-1 h-auto md:-mt-40">
          <LanyardHeadCoach position={[0, 0, 11]} gravity={[0, -40, 0]} />
        </div>

        <div className="col-span-1 h-auto flex flex-col justify-center gap-5 order-1 md:order-2">
          <Lottie
            className="size-14 md:size-20"
            animationData={quoteAnimation}
            autoPlay
            loop
          />
          <p className="text-gray-300 text-lg md:text-2xl tracking-wide">
            As captain of the <b className="italic"> Alpha Warriors </b>, I feel
            proud to lead a group of players who are talented, hardworking, and
            united by the same goal. Our focus for the
            <b className="italic"> The Indoor Super League 2025 </b>
            is to play fearless but disciplined cricket, where every player
            contributes to the team&apos;s success. We know the competition will
            be tough, but with the support of our fans and the preparation
            we&apos;ve put in, we are ready to take on every challenge. We look
            forward to representing the
            <b className="italic"> Alpha Warriors </b> with pride and making
            this journey a memorable one for everyone connected with us.
          </p>
        </div>

        <div className="col-span-1 h-auto md:-mt-40 order-2 md:order-1">
          <LanyardCaptain position={[0, 0, 11]} gravity={[0, -40, 0]} />
        </div>
      </div>
    </section>
  );
};

export default LeadershipVoices;

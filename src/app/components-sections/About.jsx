import { Trophy, Users } from "lucide-react";
import { Ripple } from "@/components/magicui/ripple";
import Image from "next/image";

const About = () => {
  return (
    <section className="w-full h-auto bg-gray-800 px-5 md:px-20 py-16">
      <h3 className="text-white text-3xl md:text-4xl font-semibold tracking-tighter">
        About Us
      </h3>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-5 my-5">
        <div className="col-span-1 text-gray-400 w-full">
          <p className="text-lg md:text-xl">
            We are Nepal&apos;s premier indoor cricket team, bringing passion,
            skill, and warrior spirit to every match. Founded with the vision of
            excellence, we've dominated the indoor cricket scene across Nepal.
            <br />
            <br />
            Our team represents the finest talents in Nepalese cricket,
            combining traditional cricket values with modern indoor gameplay
            techniques.
          </p>

          <div className="flex items-center mt-6 gap-6">
            <div className="flex items-center gap-2 text-lg">
              <div className="w-fit h-fit p-1.5 bg-gray-50 rounded-md shadow-inner text-primary border border-secondary">
                <Trophy />
              </div>
              <span className="text-gray-200">Championship Winners</span>
            </div>

            <div className="flex items-center gap-2 text-lg">
              <div className="w-fit h-fit p-1.5 bg-gray-50 rounded-md shadow-inner text-primary border border-secondary">
                <Users />
              </div>
              <span className="text-gray-200">Elite Squad</span>
            </div>
          </div>
        </div>

        <div className="col-span-1 w-full h-auto">
          <div className="relative flex h-[450px] lg:-mt-20 w-full flex-col items-center justify-center overflow-hidden rounded-lg bg-background">
            <Image
              src="/images/logo.png"
              alt="logo"
              width={500}
              height={500}
              quality={100}
              loading="lazy"
              className="size-[230px] bg-white rounded-full"
            />
            <Ripple />
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;

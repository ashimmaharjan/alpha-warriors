"use client";
import Lottie from "lottie-react";
import emailAnimation from "../../../public/animations/email-send.json";
import emailAddressAnimaton from "../../../public/animations/email.json";
import locationAnimaton from "../../../public/animations/location.json";
const ContactUs = () => {
  return (
    <section
      id="contact"
      className="w-full h-auto bg-gradient-to-b from-[#261D36] to-[#070111] px-5 md:px-20 py-16"
    >
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-10">
        <div className="col-span-1 h-fit">
          <h3 className="heading">
            Get in &mdash;
            <br />
            touch with us
          </h3>

          <p className="text-lg md:text-xl w-full tracking-tight text-gray-400 mt-8">
            We&apos;re here to help. Whether you have a question about
            sponsorship, joining the team, or just a feedback in general, our
            team is ready to assist you.
          </p>

          <div className="mt-8 flex flex-col gap-8">
            <div className="text-xl md:text-2xl flex flex-col gap-2 border border-gray-600 p-5 rounded-4xl">
              <span className="text-gray-300 text-xl md:text-2xl flex items-center gap-1.5">
                <Lottie
                  loop
                  autoPlay
                  animationData={emailAddressAnimaton}
                  className="size-12"
                />
                Email:
              </span>
              <p className="pl-2 font-semibold italic text-gray-200 text-shadow-lg mt-8">
                teamalphawarriorsnp@gmail.com
              </p>
            </div>

            <div className="text-xl md:text-2xl flex flex-col gap-2 border border-gray-600 p-5 rounded-4xl">
              <span className="text-gray-300 text-xl md:text-2xl flex items-center gap-1.5">
                <Lottie
                  loop
                  autoPlay
                  animationData={locationAnimaton}
                  className="size-12"
                />
                Address:
              </span>
              <p className="pl-2 font-semibold italic text-gray-200 text-shadow-lg mt-8">
                Kathmandu, Nepal
              </p>
            </div>
          </div>
        </div>

        <div className="col-span-1 h-auto bg-gradient-to-br from-gray-900 to-gray-800 rounded-4xl p-8 md:p-10 shadow border-2 border-gray-500">
          <form action="" className="flex flex-col gap-6">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
              <div className="flex flex-col gap-2">
                <label
                  htmlFor="firstName"
                  className="text-gray-300 text-lg font-extralight"
                >
                  First Name
                </label>
                <input
                  type="text"
                  placeholder="Enter your first name."
                  className="px-4 rounded-full w-full h-12 border border-gray-400 text-white"
                />
              </div>

              <div className="flex flex-col gap-2">
                <label
                  htmlFor="lastName"
                  className="text-gray-300 text-lg font-extralight"
                >
                  Last Name
                </label>
                <input
                  type="text"
                  placeholder="Enter your last name."
                  className="px-4 rounded-full w-full h-12 border border-gray-400 text-white"
                />
              </div>
            </div>

            <div className="flex flex-col gap-2">
              <label
                htmlFor="email"
                className="text-gray-300 text-lg font-extralight"
              >
                Email
              </label>
              <input
                type="email"
                placeholder="Enter your email address."
                className="px-4 rounded-full w-full h-12 border border-gray-400 text-white"
              />
            </div>

            <div className="flex flex-col gap-2">
              <label
                htmlFor="message"
                className="text-gray-300 text-lg font-extralight"
              >
                How can we help you?
              </label>
              <textarea
                placeholder="Enter your message."
                rows={5}
                className="p-4 rounded-[30px] w-full border border-gray-400 text-white"
              />
            </div>

            <button
              type="submit"
              className="cursor-pointer ml-auto flex gap-1.5 items-center bg-gray-900 text-gray-100 border mt-3 px-4 md:px-6 py-1 md:py-2 text-lg md:text-xl rounded-full shadow-lg hover:bg-gray-950 hover:scale-105 hover:-translate-x-4 hover:shadow-2xl transition-all duration-300 ease-in-out"
            >
              Send Message
              <div>
                <Lottie
                  className="size-12"
                  animationData={emailAnimation}
                  autoPlay
                  loop
                />
              </div>
            </button>
          </form>
        </div>
      </div>
    </section>
  );
};

export default ContactUs;

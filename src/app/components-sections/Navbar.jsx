import Image from "next/image";
import Link from "next/link";

const Navbar = () => {
  const links = [
    {
      name: "Home",
      link: "#",
    },
    {
      name: "About",
      link: "#about",
    },
    {
      name: "Team",
      link: "#team",
    },
    {
      name: "Fixtures",
      link: "#fixtures",
    },
    {
      name: "Contact",
      link: "#contact",
    },
  ];
  return (
    <section className="fixed top-0 left-0 z-50 w-full h-auto">
      <nav className="w-full md:w-[90%] lg:w-[85%] h-auto rounded-none md:rounded-full border-b border-b-gray-500 rounded-b-3xl md:border md:border-gray-500 mx-auto px-5 py-3 lg:px-8 lg:py-5 flex justify-between items-center md:mt-8 glass-nav">
        <div className="flex items-center gap-2.5">
          <Image
            src="/images/logo-cropped.png"
            alt="logo"
            width={300}
            height={300}
            quality={100}
            loading="lazy"
            className="bg-gray-50 rounded-full size-14 object-contain border border-gray-50"
          />

          <span className="text-3xl md:text-2xl font-semibold tracking-tighter text-white">
            Alpha Warriors
          </span>
        </div>

        <div className="w-fit h-full text-white hidden md:flex items-center gap-5 text-xl pr-3">
          {links.map((link, index) => (
            <Link key={index} href={link.link}>
              {link.name}
            </Link>
          ))}
        </div>
      </nav>
    </section>
  );
};

export default Navbar;

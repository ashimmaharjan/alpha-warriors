import Image from "next/image";

const Stats = () => {
  const stats = [
    {
      title: "Matches",
      value: 5,
      image: "/images/matches-played.png",
    },
    {
      title: "Players",
      value: 12,
      image: "/images/players.png",
    },
    {
      title: "Championships",
      image: "/images/trophy.png",
      value: 1,
    },
    {
      title: "Founded",
      value: 2025,
      image: "/images/calendar.png",
    },
  ];
  return (
    <section className="w-full h-auto bg-gray-900 md:px-10 py-16">
      <div className="grid grid-cols-1 px-5 md:grid-cols-2 lg:grid-cols-4 gap-8">
        {stats.map((stat, index) => (
          <div
            key={index}
            className="col-span-1 relative border border-gray-300 rounded-2xl shadow py-5 flex flex-col px-5 gap-5"
          >
            <h4 className="text-2xl font-semibold tracking-tighter text-gray-400">
              {stat.title}
            </h4>

            <div className="absolute wavy-box right-3 bottom-2 h-fit p-1 bg-tertiary border border-amber-500 my-2 flex justify-center items-center rounded-full">
              <Image
                src={stat?.image}
                alt="stat-image"
                width={500}
                height={500}
                quality={100}
                loading="lazy"
                className="size-20 object-cover"
              />
            </div>

            <span className="text-5xl mt-10 md:text-6xl font-black text-white tracking-tighter">
              {stat.value}
            </span>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Stats;

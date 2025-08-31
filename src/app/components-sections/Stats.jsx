import Image from "next/image";

const Stats = () => {
  const stats = [
    {
      title: "Matches Played",
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
    <section className="w-full h-auto bg-gray-900 md:px-10 py-10">
      <div className="grid grid-cols-1 px-5 md:grid-cols-2 lg:grid-cols-4 gap-8">
        {stats.map((stat, index) => (
          <div
            key={index}
            className="col-span-1 relative border border-gray-300 rounded-2xl shadow py-5 flex flex-col px-5 md:px-8 gap-5"
          >
            <h4 className="text-2xl font-semibold tracking-tight text-gray-400">
              {stat.title}
            </h4>

            <div className="absolute right-5 -top-5 size-12 p-1 bg-tertiary border border-amber-500 my-2 flex justify-center items-center rounded-full">
              <Image
                src={stat?.image}
                alt="stat-image"
                width={500}
                height={500}
                quality={100}
                loading="lazy"
                className="size-12 object-contain"
              />
            </div>

            <span className="text-5xl md:text-6xl lg:text-7xl font-black text-center">
              {stat.value}
            </span>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Stats;

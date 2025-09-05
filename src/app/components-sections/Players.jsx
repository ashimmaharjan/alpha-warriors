import Image from "next/image";
import { players } from "../../../utils/data/playerData";

const Players = () => {
  return (
    <section className="w-full h-auto bg-gray-900 px-5 md:px-20 py-16">
      <h3 className="text-white text-3xl md:text-4xl font-semibold tracking-tighter">
        Warriors
      </h3>

      <div className="mt-10 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-5">
        {players.map((player) => (
          <div
            className="col-span-1 w-full h-fit p-5 md:p-6 border-2 border-gray-50 rounded-[18px] shadow-lg shadow-gray-600"
            key={player.id}
          >
            <div className="text-gray-400">
              <span className="bg-gray-600 text-gray-200 px-3 py-1.5 text-sm rounded-full shadow-xl uppercase">
                {player.badges.length > 0
                  ? `${player.badgeIcons[0] || ""} ${player.badges[0]}`
                  : player.role}
              </span>

              <h3 className="text-gray-100 font-extrabold tracking-tight text-2xl my-5">
                {player.name}
              </h3>

              <Image
                src={player.image}
                alt={player.name}
                width={500}
                height={500}
                loading="lazy"
                quality={100}
                className="w-full h-96 object-cover rounded-2xl"
              />

              <p className="tracking-tight text-gray-400 mt-3">
                {player.profileRole}
              </p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Players;

import Lanyard from "@/components/Lanyard";

const Messages = () => {
  return (
    <section className="w-full h-auto bg-gray-800 px-5 md:px-20 py-16">
      <h3 className="text-white text-3xl md:text-4xl font-semibold tracking-tighter">
        Messages
      </h3>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
        <div className="col-span-1 h-fit">
          <Lanyard position={[0, 0, 15]} gravity={[0, -40, 0]} />
        </div>
      </div>
    </section>
  );
};

export default Messages;

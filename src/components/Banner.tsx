import Ban from "../assets/images/banner-stack.png";
const Banner = () => {
  return (
    <div className="container mx-auto flex py-24 justify-between items-center">
      <section className="grid items-center">
        <div className="flex flex-col gap-4">
          <div className="text-6xl font-extrabold">
            <h2 className="mb-1">Build Your Ideal</h2>
            <h2 className="bg-linear-to-r from-[#FF5722] via-[#D81B7E] to-[#7C3AED] bg-clip-text text-transparent">
              Development Stack
            </h2>
          </div>
          <p className="text-[18px] mt-1.5 mb-7">
            Explore frontend, backend, database, and tooling options, <br />
            compare them side by side, and put together the stack that fits{" "}
            <br />
            your next project.
          </p>
        </div>
        <div className="flex gap-2.5 mt-9">
          <button className="rounded-xl bg-linear-to-r from-[#F97316] to-[#EC4899] px-4 py-3 font-medium text-white">
            Explore Technologies
          </button >
          <button className="rounded-2xl border-[1.5px] border-gray-300 px-15 py-3">Learn More</button>
        </div>
      </section>
      <img src={Ban} alt="" />
    </div>
  );
};
export default Banner;

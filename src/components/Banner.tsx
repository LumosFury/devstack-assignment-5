import Ban from "../assets/images/banner-stack.png";
const Banner = () => {
  return (
    <div className="container mx-auto flex flex-col items-center gap-12 px-4 py-12 lg:flex-row lg:justify-between lg:py-24">
      <section className="grid items-center">
        <div className="flex flex-col gap-4">
          <div className="text-center text-5xl font-extrabold sm:text-5xl lg:text-left lg:text-6xl">
            <h2 className="mb-1">Build Your Ideal</h2>
            <h2 className="bg-linear-to-r from-[#FF5722] via-[#D81B7E] to-[#7C3AED] bg-clip-text text-transparent">
              Development Stack
            </h2>
          </div>
          <p className="mt-1.5 mb-7 text-center text-base sm:text-lg lg:text-left">
            Explore frontend, backend, database, and tooling options,
            <br className="hidden lg:block" />
            compare them side by side, and put together the stack that fits your{" "}
            <br className="hidden lg:block" />
            next project.
          </p>
        </div>
        <div className="mt-9 flex w-full justify-center gap-3 sm:flex-row sm:justify-center lg:justify-start">
          <button className="rounded-xl bg-linear-to-r from-[#F97316] to-[#EC4899] px-4 py-3 font-medium text-white">
            Explore Technologies
          </button>
          <button className="rounded-2xl border-[1.5px] border-gray-300 px-15 py-3">
            Learn More
          </button>
        </div>
      </section>
      <img
        src={Ban}
        alt="Banner Image"
        className="w-full max-w-md object-contain sm:max-w-lg lg:max-w-xl"
      />
    </div>
  );
};
export default Banner;

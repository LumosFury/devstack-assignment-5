import { use } from "react";
import type { ItechnologyTypes } from "../../types/technologyTypes";
import Technologies from "./Technologies";
interface TechnologiesProps {
  technologiesPromise: Promise<ItechnologyTypes[]>;
}

const TechnologyCard = ({ technologiesPromise }: TechnologiesProps) => {
  const tech = use(technologiesPromise);
  // console.log(techlonogy)
  return (
    <div className="container mx-auto mt-28">
      <div>
        <h2 className="font-extrabold text-4xl">
          Explore the{" "}
          <span className="bg-linear-to-r from-[#EC4899] to-[#8B5CF6] bg-clip-text text-transparent">
            Technologies
          </span>{" "}
        </h2>
        <p className="text-xl">
          Pick one technology per category to build your ideal stack.
        </p>
      </div>
      <div className="flex">
        <Technologies technology={tech} />
        <h2>okjbaslefjnb</h2>
      </div>
    </div>
  );
};

export default TechnologyCard;

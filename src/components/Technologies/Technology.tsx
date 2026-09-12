import { use, useState } from "react";
import type { ItechnologyTypes } from "../../types/technologyTypes";
import Technologies from "./Technologies";
import SelectedTechnologies from "./SelectedTechnologies";
interface TechnologiesProps {
  technologiesPromise: Promise<ItechnologyTypes[]>;
}

const TechnologyCard = ({ technologiesPromise }: TechnologiesProps) => {
  const tech = use(technologiesPromise);
  const [selectedTechnology, setSelectedTechnology] = useState<
    ItechnologyTypes[]
  >([]);
  return (
    <div className="container mx-auto mt-28">
      <div className="text-center lg:text-left">
        <h2 className="font-extrabold text-4xl mb-2">
          Explore the{" "}
          <span className="bg-linear-to-r from-[#EC4899] to-[#8B5CF6] bg-clip-text text-transparent">
            Technologies
          </span>{" "}
        </h2>
        <p className="text-xl">
          Pick one technology per category to build your ideal stack.
        </p>
      </div>
      <div className="flex flex-col items-center gap-8 lg:flex-row lg:items-start">
        <Technologies
          technology={tech}
          selectedTechnology={selectedTechnology}
          setSelectedTechnology={setSelectedTechnology}
        />
        <SelectedTechnologies
          selectedTechnology={selectedTechnology}
          setSelectedTechnology={setSelectedTechnology}
        />
      </div>
    </div>
  );
};

export default TechnologyCard;

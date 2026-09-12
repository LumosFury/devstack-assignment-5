import type { Dispatch, SetStateAction } from "react";
import type { ItechnologyTypes } from "../../types/technologyTypes";
import TechnologyCard from "./TechnologyCard";

interface AvailableProps {
  technology: ItechnologyTypes[];
  selectedTechnology: ItechnologyTypes[];
  setSelectedTechnology: Dispatch<SetStateAction<object[]>>;
}

const Technologies = ({
  technology,
  selectedTechnology,
  setSelectedTechnology,
}: AvailableProps) => {
  return (
    <div className="grid grid-cols-3 gap-y-5 gap-x-8 mt-10">
      {technology.map((tech: ItechnologyTypes) => {
        return (
          <TechnologyCard
            key={tech.id}
            tech={tech}
            selectedTechnology={selectedTechnology}
            setSelectedTechnology={setSelectedTechnology}
          />
        );
      })}
    </div>
  );
};

export default Technologies;

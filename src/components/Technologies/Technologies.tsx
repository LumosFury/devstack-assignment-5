import type { Dispatch, SetStateAction } from "react";
import type { ItechnologyTypes } from "../../types/technologyTypes";
import TechnologyCard from "./TechnologyCard";

interface AvailableProps {
  technology: ItechnologyTypes[];
  selectedTechnology: ItechnologyTypes[];
  setSelectedTechnology: Dispatch<SetStateAction<ItechnologyTypes[]>>;
}

const Technologies = ({
  technology,
  selectedTechnology,
  setSelectedTechnology,
}: AvailableProps) => {
  return (
    <div className="mt-10 grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-3">
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

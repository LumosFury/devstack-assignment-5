import { useState } from "react";
import type { ItechnologyTypes } from "../../types/technologyTypes";
import TechnologyCard from "./TechnologyCard";

interface AvailableProps{
    technology: ItechnologyTypes[]
}

const Technologies = ({ technology }:AvailableProps) => {
    const [] = useState()
  return (
    <div className="grid grid-cols-3 gap-y-5 gap-x-2 mt-10">
      {technology.map((tech:ItechnologyTypes) => {
        return (
            <TechnologyCard key={tech.id} tech = {tech}/>
        );
      })}
    </div>
  );
};

export default Technologies;

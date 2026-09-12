import type { Dispatch, SetStateAction } from "react";
import type { ItechnologyTypes } from "../../types/technologyTypes";
import { Slide, toast } from "react-toastify";
import { MdDone } from "react-icons/md";

interface AvailableTechProps {
  tech: ItechnologyTypes;
  selectedTechnology: ItechnologyTypes[];
  setSelectedTechnology: Dispatch<SetStateAction<ItechnologyTypes[]>>;
}
const TechnologyCard = ({
  tech,
  selectedTechnology,
  setSelectedTechnology,
}: AvailableTechProps) => {
  const isSelected = selectedTechnology.some(
    (selectedTech) => selectedTech.id === tech.id,
  );
  const handleSelectedTech = () => {
    setSelectedTechnology((currentTechnologies) => {
      return [...currentTechnologies, tech];
    });

    toast.success(`${tech.name} added successfully`, {
      position: "bottom-right",
      autoClose: 3000,
      hideProgressBar: false,
      closeOnClick: false,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
      theme: "light",
      transition: Slide,
    });
  };
  return (
    <div
      className={
        isSelected
          ? `w-95 bg-white rounded-3xl p-6 border border-pink-600 shadow-sm flex flex-col justify-between`
          : `w-95 bg-white rounded-3xl p-6 border border-gray-100 shadow-sm flex flex-col justify-between`
      }
    >
      <div className="flex items-center justify-between mb-4">
        <div className="w-12 h-12 flex items-center justify-center">
          <img
            src={tech.icon}
            alt={tech.name}
            className="w-full h-full object-contain"
          />
        </div>
        {tech.badge && (
          <span className="bg-pink-50 text-pink-600 text-sm px-4 py-1.5 rounded-full font-medium">
            {tech.badge}
          </span>
        )}
      </div>
      <div className="mb-6">
        <h3 className="text-2xl font-bold text-slate-900 mb-3 tracking-tight">
          {tech.name}
        </h3>
        <p className="text-slate-500 text-base">{tech.description}</p>
      </div>
      <div className="pt-4 border-t border-gray-100 flex items-center justify-between text-sm text-slate-600 mb-6">
        <span className="bg-slate-100/80 px-3 py-1.5 rounded-lg font-medium text-slate-700">
          {tech.category}
        </span>
        <span className="font-medium text-slate-600">{tech.difficulty}</span>
        <div className="flex items-center gap-1 font-semibold text-slate-900">
          <span className="text-amber-400">★</span>
          <span>{tech.rating}</span>
        </div>
      </div>
      <button
        onClick={() => handleSelectedTech()}
        className={`w-full font-medium py-3.5 rounded-xl transition-colors border ${
          isSelected
            ? "bg-pink-100 text-[#EC4899] border-none cursor-not-allowed"
            : "bg-[#0a0f1d] text-white cursor-pointer"
        }`}
        disabled={isSelected}
      >
        {isSelected ? (
          <span className="flex items-center justify-center gap-1.5">
            <MdDone /> Added to stack
          </span>
        ) : (
          "Add to Stack"
        )}
      </button>
    </div>
  );
};

export default TechnologyCard;

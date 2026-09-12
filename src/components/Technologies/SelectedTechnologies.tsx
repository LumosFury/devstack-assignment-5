import type { Dispatch, SetStateAction } from "react";
import type { ItechnologyTypes } from "../../types/technologyTypes";
import SelectedTechCard from "./SelectedTechCard";
import { Slide, toast } from "react-toastify";

interface ISelectedTechlogyProps {
  selectedTechnology: ItechnologyTypes[];
  setSelectedTechnology: Dispatch<SetStateAction<ItechnologyTypes[]>>;
}

const SelectedTechnologies = ({
  selectedTechnology,
  setSelectedTechnology,
}: ISelectedTechlogyProps) => {
  const handleRemoveAll = () => {
    setSelectedTechnology([]);
    toast.error(`All items removed`, {
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
    <div className="w-[320px] bg-white rounded-3xl p-6 border border-gray-100 shadow-sm flex flex-col mt-10">
      <div>
        <h3 className="text-xl font-bold text-slate-900">Your Stack</h3>
        <p className="text-sm text-[#94A3B8] mt-0.5 mb-4">
          {selectedTechnology.length === 0
            ? `No technologies selected yet.`
            : `${selectedTechnology.length} Technology Selected`}
        </p>
      </div>
      {selectedTechnology.length === 0 ? (
        <div className="border-2 border-dotted border-gray-300 rounded-2xl mt-1">
          <h4 className="font-extralight text-[#94A3B8] text-center py-6 px-16">
            Your stack is empty.
          </h4>
        </div>
      ) : (
        selectedTechnology.map((techs: ItechnologyTypes) => {
          return (
            <SelectedTechCard
              key={techs.id}
              techs={techs}
              selectedTechnology={selectedTechnology}
              setSelectedTechnology={setSelectedTechnology}
            />
          );
        })
      )}
      {selectedTechnology.length > 0 && (
        <button
          onClick={handleRemoveAll}
          className="w-full py-3 border border-red-200 text-red-500 hover:bg-red-50 font-semibold text-sm rounded-xl transition-colors mt-10"
        >
          Remove All
        </button>
      )}
    </div>
  );
};

export default SelectedTechnologies;

import type { Dispatch, SetStateAction } from "react";
import type { ItechnologyTypes } from "../../types/technologyTypes";
import SelectedTechCard from "./SelectedTechCard";

interface ISelectedTechlogyProps {
  selectedTechnology: ItechnologyTypes[];
  setSelectedTechnology: Dispatch<SetStateAction<object[]>>;
}

const SelectedTechnologies = ({
  selectedTechnology,
  setSelectedTechnology,
}: ISelectedTechlogyProps) => {
  return (
    <div className="w-[320px] bg-white rounded-3xl p-6 border border-gray-100 shadow-sm flex flex-col mt-10">
      <div className="mb-4">
        <h3 className="text-xl font-bold text-slate-900">Your Stack</h3>
        <p className="text-sm text-[#94A3B8] mt-0.5">
          {selectedTechnology.length === 0
            ? `No technologies selected yet.`
            : `${selectedTechnology.length} Technology Selected`}
        </p>
      </div>
      {selectedTechnology.map((techs: ItechnologyTypes) => {
        return (
          <div className="border-2 border-dotted border-gray-300 rounded-2xl p-4 my-5 mx-2.5">
            <h4 className="font-extralight text-[#94A3B8] text-center">
              Your stack is empty.
            </h4>
          </div>
        );
      })}
      {selectedTechnology.length > 0 && (
        <button
          // onClick={handleRemoveAll}
          className="w-full py-3 border border-red-200 text-red-500 hover:bg-red-50 font-semibold text-sm rounded-xl transition-colors mt-auto"
        >
          Remove All
        </button>
      )}
    </div>
  );
};

export default SelectedTechnologies;

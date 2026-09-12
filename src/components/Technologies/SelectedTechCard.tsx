import { IoMdClose } from "react-icons/io";
import type { ItechnologyTypes } from "../../types/technologyTypes";
import { Slide, toast } from "react-toastify";
import type { Dispatch, SetStateAction } from "react";
interface ItechnologyTypesProps {
  techs: ItechnologyTypes;
  selectedTechnology: ItechnologyTypes[];
  setSelectedTechnology: Dispatch<SetStateAction<object[]>>;
}
const SelectedTechCard = ({
  techs,
  selectedTechnology,
  setSelectedTechnology,
}: ItechnologyTypesProps) => {
  const handleRemoveTechnology = (techs: ItechnologyTypes) => {
    const restTechnologies = selectedTechnology.filter((selectedTechs) => {
      return selectedTechs.name !== techs.name;
    });
    setSelectedTechnology(restTechnologies);
    toast.error(`${techs.name} removed`, {
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
    <div className="flex flex-col gap-3 mb-1.5">
      <div className="flex items-center justify-between p-3 border border-slate-200/80 rounded-2xl bg-white">
        <div className="flex items-center gap-3">
          <img
            src={techs.icon}
            alt={techs.icon}
            className="w-8 h-8 object-contain"
          />
          <div>
            <h4 className="text-sm font-bold text-slate-900">{techs.name}</h4>
            <p className="text-[11px] text-slate-400 font-medium">
              {techs.category}
            </p>
          </div>
        </div>
        <button
          className="text-slate-400 hover:text-slate-600 p-1 rounded-lg transition-colors cursor-pointer"
          onClick={() => handleRemoveTechnology(techs)}
        >
          <IoMdClose />
        </button>
      </div>
    </div>
  );
};

export default SelectedTechCard;

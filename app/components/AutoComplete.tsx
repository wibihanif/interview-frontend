"use client";

import { Dispatch, SetStateAction } from "react";
import { AnimalData } from "../types";

interface AutoCompleteProps {
  formValue: string;
  displayAutoComplete: boolean;
  setFormValue: Dispatch<SetStateAction<string>>;
  setDisplayAutoComplete: Dispatch<SetStateAction<boolean>>;
  animalData: AnimalData[];
}

const AutoComplete: React.FC<AutoCompleteProps> = ({
  animalData,
  displayAutoComplete,
  formValue,
  setDisplayAutoComplete,
  setFormValue,
}) => {
  return (
    <div className="relative">
      <form>
        <div>
          <label className="block mb-2 text-sm font-medium dark:text-white">
            Search Animal:
          </label>
          <input
            type="text"
            id="small-input"
            name="pictureSearch"
            value={formValue}
            onChange={(event) => {
              setFormValue(event.target.value);
              setDisplayAutoComplete(true);
            }}
            className="block w-36 md:w-64 p-2 text-gray-900 border border-gray-300 rounded-lg bg-gray-50 text-xs focus:ring-blue-500 focus:border-blue-500  dark:border-gray-600 dark:placeholder-gray-400 dark:focus:ring-blue-500 dark:focus:border-blue-500"
          />
        </div>
      </form>
      {formValue && displayAutoComplete && (
        <ul className="absolute bg-white border border-gray-300 w-36 md:w-64 mt-2 rounded-lg py-2 px-1 z-50">
          {animalData
            .filter((data) =>
              data.title.toLowerCase().includes(formValue.toLowerCase())
            )
            .map((data, index) => (
              <li
                className="hover:text-white hover:bg-blue-500 cursor-pointer text-sm"
                key={index}
                onClick={() => {
                  setFormValue(data.title);
                  setDisplayAutoComplete(false);
                }}
              >
                {data.title}
              </li>
            ))}
          {animalData.filter((data) =>
            data.title.toLowerCase().includes(formValue.toLowerCase())
          ).length === 0 && (
            <li className="text-sm" key="not-found">
              Not found
            </li>
          )}
        </ul>
      )}
    </div>
  );
};

export default AutoComplete;

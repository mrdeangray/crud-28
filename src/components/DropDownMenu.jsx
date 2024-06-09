import React from "react";

const DropDownMenu = ({ options, selectedOption, setSelectedOption, title }) => {
  return (
    <div>
      <select
        name=""
        id=""
        value={selectedOption}
        onChange={(e) => setSelectedOption(e.target.value)}
      >
        <option value="">{title}</option>
        {options.map((option, index) => {
          return (
            <option key={index} value={option}>
              {option}
            </option>
          );
        })}
      </select>
    </div>
  );
};

export default DropDownMenu;

import React from "react";

const RadioButtons = ({ options, selectedOption, setSelectedOption, title }) => {
  return (
    <div>
      <span>{title}: </span>
      {options.map((option, index) => {
        return (
          <label key={index} htmlFor={option}>
            <input
            id={option}
              type="radio"
              value={option}
              checked={option === selectedOption}
              onChange={(e) => setSelectedOption(e.target.value)}
            />
            {option}
          </label>
        );
      })}
    </div>
  );
};

export default RadioButtons;

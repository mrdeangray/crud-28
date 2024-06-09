import React from "react";

const CirclePercent = ({ radius, percentage }) => {
  const circumference = 2 * Math.PI * radius;
  return (
    <div>
      <svg width="50" height="50">
        <g transform="rotate(-90 25 25)">
          <circle
            r={radius}
            cx="25"
            cy="25"
            fill="transparent"
            stroke="lightgrey"
            strokeWidth="6px"
            strokeDasharray={circumference}
            strokeDashoffset="0"
          />
          <circle
            r={radius}
            cx="25"
            cy="25"
            fill="transparent"
            stroke="blue"
            strokeWidth="6px"
            strokeDasharray={circumference}
            strokeDashoffset={circumference * (1 - percentage / 100)}
          />
        </g>
        <text x="50%" y="50%" fontSize={"14px"} fontWeight={"bold"}
            dominantBaseline="central"
          textAnchor="middle"
        >
          {percentage}%
        </text>
      </svg>
    </div>
  );
};

export default CirclePercent;

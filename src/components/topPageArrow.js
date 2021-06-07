import React from "react";

const TopPageArrow = (props) => {
  return (
    <span>
      [ READ MORE
      <svg
        width="63"
        height="18"
        viewBox="0 0 63 18"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path d="M0 17H60L47.234 1" stroke={props.stroke} strokeWidth="2" />
      </svg>
      ]
    </span>
  );
};

export default TopPageArrow;

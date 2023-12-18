import React from "react";

const Button = ({ text, handleClick }) => {
  return (
    <button
      className="btn-primary"
      onClick={handleClick}
    >
      {text}
    </button>
  );
};

export default Button;

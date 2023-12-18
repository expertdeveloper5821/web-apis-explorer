import React from "react";

export const Contact = ({ name, text }) => {
  return (
    <div>
      <div className="flex font-light text-sm">
        <p className="w-16">{name}</p>
        <p>{text || "N/A"}</p>
      </div>
    </div>
  );
};

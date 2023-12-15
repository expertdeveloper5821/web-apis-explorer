import React from "react";
import "./style.css";

export const Contact = ({ name, text }) => {
  return (
    <address>
      <p className="flex gap-4 font-sans break-all">
        <span className="min-w-50" >{name} </span> <span className="min-w-50">{text}</span>
      </p>
    </address>
  );
};

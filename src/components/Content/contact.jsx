import React from "react";
import "./style.css";

export const Contact = ({ name, text }) => {
  return (
    <address>
      <p>
        <span>{name} </span> <span>{text}</span>
      </p>
    </address>
  );
};

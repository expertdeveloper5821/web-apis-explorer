import React, { useState } from "react";
import "./style.css";

export const SideBar = ({ isOpen, onClose, children }) => {
  if (!isOpen) {
    return null;
  }

  return (
    <div className="absolute inset-0 w-screen h-screen bg-black bg-opacity-80 flex">
      <div onClick={onClose} className="box-border h-screen flex-grow-0 flex-shrink-1 w-3/5"></div>
      <div className="box-border bg-var(--bgMain) w-full flex-grow-0 flex-shrink-1 p-2% md:p-3% float-right h-screen overflow-auto max-h-screen bg-[#42607b]">{children}</div>
    </div>
  );
};

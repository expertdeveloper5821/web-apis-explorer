import React from "react";

export const SideBar = ({ isOpen, onClose, children }) => {
  if (!isOpen) {
    return null;
  }

  return (
    <div className="fixed inset-0 w-screen h-screen bg-black bg-opacity-80 flex">
      <div onClick={onClose} className="box-border h-screen w-full"></div>
      <div className="box-border bg-var(--bgMain) w-full min-w-fit md:max-w-xl  float-right h-screen  overflow-x-hidden max-h-screen bg-[#42607b]">
        {children}
      </div>
    </div>
  );
};
import React, { useState } from "react";
import "./style.css";

export const SideBar = ({ isOpen, onClose, children }) => {
  if (!isOpen) {
    return null;
  }

  return (
    <div className="modal_overlay">
      <div onClick={onClose} className="leftContainer"></div>
      <div className="modal_content">{children}</div>
    </div>
  );
};

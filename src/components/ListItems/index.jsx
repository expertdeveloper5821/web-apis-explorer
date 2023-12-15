import React, { useState } from "react";
import { DropdownIcon, UpIcon } from "../../assets/icon";
import "./style.css";
import Loader from "../loader";
import { getDataValues } from "../../utils/globalFunction";

const ListItem = ({ resUrls, fetchProvider, closeModal, providerData }) => {
  const [activeIndex, setActiveIndex] = useState(null);
  const handleOpenWeb = (index) => {
    setActiveIndex(index);
  };

  let x = "x-logo";
  const imgUrl = getDataValues(providerData)?.info?.[x]?.url;
  const title = getDataValues(providerData)?.info?.title;

  if (!resUrls) {
    return <Loader />;
  }
  return (
    <>
      <h2 className="px-4 pb-4 text-lg text-white font-semibold text-center" >Select Provider</h2>
      <ul>
        {resUrls.map((link, i) => (
          <div
            key={link}
            className={`${activeIndex === i ?  "bg-black" : ""}  "box-border text-white w-full p-2 cursor-pointer flex items-center gap-4 font-sans flex flex-col items-baseline"`}
          >
            <li
              className="text-white flex justify-between items-center cursor-pointer p-2 font-sans"
              onClick={() => {
                fetchProvider(link);
                handleOpenWeb(i);
              }}
            >
              {link}
              {activeIndex === i ? <UpIcon /> : <DropdownIcon />}
            </li>
            {activeIndex === i && providerData && (
              <div className="box-border text-white w-full p-2 cursor-pointer flex items-center gap-4 font-sans" onClick={closeModal}>
                <img className="w-7 h-7" src={imgUrl || "✌️"} alt="logo" />
                {title || "N/A"}
              </div>
            )}
          </div>
        ))}
      </ul>
    </>
  );
};

export default ListItem;

import React, { useState } from "react";
import { DropdownIcon, UpIcon } from "../../assets/icon";
import Loader from "../loader";
import { getDataValues } from "../../utils/globalFunction";
import { defaultImg } from "../../utils/config";

const ListItem = ({ resUrls, fetchProvider, closeModal, providerData }) => {
  const [activeIndex, setActiveIndex] = useState(null);
  const [imgError, setImgError] = useState(false);

  const handleOpenWeb = (index) => {
    if (index === activeIndex) {
      setActiveIndex(null);
    } else {
      setActiveIndex(index);
    }
    setImgError(false);
  };

  let x = "x-logo";
  const imgUrl = getDataValues(providerData)?.info?.[x]?.url;
  const title = getDataValues(providerData)?.info?.title;

  if (!resUrls) {
    return <Loader />;
  }

  return (
    <div className="px-6 py-4">
      <h2 className="px-4 pb-4 text-lg text-white font-semibold text-center">
        Select Provider
      </h2>
      <div>
        {resUrls.map((link, i) => (
          <div
            key={link}
            className={`${
              activeIndex === i ? "bg-slate-800" : "hover:bg-slate-500 "
            }  "box-border text-white w-full rounded-md mb-2 cursor-pointer flex  font-sans flex-col items-baseline" transition-all`}
          >
            <div
              className="dropdown-container  justify-between"
              onClick={() => {
                fetchProvider(link);
                handleOpenWeb(i);
              }}
            >
              <div className="text-sm md:text-lg">{link}</div>
              <div>{activeIndex === i ? <UpIcon /> : <DropdownIcon />}</div>
            </div>
            {activeIndex === i && providerData && (
              <div
                className="box-border dropdown-container gap-2 w-full"
                onClick={closeModal}
              >
                <img
                  className="w-7 h-7 object-contain"
                  src={imgError && activeIndex === i ? defaultImg : imgUrl}
                  alt="logo"
                  onError={() => setImgError(true)}
                />
                <p className="text-xs sm:text-sm md:text-md">
                  {title || "N/A"}
                </p>
              </div>
            )}
          </div>
        ))}
      </div>
    </div>
  );
};

export default ListItem;

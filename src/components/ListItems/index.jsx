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
      <h2>Select Provider</h2>
      <ul>
        {resUrls.map((link, i) => (
          <div
            key={link}
            className={`${activeIndex === i ? "active" : ""}  listItem`}
          >
            <li
              onClick={() => {
                fetchProvider(link);
                handleOpenWeb(i);
              }}
            >
              {link}
              {activeIndex === i ? <UpIcon /> : <DropdownIcon />}
            </li>
            {activeIndex === i && providerData && (
              <div className="opneLink" onClick={closeModal}>
                <img width={28} height={28} src={imgUrl || "✌️"} alt="logo" />
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

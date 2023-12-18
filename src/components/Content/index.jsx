import React, { useEffect, useState } from "react";
import { getDataValues } from "../../utils/globalFunction";
import Title from "./title";
import Para from "./para";
import { Contact } from "./contact";
import { defaultImg } from "../../utils/config";
import Button from "../Button";

const Content = ({ providerData, setProviderData }) => {
  const [imgError, setImgError] = useState(false);

  useEffect(() => {
    setImgError(false);
  }, [providerData]);

  let x = "x-logo";
  const data = getDataValues(providerData);
  const imgUrl = data?.info?.[x]?.url;
  const { title, description } = data?.info;
  const { swaggerUrl } = data;
  if (data?.info?.contact) {
    var { name, email, url } = data?.info?.contact;
  }

  if (!providerData) {
    return null;
  }

  return (
    <section className="w-full mx-auto md:px-12 text-center text-white font-semibold">
      <header className=" gap-4 flex-center flex-wrap m-4">
        <img
          className="h-14 md:h-24 w-14 md:w-24 object-contain"
          src={imgError ? defaultImg : imgUrl}
          alt="logo"
          onError={() => setImgError(true)}
        />
        <h1 className="text-xl md:text-4xl font-normal ">{title}</h1>
      </header>
      <div className="mini-container overflow-x-hidden">
        <Title title="Description" />
        <Para para={description} />
      </div>
      <div className="mini-container">
        <Title title="Swaggar" />
        <Para para={swaggerUrl} />
      </div>
      <div className="mini-container">
        <Title title="Contact" />
        <Contact name="Email" text={email} />
        <Contact name="Name" text={name} />
        <Contact name="Url" text={url} />
      </div>
      <Button
        text={"Explore web APIs"}
        handleClick={() => setProviderData(null)}
      />
    </section>
  );
};

export default Content;

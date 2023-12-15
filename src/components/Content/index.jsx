import React from "react";
import { getDataValues } from "../../utils/globalFunction";
import Title from "./title";
import Para from "./para";
import { Contact } from "./contact";
import "./style.css";

const Content = ({ providerData, setProviderData }) => {
  if (!providerData) {
    return null;
  }

  let x = "x-logo";
  const data = getDataValues(providerData);
  const imgUrl = data?.info?.[x]?.url;
  const { title, description } = data?.info;
  const { swaggerUrl } = data;
  if (data?.info?.contact) {
    var { name, email, url } = data?.info?.contact;
  }

  return (
    <section className="box-border max-w-720 w-full mx-auto text-center text-white font-semibold">
      <header className="flex gap-4 items-center justify-center m-4">
        <span>
          <img className="w-50 h-50" src={imgUrl} alt="logo" />
        </span>
        <h1 className="text-2xl font-sans">{title}</h1>
      </header>
      <div className="text-left flex flex-col gap-10 m-6">
        <Title title="Description" />
        <Para para={description} />
      </div>
      <div className="text-left flex flex-col gap-10 m-6">
        <Title title="Swaggar" />
        <Para para={swaggerUrl} />
      </div>

      <div className="text-left flex flex-col gap-10 m-6">
        <Title title="Contact" />
        <Contact name="Email" text={email} />
        <Contact name="Name" text={name} />
        <Contact name="Url" text={url} />
      </div>

      <button
        className="bg-[#00a1d4] text-white p-2 rounded-md"
        onClick={() => setProviderData(null)}
      >
        Explore web APIs
      </button>
    </section>
  );
};

export default Content;

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
    <section>
      <header>
        <span>
          <img width={60} height={60} src={imgUrl} alt="logo" />
        </span>
        <h1>{title}</h1>
      </header>
      <div className="col">
        <Title title="Description" />
        <Para para={description} />
      </div>
      <div className="col">
        <Title title="Swaggar" />
        <Para para={swaggerUrl} />
      </div>

      <div className="col">
        <Title title="Contact" />
        <Contact name="Email" text={email} />
        <Contact name="Name" text={name} />
        <Contact name="Url" text={url} />
      </div>

      <button onClick={() => setProviderData(null)}>Explore web APIs</button>
    </section>
  );
};

export default Content;

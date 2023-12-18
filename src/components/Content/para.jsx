import React from "react";

const Para = ({ para }) => {
  const renderFormattedText = () => {
    const formattedText = para?.replace(/<[^>]*>/g, "");
    return { __html: formattedText };
  };
  return (
    <div className="font-normal text-sm sm:text-md  leading-normal overflow-auto pb-2 mb-4">
      {para ? <pre dangerouslySetInnerHTML={renderFormattedText()} /> : "N/A"}
    </div>
  );
};

export default Para;

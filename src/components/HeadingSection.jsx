import React from "react";

const HeadingSection = ({ title, heading, description }) => {
  return (
    <div className="text-center py-4">
      {/* section small title */}
      <h4 className="text-blue-200 text-center px-4 lg:px-8 text-xl font-semibold uppercase">
        {title}
      </h4>

      {/* section main heading */}
      <h2 className="text-3xl text-center lg:text-4xl px-8 lg:px-25 font-bold text-gray-300 mt-3">
        {heading}
      </h2>
      {description && <p className="text-gray-600 mt-4 px-6">{description}</p>}
    </div>
  );
};

export default HeadingSection;

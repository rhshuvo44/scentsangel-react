import React from "react";

const SectionTitle = ({ title, subTitle }) => {
  return (
    <div className="text-center">
      <h3 class="text-secondary font-bold text-xs uppercase tracking-wide leading-5 mb-4">
        {subTitle}
      </h3>
      <h2 class="text-secondary font-bold text-xl uppercase tracking-wide leading-8">
        {title}
      </h2>
    </div>
  );
};

export default SectionTitle;

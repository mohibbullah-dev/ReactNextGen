import React from "react";

const Title = ({ title = "", classname }) => {
  return (
    <div
      className={`sm:text-6xl text-[40px] text-[#F2F2F2] font-black font-menuFont ${classname}`}
    >
      {title}
    </div>
  );
};

export default Title;

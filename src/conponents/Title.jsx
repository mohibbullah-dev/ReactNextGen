import React from 'react';

const Title = ({ title = "", classname }) => {
  return (
    <div
      className={`text-6xl text-[#F2F2F2] font-black font-menuFont ${classname}`}
    >
      {title}
    </div>
  );
};

export default Title

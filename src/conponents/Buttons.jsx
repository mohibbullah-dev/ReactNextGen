import React from "react";

const Buttons = ({ link = "/", classname, text = "", bgShow = true }) => {
  return (
    <a
      href={link}
      className={`py-3 px-11 font-medium ${
        bgShow ? "btnLinear" : "gradient-border"
      } text-secondary ${classname}`}
    >
      {text}
    </a>
  );
};

export default Buttons;

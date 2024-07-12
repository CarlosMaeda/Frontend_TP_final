import React from "react";

export const Label = (props) => {
  return <label {...props}>{props.text}</label>;
};

export const Input = (props) => {
  return <input {...props} />;
};

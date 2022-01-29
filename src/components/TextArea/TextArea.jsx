import React from "react";

const TextArea = ({
  name,
  label,
  className,
  placeholder,
  rows,
  cols,
  onChange,
  ...props
}) => {
  return (
    <>
      <label>{label}</label>
      <textarea
        name={name}
        className={className}
        placeholder={placeholder}
        rows={rows}
        cols={cols}
        onChange={onChange}
      ></textarea>
    </>
  );
};

export default TextArea;

import React from "react";

const TextField = ({
  name,
  label,
  type,
  value,
  placeholder,
  className,
  onChange,
  ...props
}) => {
  return (
    <>
      <label>{label}</label>
      <input
        name={name}
        type={type}
        value={value}
        placeholder={placeholder}
        className={className}
        onChange={onChange}
      />
    </>
  );
};

export default TextField;

import React, { useState } from "react";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import moment from "moment";

const CustomDatePicker = ({
  name,
  className,
  minDate,
  maxDate,
  getDate,
  selected,
  ...props
}) => {
  const [startDate, setStartDate] = useState();
  const handleDateChange = (date) => {
    setStartDate(date);
    getDate(moment(date).format("DD-MM-YYYY"));
  };

  return (
    <>
      <DatePicker
        name={name}
        selected={selected}
        onChange={(date) => handleDateChange(date)}
        className={className}
      />
    </>
  );
};

export default CustomDatePicker;

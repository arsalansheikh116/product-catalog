import React from "react";
import Table from "rc-table";
import "../Table/style.css";

const CustomTable = ({ tableHeading, tableBody, className, id, ...props }) => {
  return (
    <>
      <Table columns={tableHeading} data={tableBody} id={id} defaultExpandAllRows={true}/>
    </>
  );
};

export default CustomTable;

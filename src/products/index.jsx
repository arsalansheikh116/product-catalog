import React, { useState } from "react";
import TextField from "../components/TextField/TextField";
import Button from "../components/Button/Button";
import TextArea from "../components/TextArea/TextArea";
import CustomDatePicker from "../components/DatePicker/DatePicker";
import CustomTable from "../components/Table/Table";
import { ProductTableHeadings } from "../utils/constants";
import { useStoreState, useStoreActions } from "easy-peasy";

const Products = () => {
  const productAction = useStoreActions(
    (actions) => actions?.productList?.setproductObj
  );
  const savedProducts = useStoreState(
    (state) => state?.productList?.productObj
  );
  const [values, setValues] = useState({
    product: "",
    price: "",
    date: "",
    description: "",
  });

  const handleGetDate = (date) => {
    setValues({ ...values, date: date });
  };

  const handleChange = (event) => {
    event.persist();
    setValues((values) => ({
      ...values,
      [event.target.name]: event?.target?.value,
    }));
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    productAction(values);
  };

  return (
    <>
      <div class="row align-items-center">
        <form className="form-inline">
          <div className="form-group mx-sm-3 mb-2">
            <TextField
              label="Product Name"
              type="text"
              name="product"
              placeholder="Enter product Name"
              className="form-control"
              onChange={handleChange}
              value={values?.product}
            />
          </div>
          <div className="form-group mx-sm-3 mb-2">
            <TextField
              label="Product Price"
              type="number"
              name="price"
              placeholder="Enter product Price"
              className="form-control"
              onChange={handleChange}
              value={values?.price}
            />
          </div>
          <div className="form-group mx-sm-3 mb-2">
            <CustomDatePicker
              selected={new Date()}
              className="form-control"
              getDate={handleGetDate}
            />
          </div>
          <div className="form-group mx-sm-3 mb-2">
            <TextArea
              label="Description"
              name="description"
              className="form-control"
              placeholder="Product Description.."
              rows="4"
              cols="10"
              onChange={handleChange}
              value={values?.description}
            />
          </div>
          <Button
            type="submit"
            className="btn btn-primary mb-2"
            btnText="Add Product"
            onClick={handleSubmit}
          />
        </form>
        <CustomTable
          tableHeading={ProductTableHeadings}
          className="table table-bordered"
          tableBody={savedProducts}
          id="products"
        />
      </div>
    </>
  );
};

export default Products;

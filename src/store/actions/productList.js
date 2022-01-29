import { action } from "easy-peasy";

export const productList = {
  productObj: [],

  setproductObj: action((state, payload) => {
    state.productObj.push(payload);
  }),
};

export default productList;

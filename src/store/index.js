import { createStore, persist } from "easy-peasy";
import productList from "./actions/productList";

const modal = persist(
  {
    productList: productList,
  },
  {
    whitelist: ["productList"],
    storage: "localStorage",
  }
);

const middleware = [];

const config = {
  middleware,
};

const store = createStore(modal, config);

export default store;

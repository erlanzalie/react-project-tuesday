import React from "react";
import axios from "axios";

export const productContext = React.createContext();

const API = "http://localhost:8000/products";

const ProductsContextProvider = ({ children }) => {
  return (
    <productContext.Provider value={{}}>{children}</productContext.Provider>
  );
};
export default ProductsContextProvider;

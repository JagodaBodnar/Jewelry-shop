import React, { useContext } from "react";
import RootContext from "../../context/context";
import ProductBestsellerElement from "./ProductBestsellerElement";
import {
  StyledProductList,
  StyledProductItem,
} from "./ProductBestsellersStyles";

const ProductBestsellers = () => {
  const context = useContext(RootContext);
  const { bestsellers } = context;

  return (
    <StyledProductList>
      {bestsellers.map((product) => {
        return (
          <StyledProductItem key={product.productName}>
            <ProductBestsellerElement {...product} />
          </StyledProductItem>
        );
      })}
    </StyledProductList>
  );
};

export default ProductBestsellers;

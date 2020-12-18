import React, { useContext } from "react";
import RootContext from "../../context/context";
import ProductBestsellerElement from "./ProductBestsellerElement";
import {
  StyledProductList,
  StyledProductItem,
} from "./ProductBestsellersStyles";

const ProductRubyBestseller = () => {
  const context = useContext(RootContext);
  const { ruby } = context;

  return (
    <StyledProductList>
      {ruby.map((product) => {
        return (
          <StyledProductItem key={product.productName}>
            <ProductBestsellerElement {...product} />
          </StyledProductItem>
        );
      })}
    </StyledProductList>
  );
};

export default ProductRubyBestseller;

import React, { useContext } from "react";
import RootContext from "../../context/context";
import ProductBestsellerElement from "./ProductBestsellerElement";
import {
  StyledProductList,
  StyledProductItem,
} from "./ProductBestsellersStyles";

const ProductEmeraldBestseller = () => {
  const context = useContext(RootContext);
  const { emerald } = context;

  return (
    <StyledProductList>
      {emerald.map((product) => {
        return (
          <StyledProductItem key={product.productName}>
            <ProductBestsellerElement {...product} />
          </StyledProductItem>
        );
      })}
    </StyledProductList>
  );
};

export default ProductEmeraldBestseller;

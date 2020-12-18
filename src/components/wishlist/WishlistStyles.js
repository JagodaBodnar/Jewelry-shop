import styled from "styled-components";
import { FaShoppingBag } from "react-icons/fa";
import { Link } from "react-router-dom";
import { device } from "../../globalStyles/Device";

export const StyledEmptyWishlist = styled.div`
  min-height: 82vh;
  margin-top: 12vh;
`;
export const StyledWishlistContainer = styled.div`
  min-height: 82vh;
  margin-top: 12vh;
`;

export const StyledProductList = styled.ul`
  display: grid;
  grid-gap: 5px;
  margin: 10px;
  list-style: none;
  background-color: #ffffff;
  width: 60vw;
  margin: 0 auto;
  @media ${device.mobileS} {
    grid-template-columns: repeat(1, 1fr);
    width: 100vw;
  }
  @media ${device.mobile} {
    grid-template-columns: repeat(1, 1fr);
    width: 80vw;
  }
  @media ${device.laptop} {
    grid-template-columns: repeat(2, 1fr);
  }
  @media ${device.desktop} {
    grid-template-columns: repeat(3, 1fr);
  }
`;

export const StyledProductItem = styled.li`
  justify-self: center;
  margin: 10px;
  transition: ease 0.2s;
  cursor: pointer;
  padding: 0;
  border-bottom: 1px solid #ececec;
  &:hover {
    border-radius: 5px;
    box-shadow: 0 0 11px rgba(0, 0, 0, 0.2);
    transform: scale(1.05);
    border-bottom: none;
  }
`;

export const StyledRemoveFromListContainer = styled.div`
  display: flex;
  justify-content: flex-end;
  align-items: center;
`;
export const StyledAddToCartButtonContainer = styled.div`
  display: flex;
  justify-content: flex-end;
  align-items: center;
`;
export const StyledAddToCart = styled(FaShoppingBag)`
  font-size: 18px;
  color: transparent;
`;

export const StyledProductImage = styled.img`
  width: 285px;
  height: 275px;
  padding: 15px;
`;
export const StyledLink = styled(Link)`
  text-decoration: none;
`;
export const StyledProductListElement = styled.div`
  padding: 15px;
  &:hover ${StyledAddToCart} {
    color: #c2c2c2;
    transition: 0.5s;
  }
`;

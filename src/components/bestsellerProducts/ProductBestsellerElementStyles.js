import styled from "styled-components";
import { FaShoppingBag, FaHeart } from "react-icons/fa";
import { device } from "../../globalStyles/Device";
import { Link } from "react-router-dom";

export const StyledWishlistButtonContainer = styled.div`
  display: flex;
  justify-content: flex-start;
  align-items: center;
`;
export const StyledTooltip = styled.span`
  color: #ead065;
  font-size: 10px;
  margin: 0 5px;
  opacity: 0;
  font-family: "Scope One", serif;
  vertical-align: top;
`;
export const StyledImgContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
`;
export const StyledProductImage = styled.img`
  @media ${device.mobileS} {
    width: 170px;
    height: 160px;
  }
  @media ${device.mobile} {
    width: 170px;
    height: 160px;
  }
  @media ${device.desktop} {
    width: 215px;
    height: 205px;
  }
`;
export const StyledLink = styled(Link)`
  text-decoration: none;
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
export const StyledIsOnWishlist = styled(FaHeart)`
  font-size: 18px;
  color: #ce3c72;
`;
export const StyledAddToWishlist = styled(FaHeart)`
  font-size: 18px;
  color: transparent;
`;
export const StyledProductListElement = styled.div`
  padding: 15px;
  &:hover ${StyledAddToWishlist}, &:hover ${StyledAddToCart} {
    color: #c2c2c2;
    transition: 0.5s;
    &:hover,
    &:hover + ${StyledTooltip} {
      color: ${({ theme }) => theme.pink};
      opacity: 1;
    }
  }
`;

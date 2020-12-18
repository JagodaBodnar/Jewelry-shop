import styled from "styled-components";
import { Link } from "react-router-dom";
import { device } from "../../globalStyles/Device";

export const StyledWishlistPopUpContainer = styled.div`
  position: relative;
  display: inline-block;
  cursor: pointer;
  top: -15px;
  left: calc(100% - 290px);
  -webkit-user-select: none;
  -moz-user-select: none;
  -ms-user-select: none;
  user-select: none;
  z-index: 9999;
  @media ${device.mobileS} {
    left: calc(100% - 315px);
  }
  @media ${device.mobile} {
    left: calc(100% - 315px);
  }
  @media ${device.tablet} {
    left: calc(100% - 334px);
  }
  @media ${device.desktop} {
    left: calc(100% - 344px);
  }
`;
export const StyledWishlistPopUpOff = styled.div`
  visibility: hidden;
  width: 278px;
  background-color: #fff;
  border: 1px solid grey;
  color: white;
  text-align: center;
  border-radius: 6px;
  position: absolute;
  z-index: 1;
  left: 50%;
  top: 5%;
`;
export const StyledWishlistPopUp = styled.div`
  visibility: visible;
  width: 278px;
  background-color: #fff;
  border: 1px solid grey;
  color: white;
  text-align: center;
  border-radius: 6px;
  position: absolute;
  z-index: 1;
  left: 50%;
  top: 5%;
  &::before {
    content: "";
    position: absolute;
    top: -10px;
    left: 70%;
    margin-left: -5px;
    border-width: 5px;
    border-style: solid;
    border-color: transparent transparent grey transparent;
  }
`;
export const StyledOverflowContainer = styled.div`
  max-height: 400px;
  overflow-y: auto;
`;
export const StyledProductListElement = styled.li`
  width: 258px;
  display: flex;
  justify-content: center;
  align-items: flex-start;
  margin-bottom: 15px;
  border-bottom: 1px solid #ececec;
  padding: 5px;
`;
export const StyledLink = styled(Link)`
  width: 220px;
  text-decoration: none;
  display: flex;
  justify-content: center;
  align-items: center;
  margin-right: 15px;
`;
export const StyledProductImage = styled.img`
  width: 50px;
  height: 50px;
`;
export const StyledGoToWishlist = styled(Link)`
  color: #ce3c72;
`;

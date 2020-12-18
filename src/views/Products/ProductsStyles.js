import styled from "styled-components";
import { device } from "../../globalStyles/Device";

export const StyledProductCategoriesContainer = styled.div`
  position: fixed;
  position: -webkit-sticky;
  z-index: 100;
  top: 0;
  width: 100%;
  background-color: #fff;
  top: 8vh;
`;
export const StyledProductNavContainer = styled.div`
  display: flex;
  justify-content: flex-start;
  align-items: center;
  margin: 3.5rem auto 5px auto;
  @media ${device.mobileS} {
    width: 100vw;
  }
  @media ${device.mobile} {
    width: 60vw;
  }
`;
export const StyledNoProductsFound = styled.div`
  text-align: center;
  width: 50%;
  margin: 50px auto;
  font-family: "Scope One", serif;
  color: #828281;
  font-size: 16px;
  font-weight: 200;
  text-align: center;
`;

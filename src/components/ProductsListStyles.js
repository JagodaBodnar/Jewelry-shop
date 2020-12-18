import styled from "styled-components";
import { device } from "../globalStyles/Device";

export const StyledProductList = styled.ul`
  @media ${device.mobileS} {
    grid-template-columns: repeat(1, 1fr);
    margin: 20vh auto;
  }
  @media ${device.mobile} {
    grid-template-columns: repeat(2, 1fr);
    margin: 20vh auto;
  }
  @media ${device.laptop} {
    grid-template-columns: repeat(3, 1fr);
    width: 80vw;
  }
  @media ${device.desktop} {
    width: 80vw;
  }
  display: grid;
  grid-gap: 5px;
  list-style: none;
  background-color: #ffffff;
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

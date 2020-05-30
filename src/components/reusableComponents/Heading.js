import styled, { css } from "styled-components";

export const HeadingOne = styled.h1`
  color: #103e52;
  ${({ cartheader }) =>
    cartheader &&
    css`
      grid-column: span 4;
      text-transform: uppercase;
      margin-bottom: 20px;
    `}
  ${({ cartitemheader }) =>
    cartitemheader &&
    css`
      text-align: center;
      font-size: 12px;
      text-transform: uppercase;
      font-weight: 600;
      margin-bottom: 20px;
    `}
`;

export const HeadingTwo = styled.h2`
  font-family: "Scope One", serif;
  color: #828281;
  font-size: 14px;
  font-weight: 200;
  text-align: center;
  margin-bottom: 5px;
  ${({ price }) =>
    price &&
    css`
      font-weight: 600;
      font-size: 16px;
      font-family: "Scope One", serif;
    `}
  ${({ categoryName }) =>
    categoryName &&
    css`
      font-weight: 400;
      font-size: 18px;
      text-transform: uppercase;
      letter-spacing: 1px;
      text-align: left;
      color: #dbbe23;
      font-family: "Scope One", serif;
    `}
    ${({ cartItemName }) =>
      cartItemName &&
      css`
        grid-column: span 3;
        text-align: center;
        font-size: 16px;
      `}
      ${({ cartItemQuantity }) =>
        cartItemQuantity &&
        css`
          display: flex;
          justify-content: center;
        `}
      ${({ bold }) =>
        bold &&
        css`
          font-weight: bold;
        `}
`;

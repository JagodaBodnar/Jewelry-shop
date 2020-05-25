import styled, { css } from "styled-components";

export const HeadingOne = styled.h1`
  color: #103e52;
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
`;

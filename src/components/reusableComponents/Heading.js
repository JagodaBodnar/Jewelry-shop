import styled, { css } from "styled-components";
import { device } from "../../globalStyles/Device";

export const HeadingOne = styled.h1`
  /* color: #103e52; */
  text-align: center;

  color: ${({ theme }) => theme.indigo};
  font-size: ${({ theme }) => theme.fontSize.xl};
  ${({ cartheader }) =>
    cartheader &&
    css`
      grid-column: span 4;
      text-transform: uppercase;
      margin-bottom: 20px;
      text-align: left;
    `}
  ${({ cartitemheader }) =>
    cartitemheader &&
    css`
      text-align: center;
      font-size: 12px;
      text-transform: uppercase;
      font-weight: 600;
      margin-bottom: 20px;
    `};
  ${({ totalSum }) =>
    totalSum &&
    css`
      text-align: right;
      font-size: 16px;
      text-transform: uppercase;
      font-weight: 600;
      margin-right: 20px;
      grid-column: span 7;
    `};
  ${({ singleProductHeader }) =>
    singleProductHeader &&
    css`
      color: ${({ theme }) => theme.indigo};
      @media ${device.mobileS} {
        font-size: 27px;
      }
      @media ${device.mobile} {
        font-size: 27px;
      }
      @media ${device.tablet} {
        font-size: 35px;
      }
    `}
`;

export const HeadingTwo = styled.h2`
  font-family: "Scope One", serif;
  color: #828281;
  font-size: 14px;
  font-weight: 200;
  text-align: center;
  margin: 5px auto;
 
  ${({ products }) =>
    products &&
    css`
      max-height: 50px;
      max-width: 60%;
    `}
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
      color: ${({ theme }) => theme.white};
      font-family: "Scope One", serif;
    `}
    ${({ cartItemName }) =>
      cartItemName &&
      css`
        grid-column: span 3;
        text-align: center;
        width: 100%;
        margin: 0;
        @media ${device.mobileS} {
          font-size: 12px;
        }
        @media ${device.mobile} {
          font-size: 12px;
        }
        @media ${device.laptop} {
          font-size: 16px;
        }
      `}
      ${({ cartItemQuantity }) =>
        cartItemQuantity &&
        css`
          display: flex;
          justify-content: center;
          align-items: center;
          width: 100%;
          margin: 0;
        `}
      ${({ bold }) =>
        bold &&
        css`
          font-weight: bold;
        `}
        ${({ totalSum }) =>
          totalSum &&
          css`
            grid-column: span 1;
            text-align: center;
            font-size: 16px;
          `}
          ${({ termsAndConditions }) =>
            termsAndConditions &&
            css`
              margin-bottom: 0;
            `}
            ${({ help }) =>
              help &&
              css`
                font-weight: 600;
                font-size: 16px;
                font-family: "Scope One", serif;
                color: ${({ theme }) => theme.pink};
              `}
`;

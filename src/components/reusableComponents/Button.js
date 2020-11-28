import styled, { css } from "styled-components";
import { device } from "../../globalStyles/Device";
const Button = styled.button`
  cursor: pointer;
  background-color: transparent;
  border-radius: 8px;
  color: #333333;
  font-size: 15px;
  font-family: "Scope One", serif;
  outline: none;
  border: none;

  ${({ cartIcon }) =>
    cartIcon &&
    css`
      position: relative;
      background-image: url(${({ cartIcon }) => cartIcon});
      background-repeat: no-repeat;
      background-size: 70%;
      background-position: 50%;
      background-position-y: 35%;
      border-radius: 50%;
      width: 50px;
      height: 50px;
    `}
  ${({ wishlist }) =>
    wishlist &&
    css`
      display: flex;
      justify-content: center;
      align-items: center;
      margin-right: 20px;
    `}
  ${({ isfilter }) =>
    isfilter &&
    css`
      border-radius: 4px;
      width: 150px;
      margin-left: 20px;
      color: ${({ theme }) => theme.indigo};
      font-weight: 400;
      text-transform: uppercase;
      border: 2px solid ${({ theme }) => theme.indigo};
      font-weight: bold;
      letter-spacing: 1px;
      height: 35px;
      &:hover {
      }
    `}
    ${({ resetFilter }) =>
    resetFilter &&
    css`
      border-radius: 2px;
      width: 150px;
      border: 1px solid ${({ theme }) => theme.mint};
      color: ${({ theme }) => theme.mint};
      margin-left: 0;
      font-weight: 500;
      letter-spacing: 1px;
      padding: 3px 2px;
      &:hover {
        border: 1px solid ${({ theme }) => theme.white};
        color: ${({ theme }) => theme.white};
      }
      @media ${device.mobileS} {
        grid-column: span 3;
      }
    `}
    ${({ search }) =>
    search &&
    css`
      font-size: 20px;
      color: #fff;
      margin-left: 10px;
      padding: 3px 0;
    `}
      ${({ closeFilter }) =>
    closeFilter &&
    css`
      background-image: url(${({ closeFilter }) => closeFilter});
      background-repeat: no-repeat;
      position: absolute;
      top: 2px;
      right: 2px;
      width: 10px;
      height: 10px;
    `}
        ${({ quantity }) =>
    quantity &&
    css`
      color: grey;
      font-size: 11px;
      align-items: center;
      background-color: #ececec;
      width: 15px;
      height: 15px;
      border-radius: 50%;
      margin: 2px 5px;
      display: flex;
      flex-direction: column;
      justify-content: center;
    `}
          ${({ addToWishlist }) =>
    addToWishlist &&
    css`
      border: 1px solid ${({ theme }) => theme.grey};
      border-radius: 2px;
      display: flex;
      justify-content: center;
      align-items: center;
      width: 45px;
      height: 45px;
      margin-right: 10px;
      &:hover {
        border: 1px solid ${({ theme }) => theme.pink};
        > :first-child {
          color: ${({ theme }) => theme.pink};
        }
      }
    `}
            ${({ addToCart }) =>
    addToCart &&
    css`
      border: 1px solid ${({ theme }) => theme.grey};
      border-radius: 0;
      padding: 5px;
      width: 200px;
      color: ${({ theme }) => theme.grey};
      border-radius: 2px;
      display: flex;
      justify-content: center;
      align-items: center;
      text-transform: uppercase;
      font-size: 18px;
      font-weight: 500;
      font-family: "Verdana";
      &:hover {
        border: 1px solid ${({ theme }) => theme.pink};
        color: ${({ theme }) => theme.pink};
      }
    `}
              ${({ send }) =>
    send &&
    css`
      border-radius: 4px;
      width: 80px;
      color: ${({ theme }) => theme.indigo};
      font-weight: 400;
      text-transform: uppercase;
      border: 2px solid ${({ theme }) => theme.indigo};
      font-weight: bold;
      letter-spacing: 1px;
      height: 28px;
      &:hover {
      }
    `}
`;

export default Button;

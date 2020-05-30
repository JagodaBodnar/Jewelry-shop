import styled, { css } from "styled-components";

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
  ${({ filter }) =>
    filter &&
    css`
      border-radius: 4px;
      width: 150px;
      margin-left: 20px;
      color: #103e52;
      font-weight: 400;
      text-transform: uppercase;
      border: 2px solid #103e52;
      font-weight: bold;
      /*background-color: #103e52;*/
      letter-spacing: 1px;
      &:hover {
      }
    `}
    ${({ resetFilter }) =>
      resetFilter &&
      css`
        border-radius: 2px;
        width: 150px;
        border: 1px solid #fff;
        margin-left: 0;
        color: #fff;
        font-weight: 500;
        letter-spacing: 1px;
        padding: 3px 2px;
        &:hover {
          border: 1px solid #dbbe23;
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
      ${({ close }) =>
        close &&
        css`
          color: grey;
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
`;

export default Button;

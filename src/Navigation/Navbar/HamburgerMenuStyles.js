import styled from "styled-components";
import { Link } from "react-router-dom";

export const StyledRoutes = styled.ul`
  font-family: "Scope One", serif;
  display: flex;
  flex-direction: column;
  top: 8vh;
  padding: 20px;
  left: 0;
  width: 100%;
  padding: 0;
  background-color: white;
  z-index: 999;
`;
export const StyledLink = styled(Link)`
  text-decoration: none;
  color: #828281;
`;
export const StyledLi = styled.li`
  cursor: pointer;
  margin: 5px 0px;
  width: 100%;
  transition: 0.5s ease;
  display: flex;
  justify-content: center;
  align-items: center;
  transition: background-color 0.5s;
  background-color: ${({ theme }) => theme.white};
  &:hover ${StyledLink} {
    color: ${({ theme }) => theme.pink};
  }
`;

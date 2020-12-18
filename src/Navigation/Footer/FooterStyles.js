import { device } from "../../globalStyles/Device";
import styled from "styled-components";
import { Link } from "react-router-dom";

export const StyledFooterContainer = styled.div`
  bottom: 0;
  height: 10vh;
  border-top: solid 1px #ececec;
  display: flex;
  justify-content: space-evenly;
  align-items: center;
  font-family: "Scope One", serif;
  @media ${device.mobileS} {
    flex-direction: column;
    justify-content: space-between;
  }
  @media ${device.mobile} {
    flex-direction: column;
  }
  @media ${device.tablet} {
    flex-direction: row;
  }
`;
export const StyledCopyrightsContainer = styled.div`
  width: 200px;
  display: flex;
  justify-content: space-evenly;
  align-items: center;
  margin: 5px 0;
`;
export const StyledFooterNav = styled.div`
  width: 400px;
  display: flex;
  justify-content: space-evenly;
  align-items: center;
  margin: 5px 0;
`;
export const StyledSocialMediaContainer = styled.div`
  width: 150px;
  display: flex;
  justify-content: space-evenly;
  align-items: center;
  font-size: 25px;
  color: ${({ theme }) => theme.grey};
  cursor: pointer;
`;
export const StyledSocialMediaLinks = styled.a`
  text-decoration: none;
  color: ${({ theme }) => theme.grey};
  &:hover {
    color: ${({ theme }) => theme.pink};
  }
`;

export const StyledLink = styled(Link)`
  text-decoration: none;
  cursor: pointer;
  color: #828281;
  background-position: 0% 100%;
  background-repeat: no-repeat;
  background-size: 0% 1px;
  transition: background-size 0.5s;
`;

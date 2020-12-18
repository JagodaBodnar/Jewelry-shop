import styled, { css } from "styled-components";
import emerald from "../../assets/images/emerald.jpg";
import ruby from "../../assets/images/ruby.jpg";
import diamond from "../../assets/images/diamond.jpg";
import { device } from "../../globalStyles/Device";

export const StyledSections = styled.section`
  margin-top: 80px;
  margin-bottom: 20px;
  @media ${device.mobileS} {
    margin: 0;
  }
`;
export const StyledContainer = styled.div`
  display: grid;
  grid-gap: 2px;
  width: 100%;
  margin-bottom: 2px;
  margin-top: 2px;
  grid-template-columns: repeat(7, 1fr);
`;
export const StyledCategoryImgDiamond = styled.div`
  box-sizing: border-box;
  width: 100%;
  background-size: cover;
  background-position: center;
  background-image: url(${diamond});
  @media ${device.mobile} {
    grid-column: span 3;
  }
  @media ${device.mobileS} {
    display: none;
  }
`;
export const StyledCategoryImgEmerald = styled.div`
  box-sizing: border-box;
  grid-column: span 3;
  width: 100%;
  background-size: cover;
  background-position: center;
  background-image: url(${emerald});
  @media ${device.mobileS} {
    display: none;
  }
`;
export const StyledCategoryImgRuby = styled.div`
  box-sizing: border-box;
  grid-column: span 3;
  width: 100%;
  background-size: cover;
  background-position: center;
  background-image: url(${ruby});
  @media ${device.mobileS} {
    display: none;
  }
`;
export const StyledBestsellerHeader = styled.div`
  background-color: #594136;
  grid-column: span 3;
  height: 200px;
  display: flex;
  justify-content: center;
  align-items: center;
  ${({ emerald }) =>
    emerald &&
    css`
      background-color: #0c3429;
    `}
  ${({ ruby }) =>
    ruby &&
    css`
      background-color: #6b1017;
    `}
`;
export const StyledProductContainer = styled.div`
  grid-column: span 4;
  grid-gap: 20px;
  align-items: center;
  display: flex;
  @media ${device.mobileS} {
    flex-direction: column;
    grid-column: span 7;
    margin-bottom: 10px;
  }
  @media ${device.mobile} {
    flex-direction: column;
  }
`;
export const StyledParagraph = styled.p`
  letter-spacing: 3px;
  width: 80%;
  font-size: 25px;
  text-transform: uppercase;
  text-align: center;
  font-family: "Open Sans", sans-serif;
  color: #fff;
  font-weight: 300;
  @media ${device.mobileS} {
    font-size: 16px;
  }
  @media ${device.mobile} {
    font-size: 18px;
  }
  @media ${device.tablet} {
    font-size: 25px;
  }
`;
export const StyledBestsellerDescription = styled.div`
  background-color: #a78b88;
  grid-column: span 4;
  height: 200px;
  display: flex;
  justify-content: center;
  align-items: center;
  ${({ emerald }) =>
    emerald &&
    css`
      background-color: #9aafaa;
    `}
  ${({ ruby }) =>
    ruby &&
    css`
      background-color: #e9b3c1;
    `}
`;

export const StyledParagraphTwo = styled.p`
  text-align: center;
  font-family: "Open Sans", sans-serif;
  color: #fff;
  font-weight: 300;
  width: 75%;
  @media ${device.mobileS} {
    font-size: 10px;
  }
  @media ${device.mobile} {
    font-size: 14px;
  }
  @media ${device.tablet} {
    font-size: 14px;
  }
  @media ${device.desktop} {
    font-size: 18px;
  }
`;

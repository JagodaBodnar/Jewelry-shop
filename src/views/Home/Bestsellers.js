import React from "react";
import emerald from "../../assets/images/emerald.jpg";
import ruby from "../../assets/images/ruby.jpg";
import diamond from "../../assets/images/diamond.jpg";
import styled, { css } from "styled-components";
import ProductBestsellers from "../../components/ProductBestsellers";
import ProductEmeraldBestseller from "../../components/ProductEmeraldBestsellers";
import ProductRubyBestseller from "../../components/ProductRubyBestsellers";
import { device } from "../../globalStyles/Device";

const StyledSections = styled.section`
  margin-top: 80px;
  margin-bottom: 20px;
  @media ${device.mobileS} {
    margin: 0;
  }
`;
const StyledContainer = styled.div`
  display: grid;
  grid-gap: 2px;
  width: 100%;
  margin-bottom: 2px;
  margin-top: 2px;
  grid-template-columns: repeat(7, 1fr);
`;
const StyledCategoryImgDiamond = styled.div`
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
const StyledCategoryImgEmerald = styled.div`
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
const StyledCategoryImgRuby = styled.div`
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
const StyledBestsellerHeader = styled.div`
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
const StyledProductContainer = styled.div`
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
const StyledParagraph = styled.p`
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
const StyledBestsellerDescription = styled.div`
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

const StyledParagraphTwo = styled.p`
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

const Bestsellers = () => {
  return (
    <>
      <StyledSections>
        <StyledContainer>
          <StyledCategoryImgDiamond></StyledCategoryImgDiamond>
          <StyledProductContainer>
            <ProductBestsellers />
          </StyledProductContainer>
        </StyledContainer>
        <StyledContainer>
          <StyledBestsellerHeader>
            <StyledParagraph>
              Find out more about our Swarovski Crystal collection.
            </StyledParagraph>
          </StyledBestsellerHeader>
          <StyledBestsellerDescription>
            <StyledParagraphTwo>
              Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris
              nisi ut aliquiStyledParagraphTwo ex ea commodo consequat. Duis
              aute irure dolor in reprehenderit in voluptate velit esse cillum
              dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat
              non proident, sunt in culpa qui officia deserunt mollit anim id
              est laborum.
            </StyledParagraphTwo>
          </StyledBestsellerDescription>
        </StyledContainer>
      </StyledSections>

      <StyledSections>
        <StyledContainer>
          <StyledProductContainer>
            <ProductEmeraldBestseller />
          </StyledProductContainer>
          <StyledCategoryImgEmerald></StyledCategoryImgEmerald>
        </StyledContainer>
        <StyledContainer>
          <StyledBestsellerDescription emerald>
            <StyledParagraphTwo>
              Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris
              nisi ut aliquiStyledParagraphTwo ex ea commodo consequat. Duis
              aute irure dolor in reprehenderit in voluptate velit esse cillum
              dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat
              non proident, sunt in culpa qui officia deserunt mollit anim id
              est laborum.
            </StyledParagraphTwo>
          </StyledBestsellerDescription>
          <StyledBestsellerHeader emerald>
            <StyledParagraph>
              Find out more about our emerald collection.
            </StyledParagraph>
          </StyledBestsellerHeader>
        </StyledContainer>
      </StyledSections>

      <StyledSections>
        <StyledContainer>
          <StyledCategoryImgRuby></StyledCategoryImgRuby>
          <StyledProductContainer>
            <ProductRubyBestseller />
          </StyledProductContainer>
        </StyledContainer>
        <StyledContainer>
          <StyledBestsellerHeader ruby>
            <StyledParagraph>
              Find out more about our ruby collection.
            </StyledParagraph>
          </StyledBestsellerHeader>
          <StyledBestsellerDescription ruby>
            <StyledParagraphTwo>
              Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris
              nisi ut aliquiStyledParagraphTwo ex ea commodo consequat. Duis
              aute irure dolor in reprehenderit in voluptate velit esse cillum
              dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat
              non proident, sunt in culpa qui officia deserunt mollit anim id
              est laborum.
            </StyledParagraphTwo>
          </StyledBestsellerDescription>
        </StyledContainer>
      </StyledSections>
    </>
  );
};

export default Bestsellers;

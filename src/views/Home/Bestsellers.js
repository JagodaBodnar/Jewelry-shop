import React from "react";
import emerald from "../../assets/images/emerald.jpg";
import ruby from "../../assets/images/ruby.jpg";
import diamond from "../../assets/images/diamond.jpg";
import styled, { css } from "styled-components";
import ProductBestsellers from "../../components/ProductBestsellers";
import ProductEmeraldBestseller from "../../components/ProductEmeraldBestsellers";
import ProductRubyBestseller from "../../components/ProductRubyBestsellers";

const StyledContainer = styled.div`
  display: grid;
  grid-template-columns: repeat(7, 1fr);
  grid-gap: 2px;
  width: 100%;
  margin-bottom: 2px;
  margin-top: 2px;
`;
const StyledSections = styled.section`
  margin-top: 80px;
`;
const StyledCategoryImg = styled.img`
  box-sizing: border-box;
  grid-column: span 3;
  width: 100%;
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
  align-items: center;
  overflow: hidden;
  display: flex;
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
`;
const StyledParagraphTwo = styled.p`
  font-size: 18px;
  text-align: center;
  font-family: "Open Sans", sans-serif;
  color: #fff;
  font-weight: 300;
  width: 75%;
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

const Bestsellers = () => {
  return (
    <>
      <StyledSections>
        <StyledContainer>
          <StyledCategoryImg src={diamond} />
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
          <StyledCategoryImg src={emerald} />
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
          <StyledCategoryImg src={ruby} />
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

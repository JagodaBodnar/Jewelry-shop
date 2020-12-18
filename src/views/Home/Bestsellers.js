import React from "react";
import ProductBestsellers from "../../components/bestsellerProducts/ProductBestsellers";
import ProductEmeraldBestseller from "../../components/bestsellerProducts/ProductEmeraldBestsellers";
import ProductRubyBestseller from "../../components/bestsellerProducts/ProductRubyBestsellers";
import {
  StyledSections,
  StyledContainer,
  StyledCategoryImgDiamond,
  StyledCategoryImgEmerald,
  StyledCategoryImgRuby,
  StyledBestsellerHeader,
  StyledProductContainer,
  StyledParagraph,
  StyledBestsellerDescription,
  StyledParagraphTwo,
} from "./BestsellersStyles";

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

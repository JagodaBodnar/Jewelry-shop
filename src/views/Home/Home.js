import React from "react";
import Slider from "./Slider";
import Bestsellers from "./Bestsellers";
import { StyledSliderWrapper, StyledBestsellersContainer } from "./HomeStyles";

const Home = () => {
  return (
    <>
      <StyledSliderWrapper>
        <Slider />
      </StyledSliderWrapper>
      <StyledBestsellersContainer>
        <Bestsellers />
      </StyledBestsellersContainer>
    </>
  );
};

export default Home;

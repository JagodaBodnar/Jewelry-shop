import React from "react";
import Slider from "./Slider";
import styled from "styled-components";
import Bestsellers from "./Bestsellers";

const StyledSliderWrapper = styled.div`
  width: 100%;
  height: 80vh;
  margin: 0;
  padding-top: 10px;
`;
const StyledBestsellersContainer = styled.div`
  width: 75%;
  margin: 0 auto;
  height: 200px;
`;

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

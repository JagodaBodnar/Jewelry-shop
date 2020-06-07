import React from "react";
import Slider from "./Slider";
import styled from "styled-components";

const StyledSliderWrapper = styled.div`
  width: 100%;
  height: 80vh;
  margin: 0;
  padding-top: 10px;
`;

const Home = () => {
  return (
    <>
      <StyledSliderWrapper>
        <Slider />
      </StyledSliderWrapper>
    </>
  );
};

export default Home;

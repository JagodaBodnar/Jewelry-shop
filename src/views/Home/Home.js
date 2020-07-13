import React from "react";
import Slider from "./Slider";
import styled from "styled-components";
import Bestsellers from "./Bestsellers";
import { device } from "../../globalStyles/Device";

const StyledSliderWrapper = styled.div`
  display: block;
  width: 100%;
  margin: 0;
  padding-top: 10px;
  @media ${device.mobileS} {
    height: 50vh;
  }
  @media ${device.mobile} {
    height: 70vh;
  }
  @media ${device.desktop} {
    height: 80vh;
  }
`;
const StyledBestsellersContainer = styled.div`
  margin: 0 auto;
  @media ${device.mobileS} {
    width: 100%;
  }
  @media ${device.mobile} {
    width: 100%;
  }
  @media ${device.tablet} {
    width: 90%;
  }
  @media ${device.laptop} {
    width: 75%;
  }
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

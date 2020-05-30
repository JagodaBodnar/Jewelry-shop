import React from "react";
import AwesomeSlider from "react-awesome-slider";
import withAutoplay from "react-awesome-slider/dist/autoplay";
import "react-awesome-slider/dist/styles.css";
import slide from "../../assets/images/slide.jpeg";
import slide2 from "../../assets/images/slide2.jpeg";
import slide3 from "../../assets/images/slide3.jpeg";
import slide4 from "../../assets/images/slide4.jpeg";
import styled from "styled-components";

const AutoplaySlider = withAutoplay(AwesomeSlider);

const StyledSlider = styled(AutoplaySlider)`
  width: 85%;
  height: 100%;
  margin: auto;
  border-radius: 20px;
`;

const Slider = () => {
  return (
    <>
      <StyledSlider
        play={true}
        cancelOnInteraction={false}
        interval={6000}
        organicArrows={false}
        mobileTouch={true}
      >
        <div data-src={slide} />
        <div data-src={slide2} />
        <div data-src={slide4} />
      </StyledSlider>
    </>
  );
};

export default Slider;

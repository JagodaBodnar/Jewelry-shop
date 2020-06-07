import React from "react";
import AwesomeSlider from "react-awesome-slider";
import withAutoplay from "react-awesome-slider/dist/autoplay";
import "react-awesome-slider/dist/styles.css";
import slide from "../../assets/images/slide.jpg";
import slide2 from "../../assets/images/slide2.jpg";
import slide3 from "../../assets/images/slide3.jpg";

import styled, { css } from "styled-components";

const AutoplaySlider = withAutoplay(AwesomeSlider);

const StyledSlider = styled(AutoplaySlider)`
  width: 75%;
  height: 100%;
  margin: auto;
  border-radius: 20px;
  cursor: pointer;
  z-index: 2;
`;
const StyledSliderImg = styled.div`
  z-index: 2;
`;
const StyledSliderImgCaption = styled.p`
  position: absolute;
  top: 350px;
  left: 250px;
  font-size: 30px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  font-family: "Open Sans", sans-serif;
  font-weight: 300;
  align-items: center;
  ${({ captionTwo }) =>
    captionTwo &&
    css`
      position: absolute;
      left: 150px;
      bottom: 150px;
    `}
  ${({ captionThree }) =>
    captionThree &&
    css`
      position: absolute;
      top: 150px;
      left: 800px;
    `}
`;
const StyledSliderSubCaptionOne = styled.span`
  font-weight: 500;
  color: #e6cba2;
  letter-spacing: 2px;
  ${({ subCaptionSecond }) =>
    subCaptionSecond &&
    css`
      color: #acacb8;
    `}
  ${({ subCaptionThird }) =>
    subCaptionThird &&
    css`
      color: #dfdcda;
    `}
`;
const StyledSliderSubCaptionTwo = styled.span`
  text-transform: uppercase;
  font-weight: 500;
  font-size: 40px;
  color: #e5b367;
  letter-spacing: 2px;
  ${({ subCaptionSecond }) =>
    subCaptionSecond &&
    css`
      color: #252556;
    `}
  ${({ subCaptionThird }) =>
    subCaptionThird &&
    css`
      color: #f6f4f3;
    `}
`;

const Slider = () => {
  return (
    <>
      <StyledSlider
        play={true}
        cancelOnInteraction={false}
        interval={6000}
        organicArrows={true}
        bullets={false}
        mobileTouch={true}
      >
        <StyledSliderImg data-src={slide}>
          <StyledSliderImgCaption>
            <StyledSliderSubCaptionOne>
              You deserve to be beauty
            </StyledSliderSubCaptionOne>
            <StyledSliderSubCaptionTwo>
              Golden accessories
            </StyledSliderSubCaptionTwo>
          </StyledSliderImgCaption>
        </StyledSliderImg>
        <StyledSliderImg data-src={slide2}>
          <StyledSliderImgCaption captionTwo>
            <StyledSliderSubCaptionOne subCaptionSecond>
              Frost yourself
            </StyledSliderSubCaptionOne>
            <StyledSliderSubCaptionTwo subCaptionSecond>
              Genuine diamonds
            </StyledSliderSubCaptionTwo>
          </StyledSliderImgCaption>
        </StyledSliderImg>
        <StyledSliderImg data-src={slide3}>
          <StyledSliderImgCaption captionThree>
            <StyledSliderSubCaptionOne subCaptionThird>
              Up to 20% discount on pearl jewelry
            </StyledSliderSubCaptionOne>
            <StyledSliderSubCaptionTwo subCaptionThird>
              Check new prices
            </StyledSliderSubCaptionTwo>
          </StyledSliderImgCaption>
        </StyledSliderImg>
      </StyledSlider>
    </>
  );
};

export default Slider;

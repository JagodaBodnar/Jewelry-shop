import React from "react";
import AwesomeSlider from "react-awesome-slider";
import withAutoplay from "react-awesome-slider/dist/autoplay";
import slide from "../../assets/images/slide.jpg";
import slide2 from "../../assets/images/slide2.jpg";
import slide3 from "../../assets/images/slide3.jpg";
import { device } from "../../globalStyles/Device";
import "./slider.scss";

import styled, { css } from "styled-components";

const AutoplaySlider = withAutoplay(AwesomeSlider);

const StyledSlider = styled(AutoplaySlider)`
  width: 75%;
  height: 100%;
  margin: auto;
  border-radius: 20px;
  cursor: pointer;
  z-index: 2;
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
const StyledSliderImg = styled.div`
  z-index: 2;
`;
const StyledSliderImgCaption = styled.p`
  position: absolute;
  top: 55%;
  left: 5%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  font-family: "Open Sans", sans-serif;
  font-weight: 300;
  align-items: flex-start;
  @media ${device.mobileS} {
    font-size: 14px;
  }
  @media ${device.mobile} {
    font-size: 16px;
  }
  @media ${device.desktop} {
    font-size: 30px;
  }
  ${({ captionTwo }) =>
    captionTwo &&
    css`
      position: absolute;
      left: 10%;
      bottom: 10%;
    `}
  ${({ captionThree }) =>
    captionThree &&
    css`
      position: absolute;
      top: 65%;
      left: 50%;
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

  color: #e5b367;
  letter-spacing: 2px;
  @media ${device.mobileS} {
    font-size: 24px;
  }
  @media ${device.mobile} {
    font-size: 26px;
  }
  @media ${device.desktop} {
    font-size: 40px;
  }
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
        play={false}
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

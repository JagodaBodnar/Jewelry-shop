import React from "react";
import slide from "../../assets/images/slide.jpg";
import slide2 from "../../assets/images/slide2.jpg";
import slide3 from "../../assets/images/slide3.jpg";
import "./slider.scss";
import {
  StyledSlider,
  StyledSliderImg,
  StyledSliderImgCaption,
  StyledSliderSubCaptionOne,
  StyledSliderSubCaptionTwo,
} from "./SliderStyles";

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

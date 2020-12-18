import styled from "styled-components";
import { device } from "../../globalStyles/Device";

export const StyledSliderWrapper = styled.div`
  display: block;
  width: 100%;
  margin-top: 8vh;
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
export const StyledBestsellersContainer = styled.div`
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

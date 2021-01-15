import styled from "styled-components";
import { device } from "../../globalStyles/Device";
import { FaHeart } from "react-icons/fa";

export const StyledSingleProductContainer = styled.div`
  @media ${device.mobileS} {
    grid-template-columns: repeat(1, 1fr);
  }
  @media ${device.mobile} {
    grid-template-columns: repeat(1, 1fr);
  }
  @media ${device.tablet} {
    grid-template-columns: repeat(2, 1fr);
  }
  width: 80vw;
  min-height: 63vh;
  margin: 18vh auto 10vh auto;
  display: grid;
  grid-gap: 10px;
  border-bottom: 1px solid #ececec;
  border-top: 1px solid #ececec;
`;
export const StyledImgContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
`;
export const StyledDetailsContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-evenly;
  align-items: center;
`;
export const StyledHeaderContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-evenly;
  align-items: center;
`;
export const StyledPriceParagraph = styled.p`
  font-size: 25px;
  text-align: center;
  margin-top: 20px;
  color: ${({ theme }) => theme.indigo};
`;
export const StyledIsOnWishlist = styled(FaHeart)`
  font-size: 18px;
  color: #ce3c72;
`;
export const StyledAddToWishlist = styled(FaHeart)`
  font-size: 18px;
  color: #c2c2c2;
`;
export const StyledButtonContainer = styled.div`
  display: flex;
  margin-top: 10px;
`;
export const StyledProductDescription = styled.div`
  text-align: center;
  width: 80%;
  color: ${({ theme }) => theme.grey};
  margin-top: 10px;
`;
export const StyledImage = styled.img`
  @media ${device.mobileS} {
    width: 240px;
    height: 230px;
  }
  @media ${device.mobile} {
    width: 278px;
    height: 268px;
  }
  @media ${device.laptop} {
    width: auto;
    height: auto;
  }
`;

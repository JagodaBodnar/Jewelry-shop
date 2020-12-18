import styled, { css } from "styled-components";
import { device } from "../../globalStyles/Device";

export const StyledContactNavContainer = styled.div`
  display: flex;
  justify-content: flex-start;
  align-items: center;
  width: 60vw;
  margin: 12vh auto 5px;
`;
export const StyledFormContainer = styled.form`
  min-height: 69vh;
  padding-top: 40px;
  margin: 0 auto;
`;
export const StyledFormElementsContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;
export const StyledInputContainer = styled.div`
  display: flex;
  justify-content: flex-start;
  align-items: flex-start;

  padding: 5px;
  @media ${device.mobileS} {
    width: 100%;
  }
  @media ${device.mobile} {
    width: 80%;
  }
  @media ${device.tablet} {
    width: 60%;
  }
  @media ${device.laptop} {
    width: 40%;
  }
  @media ${device.desktop} {
    width: 25%;
  }
`;
export const StyledFormLabel = styled.label`
  width: 30%;
  font-family: "Scope One", serif;
  color: #828281;
  font-size: 14px;
  font-weight: 200;
  margin-top: 10px;
`;
export const StyledFormInput = styled.input`
  margin: 10px 0;
  font-family: "Scope One", serif;
  width: 70%;
  outline: none;
  min-height: 25px;
`;
export const StyledFormTextarea = styled.textarea`
  font-family: "Scope One", serif;
  margin: 10px 0;
  outline: none;
  width: 70%;
`;
export const StyledCheckboxContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  margin: 15px auto;
  padding-left: 30px;
`;
export const StyledButtonContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  margin: 15px auto;
  padding-left: 30px;
`;

export const StyledHiglight = styled.span`
  color: ${({ theme }) => theme.pink};
  ${({ terms }) =>
    terms &&
    css`
      cursor: pointer;
    `}
`;

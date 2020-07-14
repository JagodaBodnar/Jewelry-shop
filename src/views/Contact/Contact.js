import React, { useContext } from "react";
import styled, { css } from "styled-components";
import {
  HeadingOne,
  HeadingTwo,
} from "../../components/reusableComponents/Heading";
import Button from "../../components/reusableComponents/Button";
import { Checkbox } from "@material-ui/core";
import RootContext from "../../context/context";
import { device } from "../../globalStyles/Device";

const StyledContactNavContainer = styled.div`
  display: flex;
  justify-content: flex-start;
  align-items: center;
  width: 60vw;
  margin-top: 8vh;
`;
const StyledFormContainer = styled.form`
  min-height: 69vh;
  padding-top: 40px;
  margin: 0 auto;
`;
const StyledFormElementsContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;
const StyledInputContainer = styled.div`
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
const StyledFormLabel = styled.label`
  width: 30%;
  font-family: "Scope One", serif;
  color: #828281;
  font-size: 14px;
  font-weight: 200;
  margin-top: 10px;
`;
const StyledFormInput = styled.input`
  margin: 10px 0;
  font-family: "Scope One", serif;
  width: 70%;
  outline: none;
  min-height: 25px;
`;
const StyledFormTextarea = styled.textarea`
  font-family: "Scope One", serif;
  margin: 10px 0;
  outline: none;
  width: 70%;
`;
const StyledCheckboxContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  margin: 15px auto;
  padding-left: 30px;
`;
const StyledButtonContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  margin: 15px auto;
  padding-left: 30px;
`;

const StyledHiglight = styled.span`
  color: ${({ theme }) => theme.pink};
  ${({ terms }) =>
    terms &&
    css`
      cursor: pointer;
    `}
`;

const ContactForm = () => {
  const context = useContext(RootContext);
  const { sendQuestion, handleChange, isChecked } = context;
  return (
    <>
      <StyledContactNavContainer>
        <HeadingOne>Contact</HeadingOne>
      </StyledContactNavContainer>
      <HeadingTwo>
        If you are looking for answers to your questions contact us.
        <br /> We are available from Monday to Friday from 8am to 6pm and on
        Saturday from 8am to 13pm.
        <br /> You can call us +12 345 67 89 or send e-mail jewelryshop@shop.com
      </HeadingTwo>
      <StyledFormContainer onSubmit={sendQuestion}>
        <StyledFormElementsContainer>
          <HeadingTwo help>How can we help?</HeadingTwo>
          <StyledInputContainer>
            <StyledFormLabel>
              Name and Surname<StyledHiglight>*</StyledHiglight>
            </StyledFormLabel>
            <StyledFormInput
              type="text"
              name="name"
              autoComplete="off"
              required
            />
          </StyledInputContainer>
          <StyledInputContainer>
            <StyledFormLabel>
              E-mail<StyledHiglight>*</StyledHiglight>
            </StyledFormLabel>
            <StyledFormInput
              type="email"
              name="email"
              autoComplete="off"
              required
            />
          </StyledInputContainer>
          <StyledInputContainer>
            <StyledFormLabel>
              Subject<StyledHiglight>*</StyledHiglight>
            </StyledFormLabel>
            <StyledFormInput
              type="text"
              name="subject"
              autoComplete="off"
              required
            />
          </StyledInputContainer>
          <StyledInputContainer>
            <StyledFormLabel>
              Comment or message<StyledHiglight>*</StyledHiglight>
            </StyledFormLabel>
            <StyledFormTextarea
              name="desc"
              cols="29"
              rows="10"
              autoComplete="off"
              required
            />
          </StyledInputContainer>
          <StyledCheckboxContainer>
            <Checkbox required checked={isChecked} onChange={handleChange} />
            <HeadingTwo termsAndConditions>
              I accept the{" "}
              <StyledHiglight terms>Terms and Conditions</StyledHiglight>
            </HeadingTwo>
          </StyledCheckboxContainer>
          <StyledButtonContainer>
            <Button send type="submit">
              Send
            </Button>
          </StyledButtonContainer>
        </StyledFormElementsContainer>
      </StyledFormContainer>
    </>
  );
};

export default ContactForm;

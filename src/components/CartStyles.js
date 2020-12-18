import styled from "styled-components";
import { device } from "../globalStyles/Device";
import { makeStyles } from "@material-ui/core/styles";

export const useStyles = makeStyles((theme) => ({
  modal: {
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
  },
  paper: {
    backgroundColor: theme.palette.background.paper,
    border: "2px solid #000",
    boxShadow: theme.shadows[5],
    padding: theme.spacing(2, 4, 3),
    outline: "none",
    borderRadius: "10px",
    "@media(max-width: 576px)": {
      height: "50vh",
    },
    "@media(min-width: 576px)": {
      height: "50vh",
      width: "100vw",
    },
    "@media(min-width: 1200px)": {
      width: "65vw",
    },
  },
}));
export const StyledCartWrapper = styled.div`
  position: absolute;
  z-index: 9999;
`;
export const StyledModalContainer = styled.div`
  @media ${device.mobileS} {
    height: 70vh;
  }
  @media ${device.mobile} {
    height: 50vh;
  }
  @media ${device.laptop} {
    height: 80vh;
  }
  overflow-y: auto;
`;
export const StyledEmptyCartContainer = styled.div`
  display: flex;
  justify-content: center;
`;

export const StyledCartHeader = styled.div`
  display: grid;
  grid-template-columns: repeat(8, 1fr);
  grid-gap: 5px;
  justify-content: center;
  align-items: center;
  border-bottom: solid 1px #ececec;
`;
export const StyledCartItemList = styled.ul`
  list-style: none;
`;
export const StyledCartItemElement = styled.li`
  display: grid;
  grid-template-columns: repeat(8, 1fr);
  grid-gap: 5px;
  justify-content: center;
  align-items: center;
  border-bottom: solid 1px #ececec;
`;
export const StyledCartItemImage = styled.img`
  width: 100px;
  height: 100px;
  @media ${device.mobileS} {
    width: 50px;
    height: 50px;
  }
`;
export const StyledProductQuantity = styled.span`
  background-color: #ececec;
  border-radius: 50%;
  width: 25px;
  height: 25px;
  color: black;
  display: flex;
  justify-content: center;
  align-items: center;
`;
export const StyledTotalCart = styled.div`
  display: grid;
  grid-template-columns: repeat(8, 1fr);
  grid-gap: 5px;
  margin-top: 30px;
`;
export const StyledPayPal = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  margin-top: 50px;
`;

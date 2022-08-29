import styled from "@emotion/styled";
import ArrowForwardIosIcon from "@mui/icons-material/ArrowForwardIos";
import ArrowBackIosNewIcon from "@mui/icons-material/ArrowBackIosNew";
import { Paper } from "@mui/material";
import Link from "@mui/material/Link";

export const StyledDivApp = styled.div`
  font-family: sans-serif;
  text-align: center;
`;

export const StyledDiv = styled.div`
  display: flex;
`;

export const StyledArrowIcon = styled(ArrowForwardIosIcon)`
  max-width: 20px;
  margin-left: 15px;
  cursor: pointer;
`;

export const StyledPaperDetails = styled(Paper)`
  margin-top: 15px;
  margin-left: auto;
  margin-right: auto;
  width: 100%;
  max-width: 450px;
  background-color: #e8e9eb;
  padding: 10px;
  @media only screen and (max-width: 600px) {
    max-width: 250px;
  }
`;

export const StyledDetailsRowDiv = styled.div`
  display: flex;
  margin: 5px 0px 5px 14px;
`;

export const StyledOverviewDiv = styled.div`
  display: flex;
  justify-content: center;
  margin-top: 25px;
`;

export const StyledDivWrapper = styled.div`
  margin-left: auto;
  margin-right: auto;
  max-width: 1366px;
`;

export const StyledDetailsDivWrapper = styled.div`
  margin-left: auto;
  margin-right: auto;
  max-width: 500px;
`;

export const StyledBackIcon = styled(ArrowBackIosNewIcon)`
  max-width: 15px;
  margin-left: 2px;
  cursor: pointer;
  color: #0072e5;
  transform: translate(0px, 3px);
`;

export const StyledButton = styled.button`
  transform: translate(-3px, -5px);
  background-color: transparent;
  border: 0;
  font-weight: 550;
  color: #0072e5;
  cursor: pointer;
  margin: 8px;
  @media only screen and (max-width: 768px) {
    font-size: 20px;
    margin: 15px;
    margin-left: auto;
    margin-right: auto;
  }
`;

export const StyledHomeworldLink = styled(Link)`
  cursor: pointer;
  margin-left: 4px;
`;

export const StyledStarWarsLink = styled(Link)`
  cursor: pointer;
  margin-left: 4px;
`;

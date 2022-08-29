import styled from "@emotion/styled";
import TextField from "@mui/material/TextField";

export const StyledLabel = styled.label`
  vertical-align: bottom;
  margin-right: 10px;
`;

export const StyledField = styled(TextField)`
  margin: 5px;
  width: 180px;
  transform: translateY(6px);
`;

export const StyledFormDiv = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
`;

export const StyledSubmitInput = styled.input`
  margin-top: 10px;
  align-items: center;
  background-color: #06f;
  border: 2px solid #06f;
  border-radius: 4px;
  box-sizing: border - box;
  color: #fff;
  cursor: pointer;
  display: inline - flex;
  fill: #000;
  font-size: 16px;
  font-weight: 600;
  justify-content: center;
  letter-spacing: -0.8px;
  line-height: 24px;
  outline: 0;
  padding: 0 17px;
  text-align: center;
  text-decoration: none;
  transition: all 0.3s;
  user-select: none;
  -webkit-user-select: none;
  touch-action: manipulation;
  :hover {
    background-color: #3385ff;
    border-color: #3385ff;
    fill: #06f;
  }
  :focus {
    color: #171e29;
  }
  :active {
    background-color: #3385ff;
    border-color: #3385ff;
    fill: #06f;
  }
`;

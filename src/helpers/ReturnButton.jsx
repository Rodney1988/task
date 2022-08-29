import { useNavigate } from "react-router-dom";
import { StyledBackIcon, StyledButton } from "../styles";

export const ReturnButton = ({ path, content }) => {
  const navigate = useNavigate();
  return (
    <div>
      <StyledBackIcon onClick={() => navigate(path)} />
      <StyledButton onClick={() => navigate(path)}>{content}</StyledButton>
    </div>
  );
};

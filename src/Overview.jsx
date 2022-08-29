import styled from "@emotion/styled/";
import { Typography } from "@mui/material";
import Box from "@mui/material/Box";
import InputLabel from "@mui/material/InputLabel";
import MenuItem from "@mui/material/MenuItem";
import FormControl from "@mui/material/FormControl";
import Select from "@mui/material/Select";
import { useNavigate } from "react-router-dom";
import { useState } from "react";

import { AuthorizationWrapper } from "./helpers";
import { StyledOverviewDiv } from "./styles";

// The Overview page is the main page connecting
// the Star Wars resources
export const Overview = () => {
  const navigate = useNavigate();
  const [resource, setResource] = useState("");

  const handleClick = (e) => {
    setResource(e.target.value);
    return navigate(e.target.value);
  };

  return (
    <AuthorizationWrapper>
      <Typography variant="h3">Star Wars Universe</Typography>
      <StyledResourceHeaders variant="h4">
        Select a category!
      </StyledResourceHeaders>
      <StyledOverviewDiv>
        <Box sx={{ width: 300 }}>
          <FormControl fullWidth>
            <InputLabel id="demo-simple-select-label">Resource</InputLabel>
            <Select value={resource} label="People" onChange={handleClick}>
              <MenuItem value={"/people"}>People</MenuItem>
              <MenuItem value={"/planets"}>Planets</MenuItem>
              <MenuItem value={"/starships"}>Starships</MenuItem>
              <MenuItem value={"/vehicles"}>Vehicles</MenuItem>
              <MenuItem value={"/films"}>Films</MenuItem>
              <MenuItem value={"/species"}>Species</MenuItem>
            </Select>
          </FormControl>
        </Box>
      </StyledOverviewDiv>
    </AuthorizationWrapper>
  );
};

export const StyledResourceHeaders = styled(Typography)`
  margin: 10px;
`;

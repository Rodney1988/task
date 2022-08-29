import { useLocation } from "react-router-dom";
import { AuthorizationWrapper } from "../helpers";
import { useQuery } from "react-query";
import { Typography } from "@mui/material";
import CircularProgress from "@mui/material/CircularProgress";
import Alert from "@mui/material/Alert";
import { capitalize } from "lodash";

import { getStarshipDetails } from "../Api";
import {
  StyledDetailsRowDiv,
  StyledPaperDetails,
  StyledDetailsDivWrapper
} from "../styles";
import { convertDate, ReturnButton } from "../helpers";

// This renders a paper detailing a particular object
export const StarshipDetails = () => {
  const { pathname } = useLocation();
  const pathIdNum = pathname.slice(-1);
  const { data, isLoading, isError } = useQuery(
    ["getPlanetDetails", pathIdNum],
    () => getStarshipDetails(pathname.slice(-1))
  );
  const returnLinks = (
    <>
      <div style={{ display: "flex" }}>
        <ReturnButton content="Overview" path="/" />
      </div>
      <div
        style={{
          display: "flex",
          marginTop: "-18px"
        }}
      >
        <ReturnButton content="Starships Overview" path="/starships" />
      </div>
    </>
  );

  if (isLoading) {
    return <CircularProgress />;
  }
  if (isError) {
    return <Alert severity="error">Error fetching Starship Data</Alert>;
  }

  const adjustedStarshipData = {
    ...data,
    max_speed: data.max_atmosphering_speed,
    created: convertDate(data.created),
    edited: convertDate(data.edited)
  };
  delete adjustedStarshipData.max_atmosphering_speed;
  delete adjustedStarshipData.manufacturer;
  delete adjustedStarshipData.url;

  return (
    <AuthorizationWrapper>
      <StyledDetailsDivWrapper>
        {returnLinks}
        <Typography variant="h5">{data.name} details</Typography>
        <StyledPaperDetails elevation={5}>
          {Object.entries(adjustedStarshipData).map(([key, value]) => {
            // Format key to have no underscores,
            // capitalize with lodash
            const keyFormatted = capitalize(key.replace(/_/g, " "));
            if (!Array.isArray(value)) {
              return (
                <StyledDetailsRowDiv>
                  <b>{keyFormatted}</b>: {value}
                </StyledDetailsRowDiv>
              );
            }
            return null;
          })}
        </StyledPaperDetails>
      </StyledDetailsDivWrapper>
    </AuthorizationWrapper>
  );
};

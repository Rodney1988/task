import { useLocation } from "react-router-dom";
import { useQuery } from "react-query";
import { Typography } from "@mui/material";
import CircularProgress from "@mui/material/CircularProgress";
import Alert from "@mui/material/Alert";
import { capitalize } from "lodash";
import { convertDate } from "../helpers/dateFormatter";
import { useNavigate } from "react-router-dom";

import { getSpeciesDetails } from "../Api";
import {
  StyledDetailsDivWrapper,
  StyledDetailsRowDiv,
  StyledPaperDetails,
  StyledHomeworldLink
} from "../styles";
import { AuthorizationWrapper, ReturnButton } from "../helpers";

// This renders a paper detailing a particular object
export const SpeciesDetails = () => {
  const { pathname } = useLocation();
  const pathIdNum = pathname.slice(-1);
  const { data, isLoading, isError } = useQuery(
    ["getSpeciesDetails", pathIdNum],
    () => getSpeciesDetails(pathname.slice(-1))
  );
  const navigate = useNavigate();
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
        <ReturnButton content="Species Overview" path="/species" />
      </div>
    </>
  );

  if (isLoading) {
    return <CircularProgress />;
  }
  if (isError) {
    return <Alert severity="error">Error fetching Species Data</Alert>;
  }

  const homeWorldArray = data?.homeworld.split("/");
  const homeWorldIdNum = homeWorldArray[homeWorldArray?.length - 2];

  const adjustedSpeciesData = {
    ...data,
    created: convertDate(data.created),
    edited: convertDate(data.edited),
    homeworld: (
      <StyledHomeworldLink
        underline="hover"
        onClick={() => navigate(`/planets/${homeWorldIdNum}`)}
      >
        Planet
      </StyledHomeworldLink>
    )
  };
  delete adjustedSpeciesData.url;

  return (
    <AuthorizationWrapper>
      <StyledDetailsDivWrapper>
        {returnLinks}
        <Typography variant="h5">{data.name} details</Typography>
        <StyledPaperDetails elevation={5}>
          {Object.entries(adjustedSpeciesData).map(([key, value]) => {
            // Format key to have no underscores,
            // capitalize with lodash
            const keyFormatted = capitalize(key.replace(/_/g, " "));
            if (!Array.isArray(value) && key) {
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

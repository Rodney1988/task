import { useQuery } from "react-query";
import { Typography } from "@mui/material";
import CircularProgress from "@mui/material/CircularProgress";
import Alert from "@mui/material/Alert";
import { capitalize } from "lodash";
import { useNavigate, useLocation } from "react-router-dom";

import { getFilmDetails } from "../Api";
import {
  StyledDetailsRowDiv,
  StyledDetailsDivWrapper,
  StyledPaperDetails,
  StyledStarWarsLink
} from "../styles";
import { convertDate } from "../helpers/dateFormatter";
import { AuthorizationWrapper, ReturnButton } from "../helpers";

// This renders a paper detailing a particular object
export const FilmDetails = () => {
  const { pathname } = useLocation();
  const pathIdNum = pathname.slice(-1);
  const { data, isLoading, isError } = useQuery(
    ["getFilmDetails", pathIdNum],
    () => getFilmDetails(pathIdNum)
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
        <ReturnButton content="Film Overview" path="/films" />
      </div>
    </>
  );

  if (isLoading) {
    return <CircularProgress />;
  }
  if (isError) {
    return <Alert severity="error">Error fetching Film Data</Alert>;
  }

  const adjustedFilmData = {
    ...data,
    created: convertDate(data.created),
    edited: convertDate(data.edited),
    Opening: (
      <StyledStarWarsLink
        underline="hover"
        onClick={() => navigate(`${pathname}/${pathIdNum}`)}
      >
        {data.title}
      </StyledStarWarsLink>
    )
  };
  delete adjustedFilmData.opening_crawl;
  delete adjustedFilmData.url;
  return (
    <AuthorizationWrapper>
      <StyledDetailsDivWrapper>
        {returnLinks}
        <Typography variant="h5">{data.title} details</Typography>
        <StyledPaperDetails elevation={5}>
          {Object.entries(adjustedFilmData).map(([key, value]) => {
            // Format key to have no underscores,
            // capitalize with lodash
            if (!Array.isArray(value)) {
              const keyFormatted = capitalize(key.replace(/_/g, " "));
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

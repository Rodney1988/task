import { useLocation } from "react-router-dom";
import { useQuery } from "react-query";
import { Typography } from "@mui/material";
import CircularProgress from "@mui/material/CircularProgress";
import Alert from "@mui/material/Alert";
import { capitalize } from "lodash";
import { useNavigate } from "react-router-dom";

import { getPeopleDetails } from "../Api";
import {
  StyledDetailsRowDiv,
  StyledDetailsDivWrapper,
  StyledPaperDetails,
  StyledHomeworldLink
} from "../styles";
import { convertDate } from "../helpers/dateFormatter";
import { AuthorizationWrapper, ReturnButton } from "../helpers";

// This renders a paper detailing a particular object
export const PeopleDetails = () => {
  const { pathname } = useLocation();
  const pathIdNum = pathname.slice(-1);
  const { data, isLoading, isError } = useQuery(
    ["getPeopleDetails", pathIdNum],
    () => getPeopleDetails(pathIdNum)
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
        <ReturnButton content="People Overview" path="/people" />
      </div>
    </>
  );

  if (isLoading) {
    return <CircularProgress />;
  }
  if (isError) {
    return <Alert severity="error">Error fetching People Data</Alert>;
  }
  const homeWorldArray = data?.homeworld.split("/");
  const homeWorldIdNum = homeWorldArray[homeWorldArray?.length - 2];

  const adjustedPeopleData = {
    ...data,
    created: convertDate(data.created),
    edited: convertDate(data.edited),
    homeworld: (
      <StyledHomeworldLink
        underline="hover"
        onClick={() => navigate(`/planets/${homeWorldIdNum}`)}
      >
        Homeworld
      </StyledHomeworldLink>
    )
  };
  delete adjustedPeopleData.url;

  return (
    <AuthorizationWrapper>
      <StyledDetailsDivWrapper>
        {returnLinks}
        <Typography variant="h5">{data.name} details</Typography>
        <StyledPaperDetails elevation={5}>
          {Object.entries(adjustedPeopleData).map(([key, value]) => {
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

import { useEffect, useState } from "react";
import { useQuery } from "react-query";
import { Typography } from "@mui/material";
import Alert from "@mui/material/Alert";
import CircularProgress from "@mui/material/CircularProgress";
import TableContainer from "@material-ui/core/TableContainer";
import Table from "@material-ui/core/Table";
import TableBody from "@material-ui/core/TableBody";
import TableHead from "@material-ui/core/TableHead";
import TableRow from "@material-ui/core/TableRow";
import Paper from "@material-ui/core/Paper";
import SearchBar from "material-ui-search-bar";

import { DynamicHeaders, DynamicRows } from "./PeopleColumns";
import { getPeople } from "../Api";
import { StyledDiv, StyledDivWrapper } from "../styles";
import { AuthorizationWrapper, ReturnButton } from "../helpers";

// This renders a table of all people
export const People = () => {
  // Ensure the state has at least an empty object
  const [rows, setRows] = useState([]);
  const { data, isLoading, isError } = useQuery(["getPeople"], () =>
    getPeople()
  );
  useEffect(() => {
    if (data) setRows(data.results);
  }, [data]);

  if (isLoading) {
    return <CircularProgress />;
  }
  if (isError) {
    return <Alert severity="error">Error fetching People Data</Alert>;
  }

  // Search bar's filter handler
  const requestSearch = (searchedVal) => {
    const filteredRows = data?.results.filter((row) => {
      return row.name.toLowerCase().includes(searchedVal.toLowerCase());
    });
    setRows(filteredRows);
  };

  return (
    <AuthorizationWrapper>
      <StyledDivWrapper>
        <StyledDiv>
          <ReturnButton content="Overview" path="/" />
        </StyledDiv>
        <Paper>
          <Typography variant="h5">People in the Star Wars Universe</Typography>
          <Typography variant="h7">{data.count} people in total</Typography>
          <SearchBar
            onChange={(searchVal) => requestSearch(searchVal)}
            onCancelSearch={() => requestSearch("")}
          />
          <TableContainer>
            <Table>
              <TableHead>
                <TableRow>
                  <DynamicHeaders />
                </TableRow>
              </TableHead>
              <TableBody>
                {rows?.map((row) => (
                  <TableRow>
                    <DynamicRows row={row} />
                  </TableRow>
                ))}
              </TableBody>
            </Table>
          </TableContainer>
        </Paper>
      </StyledDivWrapper>
    </AuthorizationWrapper>
  );
};

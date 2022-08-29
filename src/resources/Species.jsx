import { useEffect, useState } from "react";
import { useQuery } from "react-query";
import { Typography } from "@mui/material";
import Alert from "@mui/material/Alert";
import CircularProgress from "@mui/material/CircularProgress";
import Table from "@material-ui/core/Table";
import TableBody from "@material-ui/core/TableBody";
import TableContainer from "@material-ui/core/TableContainer";
import TableHead from "@material-ui/core/TableHead";
import TableRow from "@material-ui/core/TableRow";
import Paper from "@material-ui/core/Paper";
import SearchBar from "material-ui-search-bar";
import { StyledDivWrapper } from "../styles";

import { DynamicHeaders, DynamicRows } from "./SpeciesColumns";
import { getSpecies } from "../Api";
import { StyledDiv } from "../styles";
import { AuthorizationWrapper, ReturnButton } from "../helpers";

// This renders a table of all species
export const Species = () => {
  // Ensure the state has at least an empty object
  const [rows, setRows] = useState([]);
  const { data, isLoading, isError } = useQuery(["getSpecies"], () =>
    getSpecies()
  );

  useEffect(() => {
    if (data) setRows(data.results);
  }, [data]);

  if (isLoading) {
    return <CircularProgress />;
  }
  if (isError) {
    return <Alert severity="error">Error fetching Species Data</Alert>;
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
          <Typography variant="h5">
            Species of the Star Wars Universe
          </Typography>
          <Typography variant="h7">{data.count} species in total</Typography>
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

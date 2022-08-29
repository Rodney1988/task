import TableCell from "@material-ui/core/TableCell";
import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";

import { StyledArrowIcon } from "../styles";

export const DynamicHeaders = () => {
  const [screenWidth, setScreenWidth] = useState(window.innerWidth);
  useEffect(() => {
    const handleChange = () => setScreenWidth(window.innerWidth);
    window.addEventListener("resize", handleChange);
    return () => window.removeEventListener("resize", handleChange);
  });

  const additionalHeaders = (
    <>
      <TableCell>
        <b>Producers</b>
      </TableCell>
      <TableCell>
        <b>Release Date</b>
      </TableCell>
    </>
  );
  const headers = (
    <>
      <TableCell>
        <b>Title</b>
      </TableCell>
      <TableCell>
        <b>Director</b>
      </TableCell>
      {screenWidth >= "600" && additionalHeaders}
      <TableCell>
        <b>Details</b>
      </TableCell>
    </>
  );
  return headers;
};

export const DynamicRows = ({ row }) => {
  const [screenWidth, setScreenWidth] = useState(window.innerWidth);
  useEffect(() => {
    const handleChange = () => setScreenWidth(window.innerWidth);
    window.addEventListener("resize", handleChange);
    return () => window.removeEventListener("resize", handleChange);
  });
  const navigate = useNavigate();

  const additionalCells = (
    <>
      <TableCell>{row.producer}</TableCell>
      <TableCell>{row.release_date}</TableCell>
    </>
  );

  const cells = (
    <>
      <TableCell>{row.title}</TableCell>
      <TableCell>{row.director}</TableCell>
      {screenWidth >= "600" && additionalCells}
      <TableCell>
        {
          // Split Details URL and navigate to details page
          <StyledArrowIcon
            onClick={() => {
              const urlArray = row.url.split("/");
              const resourceId = urlArray[urlArray.length - 2];
              navigate(resourceId);
            }}
          />
        }
      </TableCell>
    </>
  );
  return cells;
};

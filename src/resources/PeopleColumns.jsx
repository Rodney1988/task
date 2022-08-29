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
        <b>Weight</b>
      </TableCell>
      <TableCell>
        <b>Birthday</b>
      </TableCell>
      <TableCell>
        <b>Hair Color</b>
      </TableCell>
      <TableCell>
        <b>Skin Color</b>
      </TableCell>
      <TableCell>
        <b>Gender</b>
      </TableCell>
    </>
  );
  const headers = (
    <>
      <TableCell>
        <b>Name</b>
      </TableCell>
      <TableCell>
        <b>Height</b>
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
      <TableCell>{row.mass} Kg</TableCell>
      <TableCell>{row.birth_year}</TableCell>
      <TableCell>{row.hair_color}</TableCell>
      <TableCell>{row.skin_color}</TableCell>
      <TableCell>{row.gender}</TableCell>
    </>
  );

  const cells = (
    <>
      <TableCell>{row.name}</TableCell>
      <TableCell>{row.height} cm</TableCell>
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

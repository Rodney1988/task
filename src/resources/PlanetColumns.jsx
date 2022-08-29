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
        <b>Population</b>
      </TableCell>
      <TableCell>
        <b>Diameter</b>
      </TableCell>
      <TableCell>
        <b>Rotation Period</b>
      </TableCell>
      <TableCell>
        <b>Orbital Period</b>
      </TableCell>
      <TableCell>
        <b>Gravity</b>
      </TableCell>
      <TableCell>
        <b>Terrain</b>
      </TableCell>
      <TableCell>
        <b>Surface Water</b>
      </TableCell>
    </>
  );
  const headers = (
    <>
      <TableCell>
        <b>Name</b>
      </TableCell>
      <TableCell>
        <b>Climate</b>
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
      <TableCell>{row.population}</TableCell>
      <TableCell>{row.diameter} Km</TableCell>
      <TableCell>{row.rotation_period} hours</TableCell>
      <TableCell>{row.orbital_period} days</TableCell>
      <TableCell>{row.gravity}</TableCell>
      <TableCell>{row.terrain}</TableCell>
      <TableCell>{row.surface_water}%</TableCell>
    </>
  );

  const cells = (
    <>
      <TableCell>{row.name}</TableCell>
      <TableCell>{row.climate}</TableCell>
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

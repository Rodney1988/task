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
        <b>Model</b>
      </TableCell>
      <TableCell>
        <b>Manufacturer</b>
      </TableCell>
      <TableCell>
        <b>Cost</b>
      </TableCell>
      <TableCell>
        <b>Max Speed</b>
      </TableCell>
      <TableCell>
        <b>Crew</b>
      </TableCell>
      <TableCell>
        <b>Passengers</b>
      </TableCell>
      <TableCell>
        <b>Cargo Capacity</b>
      </TableCell>
      <TableCell>
        <b>Consumables</b>
      </TableCell>
      <TableCell>
        <b>Hyperdrive rating</b>
      </TableCell>
      <TableCell>
        <b>MGLT</b>
      </TableCell>
    </>
  );
  const headers = (
    <>
      <TableCell>
        <b>Name</b>
      </TableCell>
      <TableCell>
        <b>Class</b>
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
      <TableCell>{row.model}</TableCell>
      <TableCell>{row.manufacturer}</TableCell>
      <TableCell>{row.cost} credits</TableCell>
      <TableCell>{row.max_atmosphering_speed} km/h</TableCell>
      <TableCell>{row.crew}</TableCell>
      <TableCell>{row.passengers}</TableCell>
      <TableCell>{row.cargo_capacity}</TableCell>
      <TableCell>{row.consumables}</TableCell>
      <TableCell>{row.hyperdrive_rating}</TableCell>
      <TableCell>{row.MGLT}</TableCell>
    </>
  );

  const cells = (
    <>
      <TableCell>{row.name}</TableCell>
      <TableCell>{row.starship_class}</TableCell>
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

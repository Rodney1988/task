import TableCell from "@material-ui/core/TableCell";
import { useState, useEffect } from "react";

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
        <b>Cost</b>
      </TableCell>
      <TableCell>
        <b>Max Speed</b>
      </TableCell>
      <TableCell>
        <b>Passengers</b>
      </TableCell>
      <TableCell>
        <b>Class</b>
      </TableCell>
      <TableCell>
        <b>Cargo Capacity</b>
      </TableCell>
      <TableCell>
        <b>Consumables</b>
      </TableCell>
    </>
  );
  const headers = (
    <>
      <TableCell>
        <b>Name</b>
      </TableCell>
      <TableCell>
        <b>Manufacturer</b>
      </TableCell>
      {screenWidth >= "600" && additionalHeaders}
      <TableCell>
        <b>Crew</b>
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
  const additionalCells = (
    <>
      <TableCell>{row.model}</TableCell>
      <TableCell>{row.cost} credits</TableCell>
      <TableCell>{row.max_atmosphering_speed}</TableCell>
      <TableCell>{row.passengers}</TableCell>
      <TableCell>{row.vehicle_class}</TableCell>
      <TableCell>{row.cargo_capacity}</TableCell>
      <TableCell>{row.consumables}</TableCell>
    </>
  );

  const cells = (
    <>
      <TableCell>{row.name}</TableCell>
      <TableCell>{row.manufacturer} cm</TableCell>
      {screenWidth >= "600" && additionalCells}
      <TableCell>{row.crew}</TableCell>
    </>
  );
  return cells;
};

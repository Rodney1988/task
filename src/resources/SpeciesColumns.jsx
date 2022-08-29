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
        <b>Classification</b>
      </TableCell>
      <TableCell>
        <b>Designation</b>
      </TableCell>
      <TableCell>
        <b>Average Height</b>
      </TableCell>
      <TableCell>
        <b>Skin Color</b>
      </TableCell>
      <TableCell>
        <b>Hair Color</b>
      </TableCell>
      <TableCell>
        <b>Eye Color</b>
      </TableCell>
      <TableCell>
        <b>Average Lifespan</b>
      </TableCell>
      <TableCell>
        <b>Language</b>
      </TableCell>
    </>
  );
  const headers = (
    <>
      <TableCell>
        <b>Species</b>
      </TableCell>
      <TableCell>
        <b>Language</b>
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
      <TableCell>{row.classification}</TableCell>
      <TableCell>{row.designation}</TableCell>
      <TableCell>{row.average_height} cm</TableCell>
      <TableCell>{row.skin_colors}</TableCell>
      <TableCell>{row.hair_colors}</TableCell>
      <TableCell>{row.eye_colors}</TableCell>
      <TableCell>{row.average_lifespan} years</TableCell>
      <TableCell>{row.language}</TableCell>
    </>
  );

  const cells = (
    <>
      <TableCell>{row.name}</TableCell>
      <TableCell>{row.language}</TableCell>
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

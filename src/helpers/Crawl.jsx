import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { Typography } from "@mui/material";
// import Crawl from "react-star-wars-crawl";

// Note: Because I could not get the library to work properly (only renders black screen), I opted for simply rendering the texts using the usual Typography components

export const StarWarsCrawl = () => {
  const [film, setFilm] = useState(null);
  const { crawl } = useParams();

  useEffect(() => {
    fetch(`https://www.swapi.tech/api/films/${crawl}`)
      .then((r) => r.json())
      .then((data) => setFilm(data.result.properties));
  }, [crawl]);

  if (!film) return <Typography variant="h3">Loading...</Typography>;
  // return <Crawl title={film.title} text={film.opening_crawl} />;
  return (
    <div>
      <Typography variant="h3">{film.title}</Typography>
      <Typography>{film.opening_crawl}</Typography>
    </div>
  );
};

import { Routes, Route } from "react-router";
import { QueryClient, QueryClientProvider } from "react-query";

import { LoginPage } from "./Login";
import { Overview } from "./Overview";
import {
  People,
  PeopleDetails,
  Planets,
  PlanetDetails,
  Starships,
  StarshipDetails,
  Vehicles,
  Films,
  FilmDetails,
  Species,
  SpeciesDetails
} from "./resources";
import { StyledDivApp } from "./styles";
import { StarWarsCrawl } from "./helpers";

export default function App() {
  // localStorage.clear() // to reset the Cache

  // Set React-Query configurations
  const queryClient = new QueryClient({
    defaultOptions: {
      queries: { staleTime: 10 * 60 * 100, cacheTime: 1000 }
    }
  });

  // Set Routes and wrap around React-Query's
  // QueryClientProvider config
  return (
    <StyledDivApp>
      <QueryClientProvider client={queryClient}>
        <Routes>
          <Route path="/" element={<Overview />} />
          <Route path="/people" element={<People />} />
          <Route path="/people/:path" element={<PeopleDetails />} />
          <Route path="/planets" element={<Planets />} />
          <Route path="/planets/:path" element={<PlanetDetails />} />
          <Route path="/starships" element={<Starships />} />
          <Route path="/starships/:path" element={<StarshipDetails />} />
          <Route path="/vehicles" element={<Vehicles />} />
          <Route path="/films" element={<Films />} />
          <Route path="/films/:path" element={<FilmDetails />} />
          <Route path="/films/:path/:crawl" element={<StarWarsCrawl />} />
          <Route path="/species" element={<Species />} />
          <Route path="/species/:path" element={<SpeciesDetails />} />
          <Route path="/login" element={<LoginPage />} />
        </Routes>
      </QueryClientProvider>
    </StyledDivApp>
  );
}

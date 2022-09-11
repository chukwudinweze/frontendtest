import { Routes, Route, Link, Out } from "react-router-dom";
import AuthPage from "./pages/AuthPage";
import FilmDetail from "./pages/FilmDetail";
import NotFoundPage from "./pages/NotFoundPage";
import OverviewPage from "./pages/OverviewPage";
import People from "./pages/People";
import PeopleDetail from "./pages/PeopleDetail";
import Species from "./pages/Species";
import SpeciesDetail from "./pages/SpeciesDetail";
import StarshipDetail from "./pages/StarshipDetail";
import Starships from "./pages/Starships";

function App() {
  return (
    <Routes>
      <Route path="/" element={<AuthPage />} />
      <Route path="overview" element={<OverviewPage />} />
      <Route path="people" element={<People />} />
      <Route path="people/:id" element={<PeopleDetail />} />
      <Route path="species" element={<Species />} />
      <Route path="species/:id" element={<SpeciesDetail />} />
      <Route path="starships" element={<Starships />} />
      <Route path="starships/:id" element={<StarshipDetail />} />
      <Route path="films/:id" element={<FilmDetail />} />
      <Route path="*" element={<NotFoundPage />} />
    </Routes>
  );
}

export default App;

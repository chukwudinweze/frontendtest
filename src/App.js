import { Routes, Route } from "react-router-dom";
import AuthPage from "./pages/AuthPage";
import FilmDetail from "./pages/DetailPage/FilmDetail";
import NotFoundPage from "./pages/NotFoundPage";
import OverviewPage from "./pages/Table/OverviewPage";
import People from "./pages/Table/People";
import PeopleDetail from "./pages/DetailPage/PeopleDetail";
import Species from "./pages/Table/Species";
import SpeciesDetail from "./pages/DetailPage/SpeciesDetail";
import StarshipDetail from "./pages/DetailPage/StarshipDetail";
import Starships from "./pages/Table/Starships";

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

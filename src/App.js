import { Routes, Route, Link, Out } from "react-router-dom";
import AuthPage from "./pages/AuthPage";
import NotFoundPage from "./pages/NotFoundPage";
import OverviewPage from "./pages/OverviewPage";
import People from "./pages/People";
import Species from "./pages/Species";
import Starships from "./pages/Starships";

function App() {
  return (
    <Routes>
      <Route path="/" element={<AuthPage />} />
      <Route path="overview" element={<OverviewPage />} />
      <Route path="people" element={<People />} />
      <Route path="species" element={<Species />} />
      <Route path="starships" element={<Starships />} />
      <Route path="*" element={<NotFoundPage />} />
    </Routes>
  );
}

export default App;

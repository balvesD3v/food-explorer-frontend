import { Routes, Route } from "react-router-dom";

import HomeAdmin from "../pages/HomeAdmin";
import NewDish from "../pages/NewDish";
import EditDish from "../pages/EditDish";
import ShowDish from "../pages/ShowDish";
import HistoricAdmin from "../pages/HistoricAdmin";
import FavoritesAdmin from "../pages/FavoritesAdmin";

export function AdminRoutes() {
  return (
    <Routes>
      <Route path="/" element={<HomeAdmin />} />
      <Route path="/new" element={<NewDish />} />
      <Route path="/edit/:id" element={<EditDish />} />
      <Route path="/show/:id" element={<ShowDish />} />
      <Route path="/historic" element={<HistoricAdmin />} />
      <Route path="/favorites" element={<FavoritesAdmin />} />
    </Routes>
  );
}

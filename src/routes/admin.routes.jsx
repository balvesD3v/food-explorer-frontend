import { Routes, Route } from "react-router-dom";

import HomeAdmin from "../pages/HomeAdmin";
import NewDish from "../pages/NewDish";
import EditDish from "../pages/EditDish";
import ShowDish from "../pages/ShowDish";

export function AdminRoutes() {
  return (
    <Routes>
      <Route path="/" element={<HomeAdmin />} />
      <Route path="/new" element={<NewDish />} />
      <Route path="/edit/:id" element={<EditDish />} />
      <Route path="/show/:id" element={<ShowDish />} />
    </Routes>
  );
}

import { Routes, Route } from "react-router-dom";

import HomeAdmin from "../pages/HomeAdmin";
import HomeUser from "../pages/HomeUser";
import UserOrder from "../pages/UserOrder";
import NewDish from "../pages/NewDish";
import EditDish from "../pages/EditDish";
import ShowDish from "../pages/ShowDish";

export function AppRoutes() {
  return (
    <Routes>
      <Route path="/" element={<HomeAdmin />} />
      <Route path="/userhome" element={<HomeUser />} />
      <Route path="/userorder" element={<UserOrder />} />
      <Route path="/new" element={<NewDish />} />
      <Route path="/edit" element={<EditDish />} />
      <Route path="/show/:id" element={<ShowDish />} />
    </Routes>
  );
}

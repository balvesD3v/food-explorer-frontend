import { Routes, Route } from "react-router-dom";

import HomeUser from "../pages/HomeUser";
import UserOrder from "../pages/UserOrder";
import ShowDish from "../pages/ShowDish";

export function UserRoutes() {
  return (
    <Routes>
      <Route path="/" element={<HomeUser />} />
      <Route path="/userorder" element={<UserOrder />} />
      <Route path="/show/:id" element={<ShowDish />} />
    </Routes>
  );
}

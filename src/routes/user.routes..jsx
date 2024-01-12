import { Routes, Route } from "react-router-dom";

import HomeUser from "../pages/HomeUser";
import UserOrder from "../pages/UserOrder";
import Payment from "../pages/Payment";
import Historic from "../pages/Historic";
import Favorites from "../pages/Favorites";

export function UserRoutes() {
  return (
    <Routes>
      <Route path="/" element={<HomeUser />} />
      <Route path="/userorder/:id" element={<UserOrder />} />
      <Route path="/payment" element={<Payment />} />
      <Route path="/historic" element={<Historic />} />
      <Route path="/favorites" element={<Favorites />} />
    </Routes>
  );
}

import axios from "axios";

export const api = axios.create({
  baseURL: "https://food-explorer-api-inyq.onrender.com/",
});

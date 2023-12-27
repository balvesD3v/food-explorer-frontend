/* eslint-disable no-useless-catch */
import { api } from "./api";

export const registeringUser = async (userData) => {
  try {
    const response = await api.post("/users", userData);
    return response.data;
  } catch (error) {
    throw error;
  }
};

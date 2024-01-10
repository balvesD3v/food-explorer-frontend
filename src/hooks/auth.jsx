/* eslint-disable react/prop-types */
import { createContext, useContext, useState, useEffect } from "react";
import { api } from "../services/api";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

export const AuthContext = createContext({});

function AuthProvider({ children }) {
  const [data, setData] = useState({});

  async function signIn({ email, password }) {
    try {
      const response = await api.post("session", { email, password });
      const { user, token } = response.data;

      localStorage.setItem("@foodexplorer:user", JSON.stringify(user));
      localStorage.setItem("@foodexplorer:token", token);

      api.defaults.headers.common["Authorization"] = `Bearer ${token}`;

      setData({ user, token });
    } catch (error) {
      if (error.response) {
        toast.error(error.response.data.message);
      } else {
        toast.error("Não foi possível entrar.");
      }
    }
  }

  async function signOut() {
    localStorage.removeItem("@foodexplorer:user");
    localStorage.removeItem("@foodexplorer:token");
    setData({});
  }

  async function updateProfile({ user }) {
    try {
      await api.put("/users", user);
      localStorage.setItem("@foodexplorer:user", JSON.stringify(user));

      setData({ user, token: data.token });
      toast.success("Perfil atualizado");
    } catch (error) {
      if (error.response) {
        toast.error(error.response.data.message);
      } else {
        toast.error("Não foi possível entrar.");
      }
    }
  }

  async function updateImageDish({ data, imageFile }) {
    try {
      if (imageFile) {
        const fileUploadImage = new FormData();
        fileUploadImage.append("image", imageFile);
        const response = await api.patch(
          `dishes/${data.dish_id}/image`,
          fileUploadImage
        );

        data.image = response.data.image;
      }
    } catch (error) {
      if (error.response) {
        alert(error.response.data.message);
      } else {
        alert("err.");
      }
    }
  }

  useEffect(() => {
    const user = localStorage.getItem("@foodexplorer:user");
    const token = localStorage.getItem("@foodexplorer:token");

    if (user && token) {
      api.defaults.headers.common["Authorization"] = `Bearer ${token}`;

      setData({
        token,
        user: JSON.parse(user),
      });
    }
  }, []);

  return (
    <AuthContext.Provider
      value={{
        signIn,
        signOut,
        updateProfile,
        updateImageDish,
        user: data.user,
      }}
    >
      {children}
    </AuthContext.Provider>
  );
}

function useAuth() {
  const context = useContext(AuthContext);
  return context;
}

export { AuthProvider, useAuth };

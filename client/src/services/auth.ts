import axios from "axios";
import { Login, Register } from "@/types";
import useAuthStore from "@/store/authStore";

export const login = async (user: Login) => {
  const { setToken, logout } = useAuthStore.getState();

  try {
    const {data} = await axios.post("/auth/login", user);

    setToken(data.accessToken)
    return data;
  } catch (error) {
    logout();
    console.log(error);
  }
};

export const register = async (user: Register) => {
  try {
    const res = await axios.post("/auth/register", user);
    return res;
  } catch(error) {
    throw await error
  }
}

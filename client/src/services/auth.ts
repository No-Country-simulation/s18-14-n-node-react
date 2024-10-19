import axios from "axios";
import { Login, Register } from "@/types";

export const login = async (user: Login) => {
  try {
    const { data } = await axios.post("/auth/login", user);
    console.log(data);
  } catch (error) {
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

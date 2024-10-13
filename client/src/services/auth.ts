import axios from "axios";
import { Login, Register } from "@/types";

export const login = async (user: Login) => {
  try {
    const { data } = await axios.post("/views/Login", user);
    console.log(data);
  } catch (error) {
    console.log(error);
  }
};

export const register = async (user: Register) => {
  try {
    const { data } = await axios.post("/views/Register", user);
    console.log(data);
  } catch (error) {
    console.log(error);
  }
};

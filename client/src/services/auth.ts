import axios from "axios";

export const login = async (user: { username: string; password: string }) => {
  try {
    const { data } = await axios.post("/ruta-de-login", user);
    console.log(data);
  } catch (error) {
    console.log(error);
  }
};

export const register = async (user: {
  username: string;
  email: string;
  password: string;
}) => {
  try {
    const { data } = await axios.post("/ruta-de-registro", user);
    console.log(data);
  } catch (error) {
    console.log(error);
  }
};

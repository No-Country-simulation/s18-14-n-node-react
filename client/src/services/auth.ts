import axios from "axios";

export const login = async (user: { username: string; password: string }) => {
  try {
    const { data } = await axios.post("/views/Login", user);
    console.log(data);
  } catch (error) {
    console.log(error);
  }
};

export const register = async (user: {
  email: string;
  password: string;
}) => {
  try {
    const { data } = await axios.post("/views/Register", user);
    console.log(data);
  } catch (error) {
    console.log(error);
  }
};

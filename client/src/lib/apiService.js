import axios from "axios";

const apiClient = axios.create({
  baseURL: import.meta.env.VITE_API_BASE_URL,
  headers: {
    "Content-Type": "application/json",
  },
});

export const loginUser = (loginData) => {
  return apiClient.post("/login", loginData);
};

export const registerUser = (registrationData) => {
  return apiClient.post("/register", registrationData);
};

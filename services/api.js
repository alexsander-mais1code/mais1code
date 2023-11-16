import axios from "axios";

const api = axios.create({
  baseURL: "https://mais1-code-backend.onrender.com/api/",
});

export default api;
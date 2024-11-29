import api from "./api";

// Register POST Request
async function register(data) {
  const response = await api.post("/api/auth/register", data);
  console.log(response?.data);
  return response;
}

// Login POST Request
async function login(data) {
  const response = await api.post("/api/auth/login", data);
  console.log(response?.data);
  return response;
}

// Export the authService object to be used in the app
const authService = {
  register,
  login,
};

export default authService;

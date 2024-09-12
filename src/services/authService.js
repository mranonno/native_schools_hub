import axiosInstance from "../utils/axiosInstance";

// Function to create a user
export const createUser = async (userData) => {
  try {
    const response = await axiosInstance.post("/user/create", userData);
    return response.data;
  } catch (error) {
    console.error("Error creating user:", error);
    throw error;
  }
};

// Function to log in a user
export const loginUser = async (credentials) => {
  try {
    const response = await axiosInstance.post("/user/login", credentials);
    return response.data;
  } catch (error) {
    console.error("Error logging in user:", error);
    throw error;
  }
};

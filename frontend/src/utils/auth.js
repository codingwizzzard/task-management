// utils/auth.js
export const isAuthenticated = () => {
    const token = localStorage.getItem("authToken");
    return !!token; // Return true if token exists, otherwise false
  };
  
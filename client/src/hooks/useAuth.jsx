import { useContext, useEffect } from "react";
import AuthContext from "../context/AuthContext";

const useAuth = () => {
  const { user } = useContext(AuthContext);

  // Log only when the 'user' state changes
  useEffect(() => {
    console.log(user?.id ? "Logged In" : "Logged Out");
  }, [user]); // Dependency array ensures this runs only when 'user' changes

  return useContext(AuthContext);
};

export default useAuth;

import { Navigate } from "react-router-dom";
import { useEffect, useState } from "react";
import axios from "axios";

const ProtectedRoute = ({ element }) => {
    const [isAuthenticated, setIsAuthenticated] = useState(false);

    useEffect(() => {
        const checkAuth = async () => {
            try {
                const response = await axios.get("http://localhost:8080/auth/authenticate", {
                    withCredentials: true,
                });

                if (response.data.authenticated) {
                    setIsAuthenticated(true);
                } else {
                    setIsAuthenticated(false);
                }
            } catch (error) {
                setIsAuthenticated(false);
            }
        };

        checkAuth();
    }, []);


    return isAuthenticated ? element : <Navigate to="/login" />;
};

export default ProtectedRoute;

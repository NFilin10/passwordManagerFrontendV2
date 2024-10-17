import './App.css';
import Home from "./Pages/Home";
import Login from "./Pages/Login";
import Navbar from "./components/Common/Navbar/Navbar";
import { BrowserRouter, Route, Routes, Navigate } from "react-router-dom";
import useAuth from "./hooks/useAuth";
import Signup from "./Pages/Signup";

function App() {
    return (
        <BrowserRouter>
            <Navbar />
            <Routes>
                <Route path="/login" element={<Login />} />
                <Route path="/signup" element={<Signup />} />
                <Route path="/" element={<ProtectedHome />} />
            </Routes>
        </BrowserRouter>
    );
}

function ProtectedHome() {
    const isAuthenticated = useAuth();

    if (isAuthenticated === null) {
        return null; // Optional loading state
    }

    return isAuthenticated ? <Home /> : <Navigate to="/login" />;
}

export default App;

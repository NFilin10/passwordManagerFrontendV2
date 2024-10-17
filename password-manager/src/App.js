import './App.css';
import Home from "./Pages/Home";
import Login from "./Pages/Login";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import ProtectedRoute from "./ProtectedRoute";

function App() {
    return (
        <BrowserRouter>
            <Routes>
                <Route path="/login" element={<Login />} />
                <Route
                    path="/"
                    element={<ProtectedRoute element={<Home />} />}
                />
            </Routes>
        </BrowserRouter>
    );
}

export default App;

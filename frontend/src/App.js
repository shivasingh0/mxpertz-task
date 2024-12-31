import "./App.css";
import { Route, Routes } from "react-router-dom";
import Register from "./pages/Register";
import Login from "./pages/Login";
import Home from "./pages/Home";
import ProtectedRoute from "./helper/ProtectedRoute";

function App() {
  return (
    <Routes>
      <Route path="/signup" element={<Register />} />
      <Route path="/login" element={<Login />} />
      <Route path="/" element={<ProtectedRoute><Home /></ProtectedRoute>} />
    </Routes>
  );
}

export default App;

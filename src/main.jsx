import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import "./index.css";
import Profile from "./components/Profile/Profile.jsx";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Appointment from "./components/Appointment/Appointment.jsx";
import Registration from "./components/Registration/Registration.jsx";
import Login from "./components/Login/Login.jsx";

<BrowserRouter>
  <Routes>
    <Route path="*" element={""} />
    <Route path="/head" element={""} />
    <Route path="profile" element={<Profile />} />
    <Route path="appoinment" element={<Appointment />} />
    <Route path="registration" element={<Registration />} />
    <Route path="login" element={<Login />} />
  </Routes>
</BrowserRouter>;

ReactDOM.createRoot(document.getElementById("root")).render(<App />);

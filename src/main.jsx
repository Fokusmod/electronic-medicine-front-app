import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import "./index.css";
import React from "react";

import { Routes, Route } from "react-router-dom";
import { BrowserRouter } from "react-router-dom";

import Employyes from "./components/AdminPage/Employyes.jsx";
import Appointment from "./components/Appointment/Appointment.jsx";
import Login from "./components/Login/Login.jsx";
import Specialist from "./components/Specialist/Specialist.jsx";
import Reception from "./components/Reception/Reception.jsx";
import Head from "./components/Head/Head.jsx";
import AdminPage from "./components/AdminPage/AdminPage.jsx";
import Users from "./components/AdminPage/Users.jsx";
import Notification from "./components/AdminPage/Notification.jsx";
import Mailing from "./components/AdminPage/Mailing.jsx";
import SpecialistInfo from "./components/SpecialistInfo/SpecialistInfo.jsx";

ReactDOM.createRoot(document.getElementById("root")).render(
  <BrowserRouter>
    <App />
    <Routes>
      <Route path="*" element={""} />
      <Route path="/" element={<Head />} />
      <Route path="/head" element={<Head />} />
      <Route path="/appointment" element={<Appointment />} />
      <Route path="/specialist" element={<Specialist />} />
      <Route path="/specialist/info/:id" element={<SpecialistInfo />} />
      <Route path="/reception" element={<Reception />} />
      <Route path="/login" element={<Login />} />
      <Route path="/adminka" element={<AdminPage />}>
        <Route path="employyes" element={<Employyes />} />
        <Route path="users" element={<Users />} />
        <Route path="notification" element={<Notification />} />
        <Route path="mailing" element={<Mailing />} />
      </Route>
    </Routes>
  </BrowserRouter>
);

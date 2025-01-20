import logo from "/icons/logo-medicine-white.png";
import { useState } from "react";
import { styled } from "styled-components";
import "./Header.css";

import Profile from "../Profile/Profile";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import Appointment from "../Appointment/Appointment";
import Registration from "../Registration/Registration";
import Login from "../Login/Login";
import Specialist from "../Specialist/Specialist";
import MedicalCard from "../MedicalCard/MedicalCard";
import Reception from "../Reception/Reception";
import Head from "../Head/Head";
import Cloak from "./Cloak";

const HeaderContainer = styled.header`
  height: 100px;
  display: flex;
  position: fixed;
  top: 0;
  justify-content: space-between;
  align-items: center;
  border-bottom: 1px solid hsl(200, 84.9%, 10.4%);
  background: hsl(200, 85.2%, 15.9%);
  margin-bottom: 1rem;
  z-index: 99999999;
`;

{
  /* <main>
        <IntroSection />
        <TabsSection active={tab} onChange={(current) => setTab(current)} />

        {tab == "main" && (
          <>
            <TeachingSection />
            <DifferencesSection />
          </>
        )}

        {tab == "feedback" && (
          <>
            <FeedbackSection />
          </>
        )}

        {tab == "effect" && <EffectSection />}
      </main> */
}

export default function Header() {
  const [IsActiveTab, setIsActiveTab] = useState("head");
  function onChangeActionTab(current) {
    setIsActiveTab(current);
  }

  return (
    <Router>
      <HeaderContainer>
        <Link
          to="/"
          className="header-side"
          onClick={() => onChangeActionTab("head")}
        >
          <div className="header-side">
            <img className="logo-icon" src={logo} alt="Electronic Medicine" />
          </div>
        </Link>

        <Link
          to="/appointment"
          className={
            IsActiveTab === "appointment"
              ? "header-active header-item"
              : "header-item"
          }
          onClick={() => onChangeActionTab("appointment")}
        >
          Запись на приём
        </Link>
        <Link
          to="/specialist"
          className={
            IsActiveTab === "specialist"
              ? "header-active header-item"
              : "header-item"
          }
          onClick={() => onChangeActionTab("specialist")}
        >
          Специалисты
        </Link>
        <Link
          className={
            IsActiveTab === "medical-сard"
              ? "header-active header-item"
              : "header-item"
          }
          to="/medical-сard"
          onClick={() => onChangeActionTab("medical-сard")}
        >
          Мед. карта
        </Link>
        <Link
          className={
            IsActiveTab === "reception"
              ? "header-active header-item"
              : "header-item"
          }
          to="/reception"
          onClick={() => onChangeActionTab("reception")}
        >
          <span className="span-header">Приём пациентов</span>
        </Link>

        {/* <Link to="/registration" className="header-item">
          Регистрация
        </Link>
        <Link to="/login" className="header-item">
          Вход
        </Link> */}

        <Cloak />
        <div className="header-side">
          <Link
            className="header-item"
            to="/login"
            onClick={() => onChangeActionTab("login")}
          >
            <span className="span-header">Войти</span>
          </Link>
        </div>

        {/* <Link to="/profile" className="header-item">
          Личный кабинет
        </Link> */}
      </HeaderContainer>
      <Routes>
        <Route path="*" element={""} />
        <Route path="/" element={<Head />} />
        <Route path="/head" element={<Head />} />
        <Route path="/appointment" element={<Appointment />} />
        <Route path="/specialist" element={<Specialist />} />
        <Route path="/medical-сard" element={<MedicalCard />} />
        <Route path="/reception" element={<Reception />} />
        <Route path="/registration" element={<Registration />} />
        <Route path="/profile" element={<Profile />} />
        <Route path="/login" element={<Login />} />
      </Routes>
    </Router>
  );
}

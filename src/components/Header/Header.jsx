import logo from "/icons/logo-medicine-white.png";
import { useState, useEffect } from "react";
import { styled } from "styled-components";
import "./Header.css";

import { Link, useLocation } from "react-router-dom";

import Cloak from "./Cloak";

const HeaderContainer = styled.header`
  display: flex;
  justify-content: space-around;
  margin-left: auto;
  margin-right: auto;
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  height: 100px;
  padding-left: 320px;
  padding-right: 320px;
  align-items: center;
  border-bottom: 1px solid hsl(200, 84.9%, 10.4%);
  background: hsl(200, 85.2%, 15.9%);
  margin-bottom: 1rem;
  z-index: 99999999;

  @media screen and (max-width: 1700px) and (min-width: 1400px) {
    padding-left: 250px;
    padding-right: 250px;
  }

  @media screen and (max-width: 1399px) and (min-width: 1200px) {
    padding-left: 190px;
    padding-right: 190px;
    .header-item {
      margin-left: 10px;
      margin-right: 10px;
    }
  }

  @media screen and (max-width: 1199px) and (min-width: 992px) {
    padding-left: 155px;
    padding-right: 155px;
    .header-item {
      margin-left: 0px;
      margin-right: 0px;
    }
  }

  @media screen and (max-width: 991px) and (min-width: 768px) {
    justify-content: center;
    flex-wrap: wrap;
    padding-left: 240px;
    padding-right: 120px;

    .header-item {
      width: 30%;
      margin: 0;
    }

    .header-side-left {
      width: 25%;
    }

    .logo-icon {
      width: 180px;
      height: 60px;
    }

    .header-side-right {
      width: 12%;
    }
  }

  @media screen and (max-width: 768px) and (min-width: 480px) {
    justify-content: space-around;
    flex-wrap: wrap;
    padding-left: 250px;
    padding-right: 80px;
    height: 200px;

    .header-item {
      width: 40%;
      margin: 0;
    }

    .header-side-left {
      width: 35%;
      height: 200px;
    }

    .logo-icon {
      width: 200px;
      height: 80px;
    }

    .header-side-right {
      width: 10%;
      height: 200px;
    }
  }
`;

export default function Header() {
  let locationHeader = useLocation();
  let path = locationHeader.pathname.replace("/", "");

  const [IsActiveTab, setIsActiveTab] = useState("head");
  function onChangeActionTab(current) {
    setIsActiveTab(current);
  }

  useEffect(() => {
    if (path.includes("medical")) {
      onChangeActionTab("medical-сard");
    } else if (
      path.match("adminka/employyes") ||
      path.match("adminka/notification") ||
      path.match("adminka/users") ||
      path.match("adminka/mailing")
    ) {
      onChangeActionTab("adminka");
    } else if (path.match("specialist/info")) {
      onChangeActionTab("specialist");
    } else {
      onChangeActionTab(path);
    }
  }, [locationHeader]);

  return (
    <HeaderContainer>
      <Link
        to="/"
        className="header-side-left"
        onClick={() => onChangeActionTab("head")}
      >
        <div className="header-side">
          <img className="logo-icon" src={logo} alt="Electronic Medicine" />
        </div>
      </Link>
      <Link
        className={
          IsActiveTab === "adminka"
            ? "header-active header-item"
            : "header-item"
        }
        to="/adminka/employyes"
        onClick={() => onChangeActionTab("adminka")}
      >
        <span className="span-header">Админка</span>
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
      <div className="header-side-right">
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
  );
}

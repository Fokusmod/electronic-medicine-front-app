import "./AdminPage.css";
import FindBox from "./adminComponents/FindBox";
import UserItem from "./adminComponents/UserItem";
import { createPortal } from "react-dom";
import { useEffect, useState } from "react";

export default function Users() {
  const [isReady, setReady] = useState(false);
  useEffect(() => {
    setReady(true);
  }, []);

  return isReady ? (
    <>
      {createPortal(
        <div className="admin-section">
          <FindBox
            title="Пользователи сайта"
            placeholder="Найти пользователя"
          />
          <div className="emp-content">
            <div className="emp-content-box">
              <UserItem
                firstName="Виктор"
                lastName="Пертров"
                position="Пользователь"
                approve="false"
                id="1"
              />
              <UserItem
                firstName="Виктор"
                lastName="Пертров"
                position="Пользователь"
                approve="false"
                id="2"
              />
              <UserItem
                firstName="Виктор"
                lastName="Пертров"
                position="Пользователь"
                approve="false"
                id="3"
              />
              <UserItem
                firstName="Виктор"
                lastName="Пертров"
                position="Пользователь"
                approve="false"
                id="4"
              />
            </div>
          </div>
        </div>,
        document.getElementById("pageAdmin")
      )}
    </>
  ) : null;
}

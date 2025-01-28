import "./AdminPage.css";
import "./adminComponents/components.css";
import CreateItem from "./adminComponents/CreateItem";
import { createPortal } from "react-dom";
import { useEffect, useState } from "react";
import NotificationItem from "./adminComponents/NotificationItem";

export default function Mailing() {
  const [isReady, setReady] = useState(false);
  useEffect(() => {
    setReady(true);
  }, []);

  return isReady ? (
    <>
      {createPortal(
        <div className="admin-section">
          <div className="find-box">
            <div className="find-title">Создать рассылку на почту</div>
          </div>
          <CreateItem />
          <div className="find-box">
            <div className="find-title">История Рассылок</div>
          </div>
          <div className="emp-content">
            <div className="emp-content-box">
              <NotificationItem
                title="Диспансеризация"
                autor="Врач"
                status="complete"
                announcement="Text text"
                sendData="23/01/2025"
                id="1"
              />
              <NotificationItem
                title="Вакцинация"
                autor="Врач"
                status="complete"
                announcement="Text text"
                sendData="23/01/2025"
                id="2"
              />
              <NotificationItem
                title="Новости"
                autor="Врач"
                status="complete"
                announcement="Text text"
                sendData="23/01/2025"
                id="3"
              />
              <NotificationItem
                title="Обновление"
                autor="Врач"
                status="complete"
                announcement="Text text"
                sendData="23/01/2025"
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

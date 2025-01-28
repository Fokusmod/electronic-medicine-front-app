import { useEffect, useState } from "react";
import "./AdminPage.css";
import { createPortal } from "react-dom";
import FindBox from "./adminComponents/FindBox";
import EmployyeItem from "./adminComponents/EmployyeItem";

export default function Employye() {
  const [isReady, setReady] = useState(false);
  useEffect(() => {
    setReady(true);
  }, []);

  return isReady ? (
    <>
      {createPortal(
        <div className="admin-section">
          <FindBox
            title="Обслуживающий персонал сайта"
            placeholder="Найти сотрудника"
          />
          <div className="emp-content">
            <div className="emp-content-box">
              <EmployyeItem
                firstName="Марина"
                lastName="Васильева"
                position="Терапевт"
                status="В работе"
                id="1"
              />
              <EmployyeItem
                firstName="Марина"
                lastName="Васильева"
                position="Терапевт"
                status="В работе"
                id="2"
              />
              <EmployyeItem
                firstName="Марина"
                lastName="Васильева"
                position="Терапевт"
                status="В работе"
                id="3"
              />
            </div>
          </div>
        </div>,
        document.getElementById("pageAdmin")
      )}
    </>
  ) : null;
}

import ToTopBtn from "../Navigate-Btn/ToTopBtn";

import "./Reception.css";
import ReceptionItem from "./ReceptionItem";

export default function Reception() {
  function nextDay() {}

  function prevDay() {}
  return (
    <>
      <ToTopBtn />
      <div className="reception-head">
        <div className="reception-navigate-date">
          <div className="doctor-name">Имя</div>
          <div className="current-date">
            <button className="left-btn" onClick={prevDay}>
              &#10148;
            </button>
            <p>Сегодня 31.01.2025</p>
            <button className="right-btn" onClick={nextDay}>
              &#10148;
            </button>
          </div>
          <div className="doctor-spec">Специализация</div>
        </div>
        <div className="reception-data">
          <ReceptionItem name="Алина" timeSlot="10:00" />
          <ReceptionItem name="Евгений" timeSlot="11:00" />
          <ReceptionItem name="Александр" timeSlot="12:00" />
          <ReceptionItem name="Полина" timeSlot="13:00" />
          <ReceptionItem name="Павел" timeSlot="14:00" />
          <ReceptionItem name="Вероника" timeSlot="15:00" />
          <ReceptionItem name="Семен" timeSlot="16:00" />
          <ReceptionItem name="Владимир" timeSlot="17:00" />
          <ReceptionItem name="Елена" timeSlot="18:00" />
        </div>
      </div>
    </>
  );
}

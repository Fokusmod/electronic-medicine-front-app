import Button from "../../Button/Button";
import "./components.css";

export default function CreateItem() {
  let dateMoscow = new Date().toLocaleDateString("ru-RU", {
    timeZone: "Europe/Moscow",
  });
  let date = dateMoscow.split(",")[0].split(".");
  let currentDate = date[2] + "-" + date[1] + "-" + date[0];

  return (
    <>
      <div className="create-content-section">
        <div className="notification-div-left">
          <div className="section-title-name" style={{ marginTop: "25px" }}>
            Заголовок
          </div>
          <input className="notification-title" type="text" />
          <div className="section-title-name">Текст</div>
          <textarea
            rows="5"
            cols="65"
            className="notification-text"
            type="text"
            spellcheck="true"
          />
        </div>
        <div className="notification-div-right">
          <p className="section-title-name">Выберите дату отправки</p>
          <div className="rows-box">
            <input
              className="section-input"
              id="date"
              style={{ marginLeft: "10%", marginTop: "5px", width: "130px" }}
              type="date"
              value={currentDate}
            />
            <Button name="Отправить" />
          </div>
        </div>
      </div>
    </>
  );
}

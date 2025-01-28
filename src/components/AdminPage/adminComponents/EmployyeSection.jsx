import Button from "../../Button/Button";
import "./components.css";

export default function Section() {
  let dateMoscow = new Date().toLocaleDateString("ru-RU", {
    timeZone: "Europe/Moscow",
  });
  let dateMoscowPlusOneMonth = new Date();
  dateMoscowPlusOneMonth.setMonth(dateMoscowPlusOneMonth.getMonth() + 1);
  dateMoscowPlusOneMonth = dateMoscowPlusOneMonth.toLocaleDateString("ru-RU", {
    timeZone: "Europe/Moscow",
  });
  let date = dateMoscow.split(",")[0].split(".");
  let datePlusOneMonth = dateMoscowPlusOneMonth.split(",")[0].split(".");
  let currentDate = date[2] + "-" + date[1] + "-" + date[0];
  let currentDatePlusOneMonth =
    datePlusOneMonth[2] + "-" + datePlusOneMonth[1] + "-" + datePlusOneMonth[0];

  return (
    <>
      <p className="section-title">Выберите нужные действия:</p>
      <div className="content-section ">
        <div className="left-side-section">
          <p className="section-title-name">Отпуск</p>
          <div className="rows-box">
            <p
              style={{
                marginLeft: "10%",
                paddingTop: "12px",
                color: "hsl(200, 85.2%, 15.9%)",
              }}
            >
              С:
            </p>
            <input
              className="section-input"
              id="date"
              type="date"
              value={currentDate}
            />
            <p
              style={{
                color: "hsl(200, 85.2%, 15.9%)",
                paddingTop: "12px",
              }}
            >
              До:
            </p>
            <input
              className="section-input"
              id="date"
              style={{ marginBottom: "30px" }}
              type="date"
              value={currentDatePlusOneMonth}
            />
          </div>
          <Button name="Подтвердить" />
        </div>
        <div className="middle-side-section">
          <p className="section-title-name">Должность</p>
          <div>
            <select name="select-up" className="select-position">
              <option value="value1">Значение 1</option>
              <option value="value2" selected>
                Значение 2
              </option>
              <option value="value3">Значение 3</option>
            </select>
            <Button name="Назначить" />
          </div>
        </div>
        <div className="right-side-section">
          <p className="section-title-name">Прочее</p>
          <Button name="Админ-права" />
          <div className="section-line"></div>
          <Button name="Уволить" />
        </div>
      </div>
    </>
  );
}

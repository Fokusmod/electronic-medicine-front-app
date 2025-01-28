import Button from "../../Button/Button";
import "./components.css";

export default function Section() {
  return (
    <>
      <p className="section-title">Выберите нужные действия:</p>
      <div className="content-section ">
        <div className="left-side-section">
          <p className="section-title-name">Профиль</p>
          <div className="rows-box"></div>
          <Button name="Подтвердить пользователя" />
          <Button name="Посетить страницу" />
          <Button name="История болезни" />
        </div>
        <div className="middle-side-section">
          <p className="section-title-name">Нанять на позицию: </p>
          <div>
            <select
              name="select-up"
              className="select-position"
              style={{ marginLeft: "40px" }}
            >
              <option value="value1">Значение 1</option>
              <option value="value2" selected>
                Значение 2
              </option>
              <option value="value3">Значение 3</option>
            </select>
            <Button name="Нанять" />
          </div>
        </div>
        <div className="right-side-section">
          <p className="section-title-name">Прочее</p>
          <Button name="Админ-права" />
          <div className="section-line"></div>
          <Button name="Исключить" />
        </div>
      </div>
    </>
  );
}

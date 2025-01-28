import BackBtn from "../Navigate-Btn/BackBtn";
import Button from "../Button/Button";
import Footer from "../Footer/Footer";
import "./SpecialistInfo.css";

import { useParams } from "react-router-dom";
import { useState } from "react";

export default function SpecialistInfo() {
  const idParam = useParams().id;
  const [activeBtn, setActiveBtn] = useState("about");

  return (
    <>
      <BackBtn />
      <div className="info-head">
        <div className="info-title">Новикова Элла Александровна</div>
        <div className="info-block-row">
          <img
            src="/temp/medic-2.png"
            alt="specialist"
            className="info-photo"
          />
          <div className="about-spesialist">
            <div className="about-left">
              <div className="about-item-box">
                <div className="about-item-title">Должность</div>
                <div className="about-item-data">Врач</div>
              </div>
              <div className="about-item-box">
                <div className="about-item-title">Специальность</div>
                <div className="about-item-data">Онколог</div>
              </div>
              <div className="about-item-box">
                <div className="about-item-title">Возраст</div>
                <div className="about-item-data">30 лет</div>
              </div>
              <div className="about-item-box">
                <div className="about-item-title">Профессиональный стаж</div>
                <div className="about-item-data">5 лет</div>
              </div>
              <div className="about-item-box">
                <div className="about-item-title">Статус</div>
                <div className="about-item-data">В работе</div>
              </div>
            </div>
            <div className="about-right">
              <Button name="Записаться" />
              <Button name="Оставить отзыв" />
            </div>
          </div>
        </div>
        <div className="about-end">
          <div className="select-box">
            <div
              className={
                activeBtn === "about"
                  ? "select-box-bth active"
                  : "select-box-bth"
              }
              onClick={() => setActiveBtn("about")}
            >
              О враче
            </div>
            <div
              className={
                activeBtn === "review"
                  ? "select-box-bth active"
                  : "select-box-bth"
              }
              onClick={() => setActiveBtn("review")}
            >
              Отзывы
            </div>
          </div>

          <div id="about-spesialist">
            <div className="about-item-box" style={{ marginLeft: "0px" }}>
              <div className="about-item-title">
                Профессиональное образование
              </div>
              <div className="about-item-data">РНИМУ им. Н.И. Пирогова</div>
            </div>
            <div className="about-item-box" style={{ marginLeft: "0px" }}>
              <div className="about-item-title">Повышение квалификации</div>
              <div className="about-item-data">
                ККМЧ Первого МГМУ им И.М.Сеченова
              </div>
            </div>
          </div>

          <div id="reviews">
            <div className="review-item">
              <div className="autor-name"></div>
              <div className="autor-title"></div>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
}

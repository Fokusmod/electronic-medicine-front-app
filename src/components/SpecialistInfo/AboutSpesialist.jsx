import "./SpecialistInfo.css";
import Button from "../Button/Button";

import { animateScroll } from "react-scroll";

export default function AboutSpecialist() {
  const options = {
    duration: 500,
    smooth: true,
  };

  function downScroll() {
    animateScroll.scrollToBottom(options);
  }
  return (
    <>
      <div className="info-title">Новикова Элла Александровна</div>
      <div className="info-block-row">
        <img src="/temp/medic-2.png" alt="specialist" className="info-photo" />
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
            <Button name="Оставить отзыв" func={downScroll} />
          </div>
        </div>
      </div>
    </>
  );
}

import { useNavigate } from "react-router-dom";
import { animateScroll } from "react-scroll";

export default function FooterButton() {
  let navigation = useNavigate();

  const options = {
    duration: 500,
    smooth: true,
  };

  return (
    <>
      <button
        className="footer-btn"
        onClick={() => {
          navigation("/");
          animateScroll.scrollToTop(options);
        }}
      >
        Главная
      </button>
      <button className="footer-btn" onClick={() => navigation("/appointment")}>
        Запись на приём
      </button>
      <button className="footer-btn" onClick={() => navigation("/specialist")}>
        Специалисты
      </button>
      <button
        className="footer-btn"
        onClick={() => navigation("/registration")}
      >
        Регистрация
      </button>
    </>
  );
}

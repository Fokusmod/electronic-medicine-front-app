import minzdrav from "/images/МЗР.png";
import bmj from "/images/BMJ.png";
import VOZ from "/images/VOZ.png";
import VK from "/images/VK.png";
import YT from "/images/YouTube.png";
import { useState, useCallback, useEffect } from "react";

/* {
  loading && (
    <ReactLoading
      type="spinningBubbles"
      color="#007bff"
      height={100}
      width={100}
    />
  );
} */

export default function UsefulLinks() {
  const devApi = "http://localhost:80/api/description";
  const prodApi = "http://localhost:8100/";

  const [loading, setLoading] = useState(false);
  const [description, setDescription] = useState([]);

  const fetchDescription = useCallback(async () => {
    setLoading(true);
    const response = await fetch(devApi);
    const desc = await response.json();
    setDescription(desc);
    setLoading(false);
  }, []);

  useEffect(() => {
    fetchDescription();
  }, [fetchDescription]);

  return (
    <>
      {/* {!loading && (
        <ul>
          {description.map((text) => (
            <li>{text}</li>
          ))}
        </ul>
      )} */}
      <div className="infoHead">Полезные ссылки</div>
      <div className="useful-links">
        <div
          className="useful-links-item"
          onClick={() => window.open("https://www.youtube.com/")}
        >
          <div className="useful-links-image-container">
            <img src={YT} alt="" className="useful-links-image" />
          </div>
          <div className="useful-links-title">Наш Youtube канал</div>
          <div className="useful-links-description">{description[0]}</div>
        </div>
        <div
          className="useful-links-item"
          onClick={() => window.open("https://www.vk.com/")}
        >
          <div className="useful-links-image-container">
            <img src={VK} alt="" className="useful-links-image" />
          </div>
          <div className="useful-links-title">Мы Вконтакте</div>
          <div className="useful-links-description">{description[1]}</div>
        </div>
        <div
          className="useful-links-item"
          onClick={() => window.open("https://www.who.int/ru")}
        >
          <div className="useful-links-image-container">
            <img src={VOZ} alt="" className="useful-links-image" />
          </div>
          <div className="useful-links-title">
            Всемирная организация здравоохранения
          </div>
          <div className="useful-links-description">{description[2]}</div>
        </div>
        <div
          className="useful-links-item"
          onClick={() => window.open("https://minzdrav.gov.ru/")}
        >
          <div className="useful-links-image-container">
            <img src={minzdrav} alt="" className="useful-links-image" />
          </div>
          <div className="useful-links-title">
            Министерство здравоохранения Российской Федерации
          </div>
          <div className="useful-links-description">{description[3]}</div>
        </div>
        <div
          className="useful-links-item"
          onClick={() => window.open("https://www.bmj.com/")}
        >
          <div className="useful-links-image-container">
            <img src={bmj} alt="" className="useful-links-image" />
          </div>
          <div className="useful-links-title">British Medical Journal</div>
          <div className="useful-links-description">{description[4]}</div>
        </div>
      </div>
    </>
  );
}

import minzdrav from "/images/МЗР.png";
import bmj from "/images/BMJ.png";
import VOZ from "/images/VOZ.png";
import VK from "/images/VK.png";
import YT from "/images/YouTube.png";

export default function UsefulLinks() {
  return (
    <>
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
          <div className="useful-links-description">
            Добро пожаловать на наш YouTube канал! Здесь мы делимся актуальными
            знаниями в области медицины, здоровья и профилактики болезней. Наши
            эксперты обсуждают самые важные темы, начиная от здорового образа
            жизни до новейших медицинских исследований. Подписывайтесь, чтобы
            быть в курсе и заботиться о своем здоровье!
          </div>
        </div>
        <div
          className="useful-links-item"
          onClick={() => window.open("https://www.vk.com/")}
        >
          <div className="useful-links-image-container">
            <img src={VK} alt="" className="useful-links-image" />
          </div>
          <div className="useful-links-title">Мы Вконтакте</div>
          <div className="useful-links-description">
            Оставайтесь в курсе последних новостей медицины, здоровья и
            wellness. Поделитесь опытом и задайте вопросы нашим специалистам. Мы
            публикуем актуальные статьи, советы по лечению, профилактике и
            здоровому образу жизни. Ваше здоровье – наша забота!
          </div>
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
          <div className="useful-links-description">
            Официальный сайт ВОЗ, в отличие от справочника MSD, не рассказывает
            детально о методах лечения. Задача ресурса — рассказывать о причинах
            заболеваний, путях передачи, эпидемиологии, симптомах, вспышках
            болезней, чрезвычайных ситуациях и об актуальных проблемах
            современной медицины, например, алкоголизме, гепатите, ВИЧ.
            Большинство статей переведены на русский язык, содержат статистику и
            распространенность заболеваний по странам.
          </div>
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
          <div className="useful-links-description">
            Содержит приказы, клинические протоколы ведения пациентов и
            стандарты оказания медицинской помощи, в которых содержится перечень
            диагностических и лечебных действий при различных патологиях. Однако
            есть минусы: стандарты подогнаны под среднестатического пациента,
            часто охватывают одновременно стандарты лечения взрослых и детей,
            информация давно не обновлялась.
          </div>
        </div>
        <div
          className="useful-links-item"
          onClick={() => window.open("https://www.bmj.com/")}
        >
          <div className="useful-links-image-container">
            <img src={bmj} alt="" className="useful-links-image" />
          </div>
          <div className="useful-links-title">British Medical Journal</div>
          <div className="useful-links-description">
            Британский медицинский журнал публикует статьи, результаты
            систематических обзоров и клинические исследования. Это один из
            наиболее цитируемых журналов. Цель издания — образование молодых
            врачей и медицинских сотрудников, которые недавно начали
            практиковать и борьба с недостоверной, неэтичной и устаревшей
            информацией.
          </div>
        </div>
      </div>
    </>
  );
}

import "./AdminPage.css";
import { createPortal } from "react-dom";
import { useEffect, useState } from "react";
import NotificationItem from "./adminComponents/NotificationItem";
import CreateItem from "./adminComponents/CreateItem";

export default function Notification() {
  const [isReady, setReady] = useState(false);
  useEffect(() => {
    setReady(true);
  }, []);

  return isReady ? (
    <>
      {createPortal(
        <div className="admin-section">
          <div className="find-box">
            <div className="find-title">Создать уведомление в приложении</div>
          </div>
          <CreateItem />
          <div className="find-box">
            <div className="find-title">История Уведомлений</div>
          </div>
          <div className="emp-content">
            <div className="emp-content-box">
              <NotificationItem
                title="Диспансеризация"
                autor="Врач"
                status="complete"
                announcement="Lorem Ipsum - это текст-рыба, часто используемый в печати и вэб-дизайне. Lorem Ipsum является стандартной рыбой для текстов на латинице с начала XVI века. В то время некий безымянный печатник создал большую коллекцию размеров и форм шрифтов, используя Lorem Ipsum для распечатки образцов. Lorem Ipsum не только успешно пережил без заметных изменений пять веков, но и перешагнул в электронный дизайн. Его популяризации в новое время послужили публикация листов Letraset с образцами Lorem Ipsum в 60-х годах и, в более недавнее время, программы электронной вёрстки типа Aldus PageMaker, в шаблонах которых используется Lorem Ipsum."
                sendData="23/01/2025"
                id="1"
              />
              <NotificationItem
                title="Вакцинация"
                autor="Врач"
                status="complete"
                announcement="Lorem Ipsum - это текст-рыба, часто используемый в печати и вэб-дизайне. Lorem Ipsum является стандартной рыбой для текстов на латинице с начала XVI века. В то время некий безымянный печатник создал большую коллекцию размеров и форм шрифтов, используя Lorem Ipsum для распечатки образцов. Lorem Ipsum не только успешно пережил без заметных изменений пять веков, но и перешагнул в электронный дизайн. Его популяризации в новое время послужили публикация листов Letraset с образцами Lorem Ipsum в 60-х годах и, в более недавнее время, программы электронной вёрстки типа Aldus PageMaker, в шаблонах которых используется Lorem Ipsum."
                sendData="23/01/2025"
                id="2"
              />
              <NotificationItem
                title="Новости"
                autor="Врач"
                status="complete"
                announcement="Lorem Ipsum - это текст-рыба, часто используемый в печати и вэб-дизайне. Lorem Ipsum является стандартной рыбой для текстов на латинице с начала XVI века. В то время некий безымянный печатник создал большую коллекцию размеров и форм шрифтов, используя Lorem Ipsum для распечатки образцов. Lorem Ipsum не только успешно пережил без заметных изменений пять веков, но и перешагнул в электронный дизайн. Его популяризации в новое время послужили публикация листов Letraset с образцами Lorem Ipsum в 60-х годах и, в более недавнее время, программы электронной вёрстки типа Aldus PageMaker, в шаблонах которых используется Lorem Ipsum."
                sendData="23/01/2025"
                id="3"
              />
              <NotificationItem
                title="Обновление"
                autor="Врач"
                status="complete"
                announcement="Lorem Ipsum - это текст-рыба, часто используемый в печати и вэб-дизайне. Lorem Ipsum является стандартной рыбой для текстов на латинице с начала XVI века. В то время некий безымянный печатник создал большую коллекцию размеров и форм шрифтов, используя Lorem Ipsum для распечатки образцов. Lorem Ipsum не только успешно пережил без заметных изменений пять веков, но и перешагнул в электронный дизайн. Его популяризации в новое время послужили публикация листов Letraset с образцами Lorem Ipsum в 60-х годах и, в более недавнее время, программы электронной вёрстки типа Aldus PageMaker, в шаблонах которых используется Lorem Ipsum."
                sendData="23/01/2025"
                id="4"
              />
            </div>
          </div>
        </div>,
        document.getElementById("pageAdmin")
      )}
    </>
  ) : null;
}

import "./Appointment.css";

import { useRef } from "react";

import ToTopBtn from "../Navigate-Btn/ToTopBtn";
import Footer from "../Footer/Footer";
import CustomDateSection from "./CustomDateSection";
import SelectProfileSpecialist from "./SelectProfileSpecialist";
import SelectSpecialist from "./SelectSpecialist";
import BackStep from "../Navigate-Btn/BackStep";

export default function Appointment() {
  const spec = useRef();
  const specialist = useRef();
  const date = useRef();

  const firstStep = useRef();
  const secondStep = useRef();
  const thirdStep = useRef();

  function backStep() {}

  return (
    <>
      <ToTopBtn />
      <div className="appoint-head" id="modal">
        <div className="appoint-reserv">
          <div className="appoint-reserv-stage">
            <div ref={spec} className="stage-item">
              Направление
            </div>
            <div ref={specialist} className="stage-item hide">
              Специалист
            </div>
            <div ref={date} className="stage-item hide">
              Дата и время
            </div>
          </div>
          <div ref={firstStep} className="appoint-reserv-content">
            <SelectProfileSpecialist
              thisStage={spec}
              nextStage={specialist}
              firstStep={firstStep}
              nextStep={secondStep}
            />
          </div>

          <div ref={secondStep} className="appoint-reserv-content hide">
            <BackStep
              thisStage={specialist}
              thisSection={secondStep}
              prevStage={spec}
              prevSection={firstStep}
            />
            <SelectSpecialist
              thisStage={specialist}
              nextStage={date}
              thisSection={secondStep}
              nextSection={thirdStep}
            />
          </div>

          <div ref={thirdStep} className="appoint-reserv-content hide">
            <div className="appoint-reserv-title">Выберите дату посещения</div>
            <div className="about-date-time">
              Выберите дату и время. Доступное время отображает свободное время
              записи в выбраную вами дату.
            </div>
            <BackStep
              thisStage={date}
              thisSection={thirdStep}
              prevStage={specialist}
              prevSection={secondStep}
            />
            <CustomDateSection />
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
}

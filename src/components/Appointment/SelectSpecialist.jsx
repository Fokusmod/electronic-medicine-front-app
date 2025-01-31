import "./Appointment.css";

import AppointSpesialistItem from "./AppointSpesialistItem";
import Button from "../Button/Button";

import { useState, useRef, useEffect } from "react";

export default function SelectSpecialist(props) {
  const specialistBox = useRef();

  const [isChecked, setIsChecked] = useState(null);

  useEffect(() => {
    setIsChecked(true);
  }, []);

  function handleChange() {
    setIsChecked(!isChecked);
  }

  useEffect(() => {
    if (isChecked === true) {
      if (!specialistBox.current.classList.contains("disabled")) {
        specialistBox.current.classList.add("disabled");
      }

      if (specialistBox.current.classList.contains("pointer")) {
        specialistBox.current.classList.remove("pointer");
      }
    } else {
      if (specialistBox.current.classList.contains("disabled")) {
        specialistBox.current.classList.remove("disabled");
      }

      if (!specialistBox.current.classList.contains("pointer")) {
        specialistBox.current.classList.add("pointer");
      }
    }
  }, [isChecked]);

  function stepTwo(
    isChecked,
    specialist,
    thisStage,
    nextStage,
    thisSection,
    nextSection
  ) {
    if (isChecked === false) {
      console.log(specialist);
    } else {
      return;
    }
    thisStage.current.classList.add("complete");
    nextStage.current.classList.remove("hide");
    thisSection.current.classList.add("hide");
    nextSection.current.classList.remove("hide");
  }

  function nextStepButton(thisStage, nextStage, thisSection, nextSection) {
    thisStage.current.classList.add("complete");
    nextStage.current.classList.remove("hide");
    thisSection.current.classList.add("hide");
    nextSection.current.classList.remove("hide");
  }

  return (
    <>
      <div className="appoint-reserv-title">Выберите Специалиста</div>
      <div ref={specialistBox} className="specialist-content">
        <AppointSpesialistItem
          name="Анна Викторовна"
          position="Кардиолог"
          photo="/temp/medic-1.png"
          func={() =>
            stepTwo(
              isChecked,
              "Анна Викторовна",
              props.thisStage,
              props.nextStage,
              props.thisSection,
              props.nextSection
            )
          }
        />

        <AppointSpesialistItem
          name="Мария Петрова"
          position="Кардиолог"
          photo="/temp/admin-3.png"
          func={() =>
            stepTwo(
              isChecked,
              "Мария Петрова",
              props.thisStage,
              props.nextStage,
              props.thisSection,
              props.nextSection
            )
          }
        />

        <AppointSpesialistItem
          name="Мария Петрова"
          position="Кардиолог"
          photo="/temp/admin-3.png"
          func={() =>
            stepTwo(
              isChecked,
              "Мария Петрова",
              props.thisStage,
              props.nextStage,
              props.thisSection,
              props.nextSection
            )
          }
        />

        <AppointSpesialistItem
          name="Мария Петрова"
          position="Кардиолог"
          photo="/temp/admin-3.png"
          func={() =>
            stepTwo(
              isChecked,
              "Мария Петрова",
              props.thisStage,
              props.nextStage,
              props.thisSection,
              props.nextSection
            )
          }
        />
      </div>
      <input
        className="appoint-checkbox"
        type="checkbox"
        id="important"
        name="important"
        onChange={handleChange}
        checked={isChecked}
      />
      <label htmlFor="important" className="label">
        Специалист не важен
      </label>
      <div className="appoint-column">
        <Button
          name="Следующий шаг"
          func={() =>
            nextStepButton(
              props.thisStage,
              props.nextStage,
              props.thisSection,
              props.nextSection
            )
          }
        />
      </div>
    </>
  );
}

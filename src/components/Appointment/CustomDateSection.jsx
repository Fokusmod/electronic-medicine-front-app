import { useRef, useState } from "react";
import { useNavigate } from "react-router-dom";

import Button from "../Button/Button";
import Modal from "../Modal/Modal";

import "./Appointment.css";

export default function CustomDateSection() {
  const navigate = useNavigate();

  let inputDate = useRef();
  const inputTime = useRef();

  let busyTimeSlot = ["10:00", "15:00"];
  let timeSlot = [
    "10:00",
    "11:00",
    "12:00",
    "13:00",
    "14:00",
    "15:00",
    "16:00",
    "17:00",
    "18:00",
  ];
  let aviableTimeSlot = [];

  var dateNow = new Date()
    .toLocaleDateString("ru-RU", {
      timeZone: "Europe/Moscow",
    })
    .split(".");

  var time = new Date()
    .toLocaleTimeString("ru-RU", {
      timeZone: "Europe/Moscow",
    })
    .split(":");

  let currentDate = dateNow[2] + "-" + dateNow[1] + "-" + dateNow[0];
  let currentTime = parseInt(time[0]) + 1 + ":00";

  const [selectDate, setSelectDate] = useState(currentDate);
  const [timeValue, setTimeValue] = useState(currentTime);
  const [isOpen, setIsOpen] = useState(false);
  const [modalData, setModalData] = useState("");

  function checkFreeSlot() {
    if (currentDate === selectDate) {
      for (let i = 0; i < timeSlot.length; i++) {
        if (timeSlot[i] >= currentTime) {
          aviableTimeSlot.push(timeSlot[i]);
        }
      }
      for (let i = 0; i < busyTimeSlot.length; i++) {
        for (let y = 0; y < aviableTimeSlot.length; y++) {
          if (aviableTimeSlot[y] == busyTimeSlot[i]) {
            aviableTimeSlot.splice(y, 1);
          }
        }
      }
    } else {
      for (let i = 0; i < timeSlot.length; i++) {
        aviableTimeSlot.push(timeSlot[i]);
      }
      for (let i = 0; i < busyTimeSlot.length; i++) {
        for (let y = 0; y < aviableTimeSlot.length; y++) {
          if (aviableTimeSlot[y] == busyTimeSlot[i]) {
            aviableTimeSlot.splice(y, 1);
          }
        }
      }
    }
  }

  checkFreeSlot();

  function setNewDate() {
    setSelectDate(inputDate.current.value);
  }

  function changeTimeHandler() {
    setTimeValue(inputTime.current.value);
  }

  function singIn() {
    setIsOpen(true);
    setModalData(
      "Время приёма: " + selectDate + " / " + inputTime.current.value
    );
  }

  function closeModal() {
    setIsOpen(false);
    navigate("/");
  }

  return (
    <>
      <div className="centered">
        <div className="centered-left">
          <input
            className="appoint-input"
            ref={inputDate}
            type="date"
            name="date"
            id="date"
            min={currentDate}
            defaultValue={selectDate}
            onChange={setNewDate}
          />
        </div>
        <div className="centered-right">
          <input
            className="appoint-input"
            ref={inputTime}
            type="time"
            name="time"
            id="time"
            list="work-time"
            defaultValue={timeValue}
            onChange={changeTimeHandler}
          />
          <datalist id="work-time">
            {aviableTimeSlot.map((item, i) => {
              return <option key={i} value={item} />;
            })}
          </datalist>
        </div>
      </div>
      <div className="centered-end">
        <Button name="Записаться" func={singIn} />
      </div>
      <Modal open={isOpen} data={modalData} onClose={closeModal} />
    </>
  );
}

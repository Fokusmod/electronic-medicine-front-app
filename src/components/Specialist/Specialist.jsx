import FindBox from "../AdminPage/adminComponents/FindBox";
import "./Specialist.css";
import SpecialistItem from "./SpecialistItem";
import Footer from "../Footer/Footer";
import AdminStaff from "./AdminStaff";
import ToTopBtn from "../Navigate-Btn/ToTopBtn";

export default function Specialist() {
  return (
    <>
      <div className="main-content">
        <div className="admin-staff-label">Сотрудники медицинского портала</div>
        <ToTopBtn />
        <div className="find-specialist-box">
          <FindBox title="Наши сотрудники" placeholder="Найти сотрудника" />
        </div>
        <div className="specialist-box">
          <div className="specialist-box-items">
            <SpecialistItem
              id="1"
              fullname="Анна Викторовна"
              position="Кардиолог"
              photo="/temp/medic-1.png"
            />
            <SpecialistItem
              id="2"
              fullname="Элла Новикова"
              position="Онколог"
              photo="/temp/medic-2.png"
            />
            <SpecialistItem
              id="3"
              fullname="Денис Прохоров"
              position="Окулист"
              photo="/temp/medic-3.png"
            />
            <SpecialistItem
              id="4"
              fullname="Владислав Семенов"
              position="Терапевт"
              photo="/temp/medic-4.png"
            />
            <SpecialistItem
              id="5"
              fullname="Виктория Войтина"
              position="Стоматолог"
              photo="/temp/medic-5.png"
            />
            <SpecialistItem
              id="6"
              fullname="Михаил Белов"
              position="Психолог"
              photo="/temp/medic-6.png"
            />
          </div>
          <div className="showMore">
            <button className="show-more-button">Показать еще</button>
          </div>
        </div>
        <div>
          <div className="admin-staff-label">Администрация портала</div>
        </div>
      </div>
      <div>
        <AdminStaff />
      </div>
      <Footer />
    </>
  );
}

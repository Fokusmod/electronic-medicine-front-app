import "./components.css";
import NotificationSection from "./NotificationSection";

export default function NotificationItem(props) {
  function showSection(id) {
    let section = document.getElementById(id);
    let item = document.getElementById("nav-item-" + id);

    if (section.classList.contains("visible-on")) {
      section.classList.remove("visible-on");
      item.classList.remove("emp-selected");
    } else {
      revomeAll();
      section.classList.add("visible-on");
      item.classList.add("emp-selected");
    }
  }

  function revomeAll() {
    let allSection = document.getElementsByClassName("emp-section");
    let allItems = document.getElementsByClassName("notification-item");
    for (let i = 0; i < allSection.length; i++) {
      allSection[i].classList.remove("visible-on");
      allItems[i].classList.remove("emp-selected");
    }
  }
  return (
    <>
      <div
        id={"nav-item-" + props.id}
        className="notification-item"
        onClick={() => {
          showSection(props.id);
        }}
      >
        <div className="emp-data" style={{ width: "25%" }}>
          {props.title}
        </div>
        <div className="emp-data" style={{ width: "25%" }}>
          {props.autor}
        </div>
        <div className="emp-data" style={{ width: "25%" }}>
          {props.status}
        </div>
        <div className="emp-data" style={{ width: "25%" }}>
          {props.sendData}
        </div>
      </div>
      <div className="emp-section" id={props.id}>
        <NotificationSection text={props.announcement} />
      </div>
    </>
  );
}

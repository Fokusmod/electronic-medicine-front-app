import Button from "../../Button/Button";
import "./components.css";

export default function NotificationSection(props) {
  return (
    <>
      <p className="section-title">Содержание:</p>
      <div className="notification-content">
        <div className="notification-left-section">{props.text}</div>
      </div>
    </>
  );
}

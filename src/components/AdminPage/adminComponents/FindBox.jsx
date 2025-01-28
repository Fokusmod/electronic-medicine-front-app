import "./components.css";

export default function FindBox(props) {
  return (
    <div className="find-box">
      <div className="find-title">{props.title}</div>
      <div className="find-findbox">
        <input
          className="find-input"
          id="find-employyee"
          placeholder={props.placeholder}
        ></input>
      </div>
    </div>
  );
}

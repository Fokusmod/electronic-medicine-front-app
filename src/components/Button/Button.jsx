import "./Button.css";

export default function Button({ name, func }) {
  return (
    <button className="button" onClick={func}>
      {name}
    </button>
  );
}

/* import { useState, useRef } from "react";
import Button from "./Button/Button";

function StateVsRef() {
  const input = useRef();
  const [show, setShow] = useState(false);

  function handleKeyDown(event) {
    if (event.key == "Enter") {
      setShow(true);
    }
  }

  return (
    <div>
      <h3>Input Value: {show && input.current.value}</h3>
      <input
        ref={input}
        type="text"
        className="control"
        onKeyDown={handleKeyDown}
      ></input>
    </div>
  );
} */

/* export default function FeedbackSection() {
  const [form, setForm] = useState({
    name: "",
    hasError: true,
    reason: "help",
  }); */
/*   const [name, setName] = useState("");
  const [reason, setReason] = useState("help");
  const [hasError, setHasError] = useState(true); */

/*   function handleNameChange(event) { */
/* setName(event.target.value);
    setHasError(event.target.value.trim().length == 0); */
/*     setForm((prev) => ({
      ...prev,
      name: event.target.value,
      hasError: event.target.value.trim().length == 0,
    }));
  }

  function handleReasonChange(event) {
    setForm((prev) => ({
      ...prev,
      reason: event.target.value,
    }));
  }

  function toggleError() {
    setForm((prev) => ({
      ...prev,
      hasError: !form.hasError,
    }));
  }

  return (
    <section>
      <h3>Обратная связь</h3>

      <Button onClick={toggleError}>Toggle Error</Button>
      <form>
        <label htmlFor="name">Ваше имя</label>
        <input
          type="text"
          id="name"
          className="control"
          value={form.name}
          style={{
            border: form.hasError ? "1px solid red" : null,
          }}
          onChange={handleNameChange}
        ></input>
        <label htmlFor="reason">Причина обращения</label>
        <select
          id="reason"
          className="control"
          value={form.reason}
          onChange={handleReasonChange}
        >
          <option value="error">Ошибка</option>
          <option value="help">Нужна помощь</option>
          <option value="suggest">Предложение</option>
        </select>

        <pre>
          Name: {form.name}
          <br />
          Reason: {form.reason}
        </pre>

        <Button disabled={form.hasError} isActive={!form.hasError}>
          Отправить
        </Button>
      </form>

      <hr />
      <StateVsRef />
    </section>
  );
} */

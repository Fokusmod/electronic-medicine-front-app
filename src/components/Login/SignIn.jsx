import Button from "../Button/Button";

export default function SighIn(active) {
  return (
    <section
      className={
        active.isActive == "sigh-in"
          ? "auth-section auth-section-visible"
          : "auth-section auth-section-hide"
      }
    >
      <form className="auth-form" style={{ marginTop: "50px" }}>
        <label htmlFor="email-login" className="auth-label">
          Email
        </label>
        <input
          type="email"
          id="email-login"
          className="auth-input"
          autoComplete="username"
        ></input>
        <label htmlFor="password-login" className="auth-label">
          Пароль
        </label>
        <input
          type="password"
          id="password-login"
          className="auth-input"
          autoComplete="current-password"
        ></input>
        <div>
          <input
            type="checkbox"
            id="checkbox"
            className="auth-checkbox"
          ></input>
          <label htmlFor="checkbox" className="auth-label-checkbox">
            Запомнить меня
          </label>
        </div>
        <div className="btn-container">
          <Button name="Войти" className="auth-submit" />
        </div>

        <button className="auth-link" style={{ marginBottom: "30px" }}>
          Забыли пароль?
        </button>
      </form>
    </section>
  );
}

{
  /* <form>
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
</form>; */
}

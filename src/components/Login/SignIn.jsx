export default function SighIn(active) {
  console.log(active.isActive == "sigh-in");

  return (
    <section
      className={
        active.isActive == "sigh-in"
          ? "auth-section auth-section-visible"
          : "auth-section auth-section-hide"
      }
    >
      <form className="auth-form">
        <label htmlFor="email" className="auth-label">
          Email1`1`
        </label>
        <input type="email" id="email" className="auth-input"></input>
        <label htmlFor="password" className="auth-label">
          Пароль
        </label>
        <input type="password" id="password" className="auth-input"></input>
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
        <button className="auth-submit">Войти</button>

        <button className="forgot-password-btn">Забыли пароль?</button>
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

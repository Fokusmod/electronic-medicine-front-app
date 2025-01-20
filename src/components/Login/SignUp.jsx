export default function SighUp(active) {
  return (
    <section
      className={
        active.isActive == "sigh-up"
          ? "auth-section auth-section-visible"
          : "auth-section auth-section-hide"
      }
    >
      <form className="auth-form">
        <label htmlFor="email" className="auth-label">
          Email
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
      </form>
    </section>
  );
}

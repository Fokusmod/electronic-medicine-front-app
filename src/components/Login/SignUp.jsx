import Button from "../Button/Button";

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
        <button className="auth-link">У меня есть учётная запись.</button>
        <label htmlFor="email-reg" className="auth-label">
          Email
        </label>
        <input
          type="email"
          id="email-reg"
          className="auth-input"
          autoComplete="username"
        ></input>
        <label htmlFor="password-reg" className="auth-label">
          Пароль
        </label>
        <input
          type="password"
          id="password-reg"
          className="auth-input"
          autoComplete="new-password"
        ></input>
        <label htmlFor="password-again" className="auth-label">
          Повторите пароль
        </label>
        <input
          type="password"
          id="password-again"
          className="auth-input"
          autoComplete="new-password"
        ></input>
        <div className="btn-container" style={{ marginTop: "10px" }}>
          <Button name="Зарегистрироваться" className="auth-submit" />
        </div>
      </form>
    </section>
  );
}

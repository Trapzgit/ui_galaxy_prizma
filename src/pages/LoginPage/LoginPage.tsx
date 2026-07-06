import { FormEvent, useState } from 'react';
import { useNavigate } from 'react-router-dom';

import './LoginPage.css';

export function LoginPage() {
  const navigate = useNavigate();

  const [login, setLogin] = useState('');
  const [password, setPassword] = useState('');
  const [rememberMe, setRememberMe] = useState(true);
  const [isPasswordVisible, setIsPasswordVisible] = useState(false);
  const [error, setError] = useState('');

  const handleSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    setError('');

    if (!login.trim() || !password.trim()) {
      setError('Введите логин и пароль');
      return;
    }

    // TODO: позже заменим на реальный API авторизации
    navigate('/services');
  };

  return (
    <main className="login-page">
      <aside className="login-sidebar">
        <div className="login-sidebar__brand">
          <div className="login-logo">
            <svg
              className="login-logo__icon"
              width="42"
              height="42"
              viewBox="0 0 42 42"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
              aria-hidden="true"
            >
              <path
                d="M20.9 5.4L36.3 33.6H5.7L20.9 5.4Z"
                stroke="#78C943"
                strokeWidth="3"
                strokeLinejoin="round"
              />
              <path
                d="M20.9 14.7L28.4 28.4H13.5L20.9 14.7Z"
                fill="#1E5BCA"
                fillOpacity="0.45"
              />
            </svg>
            <span>Prizma</span>
          </div>
        </div>

        <div className="login-prism" aria-hidden="true">
          <div className="login-prism__beam login-prism__beam--one" />
          <div className="login-prism__beam login-prism__beam--two" />
          <div className="login-prism__beam login-prism__beam--three" />

          <div className="login-prism__shape">
            <div className="login-prism__face login-prism__face--left" />
            <div className="login-prism__face login-prism__face--top" />
            <div className="login-prism__face login-prism__face--right" />
          </div>

          <span className="login-prism__dot login-prism__dot--one" />
          <span className="login-prism__dot login-prism__dot--two" />
          <span className="login-prism__dot login-prism__dot--three" />
          <span className="login-prism__dot login-prism__dot--four" />
        </div>

        <div className="login-sidebar__text">
          <h2>Аналитика. Сравнение. Контроль.</h2>
          <p>
            Платформа для управления данными, сравнения показателей и
            формирования отчетов
          </p>
        </div>

        <div className="login-sidebar__copyright">© Prizma, 2026</div>
      </aside>

      <section className="login-content">
        <form className="login-card" onSubmit={handleSubmit}>
          <div className="login-card__header">
            <h1>Добро пожаловать!</h1>
            <p>Войдите в личный кабинет для продолжения работы</p>
          </div>

          <label className="login-field">
            <span className="login-field__label">Login</span>
            <span className="login-field__control">
              <span className="login-field__icon" aria-hidden="true">
                <svg width="18" height="18" viewBox="0 0 24 24" fill="none">
                  <path
                    d="M20 21V19C20 16.8 18.2 15 16 15H8C5.8 15 4 16.8 4 19V21"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                  />
                  <path
                    d="M12 11C14.2 11 16 9.2 16 7C16 4.8 14.2 3 12 3C9.8 3 8 4.8 8 7C8 9.2 9.8 11 12 11Z"
                    stroke="currentColor"
                    strokeWidth="2"
                  />
                </svg>
              </span>

              <input
                type="login"
                value={login}
                onChange={(event) => setLogin(event.target.value)}
                placeholder="Введите логин"
                autoComplete="username"
              />
            </span>
          </label>

          <label className="login-field">
            <span className="login-field__label">Пароль</span>
            <span className="login-field__control">
              <span className="login-field__icon" aria-hidden="true">
                <svg width="18" height="18" viewBox="0 0 24 24" fill="none">
                  <rect
                    x="5"
                    y="10"
                    width="14"
                    height="10"
                    rx="2"
                    stroke="currentColor"
                    strokeWidth="2"
                  />
                  <path
                    d="M8 10V7C8 4.8 9.8 3 12 3C14.2 3 16 4.8 16 7V10"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                  />
                </svg>
              </span>

              <input
                type={isPasswordVisible ? 'text' : 'password'}
                value={password}
                onChange={(event) => setPassword(event.target.value)}
                placeholder="Введите пароль"
                autoComplete="current-password"
              />

              <button
                className="login-field__eye"
                type="button"
                onClick={() => setIsPasswordVisible((value) => !value)}
                aria-label={isPasswordVisible ? 'Скрыть пароль' : 'Показать пароль'}
              >
                <svg width="18" height="18" viewBox="0 0 24 24" fill="none">
                  <path
                    d="M2.5 12C4.4 7.7 7.7 5.5 12 5.5C16.3 5.5 19.6 7.7 21.5 12C19.6 16.3 16.3 18.5 12 18.5C7.7 18.5 4.4 16.3 2.5 12Z"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinejoin="round"
                  />
                  <path
                    d="M12 15C13.7 15 15 13.7 15 12C15 10.3 13.7 9 12 9C10.3 9 9 10.3 9 12C9 13.7 10.3 15 12 15Z"
                    stroke="currentColor"
                    strokeWidth="2"
                  />
                </svg>
              </button>
            </span>
          </label>

          <div className="login-options">
            <label className="login-checkbox">
              <input
                type="checkbox"
                checked={rememberMe}
                onChange={(event) => setRememberMe(event.target.checked)}
              />
              <span>Запомнить меня</span>
            </label>

            <a href="#forgot-password">Забыли пароль?</a>
          </div>

          {error && <div className="login-error">{error}</div>}

          <button className="login-submit" type="submit">
            Войти
          </button>

          <div className="login-divider">
            <span />
            <p>или войдите с помощью</p>
            <span />
          </div>

          <button className="login-sso" type="button">
            <svg width="18" height="18" viewBox="0 0 24 24" fill="none" aria-hidden="true">
              <path
                d="M12 3L19 6V11C19 15.4 16.1 19.5 12 21C7.9 19.5 5 15.4 5 11V6L12 3Z"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinejoin="round"
              />
              <path
                d="M12 8V12L14.5 14.5"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
              />
            </svg>
            SSO / Корпоративный вход
          </button>
        </form>

        <p className="login-help">
          Нет учетной записи? <a href="#admin">Обратитесь к администратору</a>
        </p>
      </section>
    </main>
  );
}
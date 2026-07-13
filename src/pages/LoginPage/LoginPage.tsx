import { FormEvent, useState } from 'react';
import { useNavigate } from 'react-router-dom';

import './LoginPage.css';

export function LoginPage() {
  const navigate = useNavigate();

  const [login, setLogin] = useState('');
  const [password, setPassword] = useState('');
  const [rememberMe, setRememberMe] = useState(false);
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
        <div className="login-sidebar__logo">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="54"
            height="47"
            viewBox="0 0 54 47"
            fill="none"
            aria-hidden="true"
          >
            <path
              d="M26.8468 7L47.6314 43H6.06219L26.8468 7Z"
              stroke="#00E007"
              strokeWidth="7"
            />
          </svg>

          <span>Prizma</span>
        </div>

        <div className="login-sidebar__bottom">
          <div className="login-sidebar__description">
            <h2>Аналитика. Сравнение. Контроль.</h2>
            <p>
              Платформа для управления данными,
              <br />
              сравнения показателей и формирования отчетов
            </p>
          </div>

          <p className="login-sidebar__copyright">© Prizma, 2026</p>
        </div>
      </aside>

      <section className="login-content">
        <form className="login-card" onSubmit={handleSubmit}>
          <div className="login-card__header">
            <h1>Добро пожаловать!</h1>
            <p>Войдите в личный кабинет для продолжения работы</p>
          </div>

          <label className="login-field">
            <span className="login-field__label">Логин</span>
            <span className="login-field__control">
              <input
                type="text"
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
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
                  <path
                    d="M2.5 12C4.4 7.7 7.7 5.5 12 5.5C16.3 5.5 19.6 7.7 21.5 12C19.6 16.3 16.3 18.5 12 18.5C7.7 18.5 4.4 16.3 2.5 12Z"
                    stroke="currentColor"
                    strokeWidth="1.8"
                    strokeLinejoin="round"
                  />
                  <path
                    d="M12 15C13.7 15 15 13.7 15 12C15 10.3 13.7 9 12 9C10.3 9 9 10.3 9 12C9 13.7 10.3 15 12 15Z"
                    stroke="currentColor"
                    strokeWidth="1.8"
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
            SSO / Корпоративный вход
          </button>
        </form>
      </section>
    </main>
  );
}
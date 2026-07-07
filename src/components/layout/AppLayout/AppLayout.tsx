import { NavLink, Outlet } from 'react-router-dom';

import './AppLayout.css';

const services = [
  'ОТТ Платформы Экосистемы 4G',
  'Аудит региона Enablers',
  'IAM Платформы Экосистемы 4G',
  'ПЖ Платформы Экосистемы 4G',
];

export function AppLayout() {
  return (
    <div className="app-shell">
      <aside className="app-sidebar">
        <div className="app-sidebar__logo">
          <svg width="52" height="52" viewBox="0 0 52 52" fill="none" aria-hidden="true">
            <path
              d="M26 8L43 40H9L26 8Z"
              stroke="#36E617"
              strokeWidth="5"
              strokeLinejoin="round"
            />
          </svg>

          <span>Prizma</span>
        </div>

        <nav className="app-sidebar__services" aria-label="Сервисы">
          {services.map((service, index) => (
            <button
              key={service}
              className={
                index === 0
                  ? 'app-sidebar__service app-sidebar__service--active'
                  : 'app-sidebar__service'
              }
              type="button"
            >
              {service}
            </button>
          ))}
        </nav>

        <nav className="app-sidebar__bottom" aria-label="Пользовательское меню">
          <NavLink
            to="/about"
            className={({ isActive }) =>
              isActive
                ? 'app-sidebar__bottom-link app-sidebar__bottom-link--active'
                : 'app-sidebar__bottom-link'
            }
          >
            <span className="app-sidebar__bottom-icon">
              <svg width="19" height="19" viewBox="0 0 24 24" fill="none">
                <circle cx="12" cy="12" r="9" stroke="currentColor" strokeWidth="2" />
                <path
                  d="M12 11V17"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                />
                <path
                  d="M12 7.5V7.6"
                  stroke="currentColor"
                  strokeWidth="3"
                  strokeLinecap="round"
                />
              </svg>
            </span>

            О версии Prizma
          </NavLink>

          <NavLink
            to="/profile"
            className={({ isActive }) =>
              isActive
                ? 'app-sidebar__bottom-link app-sidebar__bottom-link--active'
                : 'app-sidebar__bottom-link'
            }
          >
            <span className="app-sidebar__bottom-icon">
              <svg width="19" height="19" viewBox="0 0 24 24" fill="none">
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

            Личный кабинет
          </NavLink>

          <NavLink to="/login" className="app-sidebar__bottom-link">
            <span className="app-sidebar__bottom-icon">
              <svg width="19" height="19" viewBox="0 0 24 24" fill="none">
                <path
                  d="M10 17L15 12L10 7"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
                <path
                  d="M15 12H3"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                />
                <path
                  d="M12 3H19C20.1 3 21 3.9 21 5V19C21 20.1 20.1 21 19 21H12"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                />
              </svg>
            </span>

            Выход
          </NavLink>
        </nav>
      </aside>

      <main className="app-shell__content">
        <Outlet />
      </main>
    </div>
  );
}
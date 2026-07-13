import { NavLink, Outlet } from 'react-router-dom';

import './AppLayout.css';

const services = [
  'ОТТ Платформы Экосистемы 4G',
  'Аудит региона Enablers',
  'IAM Платформы Экосистемы 4G',
  'ПЖ Платформы Экосистемы 4G',
  'Сервис мониторинга инфраструктуры',
  'Платформа отчетности Prizma',
];

export function AppLayout() {
  return (
    <div className="app-shell">
      <aside className="app-sidebar">
        <div className="app-sidebar__top">
          <NavLink to="/services" className="app-sidebar__logo">
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
          </NavLink>

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
        </div>

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
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                aria-hidden="true"
              >
                <path
                  d="M12 22C17.5228 22 22 17.5228 22 12C22 6.47715 17.5228 2 12 2C6.47715 2 2 6.47715 2 12C2 17.5228 6.47715 22 12 22Z"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
                <path
                  d="M12 8V12"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
                <path
                  d="M12 16H12.01"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
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
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                aria-hidden="true"
              >
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
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                aria-hidden="true"
              >
                <path
                  d="M9 21H5C4.46957 21 3.96086 20.7893 3.58579 20.4142C3.21071 20.0391 3 19.5304 3 19V5C3 4.46957 3.21071 3.96086 3.58579 3.58579C3.96086 3.21071 4.46957 3 5 3H9"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
                <path
                  d="M16 17L21 12L16 7"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
                <path
                  d="M21 12H9"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
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
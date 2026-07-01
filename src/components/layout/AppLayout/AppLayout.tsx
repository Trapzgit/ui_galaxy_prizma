import { NavLink, Outlet } from 'react-router-dom';

import './AppLayout.css';

export function AppLayout() {
  return (
    <div className="app-layout">
      <aside className="app-sidebar">
        <div className="app-sidebar__logo">PRIZMA</div>

        <nav className="app-sidebar__nav">
          <NavLink to="/services" className="app-sidebar__link">
            Сервисы
          </NavLink>

          <NavLink to="/compare" className="app-sidebar__link">
            Сравнение
          </NavLink>
        </nav>
      </aside>

      <div className="app-layout__main">
        <header className="app-header">
          <div className="app-header__title">PRIZMA UI</div>
          <div className="app-header__user">admin_user</div>
        </header>

        <main className="app-content">
          <Outlet />
        </main>
      </div>
    </div>
  );
}
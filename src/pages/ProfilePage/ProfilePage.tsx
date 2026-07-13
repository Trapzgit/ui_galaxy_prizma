import { useNavigate } from 'react-router-dom';

import './ProfilePage.css';

const user = {
  fullName: 'Иванов Иван Иванович',
  role: 'Администратор Prizma',
  email: 'ivanov.ii@company.ru',
  managedKts: [
    'ОТТ Платформы Экосистемы 4G',
    'Аудит региона Enablers',
    'IAM Платформы Экосистемы 4G',
    'ПЖ Платформы Экосистемы 4G',
  ],
};

export function ProfilePage() {
  const navigate = useNavigate();

  const initials = user.fullName
    .split(' ')
    .slice(0, 2)
    .map((part) => part[0])
    .join('');

  return (
    <div className="profile-page">
      <button
        className="page-back-button"
        type="button"
        onClick={() => navigate('/services')}
      >
        <BackIcon />
        Назад
      </button>

      <section className="profile-card">
        <div className="profile-card__avatar">{initials}</div>

        <div>
          <p className="profile-card__eyebrow">Личный кабинет</p>

          <h1>{user.fullName}</h1>

          <div className="profile-card__meta">
            <span className="profile-role">{user.role}</span>
            <span className="profile-email">{user.email}</span>
          </div>
        </div>
      </section>

      <section className="profile-info-grid">
        <article className="profile-info-card">
          <h2>ФИО сотрудника</h2>
          <p>{user.fullName}</p>
        </article>

        <article className="profile-info-card">
          <h2>Роль в сервисе</h2>
          <p>{user.role}</p>
        </article>

        <article className="profile-info-card">
          <h2>Почта</h2>
          <p>{user.email}</p>
        </article>
      </section>

      <section className="profile-kts">
        <div className="profile-kts__header">
          <h2>КТС, в которых пользователь является администратором</h2>
          <span>{user.managedKts.length}</span>
        </div>

        <div className="profile-kts__list">
          {user.managedKts.map((item) => (
            <article className="profile-kts__item" key={item}>
              <div className="profile-kts__icon">
                <KtsIcon />
              </div>

              <div>
                <h3>{item}</h3>
                <p>Роль: администратор КТС</p>
              </div>
            </article>
          ))}
        </div>
      </section>
    </div>
  );
}

function BackIcon() {
  return (
    <svg
      width="20"
      height="20"
      viewBox="0 0 32 32"
      fill="none"
      aria-hidden="true"
    >
      <path
        d="M20 8L12 16L20 24"
        stroke="currentColor"
        strokeWidth="2.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}

function KtsIcon() {
  return (
    <svg
      width="22"
      height="22"
      viewBox="0 0 24 24"
      fill="none"
      aria-hidden="true"
    >
      <path
        d="M4 7H20"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
      />
      <path
        d="M6 12H18"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
      />
      <path
        d="M8 17H16"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
      />
    </svg>
  );
}
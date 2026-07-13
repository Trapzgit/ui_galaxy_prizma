import { useNavigate } from 'react-router-dom';

import './AboutPage.css';

export function AboutPage() {
  const navigate = useNavigate();

  return (
    <div className="about-page">
      <button
        className="page-back-button"
        type="button"
        onClick={() => navigate('/services')}
      >
        <BackIcon />
        Назад
      </button>

      <section className="about-hero">
        <div className="about-hero__logo">
          <PrizmaLogoIcon />
        </div>

        <div>
          <p className="about-hero__eyebrow">О сервисе</p>

          <h1>Prizma</h1>

          <p className="about-hero__lead">
            Единый интерфейс для сбора, контроля и сравнения технической
            информации по сервисам, стендам, серверам и результатам
            автоматизированных сценариев.
          </p>
        </div>
      </section>

      <section className="about-card">
        <h2>Для чего нужен сервис</h2>

        <p>
          Prizma помогает администраторам быстро получать актуальную информацию
          по инфраструктуре выбранного сервиса: стендам, серверам, параметрам и
          результатам автоматизированных сценариев сбора.
        </p>

        <p>
          Пользователь выбирает нужный сервис, стенд и серверы, после чего
          запускает готовый сценарий сбора информации. Результаты сохраняются и
          могут быть использованы для анализа состояния окружений, проверки
          параметров и подготовки отчетов.
        </p>

        <p>
          Основная цель Prizma — упростить сравнение стендов между собой,
          быстрее находить расхождения и контролировать актуальность данных без
          ручной проверки каждого сервера.
        </p>

        <p>
          Интерфейс объединяет запуск сценариев, просмотр результатов,
          сравнение окружений и работу с отчетами в одном месте, чтобы
          администратор мог быстрее принимать решения и видеть состояние КТС.
        </p>
      </section>

      <div className="about-features">
        <article className="about-feature">
          <h3>Сбор информации</h3>

          <p>
            Запуск сценариев по выбранным серверам через API и получение
            результата по идентификатору выполнения.
          </p>
        </article>

        <article className="about-feature">
          <h3>Сравнение стендов</h3>

          <p>
            Анализ различий между окружениями, параметрами и техническими
            состояниями выбранных серверов.
          </p>
        </article>

        <article className="about-feature">
          <h3>Контроль актуальности</h3>

          <p>
            Отображение статусов КТС, параметров, отчетов и результатов
            проверок в удобном интерфейсе.
          </p>
        </article>
      </div>
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

function PrizmaLogoIcon() {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="88"
      height="78"
      viewBox="0 0 54 47"
      fill="none"
      aria-hidden="true"
    >
      <path
        d="M26.8468 7L47.6314 43H6.06219L26.8468 7Z"
        stroke="#5BD400"
        strokeWidth="5"
      />
      <path d="M26.8468 22L35.507 37H18.1865L26.8468 22Z" fill="#2F68C5" />
    </svg>
  );
}
import './AboutPage.css';

export function AboutPage() {
  return (
    <div className="about-page">
      <section className="about-hero">
        <div className="about-hero__logo">
          <svg width="112" height="112" viewBox="0 0 112 112" fill="none" aria-hidden="true">
            <path
              d="M56 14L96 88H16L56 14Z"
              stroke="#5BD400"
              strokeWidth="8"
              strokeLinejoin="round"
            />
            <path
              d="M56 36L74 72H38L56 36Z"
              fill="#2F7AEF"
              fillOpacity="0.55"
            />
          </svg>
        </div>

        <div className="about-hero__content">
          <p className="about-hero__eyebrow">О сервисе</p>
          <h1>Prizma</h1>
          <p className="about-hero__lead">
            Единый интерфейс для сбора, контроля и сравнения технической информации
            по сервисам, стендам и серверам.
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
          Пользователь выбирает нужный сервис, стенд и серверы, после чего запускает
          готовый сценарий сбора информации. Результаты сохраняются и могут быть
          использованы для анализа состояния окружений.
        </p>

        <p>
          Основная цель Prizma — упростить сравнение стендов между собой, быстрее
          находить расхождения и контролировать актуальность данных без ручной
          проверки каждого сервера.
        </p>
      </section>

      <section className="about-features">
        <article className="about-feature">
          <h3>Сбор информации</h3>
          <p>
            Запуск сценариев по выбранным серверам через API и получение результата
            по идентификатору выполнения.
          </p>
        </article>

        <article className="about-feature">
          <h3>Сравнение стендов</h3>
          <p>
            Анализ различий между окружениями, параметрами и техническими состояниями.
          </p>
        </article>

        <article className="about-feature">
          <h3>Контроль актуальности</h3>
          <p>
            Отображение статусов КТС, параметров и отчетов в удобном интерфейсе.
          </p>
        </article>
      </section>
    </div>
  );
}
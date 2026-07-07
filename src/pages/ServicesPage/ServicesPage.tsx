import { ReactNode, useState } from 'react';

import './ServicesPage.css';

type StandStatus = 'ready' | 'empty';

type StandCard = {
  title: string;
  subtitle: string;
  status: StandStatus;
};

type CollapsibleSectionProps = {
  title: string;
  defaultOpen?: boolean;
  children: ReactNode;
  className?: string;
};

const stands: StandCard[] = [
  {
    title: 'Стенд НТ',
    subtitle: 'КЭ стенда CI02356544',
    status: 'ready',
  },
  {
    title: 'Стенд ИФТ',
    subtitle: 'КЭ стенда CI02356544',
    status: 'ready',
  },
  {
    title: 'Стенд ПСИ',
    subtitle: 'КЭ стенда CI02356544',
    status: 'empty',
  },
  {
    title: 'Стенд ПРОМ',
    subtitle: 'КЭ стенда CI02356544',
    status: 'empty',
  },
];

function CollapsibleSection({
  title,
  defaultOpen = true,
  children,
  className = '',
}: CollapsibleSectionProps) {
  const [isOpen, setIsOpen] = useState(defaultOpen);

  return (
    <section className={`services-section ${className}`}>
      <button
        className="services-section-title"
        type="button"
        onClick={() => setIsOpen((value) => !value)}
        aria-expanded={isOpen}
      >
        <span
          className={
            isOpen
              ? 'services-section-title__chevron services-section-title__chevron--open'
              : 'services-section-title__chevron'
          }
        >
          ›
        </span>

        <h2>{title}</h2>
      </button>

      <div
        className={
          isOpen
            ? 'services-section__content services-section__content--open'
            : 'services-section__content'
        }
      >
        <div className="services-section__content-inner">{children}</div>
      </div>
    </section>
  );
}

export function ServicesPage() {
  return (
    <div className="services-page">
      <CollapsibleSection title="Стенды">
        <div className="stands-grid">
          {stands.map((stand) => (
            <article className="stand-card" key={stand.title}>
              <div>
                <h3>{stand.title}</h3>
                <p>{stand.subtitle}</p>
              </div>

              <div className="stand-card__badges">
                {stand.status === 'ready' ? (
                  <>
                    <span className="stand-badge stand-badge--success">
                      КТС актуален на 21.04.2026
                    </span>
                    <span className="stand-badge stand-badge--success">
                      Параметры собраны 22.04.2026
                    </span>
                  </>
                ) : (
                  <>
                    <span className="stand-badge stand-badge--muted">Нет КТС</span>
                    <span className="stand-badge stand-badge--muted">Нет параметров</span>
                  </>
                )}
              </div>
            </article>
          ))}
        </div>
      </CollapsibleSection>

      <CollapsibleSection title="Сравнение" className="services-section--compare">
        <div className="compare-actions">
          <button className="compare-button compare-button--primary" type="button">
            <svg width="22" height="22" viewBox="0 0 24 24" fill="none" aria-hidden="true">
              <path
                d="M4 7H14"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
              />
              <path
                d="M18 7H20"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
              />
              <path
                d="M16 9C17.1 9 18 8.1 18 7C18 5.9 17.1 5 16 5C14.9 5 14 5.9 14 7C14 8.1 14.9 9 16 9Z"
                stroke="currentColor"
                strokeWidth="2"
              />
              <path
                d="M4 17H8"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
              />
              <path
                d="M12 17H20"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
              />
              <path
                d="M10 19C11.1 19 12 18.1 12 17C12 15.9 11.1 15 10 15C8.9 15 8 15.9 8 17C8 18.1 8.9 19 10 19Z"
                stroke="currentColor"
                strokeWidth="2"
              />
            </svg>
            Настроить сравнение
          </button>

          <button className="compare-button compare-button--secondary" type="button">
            <svg width="22" height="22" viewBox="0 0 24 24" fill="none" aria-hidden="true">
              <path
                d="M4 12H8L10 5L14 19L16 12H20"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
            Сравнение Сотах
          </button>
        </div>
      </CollapsibleSection>

      <CollapsibleSection title="Отчеты сравнения" className="services-section--reports">
        <div className="reports-empty">
          <svg width="44" height="44" viewBox="0 0 24 24" fill="none" aria-hidden="true">
            <path
              d="M7 3H14L19 8V21H7V3Z"
              stroke="currentColor"
              strokeWidth="1.6"
              strokeLinejoin="round"
            />
            <path
              d="M14 3V8H19"
              stroke="currentColor"
              strokeWidth="1.6"
              strokeLinejoin="round"
            />
            <path
              d="M10 14H16"
              stroke="currentColor"
              strokeWidth="1.6"
              strokeLinecap="round"
            />
          </svg>
          <span>Отчетов нет</span>
        </div>
      </CollapsibleSection>
    </div>
  );
}
import { ReactNode, useState } from 'react';
import { useNavigate } from 'react-router-dom';

import './ServicesPage.css';

type StandStatus = 'ready' | 'empty';

type StandCard = {
  title: string;
  subtitle: string;
  status: StandStatus;
};

type CompareTemplate = {
  title: string;
  variant: 'primary' | 'secondary';
};

type Report = {
  title: string;
  time: string;
  date: string;
};

type CollapsibleSectionProps = {
  title: string;
  defaultOpen?: boolean;
  children: ReactNode;
};

const stands: StandCard[] = [
  {
    title: 'Стенд НТ',
    subtitle: 'КЭ стенда CH02356544',
    status: 'ready',
  },
  {
    title: 'Стенд ИФТ',
    subtitle: 'КЭ стенда CH02356544',
    status: 'ready',
  },
  {
    title: 'Стенд ПСИ',
    subtitle: 'КЭ стенда CH02356544',
    status: 'empty',
  },
  {
    title: 'Стенд ПРОМ',
    subtitle: 'КЭ стенда CH02356544',
    status: 'empty',
  },
];

const compareTemplates: CompareTemplate[] = [
  {
    title: 'Создать шаблон',
    variant: 'primary',
  },
  {
    title: 'Corax Prod',
    variant: 'secondary',
  },
  {
    title: 'Ежедневный',
    variant: 'secondary',
  },
  {
    title: 'Перед релизом',
    variant: 'secondary',
  },
];

const reports: Report[] = [
  {
    title: 'Отчет 1',
    time: '10:26',
    date: '21.04.26',
  },
  {
    title: 'Отчет 2',
    time: '10:26',
    date: '21.04.26',
  },
  {
    title: 'Отчет 3',
    time: '10:26',
    date: '21.04.26',
  },
  {
    title: 'Отчет 4',
    time: '10:26',
    date: '21.04.26',
  },
];

function SectionChevron({ isOpen }: { isOpen: boolean }) {
  return (
    <span
      className={
        isOpen
          ? 'services-section-title__chevron services-section-title__chevron--open'
          : 'services-section-title__chevron'
      }
    >
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="20"
        height="20"
        viewBox="0 0 20 20"
        fill="none"
        aria-hidden="true"
      >
        <path
          d="M7.5 15L12.5 10L7.5 5"
          stroke="#243144"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </svg>
    </span>
  );
}

function CollapsibleSection({
  title,
  defaultOpen = true,
  children,
}: CollapsibleSectionProps) {
  const [isOpen, setIsOpen] = useState(defaultOpen);

  return (
    <section className="services-section">
      <button
        className="services-section-title"
        type="button"
        onClick={() => setIsOpen((value) => !value)}
        aria-expanded={isOpen}
      >
        <SectionChevron isOpen={isOpen} />
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

function StandCardView({ stand }: { stand: StandCard }) {
  return (
    <article className="stand-card">
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
  );
}

function CompareIcon() {
  return (
    <svg width="22" height="22" viewBox="0 0 24 24" fill="none" aria-hidden="true">
      <path d="M4 7H14" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
      <path d="M18 7H20" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
      <path
        d="M16 9C17.1 9 18 8.1 18 7C18 5.9 17.1 5 16 5C14.9 5 14 5.9 14 7C14 8.1 14.9 9 16 9Z"
        stroke="currentColor"
        strokeWidth="2"
      />
      <path d="M4 17H8" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
      <path d="M12 17H20" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
      <path
        d="M10 19C11.1 19 12 18.1 12 17C12 15.9 11.1 15 10 15C8.9 15 8 15.9 8 17C8 18.1 8.9 19 10 19Z"
        stroke="currentColor"
        strokeWidth="2"
      />
    </svg>
  );
}

function PulseIcon() {
  return (
    <svg width="22" height="22" viewBox="0 0 24 24" fill="none" aria-hidden="true">
      <path
        d="M4 12H8L10 5L14 19L16 12H20"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}

function DownloadIcon() {
  return (
    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" aria-hidden="true">
      <path
        d="M12 3V15"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
      />
      <path
        d="M7 10L12 15L17 10"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M5 19H19"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
      />
    </svg>
  );
}

function TrashIcon() {
  return (
    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" aria-hidden="true">
      <path
        d="M4 7H20"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
      />
      <path
        d="M10 11V17"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
      />
      <path
        d="M14 11V17"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
      />
      <path
        d="M6 7L7 21H17L18 7"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinejoin="round"
      />
      <path
        d="M9 7V4H15V7"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinejoin="round"
      />
    </svg>
  );
}

function EmptyReports() {
  return (
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
  );
}

export function ServicesPage() {
  const navigate = useNavigate();

  return (
    <div className="services-page">
      <header className="services-page__header">
        <h1>Фамилия Имя Отчество таб. 12345678</h1>
      </header>

      <CollapsibleSection title="Стенды">
        <div className="stands-grid">
          {stands.map((stand) => (
            <StandCardView stand={stand} key={stand.title} />
          ))}
        </div>
      </CollapsibleSection>

      <CollapsibleSection title="Сравнение">
        <div className="compare-actions">
          {compareTemplates.map((template) => (
            <button
              key={template.title}
              className={
                template.variant === 'primary'
                  ? 'compare-button compare-button--primary'
                  : 'compare-button compare-button--secondary'
              }
              type="button"
              onClick={() => {
                if (template.variant === 'primary') {
                  navigate('/compare-templates/new');
                }
              }}
            >
              {template.variant === 'primary' ? <CompareIcon /> : <PulseIcon />}
              {template.title}
            </button>
          ))}
        </div>
      </CollapsibleSection>

      <CollapsibleSection title="Отчеты сравнения">
        {reports.length > 0 ? (
          <div className="reports-grid">
            {reports.map((report) => (
              <article className="report-card" key={report.title}>
                <div>
                  <h3>{report.title}</h3>
                  <p>
                    <span>{report.time}</span> {report.date}
                  </p>
                </div>

                <div className="report-card__actions">
                  <button type="button" aria-label="Скачать отчет">
                    <DownloadIcon />
                  </button>
                  <button type="button" aria-label="Удалить отчет">
                    <TrashIcon />
                  </button>
                </div>
              </article>
            ))}
          </div>
        ) : (
          <EmptyReports />
        )}
      </CollapsibleSection>
    </div>
  );
}
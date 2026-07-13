import { useState } from 'react';
import { useNavigate } from 'react-router-dom';

import './CreateCompareTemplatePage.css';

type MatchRow = {
  nt: string;
  ift: string;
  psi: string;
  prom: string;
  comment: string;
};

type MatchGroup = {
  id: string;
  name: string;
  count: number;
  isOpen: boolean;
  rows: MatchRow[];
  comment?: string;
};

const serverOptions = {
  nt: ['tdleq-mvp000134', 'tdleq-mvp000135', 'tdleq-mvp000136', 'tdleq-mvp000137'],
  ift: ['tdleq-mvp000127', 'tdleq-mvp000128', 'tdleq-mvp000129', 'tdleq-mvp000130'],
  psi: ['tdleq-mvp000362', 'tdleq-mvp000363', 'tdleq-mvp000364', 'tdleq-mvp000365'],
  prom: ['tdleq-mvp000033', 'tdleq-mvp000034', 'tdleq-mvp000035', 'tdleq-mvp000036'],
};

const initialGroups: MatchGroup[] = [
  {
    id: 'corax',
    name: 'Corax',
    count: 4,
    isOpen: true,
    comment: 'Кластер для отправки сообщений',
    rows: [
      {
        nt: 'tdleq-mvp000134',
        ift: 'tdleq-mvp000127',
        psi: 'tdleq-mvp000362',
        prom: 'tdleq-mvp000033',
        comment: 'Резервный кластер',
      },
      {
        nt: 'tdleq-mvp000135',
        ift: 'tdleq-mvp000128',
        psi: 'tdleq-mvp000363',
        prom: 'tdleq-mvp000034',
        comment: '',
      },
      {
        nt: 'tdleq-mvp000136',
        ift: 'tdleq-mvp000129',
        psi: 'tdleq-mvp000364',
        prom: 'tdleq-mvp000035',
        comment: '',
      },
      {
        nt: 'tdleq-mvp000137',
        ift: 'tdleq-mvp000130',
        psi: 'tdleq-mvp000365',
        prom: 'tdleq-mvp000036',
        comment: '',
      },
    ],
  },
  {
    id: 'dropapp',
    name: 'DropApp',
    count: 3,
    isOpen: false,
    rows: [],
  },
  {
    id: 'pangolin',
    name: 'Pangolin',
    count: 1,
    isOpen: false,
    rows: [],
  },
];

function ChevronIcon({ isOpen }: { isOpen: boolean }) {
  return (
    <span
      className={
        isOpen
          ? 'template-group__chevron template-group__chevron--open'
          : 'template-group__chevron'
      }
    >
      <svg width="20" height="20" viewBox="0 0 20 20" fill="none" aria-hidden="true">
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

function TrashIcon() {
  return (
    <svg width="22" height="22" viewBox="0 0 24 24" fill="none" aria-hidden="true">
      <path d="M4 7H20" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
      <path d="M10 11V17" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
      <path d="M14 11V17" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
      <path d="M6 7L7 21H17L18 7" stroke="currentColor" strokeWidth="2" />
      <path d="M9 7V4H15V7" stroke="currentColor" strokeWidth="2" />
    </svg>
  );
}

function RemoveIcon() {
  return (
    <svg width="18" height="18" viewBox="0 0 24 24" fill="none" aria-hidden="true">
      <path d="M18 6L6 18" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
      <path d="M6 6L18 18" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
    </svg>
  );
}

function ServerSelect({ value, options }: { value: string; options: string[] }) {
  return (
    <select className="template-select" value={value} onChange={() => undefined}>
      {options.map((option) => (
        <option value={option} key={option}>
          {option}
        </option>
      ))}
    </select>
  );
}

export function CreateCompareTemplatePage() {
  const navigate = useNavigate();

  const [groups, setGroups] = useState(initialGroups);

  const toggleGroup = (groupId: string) => {
    setGroups((currentGroups) =>
      currentGroups.map((group) =>
        group.id === groupId ? { ...group, isOpen: !group.isOpen } : group
      )
    );
  };

  return (
    <div className="template-page">
      <div className="template-breadcrumbs">
        <button type="button" onClick={() => navigate('/services')}>
          ‹
        </button>
        <span>ОТТ Платформы Экосистемы 4G</span>
        <button type="button">
          ‹
        </button>
        <span>Создание шаблона</span>
      </div>

      <header className="template-page__header">
        <h1>Создание шаблона сравнения</h1>
      </header>

      <section className="template-form">
        <label className="template-field template-field--name">
          <span>Название шаблона</span>
          <input defaultValue="Corax Prod" />
        </label>

        <label className="template-field template-field--description">
          <span>
            Описание <em>(необязательно)</em>
          </span>
          <input defaultValue="Проверка соответствий параметров Corax между стендами перед релизом" />
        </label>
      </section>

      <section className="template-matches">
        <div className="template-matches__title">
          <h2>Соответствия стендов</h2>

          <button className="template-add-group" type="button">
            Добавить группу +
          </button>
        </div>

        <div className="template-groups">
          {groups.map((group) => (
            <article
              key={group.id}
              className={
                group.isOpen ? 'template-group template-group--open' : 'template-group'
              }
            >
              <div className="template-group__header">
                <button
                  className="template-group__toggle"
                  type="button"
                  onClick={() => toggleGroup(group.id)}
                >
                  <ChevronIcon isOpen={group.isOpen} />
                  <strong>{group.name}</strong>
                  <span>{group.count} соответствия</span>
                </button>

                <button className="template-group__delete" type="button" aria-label="Удалить группу">
                  <TrashIcon />
                </button>
              </div>

              {group.isOpen && (
                <div className="template-group__body">
                  <div className="template-table">
                    <div className="template-table__head">
                      <span>НТ</span>
                      <span>ИФТ</span>
                      <span>ПСИ</span>
                      <span>ПРОМ</span>
                      <span>Комментарий</span>
                    </div>

                    <div className="template-table__body">
                      {group.rows.map((row, index) => (
                        <div className="template-table__row" key={`${group.id}-${index}`}>
                          <ServerSelect value={row.nt} options={serverOptions.nt} />
                          <ServerSelect value={row.ift} options={serverOptions.ift} />
                          <ServerSelect value={row.psi} options={serverOptions.psi} />
                          <ServerSelect value={row.prom} options={serverOptions.prom} />

                          <input
                            className="template-comment-input"
                            defaultValue={row.comment}
                          />

                          <button
                            className="template-row-remove"
                            type="button"
                            aria-label="Удалить соответствие"
                          >
                            <RemoveIcon />
                          </button>
                        </div>
                      ))}
                    </div>
                  </div>

                  <button className="template-add-match" type="button">
                    + Добавить соответствие
                  </button>

                  <label className="template-group-comment">
                    <span>
                      Комментарий группы <em>(необязательно)</em>
                    </span>
                    <input defaultValue={group.comment} />
                  </label>
                </div>
              )}
            </article>
          ))}
        </div>
      </section>

      <footer className="template-actions">
        <button className="template-delete" type="button">
          <TrashIcon />
          Удалить шаблон
        </button>

        <div className="template-actions__right">
          <button className="template-secondary-button" type="button" onClick={() => navigate('/services')}>
            Отмена
          </button>

          <button className="template-secondary-button" type="button">
            Сохранить шаблон
          </button>

          <button className="template-primary-button" type="button">
            Запустить сравнение
          </button>
        </div>
      </footer>
    </div>
  );
}
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { ComparisonLoadingScreen } from '../../components/ComparisonLoadingScreen/ComparisonLoadingScreen';
import './CreateCompareTemplatePage.css';

type MatchRow = {
  id: string;
  nt: string;
  ift: string;
  psi: string;
  prom: string;
  comment: string;
};

type MatchGroup = {
  id: string;
  name: string;
  comment: string;
  isOpen: boolean;
  matches: MatchRow[];
};

const ntOptions = [
  'tdleq-mvp000134',
  'tdleq-mvp000135',
  'tdleq-mvp000136',
  'tdleq-mvp000137',
];

const iftOptions = [
  'tdleq-mvp000127',
  'tdleq-mvp000128',
  'tdleq-mvp000129',
  'tdleq-mvp000130',
];

const psiOptions = [
  'tdleq-mvp000362',
  'tdleq-mvp000363',
  'tdleq-mvp000364',
  'tdleq-mvp000365',
];

const promOptions = [
  'tdleq-mvp000033',
  'tdleq-mvp000034',
  'tdleq-mvp000035',
  'tdleq-mvp000036',
];

const createId = () => `${Date.now()}-${Math.random().toString(16).slice(2)}`;

const createEmptyMatch = (): MatchRow => ({
  id: createId(),
  nt: '',
  ift: '',
  psi: '',
  prom: '',
  comment: '',
});

const initialGroups: MatchGroup[] = [
  {
    id: 'corax',
    name: 'Corax',
    comment: 'Кластер для отправки сообщений',
    isOpen: true,
    matches: [
      {
        id: 'corax-1',
        nt: 'tdleq-mvp000134',
        ift: 'tdleq-mvp000127',
        psi: 'tdleq-mvp000362',
        prom: 'tdleq-mvp000033',
        comment: 'Резервный кластер',
      },
      {
        id: 'corax-2',
        nt: 'tdleq-mvp000135',
        ift: 'tdleq-mvp000128',
        psi: 'tdleq-mvp000363',
        prom: 'tdleq-mvp000034',
        comment: '',
      },
      {
        id: 'corax-3',
        nt: 'tdleq-mvp000136',
        ift: 'tdleq-mvp000129',
        psi: 'tdleq-mvp000364',
        prom: 'tdleq-mvp000035',
        comment: '',
      },
      {
        id: 'corax-4',
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
    comment: '',
    isOpen: true,
    matches: [],
  },
  {
    id: 'pangolin',
    name: 'Pangolin',
    comment: '',
    isOpen: false,
    matches: [],
  },
];

const getMatchesLabel = (count: number) => {
  const lastDigit = count % 10;
  const lastTwoDigits = count % 100;

  if (lastDigit === 1 && lastTwoDigits !== 11) {
    return `${count} соответствие`;
  }

  if (
    lastDigit >= 2 &&
    lastDigit <= 4 &&
    (lastTwoDigits < 12 || lastTwoDigits > 14)
  ) {
    return `${count} соответствия`;
  }

  return `${count} соответствий`;
};

export function CreateCompareTemplatePage() {
  const navigate = useNavigate();

  const [groups, setGroups] = useState<MatchGroup[]>(initialGroups);
  const [isComparisonRunning, setIsComparisonRunning] = useState(false);

  const toggleGroup = (groupId: string) => {
    setGroups((currentGroups) =>
      currentGroups.map((group) =>
        group.id === groupId ? { ...group, isOpen: !group.isOpen } : group
      )
    );
  };

  const addGroup = () => {
    const groupName = window.prompt('Название группы', 'Новая группа');

    if (!groupName?.trim()) {
      return;
    }

    const newGroup: MatchGroup = {
      id: createId(),
      name: groupName.trim(),
      comment: '',
      isOpen: true,
      matches: [],
    };

    setGroups((currentGroups) => [...currentGroups, newGroup]);
  };

  const removeGroup = (groupId: string) => {
    setGroups((currentGroups) =>
      currentGroups.filter((group) => group.id !== groupId)
    );
  };

  const addMatch = (groupId: string) => {
    setGroups((currentGroups) =>
      currentGroups.map((group) =>
        group.id === groupId
          ? {
              ...group,
              isOpen: true,
              matches: [...group.matches, createEmptyMatch()],
            }
          : group
      )
    );
  };

  const removeMatch = (groupId: string, matchId: string) => {
    setGroups((currentGroups) =>
      currentGroups.map((group) =>
        group.id === groupId
          ? {
              ...group,
              matches: group.matches.filter((match) => match.id !== matchId),
            }
          : group
      )
    );
  };

  const updateMatch = (
    groupId: string,
    matchId: string,
    field: keyof Omit<MatchRow, 'id'>,
    value: string
  ) => {
    setGroups((currentGroups) =>
      currentGroups.map((group) =>
        group.id === groupId
          ? {
              ...group,
              matches: group.matches.map((match) =>
                match.id === matchId ? { ...match, [field]: value } : match
              ),
            }
          : group
      )
    );
  };

  const updateGroupComment = (groupId: string, comment: string) => {
    setGroups((currentGroups) =>
      currentGroups.map((group) =>
        group.id === groupId ? { ...group, comment } : group
      )
    );
  };

  const handleRunComparison = () => {
    setIsComparisonRunning(true);

    setTimeout(() => {
      navigate('/services');
    }, 10000);
  };

  if (isComparisonRunning) {
    return (
      <ComparisonLoadingScreen
        title="Запускаем сравнение"
        subtitle="Prizma анализирует параметры, сопоставляет стенды и подготавливает отчет сравнения."
      />
    );
  }

  return (
    <div className="template-page">
      <div className="template-breadcrumbs">
        <button
          className="template-breadcrumbs__back"
          type="button"
          onClick={() => navigate('/services')}
          aria-label="Назад"
        >
          <BackArrowIcon />
        </button>

        <span className="template-breadcrumbs__text">
          ОТТ Платформы Экосистемы 4G
        </span>

        <span className="template-breadcrumbs__separator">
          <BreadcrumbSeparatorIcon />
        </span>

        <span className="template-breadcrumbs__text">Создание шаблона</span>
      </div>

      <header className="template-page__header">
        <h1>Создание шаблона сравнения</h1>
      </header>

      <div className="template-form">
        <label className="template-field template-field--name">
          <span>Название шаблона</span>
          <input defaultValue="Corax Prod" maxLength={40} />
        </label>

        <label className="template-field template-field--description">
          <span>
            Описание <em>(необязательно)</em>
          </span>

          <textarea
            defaultValue="Проверка соответствий параметров Corax между стендами перед релизом"
            maxLength={160}
          />
        </label>
      </div>

      <section className="template-matches">
        <div className="template-matches__title">
          <h2>Соответствия стендов</h2>

          <button
            className="template-add-group"
            type="button"
            onClick={addGroup}
          >
            Добавить группу +
          </button>
        </div>

        <div className="template-groups">
          {groups.map((group) => (
            <article className="template-group" key={group.id}>
              <div className="template-group__header">
                <button
                  className="template-group__toggle"
                  type="button"
                  onClick={() => toggleGroup(group.id)}
                >
                  <span
                    className={`template-group__chevron ${
                      group.isOpen ? 'template-group__chevron--open' : ''
                    }`}
                  >
                    <ChevronIcon />
                  </span>

                  <strong>{group.name}</strong>

                  <span>{getMatchesLabel(group.matches.length)}</span>
                </button>

                <button
                  className="template-group__delete"
                  type="button"
                  onClick={() => removeGroup(group.id)}
                  aria-label={`Удалить группу ${group.name}`}
                >
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
                      <span />
                    </div>

                    <div className="template-table__body">
                      {group.matches.map((match) => (
                        <div className="template-table__row" key={match.id}>
                          <SelectCell
                            value={match.nt}
                            options={ntOptions}
                            onChange={(value) =>
                              updateMatch(group.id, match.id, 'nt', value)
                            }
                          />

                          <SelectCell
                            value={match.ift}
                            options={iftOptions}
                            onChange={(value) =>
                              updateMatch(group.id, match.id, 'ift', value)
                            }
                          />

                          <SelectCell
                            value={match.psi}
                            options={psiOptions}
                            onChange={(value) =>
                              updateMatch(group.id, match.id, 'psi', value)
                            }
                          />

                          <SelectCell
                            value={match.prom}
                            options={promOptions}
                            onChange={(value) =>
                              updateMatch(group.id, match.id, 'prom', value)
                            }
                          />

                          <input
                            className="template-comment-input"
                            value={match.comment}
                            maxLength={80}
                            placeholder="До 80 символов"
                            onChange={(event) =>
                              updateMatch(
                                group.id,
                                match.id,
                                'comment',
                                event.target.value
                              )
                            }
                          />

                          <button
                            className="template-row-remove"
                            type="button"
                            onClick={() => removeMatch(group.id, match.id)}
                            aria-label="Удалить соответствие"
                          >
                            ×
                          </button>
                        </div>
                      ))}
                    </div>
                  </div>

                  <button
                    className="template-add-match"
                    type="button"
                    onClick={() => addMatch(group.id)}
                  >
                    + Добавить соответствие
                  </button>

                  <label className="template-group-comment">
                    <span>
                      Комментарий группы <em>(необязательно)</em>
                    </span>

                    <input
                      value={group.comment}
                      maxLength={120}
                      onChange={(event) =>
                        updateGroupComment(group.id, event.target.value)
                      }
                    />
                  </label>
                </div>
              )}
            </article>
          ))}
        </div>
      </section>

      <div className="template-actions">
        <button className="template-delete" type="button">
          <TrashIcon />
          Удалить шаблон
        </button>

        <div className="template-actions__right">
          <button
            className="template-secondary-button"
            type="button"
            onClick={() => navigate('/services')}
          >
            Отмена
          </button>

          <button className="template-secondary-button" type="button">
            Сохранить шаблон
          </button>

          <button
            className="template-primary-button"
            type="button"
            onClick={handleRunComparison}
          >
            Запустить сравнение
          </button>
        </div>
      </div>
    </div>
  );
}

type SelectCellProps = {
  value: string;
  options: string[];
  onChange: (value: string) => void;
};

function SelectCell({ value, options, onChange }: SelectCellProps) {
  return (
    <select
      className="template-select"
      value={value}
      onChange={(event) => onChange(event.target.value)}
    >
      <option value="" disabled>
        Выберите
      </option>

      {options.map((option) => (
        <option value={option} key={option}>
          {option}
        </option>
      ))}
    </select>
  );
}

function BackArrowIcon() {
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

function BreadcrumbSeparatorIcon() {
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

function ChevronIcon() {
  return (
    <svg
      width="18"
      height="18"
      viewBox="0 0 24 24"
      fill="none"
      aria-hidden="true"
    >
      <path
        d="M9 6L15 12L9 18"
        stroke="currentColor"
        strokeWidth="2.4"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}

function TrashIcon() {
  return (
    <svg
      width="18"
      height="18"
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
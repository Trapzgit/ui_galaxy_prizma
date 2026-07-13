import './ComparisonLoadingScreen.css';

type ComparisonLoadingScreenProps = {
  title?: string;
  subtitle?: string;
};

const glyphLines = [
  'ᚠ ᚱ ᚲ ᛞ ᛖ ᛚ ᚷ ᚺ',
  'ᛋ ᛏ ᛟ ᚾ ᛗ ᛃ ᚦ ᛉ',
  'Ξ λ ∴ ⟡ ⌁ ⟁ ∞ ',
  '氷 火 水 風 光 影 ',
  'ᚾ ᛚ ᚱ ᛟ ᛖ ᚦ ᚲ ᛞ',
];

export function ComparisonLoadingScreen({
  title = 'Запускаем сравнение',
  subtitle = 'Prizma анализирует параметры, сопоставляет стенды и подготавливает отчет сравнения.',
}: ComparisonLoadingScreenProps) {
  return (
    <div className="comparison-loading">
      <div className="comparison-loading__card">
        <div className="comparison-loading__scene">
          <div className="comparison-loading__scan-box" aria-hidden="true">
            <div className="comparison-loading__scan-object">
              <div className="comparison-loading__magnifier">
                <div className="comparison-loading__lens" />
                <div className="comparison-loading__handle" />
              </div>

              <div className="comparison-loading__beam comparison-loading__beam--incoming" />
            </div>
          </div>

          <div className="comparison-loading__prism" aria-hidden="true">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="90"
              height="78"
              viewBox="0 0 54 47"
              fill="none"
            >
              <path
                d="M26.8468 7L47.6314 43H6.06219L26.8468 7Z"
                stroke="#00E007"
                strokeWidth="4.5"
              />
            </svg>
          </div>

          <div className="comparison-loading__beam comparison-loading__beam--outgoing" />

          <div className="comparison-loading__glyphs" aria-hidden="true">
            {glyphLines.map((line, index) => (
              <div
                className={`comparison-loading__glyph-line comparison-loading__glyph-line--${index + 1}`}
                key={line}
              >
                {line}
              </div>
            ))}
          </div>
        </div>

        <div className="comparison-loading__text">
          <h1>{title}</h1>
          <p>{subtitle}</p>
        </div>
      </div>
    </div>
  );
}
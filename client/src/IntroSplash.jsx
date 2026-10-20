
import ChapterMark from './ChapterMark.jsx';
import { useEffect, useState } from 'react';
import './IntroSplash.css';

export default function IntroSplash() {
  const [leaving, setLeaving] = useState(false);
  const [hidden, setHidden] = useState(false);

  useEffect(() => {
    const exitTimer = window.setTimeout(() => {
      setLeaving(true);
    }, 1800);

    const removeTimer = window.setTimeout(() => {
      setHidden(true);
    }, 2000);

    return () => {
      window.clearTimeout(exitTimer);
      window.clearTimeout(removeTimer);
    };
  }, []);

  if (hidden) return null;

  return (
    <div
      className={`intro-splash${leaving ? ' intro-splash--leaving' : ''}`}
      role="status"
      aria-label="Welcome to GDGoC TKIET"
    >
      <div className="intro-splash__content">
        <div className="intro-splash__mark">
          <ChapterMark />
        </div>

        <div className="intro-splash__wordmark">
          <span className="intro-splash__name">
            GDGoC <em>TKIET</em>
          </span>

          <span className="intro-splash__rule" />

          <span className="intro-splash__caption">
            BUILD · LEARN · CONNECT
          </span>
        </div>
      </div>
    </div>
  );
}

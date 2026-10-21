import ChapterMark from './ChapterMark.jsx';
import IntroSplash from './IntroSplash.jsx';
import { useEffect, useState } from 'react';
import {
  Link,
  Routes,
  Route,
} from 'react-router-dom';
import Events from './pages/events.jsx'; 
import About from "./pages/about.jsx";
import Team from './pages/team.jsx';
import { motion } from 'motion/react';
import './App.css';


const navigation = [
  { label: 'Home', href: '/', color: 'blue' },
  { label: 'About', href: '/about', color: 'red' },
  { label: 'Events', href: '/events', color: 'yellow' },
  { label: 'Team', href: '/team', color: 'green' },
];


function ChapterLogo() {
  return (
    <a className="brand" href="#home" aria-label="GDGoC TKIET home">
      <ChapterMark />
      <span className="brand-copy">
        <strong>GDGoC</strong>
        <span>TKIET</span>
      </span>
    </a>
  );
}


function ThemeIcon({ theme }) {
  if (theme === 'dark') {
    return (
      <svg viewBox="0 0 24 24" fill="none" aria-hidden="true">
        <circle cx="12" cy="12" r="4" stroke="currentColor" strokeWidth="1.7" />
        <path
          d="M12 2v2m0 16v2M4.93 4.93l1.42 1.42m11.3 11.3 1.42 1.42M2 12h2m16 0h2M4.93 19.07l1.42-1.42m11.3-11.3 1.42-1.42"
          stroke="currentColor"
          strokeWidth="1.7"
          strokeLinecap="round"
        />
      </svg>
    );
  }

  return (
    <svg viewBox="0 0 24 24" fill="none" aria-hidden="true">
      <path
        d="M20.2 15.1A8.5 8.5 0 0 1 8.9 3.8 8.7 8.7 0 1 0 20.2 15.1Z"
        stroke="currentColor"
        strokeWidth="1.7"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}

function ArrowIcon() {
  return (
    <svg viewBox="0 0 20 20" fill="none" aria-hidden="true">
      <path
        d="M4.2 10h11.5m-4.7-4.7 4.7 4.7-4.7 4.7"
        stroke="currentColor"
        strokeWidth="1.7"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}

function HeroArtwork() {
  return (
    <div className="artwork" aria-label="Creative technology illustration">
      <div className="artwork-halo" />

      <svg
        className="orbit orbit-one"
        viewBox="0 0 540 540"
        fill="none"
        aria-hidden="true"
      >
        <ellipse
          cx="270"
          cy="270"
          rx="222"
          ry="94"
          stroke="currentColor"
          strokeOpacity=".24"
          strokeWidth="1"
          transform="rotate(-38 270 270)"
        />
      </svg>

      <svg
        className="orbit orbit-two"
        viewBox="0 0 540 540"
        fill="none"
        aria-hidden="true"
      >
        <ellipse
          cx="270"
          cy="270"
          rx="206"
          ry="120"
          stroke="currentColor"
          strokeOpacity=".18"
          strokeWidth="1"
          transform="rotate(42 270 270)"
        />
      </svg>

      <svg
        className="orbit orbit-three"
        viewBox="0 0 540 540"
        fill="none"
        aria-hidden="true"
      >
        <circle
          cx="270"
          cy="270"
          r="174"
          stroke="currentColor"
          strokeOpacity=".14"
          strokeWidth="1"
          strokeDasharray="3 8"
        />
      </svg>

      <motion.div
        className="artwork-core"
        animate={{ y: [0, -9, 0], rotate: [0, 2, 0] }}
        transition={{ duration: 7, repeat: Infinity, ease: 'easeInOut' }}
      >
        <div className="core-topline">
          <span />
          <span />
          <span />
        </div>

        <div className="core-content">
          <div className="core-glyph">
            <span className="glyph-blue" />
            <span className="glyph-red" />
            <span className="glyph-yellow" />
            <span className="glyph-green" />
          </div>
          <div className="core-lines">
            <span />
            <span />
            <span />
          </div>
        </div>

        <div className="core-footer">
          <span>IDEAS INTO IMPACT</span>
          <span className="core-status">
            <i />
            CONNECTED
          </span>
        </div>
      </motion.div>

      <motion.div
        className="float-card float-card-build"
        animate={{ y: [0, -8, 0] }}
        transition={{ duration: 5, repeat: Infinity, ease: 'easeInOut' }}
      >
        <span className="float-card-icon icon-blue">&lt;/&gt;</span>
        <span>
          <strong>Build</strong>
          <small>Turn ideas into code</small>
        </span>
      </motion.div>

      <motion.div
        className="float-card float-card-create"
        animate={{ y: [0, 8, 0] }}
        transition={{
          duration: 5.5,
          repeat: Infinity,
          ease: 'easeInOut',
          delay: 0.6,
        }}
      >
        <span className="float-card-icon icon-yellow">✳</span>
        <span>
          <strong>Create</strong>
          <small>Think beyond limits</small>
        </span>
      </motion.div>

      <motion.div
        className="float-card float-card-connect"
        animate={{ y: [0, -6, 0] }}
        transition={{
          duration: 4.5,
          repeat: Infinity,
          ease: 'easeInOut',
          delay: 0.3,
        }}
      >
        <span className="avatar-stack" aria-hidden="true">
          <i />
          <i />
          <i />
        </span>
        <span>
          <strong>Connect</strong>
          <small>Learn together</small>
        </span>
      </motion.div>

      <span className="artwork-dot dot-blue" />
      <span className="artwork-dot dot-red" />
      <span className="artwork-dot dot-yellow" />
      <span className="artwork-dot dot-green" />
    </div>
  );
}

function App() {
  const [theme, setTheme] = useState(() => {
    try {
      return localStorage.getItem('gdgoc-theme') === 'dark' ? 'dark' : 'light';
    } catch {
      return 'light';
    }
  });

  useEffect(() => {
    document.documentElement.dataset.theme = theme;
    document.documentElement.style.colorScheme = theme;

    try {
      localStorage.setItem('gdgoc-theme', theme);
    } catch {
      // The theme still works if browser storage is unavailable.
    }
  }, [theme]);

  const toggleTheme = () => {
    setTheme((current) => (current === 'light' ? 'dark' : 'light'));
  };

  return (
    <div className="site-shell">
      {window.location.pathname === '/' && <IntroSplash />}
      <header className="site-header">
        <div className="nav-inner">
          <ChapterLogo />

          
<nav className="nav-links" aria-label="Main navigation">
  {navigation.map((item) => (
    <Link
      key={item.label}
      to={item.href}
      className={`nav-link nav-${item.color}`}
    >
      {item.label}
    </Link>
  ))}
</nav>


          <div className="nav-actions">
            <button
              type="button"
              className="theme-toggle"
              onClick={toggleTheme}
              aria-label={`Switch to ${theme === 'light' ? 'dark' : 'light'} mode`}
              title={`Switch to ${theme === 'light' ? 'dark' : 'light'} mode`}
            >
              <ThemeIcon theme={theme} />
            </button>
          </div>
        </div>
      </header>

      <Routes>
        <Route path="/" element={<main>
        <section className="hero section-container" id="home">
          <div className="hero-copy">
            <motion.div
              className="eyebrow"
              initial={{ opacity: 0, y: 12 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.55 }}
            >
              <span className="eyebrow-mark">
                <i />
                <i />
                <i />
                <i />
              </span>
              <span>GOOGLE DEVELOPER GROUPS ON CAMPUS</span>
            </motion.div>

            <motion.h1
              initial={{ opacity: 0, y: 22 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.65, delay: 0.08 }}
            >
              Build what’s next.
              <br />
              <span className="hero-title-accent">Together.</span>
            </motion.h1>

            <motion.p
              className="hero-description"
              initial={{ opacity: 0, y: 18 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.18 }}
            >
              A community of curious minds, creative builders, and future
              developers at TKIET. Learn new technologies, make meaningful
              projects, and grow beyond the classroom.
            </motion.p>

            <motion.div
              className="hero-actions"
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.27 }}
            >
              <Link className="button button-primary" to="/events">
  Ongoing Events
  <ArrowIcon />
</Link>
              <Link className="button button-secondary" to="/about">
               Discover our community
              </Link>
            </motion.div>

            <motion.div
              className="hero-note"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.7, delay: 0.4 }}
            >
              <span className="hero-note-line" />
              <span>Curiosity first. Community always.</span>
            </motion.div>
          </div>

          <motion.div
            className="hero-visual"
            initial={{ opacity: 0, scale: 0.94 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.12 }}
          >
            <HeroArtwork />
          </motion.div>

          <div className="hero-bottom-label">
            <span>01</span>
            <span className="hero-bottom-rule" />
            <span>LEARN · BUILD · SHARE</span>
          </div>
        </section>

        <section className="content-section section-container" id="events">
          <div className="section-heading">
            <div>
              <span className="section-kicker">MAKE SOMETHING HAPPEN</span>
              <h2>
                Learn by <span className="serif-accent">doing.</span>
              </h2>
            </div>

            <p>
              Workshops, collaborative builds, and opportunities to discover
              what you can do with technology.
            </p>
          </div>

          <div className="event-grid">
            <article className="event-card event-card-featured">
              <div className="event-card-top">
                <span className="event-index">01 / EXPLORE</span>
                <span className="event-art event-art-blue">
                  <span className="event-art-shape shape-one" />
                  <span className="event-art-shape shape-two" />
                  <span className="event-art-shape shape-three" />
                </span>
              </div>
              <div className="event-card-content">
                <span className="event-category">TECHNOLOGY</span>
                <h3>Discover something new.</h3>
                <p>
                  Explore modern tools, ideas, and technologies through
                  hands-on learning and community sessions.
                </p>
                <span className="event-status">EVENTS</span>
              </div>
            </article>

            <article className="event-card">
              <div className="event-card-top">
                <span className="event-index">02 / BUILD</span>
                <span className="event-art event-art-red">
                  <span className="build-bracket">{'{ }'}</span>
                  <span className="build-cursor" />
                </span>
              </div>
              <div className="event-card-content">
                <span className="event-category">DEVELOPMENT</span>
                <h3>Turn ideas into projects.</h3>
                <p>
                  Put concepts into practice, experiment with code, and
                  create alongside fellow student developers.
                </p>
                <span className="event-status">HACKATHONS</span>
              </div>
            </article>

            <article className="event-card">
              <div className="event-card-top">
                <span className="event-index">03 / CONNECT</span>
                <span className="event-art event-art-green">
                  <span className="connect-node node-one" />
                  <span className="connect-node node-two" />
                  <span className="connect-node node-three" />
                  <span className="connect-line line-one" />
                  <span className="connect-line line-two" />
                  <span className="connect-line line-three" />
                </span>
              </div>
              <div className="event-card-content">
                <span className="event-category">COMMUNITY</span>
                <h3>Grow with each other.</h3>
                <p>
                  Share perspectives, meet people with similar interests,
                  and make your learning journey collaborative.
                </p>
                <span className="event-status">WORKSHOPS</span>
              </div>
            </article>
          </div>
        </section>

        
<section className="community-strip organizers-section" id="about">
  <div className="section-container">
    <div className="organizers-heading">
      <span className="section-kicker">THE PEOPLE BEHIND THE COMMUNITY</span>
      <h2>
        Meet our <span className="serif-accent">organizers.</span>
      </h2>
      <p>
        Meet the people bringing our developer community together.
      </p>
    </div>

    <div className="organizers-grid">
      {[
        { name: 'Sanika Jadhav', photo: '' },
        { name: 'Rushikesh Babar', photo: '' },
        { name: 'Asmita Gayakwad', photo: '' },
      ].map((person) => (
        <article className="organizer-card" key={person.name}>
          <div className="organizer-photo">
            {person.photo ? (
              <img src={person.photo} alt={person.name} />
            ) : (
              <span>{person.name.split(' ').slice(-1)[0][0]}</span>
            )}
          </div>
          <h3>{person.name}</h3>
          <p>Organizer</p>
        </article>
      ))}
    </div>
  </div>
</section>

<section className="campus-section" id="campus">
  <div className="section-container campus-layout">
    <div className="campus-copy">
      <span className="section-kicker">
        OUR COMMUNITY · OUR CAMPUS
      </span>

      <h2>
        Rooted at
        <br />
        <span className="serif-accent">TKIET.</span>
      </h2>

      <p className="campus-description">
        Great ideas start with curious people coming together.
        Find us at TKIET, Warananagar, where our developer
        community learns, builds, and grows.
      </p>

      <div className="campus-location">
        <span className="campus-location-icon">
          <svg viewBox="0 0 24 24" fill="none" aria-hidden="true">
            <path
              d="M20 10c0 5-8 12-8 12S4 15 4 10a8 8 0 1 1 16 0Z"
              stroke="currentColor"
              strokeWidth="1.7"
              strokeLinejoin="round"
            />
            <circle
              cx="12"
              cy="10"
              r="2.5"
              stroke="currentColor"
              strokeWidth="1.7"
            />
          </svg>
        </span>

        <div>
          <strong>TKIET, Warananagar</strong>
          <span>Kolhapur district, Maharashtra, India</span>
        </div>
      </div>

      <a
        className="button button-primary campus-directions"
        href="https://www.google.com/maps/search/?api=1&query=TKIET+Warananagar+Maharashtra"
        target="_blank"
        rel="noreferrer"
      >
        Open in Google Maps
        <ArrowIcon />
      </a>

      <div className="campus-coordinates-label">
        <span className="campus-live-dot" />
        FIND YOUR WAY TO THE COMMUNITY
      </div>
    </div>

    <div className="campus-map-frame">
      <div className="campus-map-topbar">
        <span className="campus-map-indicator">
          <i />
          CAMPUS LOCATION
        </span>
        <span className="campus-map-index">TKIET / MH</span>
      </div>

      <div className="campus-map">
        <iframe
          title="Interactive map showing TKIET, Warananagar"
          src="https://maps.google.com/maps?q=TKIET%20Warananagar%20Maharashtra&t=&z=15&ie=UTF8&iwloc=&output=embed"
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
          allowFullScreen
        />
        <div className="campus-map-caption">
          <span className="campus-map-pin" />
          <div>
            <strong>TKIET</strong>
            <span>Warananagar, Maharashtra</span>
          </div>
        </div>
      </div>

      <div className="campus-map-footer">
        <span>LEARN.</span>
        <span>BUILD.</span>
        <span>CONNECT.</span>
      </div>
    </div>
  </div>
</section>

           
              </main>} />

        
        <Route path="/about" element={<About />} />
        <Route path="/events" element={<Events />} />
        <Route path="/team" element={<Team />} />
      </Routes>


      <footer className="site-footer">
        <div className="section-container footer-inner">
          <ChapterLogo />
          <p>Built for curious minds at TKIET.</p>
          <a
            className="footer-link"
            
href="https://gdg.community.dev/gdg-on-campus-tatyasaheb-kore-institute-of-engineering-technology-kolhapur-india/"

            target="_blank"
            rel="noreferrer"
          >
            Google Developer Groups
            <ArrowIcon />
          </a>
          <span className="footer-copyright">© GDGoC TKIET</span>
        </div>
      </footer>
    </div>
  );
}

export default App;
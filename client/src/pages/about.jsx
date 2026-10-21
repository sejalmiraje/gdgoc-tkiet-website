import { motion } from "motion/react";
import { Link } from "react-router-dom";
import "./about.css";

const principles = [
  {
    number: "01",
    title: "Learn by building.",
    description:
      "Turn curiosity into practical experience through projects, experiments, and hands-on sessions.",
    color: "blue",
    symbol: "</>",
  },
  {
    number: "02",
    title: "Grow together.",
    description:
      "Share knowledge, exchange ideas, and make technology more approachable for everyone.",
    color: "red",
    symbol: "↗",
  },
  {
    number: "03",
    title: "Create with purpose.",
    description:
      "Use technology to explore meaningful problems and build solutions that matter.",
    color: "yellow",
    symbol: "✳",
  },
  {
    number: "04",
    title: "Stay curious.",
    description:
      "Explore new tools, emerging technologies, and perspectives beyond the classroom.",
    color: "green",
    symbol: "∞",
  },
];

const journey = [
  {
    number: "01",
    title: "Discover",
    description: "Explore technologies, ask questions, and find what excites you.",
  },
  {
    number: "02",
    title: "Experiment",
    description: "Learn through workshops, collaboration, and hands-on practice.",
  },
  {
    number: "03",
    title: "Build",
    description: "Bring ideas to life through projects and creative problem-solving.",
  },
  {
    number: "04",
    title: "Share",
    description: "Celebrate progress, exchange knowledge, and help others grow.",
  },
];

function Reveal({ children, className = "", delay = 0 }) {
  return (
    <motion.div
      className={className}
      initial={{ opacity: 0, y: 22 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.16 }}
      transition={{ duration: 0.65, delay, ease: [0.22, 1, 0.36, 1] }}
    >
      {children}
    </motion.div>
  );
}

export default function About() {
  return (
    <main className="about-page">
      <section className="about-hero">
        <div className="about-hero-grid" aria-hidden="true" />

        <div className="about-hero-copy">
          <Reveal className="about-eyebrow">
            <span className="about-live-dot" />
            ABOUT OUR CHAPTER
            <span className="about-eyebrow-line" />
            TKIET
          </Reveal>

          <Reveal delay={0.08}>
            <h1>
              Technology is better
              <br />
              <span className="about-heading-accent">
                when we build
              </span>
              <br />
              <span className="about-heading-last">together.</span>
            </h1>
          </Reveal>

          <Reveal delay={0.16}>
            <p className="about-hero-description">
              A community for curious minds, creative builders, and people
              who believe there is always something new to learn.
            </p>
          </Reveal>

          <Reveal className="about-hero-actions" delay={0.23}>
            <Link className="about-primary-link" to="/events">
              Explore our events <span aria-hidden="true">↗</span>
            </Link>
            <a className="about-secondary-link" href="#our-story">
              Get to know us <span aria-hidden="true">↓</span>
            </a>
          </Reveal>
        </div>

        <Reveal className="about-artwork" delay={0.12}>
          <div className="about-art-orbit about-art-orbit-one" />
          <div className="about-art-orbit about-art-orbit-two" />

          <div className="about-art-label about-art-label-top">
            <span className="about-art-label-dot blue-dot" />
            curiosity.exe
          </div>

          <div className="about-art-core">
            <span className="about-core-symbol">G</span>
            <span className="about-core-caption">MAKE • LEARN • GROW</span>
          </div>

          <span className="about-art-node about-node-blue" aria-hidden="true">
            {"</>"}
          </span>
          <span className="about-art-node about-node-red" aria-hidden="true">
            +
          </span>
          <span className="about-art-node about-node-yellow" aria-hidden="true">
            *
          </span>
          <span className="about-art-node about-node-green" aria-hidden="true">
            ↗
          </span>

          <div className="about-art-label about-art-label-bottom">
            <span className="about-art-label-dot green-dot" />
            ideas in progress
          </div>
        </Reveal>

        <div className="about-hero-footer" aria-hidden="true">
          <span>CURIOUS BY NATURE</span>
          <span className="about-footer-line" />
          <span>BUILDING WHAT'S NEXT</span>
        </div>
      </section>

      <section className="about-story section-shell" id="our-story">
        <Reveal className="about-section-intro">
          <span className="about-kicker">01 / THE BIGGER PICTURE</span>
          <h2>
            Not just learning
            <br />
            <span>technology.</span>
            <br />
            Being part of it.
          </h2>
        </Reveal>

        <Reveal className="about-story-copy" delay={0.1}>
          <span className="about-story-mark" aria-hidden="true">
            “
          </span>
          <p>
            We believe the best way to understand technology is to get
            involved: try things, make mistakes, collaborate, and keep
            creating.
          </p>
          <p>
            GDGoC TKIET is envisioned as a space where students can explore
            developer technologies, learn from one another, and turn their
            interests into practical experience.
          </p>
          <span className="about-copy-note">
            A COMMUNITY BUILT AROUND CURIOSITY
          </span>
        </Reveal>
      </section>

      <section className="about-principles section-shell">
        <Reveal className="about-section-heading">
          <div>
            <span className="about-kicker">02 / WHAT GUIDES US</span>
            <h2>
              Four ideas.
              <br />
              <span>One community.</span>
            </h2>
          </div>
          <p>
            A little curiosity can go a long way when you have the right
            people to learn and build with.
          </p>
        </Reveal>

        <div className="about-principle-grid">
          {principles.map((principle, index) => (
            <Reveal
              key={principle.number}
              className={`about-principle about-${principle.color}`}
              delay={index * 0.07}
            >
              <div className="about-principle-top">
                <span className="about-principle-number">
                  {principle.number}
                </span>
                <span className="about-principle-symbol" aria-hidden="true">
                  {principle.symbol}
                </span>
              </div>
              <h3>{principle.title}</h3>
              <p>{principle.description}</p>
              <span className="about-principle-arrow" aria-hidden="true">
                ↗
              </span>
            </Reveal>
          ))}
        </div>
      </section>

      <section className="about-journey">
        <div className="about-journey-inner section-shell">
          <Reveal className="about-journey-heading">
            <span className="about-kicker">03 / THE JOURNEY</span>
            <h2>
              From “what if?”
              <br />
              to <span>“it works!”</span>
            </h2>
            <p>
              There is no single way to grow as a developer. Start with an
              idea, follow your curiosity, and keep moving forward.
            </p>
          </Reveal>

          <div className="about-journey-list">
            {journey.map((step, index) => (
              <Reveal
                key={step.number}
                className="about-journey-step"
                delay={index * 0.08}
              >
                <span className="about-journey-number">{step.number}</span>
                <div className="about-journey-step-copy">
                  <h3>{step.title}</h3>
                  <p>{step.description}</p>
                </div>
                <span className="about-journey-arrow" aria-hidden="true">
                  ↗
                </span>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <section className="about-cta section-shell">
        <Reveal className="about-cta-inner">
          <span className="about-kicker">YOUR NEXT CHAPTER STARTS HERE</span>
          <h2>
            Curious about
            <br />
            what's <span>happening?</span>
          </h2>
          <p>
            Explore upcoming activities, discover new interests, and find
            your next opportunity to build something.
          </p>
          <Link className="about-primary-link" to="/events">
            Explore events <span aria-hidden="true">↗</span>
          </Link>
          <div className="about-cta-decoration" aria-hidden="true">
            <span className="about-cta-shape shape-blue" />
            <span className="about-cta-shape shape-red" />
            <span className="about-cta-shape shape-yellow" />
            <span className="about-cta-shape shape-green" />
          </div>
        </Reveal>
      </section>
    </main>
  );
}

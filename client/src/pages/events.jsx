
import { useEffect, useRef, useState } from "react";
import "./events.css";

// One open sample, one closed sample, and four empty placeholders.
const sampleDeadlineOpen = "2026-11-15T23:59:00+05:30";
const sampleDeadlineClosed = "2026-10-01T23:59:00+05:30";

const placeholder = (id, color) => ({
  id,
  title: "-----",
  category: "-----",
  description: "-----",
  fee: "-----",
  format: "-----",
  deadline: "",
  registrationUrl: "",
  color,
});

const eventItems = [
  {
    id: "event-1",
    title: "Demo Event — Registration Open",
    category: "Demonstration",
    description: "Sample event to demonstrate open registration and the live deadline countdown.",
    fee: "Free",
    format: "In-person",
    deadline: sampleDeadlineOpen,
    registrationUrl: "",
    color: "blue",
  },
  {
    id: "event-2",
    title: "Demo Event — Registration Closed",
    category: "Demonstration",
    description: "Sample event to demonstrate automatic registration closure after the deadline.",
    fee: "Free",
    format: "Online",
    deadline: sampleDeadlineClosed,
    registrationUrl: "",
    color: "pink",
  },
  placeholder("event-3", "green"),
  placeholder("event-4", "yellow"),
  placeholder("event-5", "purple"),
  placeholder("event-6", "blue"),
];

const hackathonItems = Array.from({ length: 6 }, (_, i) =>
  placeholder(`hackathon-${i + 1}`, ["purple", "green", "yellow", "blue", "pink", "green"][i])
);

const workshopItems = Array.from({ length: 6 }, (_, i) =>
  placeholder(`workshop-${i + 1}`, ["blue", "pink", "green", "purple", "yellow", "blue"][i])
);

function getStatus(deadline, now) {
  if (!deadline) return "unset";

  const time = new Date(deadline).getTime();

  if (!Number.isFinite(time)) return "unset";

  return now < time ? "open" : "closed";
}

function Deadline({ deadline, now }) {
  const remaining = new Date(deadline).getTime() - now;

  if (!Number.isFinite(remaining) || remaining <= 0) {
    return <span className="deadline-value">Deadline passed</span>;
  }

  const days = Math.floor(remaining / 86400000);
  const hours = Math.floor((remaining % 86400000) / 3600000);
  const minutes = Math.floor((remaining % 3600000) / 60000);
  const seconds = Math.floor((remaining % 60000) / 1000);

  return (
    <div className="deadline-countdown" aria-label="Time remaining">
      {days > 0 && <span>{days}d </span>}
      <span>{String(hours).padStart(2, "0")}h </span>
      <span>{String(minutes).padStart(2, "0")}m </span>
      <span>{String(seconds).padStart(2, "0")}s</span>
    </div>
  );
}

function RegistrationButton({ item, status }) {
  const hasLink = Boolean(item.registrationUrl);
  const canRegister = status === "open" && hasLink;

  let label = "-----";

  if (status === "open") {
    label = hasLink ? "Register Now ↗" : "Register Now · Demo";
  } else if (status === "closed") {
    label = "Registration Closed";
  }

  return (
    <button
      className={`registration-button ${
        status === "open"
          ? "is-open"
          : status === "closed"
            ? "is-closed"
            : ""
      }`}
      type="button"
      disabled={status !== "open" || !hasLink}
      onClick={() => {
        if (canRegister) {
          window.open(
            item.registrationUrl,
            "_blank",
            "noopener,noreferrer"
          );
        }
      }}
      title={
        status === "open" && !hasLink
          ? "Demo only. A real registration link has not been added."
          : undefined
      }
    >
      {label}
    </button>
  );
}

function EventCard({ item, now }) {
  const status = getStatus(item.deadline, now);

  const deadlineText =
    status === "unset"
      ? "-----"
      : new Date(item.deadline).toLocaleString("en-IN", {
          day: "numeric",
          month: "short",
          year: "numeric",
          hour: "numeric",
          minute: "2-digit",
        });

  return (
    <article className={`collection-card accent-${item.color}`}>
      <div className="collection-card-art">
        <div className="art-orbit orbit-one" />
        <div className="art-orbit orbit-two" />

        <div className="art-core" aria-hidden="true">
          ✳
        </div>

        <span className="art-index">
          {String(item.id.split("-").pop()).padStart(2, "0")}
        </span>

        <span className="art-category">{item.category}</span>
      </div>

      <div className="collection-card-body">
        <div className="collection-card-meta">
          <span
            className={`event-status ${
              status === "open"
                ? "registration-open"
                : status === "closed"
                  ? "completed"
                  : ""
            }`}
          >
            {status !== "unset" && <span className="status-dot" />}
            {status === "open"
              ? "Registration Open"
              : status === "closed"
                ? "Registration Closed"
                : "-----"}
          </span>
        </div>

        <h3>{item.title}</h3>
        <p>{item.description}</p>

        <div className="event-details">
          <div>
            <span className="meta-caption">ENTRY</span>
            <span className="meta-value">{item.fee}</span>
          </div>
          <div>
            <span className="meta-caption">FORMAT</span>
            <span className="meta-value">{item.format}</span>
          </div>
        </div>

        <div className="event-deadline">
          <span className="meta-caption">REGISTRATION DEADLINE</span>
          <span className="deadline-value">{deadlineText}</span>

          {status === "open" && (
            <Deadline deadline={item.deadline} now={now} />
          )}
        </div>

        <RegistrationButton item={item} status={status} />
      </div>
    </article>
  );
}

function EventSection({ id, eyebrow, title, description, items, now }) {
  const scrollRef = useRef(null);

  const scrollCards = (direction) => {
    if (!scrollRef.current) return;

    const card = scrollRef.current.querySelector(".collection-card");
    const distance = card
      ? card.getBoundingClientRect().width + 20
      : 320;

    scrollRef.current.scrollBy({
      left: direction * distance,
      behavior: "smooth",
    });
  };

  return (
    <section className="event-collection" id={id}>
      <div className="collection-heading">
        <div className="collection-copy">
          <span className="section-eyebrow">{eyebrow}</span>
          <h2>{title}</h2>
          <p>{description}</p>
        </div>

        <div className="carousel-controls">
          <button
            type="button"
            className="carousel-arrow"
            aria-label={`Previous ${title}`}
            onClick={() => scrollCards(-1)}
          >
            &#8592;
          </button>
          <button
            type="button"
            className="carousel-arrow"
            aria-label={`Next ${title}`}
            onClick={() => scrollCards(1)}
          >
            &#8594;
          </button>
        </div>
      </div>

      <div
        className="event-card-grid event-card-carousel"
        ref={scrollRef}
      >
        {items.map((item) => (
          <EventCard key={item.id} item={item} now={now} />
        ))}
      </div>
    </section>
  );
}

export default function Events() {
  const [now, setNow] = useState(() => Date.now());

  useEffect(() => {
    const timer = window.setInterval(() => setNow(Date.now()), 1000);
    return () => window.clearInterval(timer);
  }, []);

  const featuredItems = [
    {
      title: "Events",
      description: "Connect with developers and take part in chapter activities.",
      icon: "✳",
      color: "blue",
      href: "#chapter-events",
      label: "EXPLORE EVENTS",
    },
    {
      title: "Hackathons",
      description: "Build with a team, solve challenges, and turn ideas into prototypes.",
      icon: "⌘",
      color: "purple",
      href: "#hackathons",
      label: "EXPLORE HACKATHONS",
    },
    {
      title: "Workshops",
      description: "Develop practical skills through guided, hands-on learning.",
      icon: "</>",
      color: "green",
      href: "#workshops",
      label: "EXPLORE WORKSHOPS",
    },
  ];

  return (
    <main className="events-page">
      <section className="events-shell featured-section">
        <div className="featured-heading">
          <div>
            <span className="section-eyebrow">
              DISCOVER · PARTICIPATE · BUILD
            </span>
            <h2>
              Featured <span>opportunities.</span>
            </h2>
            <p>
              Find ways to connect, learn, and build with the GDGoC TKIET community.
            </p>
          </div>

          <span className="featured-side-note">
            <span className="live-indicator" />
            YOUR NEXT EXPERIENCE STARTS HERE
          </span>
        </div>

        <div className="featured-grid">
          {featuredItems.map((item, index) => (
            <a
              className={`featured-event-card accent-${item.color}`}
              href={item.href}
              key={item.title}
            >
              <div className="featured-card-top">
                <span className="event-type-label">
                  FEATURED / 0{index + 1}
                </span>
                <span className="featured-symbol">{item.icon}</span>
              </div>

              <div className="featured-card-content">
                <h3>{item.title}</h3>
                <p>{item.description}</p>
              </div>

              <div className="featured-card-bottom">
                <span className="meta-value">{item.label}</span>
                <span className="featured-arrow">↗</span>
              </div>

              <div className="featured-card-glow" />
            </a>
          ))}
        </div>
      </section>

      <div className="events-shell collections-shell">
        <EventSection
          id="chapter-events"
          eyebrow="01 / CONNECT"
          title="Events"
          description="Explore chapter events and community activities."
          items={eventItems}
          now={now}
        />

        <EventSection
          id="hackathons"
          eyebrow="02 / BUILD"
          title="Hackathons"
          description="Discover upcoming challenges and build opportunities."
          items={hackathonItems}
          now={now}
        />

        <EventSection
          id="workshops"
          eyebrow="03 / LEARN"
          title="Workshops"
          description="Explore hands-on learning and technical sessions."
          items={workshopItems}
          now={now}
        />
      </div>
    </main>
  );
}

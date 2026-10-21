import { useEffect, useRef, useState } from "react";
import "./events.css";

const sampleDeadline = "2026-11-15T23:59:00+05:30";

const eventItems = [
  {
    id: 11,
    title: "Community Kickoff",
    category: "",
    description: "Meet fellow developers and discover the GDGoC community.",
    fee: "Free",
    format: "In-person",
    deadline: sampleDeadline,
    color: "blue",
  },
  {
    id: 12,
    title: "Developer Connect",
    category: "",
    description: "Exchange ideas and connect with fellow student developers.",
    fee: "Free",
    format: "Hybrid",
    deadline: sampleDeadline,
    color: "pink",
  },
  {
    id: 13,
    title: "Ideas to Impact",
    category: "",
    description: "Explore how ideas can become useful projects through teamwork.",
    fee: "Free",
    format: "In-person",
    deadline: sampleDeadline,
    color: "green",
  },
    {
    id: 14,
    title: "Tech Talk Series",
    category: "Technology",
    description: "Discover emerging technologies and learn from developer discussions.",
    fee: "Free",
    format: "Online",
    deadline: sampleDeadline,
    color: "yellow",
  },
  {
    id: 15,
    title: "Community Project Day",
    category: "Collaboration",
    description: "Share ideas and collaborate on practical student projects.",
    fee: "Free",
    format: "In-person",
    deadline: sampleDeadline,
    color: "purple",
  },
  {
    id: 16,
    title: "Developer Meetup",
    category: "Networking",
    description: "Meet fellow developers and exchange your learning experiences.",
    fee: "Free",
    format: "Hybrid",
    deadline: sampleDeadline,
    color: "pink",
  },
];

const hackathonItems = [
  {
    id: 21,
    title: "Build for Tomorrow",
    category: "",
    description: "Collaborate with a team to prototype a meaningful solution.",
    fee: "Free",
    format: "Hybrid",
    deadline: sampleDeadline,
    color: "purple",
  },
  {
    id: 22,
    title: "CodeSprint",
    category: "",
    description: "Challenge your thinking and solve coding problems together.",
    fee: "Paid",
    format: "In-person",
    deadline: sampleDeadline,
    color: "green",
  },
  {
    id: 23,
    title: "Campus Innovation Lab",
    category: "",
    description: "Turn a campus problem into a technology prototype.",
    fee: "Free",
    format: "Online",
    deadline: sampleDeadline,
    color: "yellow",
  },
    {
    id: 24,
    title: "Code for Campus",
    category: "Social Impact",
    description: "Create technology solutions for everyday campus challenges.",
    fee: "Free",
    format: "In-person",
    deadline: sampleDeadline,
    color: "blue",
  },
  {
    id: 25,
    title: "AI Innovation Challenge",
    category: "Artificial Intelligence",
    description: "Prototype creative solutions using AI concepts and tools.",
    fee: "Paid",
    format: "Online",
    deadline: sampleDeadline,
    color: "pink",
  },
  {
    id: 26,
    title: "24-Hour Buildathon",
    category: "Rapid Prototyping",
    description: "Work together to turn an idea into a working prototype.",
    fee: "Free",
    format: "Hybrid",
    deadline: sampleDeadline,
    color: "yellow",
  },
];

const workshopItems = [
  {
    id: 31,
    title: "Web Development Lab",
    category: "",
    description: "Build modern websites through hands-on practice.",
    fee: "Free",
    format: "In-person",
    deadline: sampleDeadline,
    color: "blue",
  },
  {
    id: 32,
    title: "Git & GitHub in Practice",
    category: " ",
    description: "Learn version control and collaborate on code.",
    fee: "Free",
    format: "Online",
    deadline: sampleDeadline,
    color: "pink",
  },
  {
    id: 33,
    title: "Explore AI & Gemini",
    category: " ",
    description: "Explore AI concepts and experiment with useful applications.",
    fee: "Free",
    format: "Hybrid",
    deadline: sampleDeadline,
    color: "green",
  },
    {
    id: 34,
    title: "React Fundamentals",
    category: "",
    description: "Build interactive interfaces with reusable React components.",
    fee: "Free",
    format: "Online",
    deadline: sampleDeadline,
    color: "purple",
  },
  {
    id: 35,
    title: "Cloud Computing Basics",
    category: "",
    description: "Explore cloud concepts, deployment, and Google Cloud services.",
    fee: "Free",
    format: "In-person",
    deadline: sampleDeadline,
    color: "green",
  },
  {
    id: 36,
    title: "API Development Lab",
    category: "",
    description: "Understand APIs and practise connecting frontend and backend applications.",
    fee: "Free",
    format: "Hybrid",
    deadline: sampleDeadline,
    color: "blue",
  },
];

function getTimeLeft(deadline, now) {
  const difference = new Date(deadline).getTime() - now;

  if (difference <= 0) return null;

  const days = Math.floor(difference / 86400000);
  const hours = Math.floor((difference % 86400000) / 3600000);
  const minutes = Math.floor((difference % 3600000) / 60000);
  const seconds = Math.floor((difference % 60000) / 1000);

  return { days, hours, minutes, seconds };
}

function Deadline({ deadline, now }) {
  const timeLeft = getTimeLeft(deadline, now);

  if (!timeLeft) {
    return <span className="deadline-value">Deadline passed</span>;
  }

  return (
    <div className="deadline-countdown" aria-label="Time remaining to register">
      {timeLeft.days > 0 && <span>{timeLeft.days}d </span>}
      <span>{String(timeLeft.hours).padStart(2, "0")}h </span>
      <span>{String(timeLeft.minutes).padStart(2, "0")}m </span>
      <span>{String(timeLeft.seconds).padStart(2, "0")}s</span>
    </div>
  );
}

function RegistrationButton({ item, now }) {
  const isOpen = now < new Date(item.deadline).getTime();

  return (
    <button
      className={`registration-button ${isOpen ? "is-open" : "is-closed"}`}
      type="button"
      disabled={!isOpen}
      onClick={() => {
        if (isOpen) {
          window.alert(
            "The registration form for this event has not been connected yet."
          );
        }
      }}
    >
      {isOpen ? "Register Now ↗" : "Registration Closed"}
    </button>
  );
}

function EventCard({ item, now }) {
  const isOpen = now < new Date(item.deadline).getTime();

  return (
    <article className={`collection-card accent-${item.color}`}>
      <div className="collection-card-art">
        <div className="art-orbit orbit-one" />
        <div className="art-orbit orbit-two" />

        <div className="art-core" aria-hidden="true">
          {item.category === "Web Development" ? "</>" : "✳"}
        </div>

        <span className="art-index">{String(item.id).slice(-2)}</span>
        <span className="art-category">{item.category}</span>
      </div>

      <div className="collection-card-body">
        <div className="collection-card-meta">
          <span className={`event-status ${isOpen ? "registration-open" : "completed"}`}>
            <span className="status-dot" />
            {isOpen ? "Registration Open" : "Registration Closed"}
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
          <span className="deadline-value">
            {new Date(item.deadline).toLocaleString("en-IN", {
              day: "numeric",
              month: "short",
              year: "numeric",
              hour: "numeric",
              minute: "2-digit",
            })}
          </span>
          {isOpen && <Deadline deadline={item.deadline} now={now} />}
        </div>

        <RegistrationButton item={item} now={now} />
      </div>
    </article>
  );
}


function EventSection({ id, eyebrow, title, description, items, now }) {
  const scrollRef = useRef(null);

  const scrollCards = (direction) => {
    if (!scrollRef.current) return;

    const firstCard = scrollRef.current.querySelector(".collection-card");
    const distance = firstCard
      ? firstCard.getBoundingClientRect().width + 20
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

      <div className="event-card-grid event-card-carousel" ref={scrollRef}>
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
            <span className="section-eyebrow">DISCOVER · PARTICIPATE · BUILD</span>
            <h2>Featured <span>opportunities.</span></h2>
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
          description="Meet developers, exchange ideas, and connect with the community."
          items={eventItems}
          now={now}
        />

        <EventSection
          id="hackathons"
          eyebrow="02 / BUILD"
          title="Hackathons"
          description="Collaborate, solve problems, and turn ideas into prototypes."
          items={hackathonItems}
          now={now}
        />

        <EventSection
          id="workshops"
          eyebrow="03 / LEARN"
          title="Workshops"
          description="Build practical skills with developer tools and technologies."
          items={workshopItems}
          now={now}
        />
      </div>
    </main>
  );
}

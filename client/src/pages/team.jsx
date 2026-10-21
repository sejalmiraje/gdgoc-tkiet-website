import { useState } from "react";
import "./team.css";

const organizers = [
  { name: "Rushikesh Babar", role: "Organizer", initials: "RB" },
  { name: "Sanika Jadhav", role: "Organizer", initials: "SJ" },
  { name: "Asmita Gayakwad", role: "Organizer", initials: "AG" },
];

const wings = [
  {
    number: "01",
    name: "Technical Wing",
    description: "Building, engineering, and exploring technology.",
    icon: "</>",
    color: "blue",
    leads: [
      ["Technical Lead", "Somnath Desai", "SD"],
      ["AI/ML Lead", "Ganesh Sable", "GS"],
      ["Cloud & DevOps Lead", "Prathamesh Lahate", "PL"],
      ["Cybersecurity Lead", "Aditi Patil", "AP"],
      ["CP & DSA Lead", "Sanskar Wadkar", "SW"],
      ["Web Development Lead", "Sejal Miraje", "SM"],
      ["App Development Lead", "Gayatri Sutar", "GS"],
      ["Open Source Lead", "Aditya Desai", "AD"],
      ["Developer Relations Lead", "Poonam Sutar", "PS"],
    ],
  },
  {
    number: "02",
    name: "Marketing & Outreach",
    description: "Growing our reach and connecting with students.",
    icon: "↗",
    color: "red",
    leads: [
      ["Marketing Lead", "Harshal More", "HM"],
      ["Outreach Lead", "Abhijeet Koli", "AK"],
    ],
  },
  {
    number: "03",
    name: "Finance & Partnerships",
    description: "Building sustainable partnerships and opportunities.",
    icon: "◇",
    color: "green",
    leads: [
      ["Finance & Strategic Partnerships Lead", "Parth Mali", "PM"],
    ],
  },
  {
    number: "04",
    name: "Content & Design",
    description: "Shaping our identity, stories, and digital presence.",
    icon: "✳",
    color: "yellow",
    leads: [
      ["Graphics Design Lead", "Rujula Yogesh Shelar", "RS"],
      ["Documentation Lead", "Prasad Chougule", "PC"],
      ["Media & Digital Communications Lead", "Aditya Sutar", "AS"],
    ],
  },
  {
    number: "05",
    name: "Operations & Management",
    description: "Coordinating experiences and keeping the community moving.",
    icon: "⌘",
    color: "purple",
    leads: [
      ["Community Manager", "Shree Chavan", "SC"],
      ["Event Management Lead", "Suhani Kumbar", "SK"],
      ["Anchoring & Hosting Lead", "Siddhi Panhalkar", "SP"],
    ],
  },
];

const executiveLead = {
  name: "Janvi Tonpe",
  role: "Executive Core Members Lead",
  initials: "JT",
};

const members = [
  "Anushka Mohite",
  "Sonali Shriram",
  "Prachi Patil",
  "Amruta Thorat",
  "Nikhil Chendage",
  "Swaranjali Hatrote",
  "Pranali Magdum",
  "Sneha Patil",
  "Atharv Patil",
  "Kalpesh Aswale",
  "Shravan Mane Patil",
  "Shivaji Gaware",
  "Ayush Birajdar",
  "Harshad Sawant",
  "Ayan Shaikh",
  "Diksha Sid",
  "Sanchita Chingade",
  "Muskan Mulani",
  "Tanmay Shinde",
  "Shravani Patil",
  "Snehal Kumbhar",
  "Asmita Patil",
  "Palakkumari Pandey",
  "Prithviraj Shingate",
  "Pranjali Chougule",
  "Ankita Patil",
  "Sushant Mane",
  "Kaivalya Thanekar",
].map((name, index) => ({
  id: index + 1,
  name,
  initials: name
    .split(" ")
    .map((part) => part[0])
    .join("")
    .slice(0, 2)
    .toUpperCase(),
}));

function InitialAvatar({ initials, large = false }) {
  return (
    <div
      className={`team-avatar${large ? " team-avatar-large" : ""}`}
      aria-hidden="true"
    >
      <span>{initials}</span>
      <i className="avatar-orbit avatar-orbit-one" />
      <i className="avatar-orbit avatar-orbit-two" />
    </div>
  );
}

function OrganizerCard({ person, index }) {
  return (
    <article
      className={`organizer-card organizer-card-${index + 1}`}
      style={{ "--profile-index": index }}
    >
      <div className="organizer-card-top">
        <span className="profile-index">ORGANIZER / 0{index + 1}</span>
        <span className="profile-spark" aria-hidden="true">
          ✳
        </span>
      </div>

      <InitialAvatar initials={person.initials} large />

      <div className="organizer-info">
        <span className="profile-role">{person.role}</span>
        <h3>{person.name}</h3>
        <span className="profile-placeholder-note">Photo coming soon</span>
      </div>
    </article>
  );
}

function WingLeadCard({ role, name, initials, index }) {
  return (
    <article
      className="wing-lead-card"
      style={{ "--lead-index": index }}
    >
      <InitialAvatar initials={initials} />

      <div className="wing-lead-info">
        <span className="wing-lead-name">{name}</span>
        <span className="wing-lead-role">{role}</span>
      </div>

      <span className="lead-card-mark" aria-hidden="true">
        ↗
      </span>
    </article>
  );
}

function WingPanel({ wing }) {
  return (
    <article className={`wing-panel wing-${wing.color}`}>
      <div className="wing-panel-heading">
        <div className="wing-heading-main">
          <span className="wing-number">{wing.number}</span>
          <div className="wing-title-wrap">
            <h3>{wing.name}</h3>
            <p>{wing.description}</p>
          </div>
        </div>

        <span className="wing-icon" aria-hidden="true">
          {wing.icon}
        </span>
      </div>

      <div className="wing-leads">
        {wing.leads.map(([role, name, initials], index) => (
          <WingLeadCard
            key={role}
            role={role}
            name={name}
            initials={initials}
            index={index}
          />
        ))}
      </div>

      <div className="wing-panel-footer">
        <span>WING LEADERSHIP</span>
        <span>{String(wing.leads.length).padStart(2, "0")} ROLES</span>
      </div>
    </article>
  );
}

function ExecutiveLeadCard() {
  return (
    <article className="executive-lead-card">
      <div className="executive-lead-copy">
        <span className="team-eyebrow">EXECUTIVE LEADERSHIP</span>
        <h3>Leading the people who make it happen.</h3>
        <p>
          Coordinating our executive core members and supporting
          collaboration across the community.
        </p>
      </div>

      <div className="executive-lead-profile">
        <InitialAvatar initials={executiveLead.initials} large />
        <div>
          <span className="profile-role">{executiveLead.role}</span>
          <h4>{executiveLead.name}</h4>
          <span className="profile-placeholder-note">Photo coming soon</span>
        </div>
      </div>
    </article>
  );
}

export default function Team() {
  const [search, setSearch] = useState("");

  const filteredMembers = members.filter((member) =>
    member.name.toLowerCase().includes(search.trim().toLowerCase())
  );

  return (
    <main className="team-page">
      <section className="team-intro">
        <div className="team-intro-grid" aria-hidden="true" />

        <div className="team-intro-content">
          <span className="team-eyebrow">
            <span className="team-eyebrow-dot" />
            THE PEOPLE BEHIND THE COMMUNITY
          </span>

          <h1>
            Different minds.
            <br />
            <span>One community.</span>
          </h1>

          <p>
            Meet the people who bring ideas to life, create opportunities,
            and help the GDGoC TKIET community grow.
          </p>

          <div className="team-intro-bottom">
            <span>LEADERSHIP · COLLABORATION · COMMUNITY</span>
            <a href="#team-leadership">
              Meet the team <span aria-hidden="true">↓</span>
            </a>
          </div>
        </div>

        <div className="team-intro-art" aria-hidden="true">
          <div className="team-art-ring ring-one" />
          <div className="team-art-ring ring-two" />
          <div className="team-art-ring ring-three" />
          <span className="team-art-symbol symbol-one">{"{"}</span>
          <span className="team-art-symbol symbol-two">✳</span>
          <span className="team-art-symbol symbol-three">{"}"}</span>
          <span className="team-art-dot dot-one" />
          <span className="team-art-dot dot-two" />
          <span className="team-art-dot dot-three" />
          <span className="team-art-dot dot-four" />
        </div>
      </section>

      <section
        className="team-section leadership-section"
        id="team-leadership"
      >
        <div className="team-section-heading">
          <div>
            <span className="team-eyebrow">01 / LEADERSHIP</span>
            <h2>
              The people who <span>lead.</span>
            </h2>
            <p>Guiding the vision and bringing our community together.</p>
          </div>

          <span className="team-section-count">03 ORGANIZERS</span>
        </div>

        <div className="organizer-grid">
          {organizers.map((person, index) => (
            <OrganizerCard
              key={person.name}
              person={person}
              index={index}
            />
          ))}
        </div>
      </section>

      <section className="team-section committee-section" id="core-committee">
        <div className="team-section-heading">
          <div>
            <span className="team-eyebrow">02 / CORE COMMITTEE</span>
            <h2>
              Different wings. <span>Shared purpose.</span>
            </h2>
            <p>
              Meet the leads responsible for their respective areas
              of the community.
            </p>
          </div>

          <span className="team-section-count">05 WINGS</span>
        </div>

        <div className="wings-grid">
          {wings.map((wing) => (
            <WingPanel key={wing.number} wing={wing} />
          ))}
        </div>

        <ExecutiveLeadCard />
      </section>

      <section
        className="team-section executive-section"
        id="executive-members"
      >
        <div className="team-section-heading executive-heading">
          <div>
            <span className="team-eyebrow">03 / EXECUTIVE CORE</span>
            <h2>
              The team that <span>makes it happen.</span>
            </h2>
            <p>
              Twenty-eight members bringing their ideas, energy,
              and effort to the community.
            </p>
          </div>

          <span className="team-section-count">28 MEMBERS</span>
        </div>

        <div className="member-directory-toolbar">
          <div className="member-directory-label">
            <span className="directory-indicator" />
            <span>MEMBER DIRECTORY</span>
          </div>

          <label className="member-search">
            <span className="search-icon" aria-hidden="true">⌕</span>
            <input
              type="search"
              placeholder="Search members..."
              value={search}
              onChange={(event) => setSearch(event.target.value)}
              aria-label="Search executive core members"
            />
            {search && (
              <button
                type="button"
                onClick={() => setSearch("")}
                aria-label="Clear member search"
              >
                ×
              </button>
            )}
          </label>
        </div>

        <div className="member-grid">
          {filteredMembers.map((member) => (
            <article className="member-card" key={member.id}>
              <InitialAvatar initials={member.initials} />

              <div className="member-card-info">
                <span className="member-number">
                  MEMBER / {String(member.id).padStart(2, "0")}
                </span>
                <h3>{member.name}</h3>
                <p>Executive Core Member</p>
              </div>

              <span className="member-card-arrow" aria-hidden="true">
                ↗
              </span>
            </article>
          ))}
        </div>

        {filteredMembers.length === 0 && (
          <div className="member-empty-state">
            <h3>No members found</h3>
            <p>Try another search term.</p>
            <button type="button" onClick={() => setSearch("")}>
              Clear search
            </button>
          </div>
        )}

        <div className="directory-footer">
          <span>GDGoC TKIET</span>
          <span>
            SHOWING {String(filteredMembers.length).padStart(2, "0")} OF 28
            MEMBERS
          </span>
        </div>
      </section>
    </main>
  );
}

"use client";
import { useState } from "react";
import {
  ArrowDown,
  ArrowUpRight,
  Code2,
  FileCheck2,
  Layers,
  Mail,
  Menu,
  Moon,
  Mountain,
  Sun,
  Terminal,
  X,
} from "lucide-react";
import {
  PROJECTS,
  SERVICES,
  SKILL_CATEGORIES,
  SOCIALS,
  STATS,
} from "../lib/constants";
import Contact from "./Contact";

const navigation = ["Projects", "Services", "Skills", "About"];
const icons = [Mountain, Layers, FileCheck2, Terminal];
export default function Portfolio() {
  const [dark, setDark] = useState(false);
  const [open, setOpen] = useState(false);
  const [filter, setFilter] = useState("All projects");
  function toggleTheme() {
    setDark(!dark);
    document.documentElement.dataset.theme = dark ? "light" : "dark";
  }
  return (
    <>
      <header className="site-header">
        <nav className="nav-shell" aria-label="Main navigation">
          <a className="wordmark" href="#home">
            ansh<span>.</span>
          </a>
          <div className="desktop-links">
            {navigation.map((label) => (
              <a key={label} href={`#${label.toLowerCase()}`}>
                {label}
              </a>
            ))}
          </div>
          <div className="nav-actions">
            <button
              className="icon-button"
              onClick={toggleTheme}
              aria-label={dark ? "Switch to light mode" : "Switch to dark mode"}
            >
              {dark ? <Sun size={18} /> : <Moon size={18} />}
            </button>
            <a className="button button-small nav-contact" href="#contact">
              Let’s talk <ArrowUpRight size={15} />
            </a>
            <button
              className="icon-button menu-button"
              onClick={() => setOpen(!open)}
              aria-expanded={open}
              aria-controls="mobile-navigation"
              aria-label={open ? "Close menu" : "Open menu"}
            >
              {open ? <X size={21} /> : <Menu size={21} />}
            </button>
          </div>
        </nav>
        {open && (
          <nav
            id="mobile-navigation"
            className="mobile-links"
            aria-label="Mobile navigation"
          >
            {[...navigation, "Contact"].map((label) => (
              <a
                key={label}
                href={`#${label.toLowerCase()}`}
                onClick={() => setOpen(false)}
              >
                {label}
                <ArrowUpRight size={16} />
              </a>
            ))}
          </nav>
        )}
      </header>
      <main id="main">
        <section id="home" className="hero">
          <div className="hero-grid" aria-hidden="true" />
          <div className="hero-inner">
            <div className="intro-line">
              <span className="avatar">
                AJ
                <span />
              </span>
              <span>
                Hi, I’m Ansh Jadhav <span className="wave" aria-hidden="true">✳︎</span>
              </span>
            </div>
            <h1>
              Thoughtful interfaces.
              <br />
              <span>Powerful software.</span>
            </h1>
            <p className="hero-description">
              A full-stack developer turning ideas into web and mobile
              <br className="desktop-break" /> experiences. Built with care,
              from the first pixel to the last API.
            </p>
            <div className="hero-actions">
              <a className="button" href="#projects">
                Explore my work <ArrowUpRight size={17} />
              </a>
              <a className="button button-outline" href="#contact">
                Get in touch <Mail size={16} />
              </a>
            </div>
            <div className="hero-socials">
              {SOCIALS.map((s) => (
                <a
                  key={s.label}
                  href={s.href}
                  target={s.label === "Email" ? undefined : "_blank"}
                  rel="noreferrer"
                  aria-label={s.label}
                >
                  <s.icon size={19} />
                </a>
              ))}
              <span className="social-divider" />
              <span>Let’s build something useful.</span>
            </div>
            <div className="hero-bottom">
              <span>
                <i className="status-dot" /> Open to opportunities
              </span>
              <a href="#projects">
                Scroll to explore <ArrowDown size={14} />
              </a>
            </div>
          </div>
        </section>
        <section id="projects" className="section">
          <div className="section-heading">
            <div>
              <span className="eyebrow">A few things I’ve built</span>
              <h2>
                Selected work<span>.</span>
              </h2>
            </div>
            <a
              className="text-link"
              href="https://github.com/JadhavAnsh"
              target="_blank"
              rel="noreferrer"
            >
              More on GitHub <ArrowUpRight size={16} />
            </a>
          </div>
          <div
            className="project-filters"
            role="group"
            aria-label="Filter projects"
          >
            {["All projects", "Web App", "Mobile App", "CLI Tool"].map(
              (item) => (
                <button
                  key={item}
                  aria-pressed={filter === item}
                  onClick={() => setFilter(item)}
                >
                  {item === "All projects"
                    ? item
                    : item === "Web App"
                      ? "Web"
                      : item === "Mobile App"
                        ? "Mobile"
                        : "Open source / CLI"}
                </button>
              ),
            )}
          </div>
          <div className="projects-grid">
            {PROJECTS.map((p, i) => {
              if (filter !== "All projects" && filter !== p.subtitle)
                return null;
              const Icon = icons[i];
              return (
                <article className="work-card" key={p.title}>
                  <a
                    className={`project-art art-${i}`}
                    href={p.githubUrl}
                    target="_blank"
                    rel="noreferrer"
                    aria-label={`Explore ${p.title} source on GitHub`}
                  >
                    <span className="art-category">{p.subtitle}</span>
                    <ArrowUpRight className="art-external" size={18} />
                    <div className="project-symbol">
                      <Icon size={38} strokeWidth={1.35} />
                      <span>
                        {
                          ["offbeat pravasi", "syncora", "formata", "pr-forge"][
                            i
                          ]
                        }
                        <small>
                          {
                            [
                              "Take the road less travelled.",
                              "A more connected world.",
                              "Documents. Simplified.",
                              "$ forge something better",
                            ][i]
                          }
                        </small>
                      </span>
                    </div>
                    <span className="art-detail" aria-hidden="true">
                      {
                        [
                          "EXPLORE / DISCOVER / WANDER",
                          "CONNECT · SHARE · TRANSACT",
                          "STORE → VERIFY → SIGN",
                          "git diff → clear context",
                        ][i]
                      }
                    </span>
                  </a>
                  <div className="work-content">
                    <div className="work-title">
                      <h3>
                        <a href={p.githubUrl} target="_blank" rel="noreferrer">
                          {p.title}
                        </a>
                      </h3>
                      <span>{p.year}</span>
                    </div>
                    <p>{p.description}</p>
                    <div className="tech-list">
                      {p.tech.map((t) => (
                        <span key={t}>{t}</span>
                      ))}
                    </div>
                  </div>
                </article>
              );
            })}
          </div>
        </section>
        <section id="services" className="section section-bordered">
          <div className="section-heading">
            <div>
              <span className="eyebrow">From idea to implementation</span>
              <h2>
                What I can help with<span>.</span>
              </h2>
            </div>
          </div>
          <div className="services-grid">
            {SERVICES.map((s) => (
              <article className="service" key={s.title}>
                <div className="service-icon">
                  <s.icon size={22} strokeWidth={1.5} />
                </div>
                <h3>{s.title}</h3>
                <p>{s.description}</p>
              </article>
            ))}
          </div>
        </section>
        <section id="skills" className="section section-bordered">
          <div className="section-heading">
            <div>
              <span className="eyebrow">The tools behind the work</span>
              <h2>
                My everyday toolkit<span>.</span>
              </h2>
            </div>
            <Code2 size={32} strokeWidth={1} />
          </div>
          <div className="skill-groups">
            {SKILL_CATEGORIES.map((c) => (
              <div className="skill-group" key={c.title}>
                <h3>{c.title}</h3>
                <div className="skill-list">
                  {c.skills.map((s) => (
                    <span key={s}>{s}</span>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </section>
        <section id="about" className="section section-bordered about-section">
          <div>
            <span className="eyebrow">A little about me</span>
            <h2>
              Curious by nature.
              <br />
              Developer by choice<span>.</span>
            </h2>
            <div className="about-signature">
              Ansh Jadhav <ArrowUpRight size={22} />
            </div>
            <span className="about-role">
              Full-stack developer · Computer Engineering student
            </span>
          </div>
          <div className="about-copy">
            <p>
              I’m Ansh, a full-stack developer and Computer Engineering student.
              I enjoy making complex ideas feel simple through thoughtful
              interfaces and reliable software.
            </p>
            <p>
              My work spans responsive websites, cross-platform mobile apps, and
              backend systems. I care about how things look, how they work, and
              the small details that make them feel right.
            </p>
            <p>
              Outside of projects, you’ll find me exploring new frameworks,
              contributing to open source, and learning by building.
            </p>
            <dl className="stats">
              {STATS.map((s) => (
                <div key={s.label}>
                  <dt>{s.label}</dt>
                  <dd>{s.value}</dd>
                </div>
              ))}
            </dl>
          </div>
        </section>
        <Contact />
      </main>
      <footer className="site-footer">
        <a className="wordmark" href="#home">
          ansh<span>.</span>
        </a>
        <span>© {new Date().getFullYear()} Ansh Jadhav</span>
        <a href="#home">Back to top ↑</a>
      </footer>
    </>
  );
}

import Link from "next/link";
import {
  Activity,
  ArrowRight,
  ArrowUpRight,
  Check,
  CircleDot,
  GitBranch,
  Layers,
  ShieldCheck,
  Workflow,
} from "lucide-react";

const systemSteps = [
  { number: "01", title: "Project", detail: "Idea, customer, and constraints" },
  { number: "02", title: "12 Modules", detail: "Connected launch engines" },
  { number: "03", title: "Project Memory", detail: "Facts, assumptions, and evidence" },
  { number: "04", title: "Decision Graph", detail: "Dependencies and open decisions" },
  { number: "05", title: "System Health", detail: "Coverage and consistency" },
  { number: "06", title: "Launch Readiness", detail: "An explainable, deterministic gate" },
  { number: "07", title: "Checklist", detail: "Unresolved work with owners and evidence" },
  { number: "08", title: "Execution", detail: "Move from plan to action" },
];

const capabilities = [
  {
    number: "01",
    icon: Layers,
    title: "Project Memory",
    description:
      "Keep validated facts, working assumptions, and source context attached to the project.",
  },
  {
    number: "02",
    icon: GitBranch,
    title: "Decision Graph",
    description:
      "See how choices depend on upstream work and where unresolved decisions create risk.",
  },
  {
    number: "03",
    icon: ShieldCheck,
    title: "Launch Readiness",
    description:
      "Get an explainable red, yellow, or green gate grounded in saved project evidence.",
  },
  {
    number: "04",
    icon: Check,
    title: "Execution Checklist",
    description:
      "Turn open decisions into structured tasks with priority, ownership, due dates, and evidence.",
  },
];

export default function HomePage() {
  return (
    <div className="site-shell">
      <header className="topbar">
        <Link aria-label="Mthiya LaunchKit home" className="brand" href="/">
          <span aria-hidden="true" className="brand-mark">
            <CircleDot size={18} strokeWidth={1.8} />
          </span>
          <span className="brand-name">
            <span>MTHIYA</span>
            <strong>LAUNCHKIT</strong>
          </span>
        </Link>

        <nav aria-label="Main navigation" className="top-nav">
          <a href="#system">The system</a>
          <a href="#principles">Principles</a>
        </nav>

        <Link className="health-link" href="/api/health">
          <span aria-hidden="true" className="health-dot" />
          <span>Service health</span>
          <ArrowUpRight aria-hidden="true" size={15} />
        </Link>
      </header>

      <main className="main-content">
        <section aria-labelledby="hero-title" className="hero">
          <div className="hero-copy">
            <div className="eyebrow">
              <span className="eyebrow-dot" />
              <span>Founder operating system</span>
            </div>

            <h1 id="hero-title">
              Build a launch you can <em>stand behind.</em>
            </h1>
            <p className="hero-description">
              Mthiya LaunchKit connects your project assumptions, customer evidence, and decisions
              into a plan you can test and execute.
            </p>

            <div className="hero-actions">
              <a className="button button-primary" href="#system">
                See how it connects
                <ArrowRight aria-hidden="true" size={17} />
              </a>
              <a className="button button-secondary" href="#principles">
                The operating principles
              </a>
            </div>

            <div className="hero-note">
              <span>
                <Layers aria-hidden="true" size={15} />
                12 connected launch modules
              </span>
              <span>
                <Check aria-hidden="true" size={15} />
                Evidence before confidence
              </span>
            </div>
          </div>

          <aside aria-label="LaunchKit operating model" className="system-card">
            <div className="system-card-header">
              <div>
                <p className="card-eyebrow">THE LAUNCH SYSTEM</p>
                <h2>One project. One source of truth.</h2>
              </div>
              <span className="version-pill">V1</span>
            </div>

            <div className="system-path">
              {systemSteps.map((step) => (
                <div className="system-step" key={step.number}>
                  <span className="step-number">{step.number}</span>
                  <div className="step-copy">
                    <strong>{step.title}</strong>
                    <span>{step.detail}</span>
                  </div>
                  {step.number === "06" ? (
                    <span className="gate-indicator" title="Deterministic gate">
                      <Activity aria-hidden="true" size={15} />
                    </span>
                  ) : null}
                </div>
              ))}
            </div>

            <div className="system-card-footer">
              <Workflow aria-hidden="true" size={16} />
              <span>Evidence flows forward, not sideways.</span>
            </div>
          </aside>
        </section>

        <section aria-labelledby="system-title" className="capabilities-section" id="system">
          <div className="section-heading">
            <div>
              <span className="section-kicker">From context to execution</span>
              <h2 id="system-title">A connected system, not a stack of tabs.</h2>
            </div>
            <p>
              Each layer carries project context forward, so plans, decisions, and next actions stay
              grounded in the same evidence.
            </p>
          </div>

          <div className="capability-grid">
            {capabilities.map((capability) => {
              const Icon = capability.icon;

              return (
                <article className="capability-card" key={capability.number}>
                  <div className="capability-card-top">
                    <span className="capability-number">{capability.number}</span>
                    <Icon aria-hidden="true" size={19} strokeWidth={1.7} />
                  </div>
                  <h3>{capability.title}</h3>
                  <p>{capability.description}</p>
                </article>
              );
            })}
          </div>
        </section>

        <section aria-labelledby="principles-title" className="principles-section" id="principles">
          <div className="principles-intro">
            <span className="section-kicker">Built to keep judgment human</span>
            <h2 id="principles-title">Useful intelligence. Honest uncertainty.</h2>
          </div>
          <div className="principle-card">
            <div className="principle-icon">
              <CircleDot aria-hidden="true" size={18} />
            </div>
            <div>
              <h3>AI stays advisory</h3>
              <p>It can propose, analyze, and transform. The founder remains the decision-maker.</p>
            </div>
          </div>
          <div className="principle-card">
            <div className="principle-icon">
              <ShieldCheck aria-hidden="true" size={18} />
            </div>
            <div>
              <h3>Readiness stays deterministic</h3>
              <p>Launch status comes from saved evidence and completion rules, not AI opinion.</p>
            </div>
          </div>
        </section>

        <footer className="footer">
          <Link aria-label="Mthiya LaunchKit home" className="footer-brand" href="/">
            MTHIYA <span>/</span> LAUNCHKIT
          </Link>
          <span>Plan with evidence. Execute with intent.</span>
          <Link className="footer-health" href="/api/health">
            Check service health <ArrowUpRight aria-hidden="true" size={14} />
          </Link>
        </footer>
      </main>
    </div>
  );
}

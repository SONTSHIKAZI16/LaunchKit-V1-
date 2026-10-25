const helloEmail = 'hello@mthiyalaunchkit.com'
const supportEmail = 'support@mthiyalaunchkit.com'

const milestones = [
  { title: 'Define your audience', state: 'Complete', done: true },
  { title: 'Shape the offer', state: 'Complete', done: true },
  { title: 'Build the launch plan', state: 'Up next', done: false },
  { title: 'Prepare launch day', state: 'Up next', done: false },
]

const steps = [
  {
    number: '01',
    title: 'Clarify the idea',
    description:
      'Give your ambition a clear audience, a useful promise, and a reason to launch.',
  },
  {
    number: '02',
    title: 'Shape the plan',
    description:
      'Turn a big vision into focused steps and milestones you can move through.',
  },
  {
    number: '03',
    title: 'Launch with intent',
    description:
      'Keep priorities in view and build momentum all the way to release day.',
  },
]

function BrandMark() {
  return (
    <a className="brand-lockup" href="#top" aria-label="Mthiya LaunchKit home">
      <span className="brand-mark" aria-hidden="true">
        M
      </span>
      <span className="brand-name">
        <span>MTHIYA</span>
        <span>LAUNCHKIT</span>
      </span>
    </a>
  )
}

function WorkspacePreview() {
  return (
    <aside className="workspace-preview" aria-labelledby="workspace-title">
      <div className="preview-topline">
        <span className="preview-product">MTHIYA LAUNCHKIT V1</span>
        <span className="preview-live">
          <span aria-hidden="true" /> SAMPLE WORKSPACE
        </span>
      </div>

      <div className="preview-card">
        <div className="preview-card-header">
          <div>
            <p className="preview-kicker">YOUR NEXT LAUNCH</p>
            <h2 id="workspace-title">Project Northstar</h2>
          </div>
          <span className="preview-avatar" aria-hidden="true">
            M
          </span>
        </div>

        <div className="progress-summary">
          <span>Launch readiness</span>
          <strong>2 of 4 milestones</strong>
        </div>
        <div
          className="progress-track"
          role="progressbar"
          aria-label="Example launch readiness"
          aria-valuenow={50}
          aria-valuemin={0}
          aria-valuemax={100}
        >
          <span />
        </div>

        <ul className="milestone-list" aria-label="Example launch milestones">
          {milestones.map((milestone) => (
            <li
              className={`milestone-row${milestone.done ? ' is-complete' : ''}`}
              key={milestone.title}
            >
              <span className="milestone-check" aria-hidden="true" />
              <span className="milestone-title">{milestone.title}</span>
              <span className="milestone-state">{milestone.state}</span>
            </li>
          ))}
        </ul>

        <div className="preview-next-step">
          <span className="next-step-indicator" aria-hidden="true" />
          <div>
            <p className="preview-kicker">A CLEAR NEXT STEP</p>
            <p>Build your launch plan</p>
          </div>
          <span className="next-step-arrow" aria-hidden="true">
            →
          </span>
        </div>
      </div>
      <p className="preview-caption">A calmer way to move from idea to launch day.</p>
    </aside>
  )
}

export function LaunchkitLanding() {
  return (
    <div className="launchkit-site" id="top">
      <header className="site-header">
        <div className="site-container header-content">
          <BrandMark />
          <nav className="header-nav" aria-label="Main navigation">
            <a href="#workflow">How it works</a>
            <a href="#contact">Contact</a>
          </nav>
          <a className="header-cta" href={`mailto:${helloEmail}?subject=LaunchKit%20V1%20enquiry`}>
            Let&apos;s talk <span aria-hidden="true">→</span>
          </a>
        </div>
      </header>

      <main>
        <section className="hero-section" id="product">
          <div className="hero-grid-texture" aria-hidden="true" />
          <div className="site-container hero-layout">
            <div className="hero-copy">
              <p className="eyebrow">A launch system for what&apos;s next</p>
              <h1>
                Ambition.
                <br />
                Vision.
                <br />
                Idea.
                <br />
                <span>Launch.</span>
              </h1>
              <p className="hero-description">
                Mthiya LaunchKit V1 gives your next big idea a clear, focused path from first thought to launch day.
              </p>
              <div className="hero-actions">
                <a className="button-primary" href="#workflow">
                  Explore the launch system <span aria-hidden="true">→</span>
                </a>
                <a className="button-secondary" href={`mailto:${helloEmail}`}>
                  Talk to Mthiya
                </a>
              </div>
              <div className="hero-signature">
                <span>COMPANY</span>
                <strong>Mthiya LaunchKit</strong>
                <span className="signature-divider" aria-hidden="true" />
                <span>PRODUCT</span>
                <strong>Mthiya LaunchKit V1</strong>
              </div>
            </div>

            <WorkspacePreview />
          </div>
        </section>

        <section className="workflow-section" id="workflow">
          <div className="site-container">
            <div className="section-intro">
              <div>
                <p className="section-kicker">THE LAUNCH PATH</p>
                <h2>Make the next move matter.</h2>
              </div>
              <p className="section-description">
                Big ideas deserve more than a scattered to-do list. Bring the important pieces together and move forward with purpose.
              </p>
            </div>

            <div className="step-grid">
              {steps.map((step) => (
                <article className="step-card" key={step.number}>
                  <span className="step-number">{step.number}</span>
                  <div className="step-rule" aria-hidden="true" />
                  <h3>{step.title}</h3>
                  <p>{step.description}</p>
                </article>
              ))}
            </div>
          </div>
        </section>

        <section className="contact-section" id="contact">
          <div className="site-container contact-panel">
            <div>
              <p className="section-kicker">AMBITION. VISION. IDEA. LAUNCH.</p>
              <h2>Your next launch starts with one clear step.</h2>
            </div>
            <a className="button-primary contact-button" href={`mailto:${helloEmail}?subject=Let%27s%20talk%20LaunchKit`}>
              Get in touch <span aria-hidden="true">→</span>
            </a>
          </div>
        </section>
      </main>

      <footer className="site-footer">
        <div className="site-container footer-main">
          <div className="footer-brand">
            <BrandMark />
            <p>Ambition. Vision. Idea. Launch.</p>
          </div>
          <div className="footer-column">
            <p className="footer-label">THE PRODUCT</p>
            <span>Mthiya LaunchKit V1</span>
            <a href="https://www.mthiyalaunchkit.com">www.mthiyalaunchkit.com</a>
          </div>
          <div className="footer-column">
            <p className="footer-label">GET IN TOUCH</p>
            <a href={`mailto:${helloEmail}`}>{helloEmail}</a>
            <a href={`mailto:${supportEmail}`}>{supportEmail}</a>
          </div>
        </div>
        <div className="site-container footer-bottom">
          <span>© 2026 Mthiya LaunchKit. All rights reserved.</span>
          <span>Official site: www.mthiyalaunchkit.com</span>
        </div>
      </footer>
    </div>
  )
}

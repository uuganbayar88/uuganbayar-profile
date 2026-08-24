import ScrollReveal from "@/components/ScrollReveal";
import SetLang from "@/components/SetLang";
import MobileNav from "@/components/MobileNav";
import { content, EMAIL, EMAIL_HREF, PHONE_DISPLAY, PHONE_HREF } from "@/app/content";

function mergeManagedContent(base, managedProfile, lang) {
  const locale = managedProfile?.locales?.[lang];
  if (!locale) {
    return base;
  }

  const managedStats = managedProfile.stats ?? [];

  return {
    ...base,
    hero: {
      ...base.hero,
      role: locale.role || base.hero.role,
      tag: locale.tagline || base.hero.tag,
    },
    stats: base.stats.map(([value, label], index) => [
      managedStats[index]?.value || value,
      label,
    ]),
    summary: {
      ...base.summary,
      body: locale.summary || base.summary.body,
    },
    contact: {
      ...base.contact,
      location: locale.location || base.contact.location,
    },
  };
}

export default function Profile({ lang, managedProfile }) {
  const c = mergeManagedContent(content[lang], managedProfile, lang);

  return (
    <>
      <ScrollReveal />
      <SetLang code={c.htmlLang} />

      <nav>
        <div className="wrap">
          <a className="brand" href="#top">
            {c.brand[0]}
            <b>{c.brand[1]}</b>
          </a>
          <div className="nav-right">
            <ul className="nav-links">
              {c.nav.map(([href, label]) => (
                <li key={href}>
                  <a href={href}>{label}</a>
                </li>
              ))}
            </ul>
            <a className="lang-toggle" href={c.toggle.href}>
              {c.toggle.label}
            </a>
            <MobileNav links={c.nav} />
          </div>
        </div>
      </nav>

      <header id="top">
        <div className="wrap hero">
          <div className="hero-copy">
            <div className="eyebrow">{c.hero.eyebrow}</div>
            <h1>
              {c.hero.name[0]}
              <br />
              {c.hero.name[1]}
            </h1>
            <div className="role">{c.hero.role}</div>
            <p className="tag">{c.hero.tag}</p>
            <div className="cta">
              <a className="btn btn-primary" href={EMAIL_HREF}>
                {c.hero.ctaEmail}
              </a>
              <a className="btn btn-ghost" href={c.cv} download>
                {c.hero.ctaCv}
              </a>
              <a className="btn btn-text" href="#experience">
                {c.hero.ctaExp} <span aria-hidden="true">↘</span>
              </a>
            </div>
          </div>
          <aside className="hero-brief" aria-label={c.hero.briefLabel}>
            <div className="brief-monogram" aria-hidden="true">U</div>
            <div className="brief-label">
              <span className="status-dot" aria-hidden="true" />
              {c.hero.briefLabel}
            </div>
            <h2>{c.hero.briefTitle}</h2>
            <dl>
              {c.hero.briefItems.map(([label, value]) => (
                <div key={label}>
                  <dt>{label}</dt>
                  <dd>{value}</dd>
                </div>
              ))}
            </dl>
            <div className="brief-availability">{c.hero.availability}</div>
          </aside>
          <div className="hero-route" aria-hidden="true">
            <span />
            <span />
            <span />
          </div>
        </div>
        <div className="stats">
          <div className="wrap">
            {c.stats.map(([value, label]) => (
              <div className="stat" key={label}>
                <b>{value}</b>
                <span>{label}</span>
              </div>
            ))}
          </div>
        </div>
      </header>

      <section id="summary" className="summary">
        <div className="wrap">
          <div className="eyebrow">{c.summary.eyebrow}</div>
          <h2>{c.summary.h2}</h2>
          <p>{c.summary.body}</p>
          <div className="signal-list">
            {c.summary.signals.map((signal) => (
              <span key={signal}>{signal}</span>
            ))}
          </div>
          <div className="langs">{c.summary.langs}</div>
        </div>
      </section>

      <section id="case-studies" className="case-studies">
        <div className="wrap">
          <div className="eyebrow">{c.caseStudies.eyebrow}</div>
          <h2>{c.caseStudies.h2}</h2>
          <p className="section-intro">{c.caseStudies.intro}</p>
          <div className="case-list">
            {c.caseStudies.items.map((item) => (
              <article className="case" key={item.number}>
                <div className="case-head">
                  <span className="case-number">{item.number}</span>
                  <h3>{item.title}</h3>
                  <div className="case-metric">
                    <b>{item.metric}</b>
                    <span>{item.metricLabel}</span>
                  </div>
                </div>
                <div className="case-body">
                  <div>
                    <h4>{c.caseStudies.labels.challenge}</h4>
                    <p>{item.challenge}</p>
                  </div>
                  <div>
                    <h4>{c.caseStudies.labels.leadership}</h4>
                    <p>{item.leadership}</p>
                  </div>
                  <div>
                    <h4>{c.caseStudies.labels.outcome}</h4>
                    <p>{item.outcome}</p>
                  </div>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section id="achievements">
        <div className="wrap">
          <div className="eyebrow">{c.achievements.eyebrow}</div>
          <h2>{c.achievements.h2}</h2>
          <div className="grid">
            {c.achievements.items.map(([title, text], index) => (
              <div className="ach" key={title}>
                <span className="ach-index">{String(index + 1).padStart(2, "0")}</span>
                <h3>{title}</h3>
                <p>{text}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section id="experience">
        <div className="wrap">
          <div className="eyebrow">{c.experience.eyebrow}</div>
          <h2>{c.experience.h2}</h2>
          <div className="timeline">
            {c.experience.stops.map((stop) => (
              <div className={`stop${stop.now ? " now" : ""} reveal`} key={stop.when + stop.title}>
                <div className="when">{stop.when}</div>
                <h3>{stop.title}</h3>
                <div className="org">{stop.org}</div>
                <ul>
                  {stop.points.map((point, i) => (
                    <li key={i}>{point}</li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section id="education">
        <div className="wrap">
          <div className="two-col">
            <div>
              <div className="eyebrow">{c.education.eduEyebrow}</div>
              <h2>{c.education.eduH2}</h2>
              {c.education.items.map((e) => (
                <div className="edu" key={e.title}>
                  <div className="when">{e.when}</div>
                  <h3>{e.title}</h3>
                  <p>{e.org}</p>
                </div>
              ))}
            </div>
            <div>
              <div className="eyebrow">{c.education.compEyebrow}</div>
              <h2>{c.education.compH2}</h2>
              <ul className="comp">
                {c.education.competencies.map(([label, text]) => (
                  <li key={label}>
                    <b>{label}</b> — {text}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </section>

      <footer id="contact">
        <div className="wrap">
          <div className="eyebrow">{c.contact.eyebrow}</div>
          <h2>{c.contact.h2}</h2>
          <p className="contact-intro">{c.contact.body}</p>
          <div className="contact-actions">
            <a className="btn btn-primary" href={EMAIL_HREF}>
              {c.contact.ctaEmail}
            </a>
            <a className="btn btn-footer" href={c.cv} download>
              {c.contact.ctaCv}
            </a>
          </div>
          <div className="contact-row">
            <a href={EMAIL_HREF}>{EMAIL}</a>
            <a href={PHONE_HREF}>{PHONE_DISPLAY}</a>
            <span>{c.contact.location}</span>
          </div>
          <div className="fine">{c.contact.fine}</div>
        </div>
      </footer>
    </>
  );
}

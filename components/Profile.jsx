import ScrollReveal from "@/components/ScrollReveal";
import SetLang from "@/components/SetLang";
import { content, EMAIL, EMAIL_HREF, PHONE_DISPLAY, PHONE_HREF } from "@/app/content";

export default function Profile({ lang }) {
  const c = content[lang];

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
            <ul>
              {c.nav.map(([href, label]) => (
                <li key={href}>
                  <a href={href}>{label}</a>
                </li>
              ))}
            </ul>
            <a className="lang-toggle" href={c.toggle.href}>
              {c.toggle.label}
            </a>
          </div>
        </div>
      </nav>

      <header id="top">
        <svg className="route" viewBox="0 0 1200 420" preserveAspectRatio="none" aria-hidden="true">
          <path d="M -20 380 C 250 340, 380 260, 560 230 S 900 150, 1230 60" />
          <circle cx="240" cy="332" r="4" />
          <circle cx="560" cy="230" r="4" />
          <circle cx="880" cy="152" r="4" />
          <circle cx="1140" cy="82" r="5" />
        </svg>
        <div className="wrap hero">
          <div className="eyebrow">{c.hero.eyebrow}</div>
          <h1>
            {c.hero.name[0]}
            <br />
            {c.hero.name[1]}
          </h1>
          <div className="role">{c.hero.role}</div>
          <p className="tag">{c.hero.tag}</p>
          <div className="cta">
            <a className="btn btn-primary" href={EMAIL_HREF} target="_blank" rel="noopener noreferrer">
              {c.hero.ctaEmail}
            </a>
            <a className="btn btn-ghost" href={c.cv} download>
              {c.hero.ctaCv}
            </a>
            <a className="btn btn-ghost" href="#experience">
              {c.hero.ctaExp}
            </a>
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
          <div className="langs">{c.summary.langs}</div>
        </div>
      </section>

      <section id="achievements">
        <div className="wrap">
          <div className="eyebrow">{c.achievements.eyebrow}</div>
          <h2>{c.achievements.h2}</h2>
          <div className="grid">
            {c.achievements.items.map(([title, text]) => (
              <div className="ach" key={title}>
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
          <div className="contact-row">
            <a href={EMAIL_HREF} target="_blank" rel="noopener noreferrer">
              {EMAIL}
            </a>
            <a href={PHONE_HREF}>{PHONE_DISPLAY}</a>
            <span>{c.contact.location}</span>
          </div>
          <div className="fine">{c.contact.fine}</div>
        </div>
      </footer>
    </>
  );
}

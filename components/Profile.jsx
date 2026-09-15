import Image from "next/image";
import ScrollReveal from "@/components/ScrollReveal";
import SetLang from "@/components/SetLang";
import MobileNav from "@/components/MobileNav";
import {
  content,
  EMAIL,
  EMAIL_HREF,
  PHONE_DISPLAY,
  PHONE_HREF,
  LINKEDIN_URL,
  SITE_YEAR,
  LOGOS,
  WORK_IMAGES,
} from "@/app/content";

// Profile Studio can override a handful of fields at request time; fall back
// to the local content for everything else.
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
      bio: locale.tagline || base.hero.bio,
    },
    stats: base.stats.map(([value, label], index) => [
      managedStats[index]?.value || value,
      label,
    ]),
    about: {
      ...base.about,
      body: locale.summary || base.about.body,
    },
    contact: {
      ...base.contact,
      location: locale.location || base.contact.location,
    },
  };
}

// Renders a headline whose final period is the accent colour.
function Headline({ text }) {
  const trimmed = text.trim();
  const hasDot = trimmed.endsWith(".");
  const body = hasDot ? trimmed.slice(0, -1) : trimmed;
  return (
    <>
      {body}
      {hasDot && <span className="dot">.</span>}
    </>
  );
}

const ICONS = {
  strategy: (
    <>
      <path d="M4 20h16" />
      <rect x="5" y="11" width="3" height="7" />
      <rect x="10.5" y="7" width="3" height="11" />
      <rect x="16" y="13" width="3" height="5" />
    </>
  ),
  product: (
    <>
      <circle cx="9" cy="8" r="3" />
      <circle cx="17" cy="9" r="2.5" />
      <path d="M3 20c0-3.3 2.7-6 6-6s6 2.7 6 6" />
      <path d="M15 20c0-2.5 1.6-4.5 4-4.9" />
    </>
  ),
  teams: (
    <>
      <path d="M12 4l8 4-8 4-8-4 8-4z" />
      <path d="M4 12l8 4 8-4" />
      <path d="M4 16l8 4 8-4" />
    </>
  ),
  cap: (
    <>
      <path d="M3 9l9-4 9 4-9 4-9-4z" />
      <path d="M7 11v4c0 1.5 2.3 3 5 3s5-1.5 5-3v-4" />
      <path d="M21 9v5" />
    </>
  ),
  mail: (
    <>
      <rect x="3" y="5" width="18" height="14" rx="2" />
      <path d="M3 7l9 6 9-6" />
    </>
  ),
  phone: <path d="M5 4h4l2 5-2.5 1.5a11 11 0 0 0 5 5L15 13l5 2v4a2 2 0 0 1-2 2A16 16 0 0 1 3 6a2 2 0 0 1 2-2z" />,
  pin: (
    <>
      <path d="M12 21s-6-5.3-6-11a6 6 0 0 1 12 0c0 5.7-6 11-6 11z" />
      <circle cx="12" cy="10" r="2.2" />
    </>
  ),
  linkedin: (
    <>
      <rect x="3" y="3" width="18" height="18" rx="2" />
      <path d="M8 10v7M8 7v.5M12 17v-4a2 2 0 0 1 4 0v4" />
    </>
  ),
  arrowUpRight: <path d="M7 17L17 7M8 7h9v9" />,
  arrowDown: <path d="M12 4v16M6 14l6 6 6-6" />,
  arrowRight: <path d="M4 12h16M13 5l7 7-7 7" />,
  arrowUp: <path d="M12 20V4M5 11l7-7 7 7" />,
};

function Icon({ name, size = 24, className = "" }) {
  return (
    <svg
      className={`icon ${className}`.trim()}
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.6"
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden="true"
    >
      {ICONS[name]}
    </svg>
  );
}

// Company mark: real logo when provided, otherwise a text wordmark.
function OrgMark({ row }) {
  const logo = LOGOS[row.key];
  if (logo) {
    return <img className="org-logo" src={logo} alt={row.org} loading="lazy" />;
  }
  if (row.key === "tapatrip") {
    return (
      <span className="org-word org-tapatrip">
        tap<span className="dot">a</span>trip
      </span>
    );
  }
  if (row.key === "steppelink") {
    return <span className="org-word org-steppelink">SteppeLink</span>;
  }
  return <span className="org-word">{row.org}</span>;
}

// Work card media: real image when provided, otherwise abstract art.
function WorkMedia({ item }) {
  const image = WORK_IMAGES[item.key];
  if (image) {
    return (
      <div className="work-media">
        <Image src={image} alt="" width={1200} height={750} sizes="(max-width: 760px) 92vw, 360px" />
      </div>
    );
  }
  return (
    <div className={`work-media work-art art-${item.key}`} aria-hidden="true">
      <span className="art-label">{item.artLabel}</span>
      <span className="art-dot" />
    </div>
  );
}

export default function Profile({ lang, managedProfile }) {
  const c = mergeManagedContent(content[lang], managedProfile, lang);

  return (
    <>
      <ScrollReveal />
      <SetLang code={c.htmlLang} />

      <nav>
        <div className="wrap">
          <a className="brand" href="#top" aria-label={c.footer.name}>
            U<span className="dot">C</span>
          </a>
          <div className="nav-right">
            <ul className="nav-links">
              {c.nav.map(([href, label]) => (
                <li key={href}>
                  <a href={href}>{label}</a>
                </li>
              ))}
            </ul>
            <div className="lang-switch" aria-label="Language">
              {c.toggle.map(([href, label, active]) => (
                <a key={href} href={href} className={active ? "active" : ""} aria-current={active ? "page" : undefined}>
                  {label}
                </a>
              ))}
            </div>
            <MobileNav links={c.nav} />
          </div>
        </div>
      </nav>

      <header id="top">
        <div className="wrap hero">
          <div className="hero-copy">
            <h1>
              {c.hero.name[0]}
              <br />
              {c.hero.name[1]}
            </h1>
            <div className="role">{c.hero.role}</div>
            <div className="sub">{c.hero.sub}</div>
            <p className="bio">{c.hero.bio}</p>
            <div className="cta">
              <a className="btn-dark" href={EMAIL_HREF}>
                {c.hero.ctaTalk} <Icon name="arrowUpRight" size={16} />
              </a>
              <a className="link-cv" href={c.cv} download>
                {c.hero.ctaCv} <Icon name="arrowDown" size={16} />
              </a>
            </div>
          </div>
          <div className="portrait-circle">
            <Image
              className="portrait-img"
              src="/portrait.png"
              alt={c.hero.portraitAlt}
              width={960}
              height={960}
              priority
              sizes="(max-width: 900px) 260px, 380px"
            />
          </div>
        </div>
        <div className="wrap">
          <div className="stats">
            {c.stats.map(([value, label]) => (
              <div className="stat" key={label}>
                <b>{value}</b>
                <span>{label}</span>
              </div>
            ))}
          </div>
        </div>
      </header>

      <section id="about" className="about">
        <div className="wrap">
          <div className="eyebrow">{c.about.eyebrow}</div>
          <div className="about-head">
            <h2>
              {c.about.h2[0]}
              <br />
              <Headline text={c.about.h2[1]} />
            </h2>
            <p className="about-body">{c.about.body}</p>
          </div>
          <div className="pillars">
            {c.about.pillars.map((p) => (
              <div className="pillar reveal" key={p.title}>
                <Icon name={p.icon} size={30} className="pillar-icon" />
                <div>
                  <h3>{p.title}</h3>
                  <p>{p.text}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section id="work" className="work">
        <div className="wrap">
          <div className="eyebrow">{c.work.eyebrow}</div>
          <h2>
            <Headline text={c.work.h2} />
          </h2>
          <div className="work-grid">
            {c.work.items.map((item) => {
              const Tag = item.href ? "a" : "div";
              const linkProps = item.href ? { href: item.href, target: "_blank", rel: "noopener noreferrer" } : {};
              return (
                <Tag className="work-card reveal" key={item.key} {...linkProps}>
                  <WorkMedia item={item} />
                  <h3>{item.title}</h3>
                  <div className="work-sub">{item.subtitle}</div>
                  <p>{item.text}</p>
                  <div className="work-foot">
                    <div className="tags">
                      {item.tags.map((t) => (
                        <span key={t}>{t}</span>
                      ))}
                    </div>
                    {item.href && <Icon name="arrowRight" size={22} className="work-arrow" />}
                  </div>
                </Tag>
              );
            })}
          </div>
        </div>
      </section>

      <section id="experience" className="experience">
        <div className="wrap">
          <div className="eyebrow">{c.experience.eyebrow}</div>
          <h2>
            <Headline text={c.experience.h2} />
          </h2>
          <div className="xp-table">
            {c.experience.rows.map((row) => (
              <div className="xp-row reveal" key={row.key}>
                <div className="xp-org">
                  <OrgMark row={row} />
                  {row.orgSub && <div className="xp-org-sub">{row.orgSub}</div>}
                </div>
                <div className="xp-role">
                  <div>{row.role}</div>
                  {row.roleNote && <div className="xp-note">{row.roleNote}</div>}
                </div>
                <div className="xp-when">{row.when}</div>
                <div className="xp-outcome">{row.outcome}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section id="education" className="education">
        <div className="wrap">
          <div className="eyebrow">{c.education.eyebrow}</div>
          <h2>
            <Headline text={c.education.h2} />
          </h2>
          <div className="edu-grid">
            {c.education.items.map((e) => (
              <div className="edu" key={e.title}>
                <Icon name="cap" size={30} className="edu-icon" />
                <div>
                  <h3>{e.title}</h3>
                  <div className="edu-org">{e.org}</div>
                  <div className="edu-when">{e.when}</div>
                </div>
              </div>
            ))}
          </div>
          <div className="langs">
            {c.education.languages.map(([name, level]) => (
              <span key={name}>
                <b>{name}</b> · {level}
              </span>
            ))}
          </div>
        </div>
      </section>

      <footer id="contact" className="contact">
        <div className="wrap">
          <div className="eyebrow">{c.contact.eyebrow}</div>
          <div className="contact-head">
            <h2>
              <Headline text={c.contact.h2} />
            </h2>
            <p className="contact-note">{c.contact.note}</p>
          </div>
          <div className="contact-row">
            <a className="btn-dark" href={EMAIL_HREF}>
              {c.contact.ctaEmail} <Icon name="arrowUpRight" size={16} />
            </a>
            <a className="contact-item" href={EMAIL_HREF}>
              <Icon name="mail" size={20} />
              {EMAIL}
            </a>
            <a className="contact-item" href={PHONE_HREF}>
              <Icon name="phone" size={20} />
              {PHONE_DISPLAY}
            </a>
            <span className="contact-item">
              <Icon name="pin" size={20} />
              {c.contact.location}
            </span>
            {LINKEDIN_URL && (
              <a className="contact-item contact-linkedin" href={LINKEDIN_URL} target="_blank" rel="noopener noreferrer">
                <Icon name="linkedin" size={20} />
                {c.contact.linkedinLabel} <Icon name="arrowUpRight" size={14} />
              </a>
            )}
          </div>
          <div className="site-footer">
            <a className="brand" href="#top" aria-label={c.footer.name}>
              U<span className="dot">C</span>
            </a>
            <span className="footer-name">{c.footer.name}</span>
            <span className="footer-year">© {SITE_YEAR}</span>
            <a className="back-top" href="#top">
              {c.footer.backToTop} <Icon name="arrowUp" size={14} />
            </a>
          </div>
        </div>
      </footer>
    </>
  );
}

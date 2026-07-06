import { useEffect, useMemo, useRef, useState, type CSSProperties } from "react";
import { abilities, email, imdbUrl, instagramUrl, linkedinUrl, projects, reel, type Project } from "./data/projects";
import { abilityZh, projectZh, uiCopy, type Locale } from "./data/translations";

function getProjectIdFromHash() {
  const match = window.location.hash.match(/^#\/works\/([^/?#]+)/);
  return match ? decodeURIComponent(match[1]) : null;
}

function useHashProject() {
  const [projectId, setProjectId] = useState<string | null>(() => getProjectIdFromHash());

  useEffect(() => {
    const handleHashChange = () => setProjectId(getProjectIdFromHash());
    window.addEventListener("hashchange", handleHashChange);
    return () => window.removeEventListener("hashchange", handleHashChange);
  }, []);

  return projectId;
}

function useReveal(routeKey: string) {
  useEffect(() => {
    const nodes = Array.from(document.querySelectorAll("[data-reveal]"));
    nodes.forEach((node, index) => {
      if (node instanceof HTMLElement) {
        node.style.setProperty("--reveal-index", String(Math.min(index, 6)));
      }
    });
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("is-visible");
            observer.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.12, rootMargin: "0px 0px -8% 0px" },
    );

    nodes.forEach((node) => observer.observe(node));
    return () => observer.disconnect();
  }, [routeKey]);
}

function getProjectCopy(project: Project, locale: Locale) {
  const translation = locale === "zh" ? projectZh[project.id] : undefined;

  return {
    title: translation?.title ?? project.title,
    duration: translation?.duration ?? project.duration,
    role: translation?.role ?? project.role,
    production: translation?.production ?? project.production,
    language: translation?.language ?? project.language,
    format: translation?.format ?? project.format,
    logline: translation?.logline ?? project.logline,
    approach: translation?.approach ?? project.approach,
    credits: translation?.credits ?? project.credits,
    awards: translation?.awards ?? project.awards,
    links: translation?.links ?? project.links,
    detailSections: translation?.detailSections ?? project.detailSections,
  };
}

function getAbilityCopy(ability: (typeof abilities)[number], locale: Locale) {
  return locale === "zh" ? abilityZh[ability.title] ?? ability : ability;
}

function asParagraphs(content: string | readonly string[]) {
  return Array.isArray(content) ? content : [content];
}

function Nav({ locale, setLocale }: { locale: Locale; setLocale: (locale: Locale) => void }) {
  const [open, setOpen] = useState(false);
  const [languageOpen, setLanguageOpen] = useState(false);
  const close = () => {
    setOpen(false);
    setLanguageOpen(false);
  };
  const copy = uiCopy[locale];

  const chooseLanguage = (nextLocale: Locale) => {
    setLocale(nextLocale);
    close();
  };

  return (
    <nav className="site-nav" aria-label="Primary navigation">
      <a className="brand-lockup" href="#top" onClick={close}>
        <span>{copy.brand}</span>
      </a>
      <button
        className="menu-toggle"
        type="button"
        aria-expanded={open}
        aria-label="Toggle navigation"
        onClick={() => setOpen((value) => !value)}
      >
        <span />
        <span />
      </button>
      <div className={`nav-links ${open ? "is-open" : ""}`}>
        <a href="#top" onClick={close}>
          {copy.nav.home}
        </a>
        <a href="#reel" onClick={close}>
          {copy.nav.reel}
        </a>
        <a href="#works" onClick={close}>
          {copy.nav.works}
        </a>
        <a href="#about" onClick={close}>
          {copy.nav.about}
        </a>
        <a href="#contact" onClick={close}>
          {copy.nav.contact}
        </a>
        <div className={`language-menu ${languageOpen ? "is-open" : ""}`}>
          <button
            className="language-trigger"
            type="button"
            aria-expanded={languageOpen}
            aria-label={copy.nav.toggle}
            onClick={() => setLanguageOpen((value) => !value)}
          >
            {copy.nav.language}
          </button>
          <div className="language-options" role="menu" aria-label={copy.nav.toggle}>
            <button
              type="button"
              data-locale="en"
              className={locale === "en" ? "is-active" : ""}
              onClick={() => chooseLanguage("en")}
              role="menuitem"
            >
              {copy.nav.english}
            </button>
            <button
              type="button"
              data-locale="zh"
              className={locale === "zh" ? "is-active" : ""}
              onClick={() => chooseLanguage("zh")}
              role="menuitem"
            >
              {copy.nav.chinese}
            </button>
          </div>
        </div>
      </div>
    </nav>
  );
}

function Hero({ locale }: { locale: Locale }) {
  const copy = uiCopy[locale].hero;

  return (
    <header className="hero-shell" id="top">
      <video
        className="hero-video"
        autoPlay
        muted
        loop
        playsInline
        preload="metadata"
        poster={reel.poster}
        aria-label="Hanmo Wu selected film montage"
      >
        <source src={reel.mobileHeroVideo} media="(max-width: 760px)" type="video/mp4" />
        <source src={reel.heroVideo} type="video/mp4" />
      </video>
      <div className="hero-grade" />
      <div className="film-frame" aria-hidden="true" />
      <div className="hero-content">
        <section className="hero-copy" data-reveal>
          <p className="eyebrow">{copy.eyebrow}</p>
          <h1>{copy.title}</h1>
          <div className="hero-lede">
            {copy.lede.map((paragraph) => (
              <p key={paragraph.text}>
                {"strong" in paragraph && paragraph.strong ? <strong>{paragraph.text}</strong> : paragraph.text}
              </p>
            ))}
          </div>
        </section>
      </div>
    </header>
  );
}

function HomePage({ locale }: { locale: Locale }) {
  return (
    <>
      <Hero locale={locale} />
      <ReelSection locale={locale} />
      <WorksIndex locale={locale} />
      <AboutSection locale={locale} />
      <ContactSection locale={locale} />
    </>
  );
}

function WorksIndex({ locale }: { locale: Locale }) {
  const copy = uiCopy[locale].works;

  return (
    <section className="works-section" id="works">
      <div className="section-frame">
        <div className="section-heading" data-reveal>
          <p className="eyebrow">{copy.eyebrow}</p>
          <h2>{copy.title}</h2>
        </div>
        <div className="works-grid">
          {projects.map((project, index) => (
            <WorkCard project={project} index={index} locale={locale} key={project.id} />
          ))}
        </div>
      </div>
    </section>
  );
}

function WorkCard({ project, index, locale }: { project: Project; index: number; locale: Locale }) {
  const style = { "--accent": project.accent } as CSSProperties;
  const cardImage = project.cardImage ?? project.heroImage;
  const copy = getProjectCopy(project, locale);

  return (
    <a
      className={`work-card work-card-${project.id} ${project.featured ? "is-featured" : ""}`}
      href={`#/works/${project.id}`}
      style={style}
      data-reveal
    >
      <figure>
        <img
          src={cardImage}
          alt={`${copy.title} poster`}
          loading="lazy"
          decoding="async"
        />
      </figure>
      <div className="work-card-copy">
        <span className="work-number">{String(index + 1).padStart(2, "0")}</span>
        <div>
          <h3>{copy.title}</h3>
        </div>
        <ul aria-label={`${copy.title} credits`}>
          <li>{project.year}</li>
          <li>{copy.duration}</li>
          <li>{copy.role}</li>
        </ul>
      </div>
    </a>
  );
}

function ReelSection({ locale }: { locale: Locale }) {
  const copy = uiCopy[locale].reel;
  const playerRef = useRef<HTMLDivElement | null>(null);
  const [videoEnabled, setVideoEnabled] = useState(false);

  useEffect(() => {
    const node = playerRef.current;
    if (!node || videoEnabled) {
      return;
    }

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setVideoEnabled(true);
          observer.disconnect();
        }
      },
      { rootMargin: "320px 0px" },
    );

    observer.observe(node);
    return () => observer.disconnect();
  }, [videoEnabled]);

  return (
    <section className="reel-section" id="reel">
      <div className="section-frame reel-layout">
        <div className="section-heading" data-reveal>
          <p className="eyebrow">{copy.eyebrow}</p>
          <h2>{copy.title}</h2>
          <p>{copy.body}</p>
        </div>
        <div className="reel-player" data-reveal ref={playerRef}>
          <video controls playsInline preload="none" poster={reel.poster} src={videoEnabled ? reel.localVideo : undefined} />
        </div>
      </div>
    </section>
  );
}

function AboutSection({ locale }: { locale: Locale }) {
  const copy = uiCopy[locale].about;

  return (
    <section className="about-section" id="about">
      <div className="section-frame about-section-heading" data-reveal>
        <p className="eyebrow">{copy.sectionTitle}</p>
      </div>
      <div className="section-frame about-layout">
        <div className="about-portrait" data-reveal>
          <img src="/assets/images/hanmo-work-photo.jpg" alt="Hanmo Wu on set" loading="lazy" decoding="async" />
        </div>
        <div className="about-copy" data-reveal>
          <p className="eyebrow">{copy.eyebrow}</p>
          {asParagraphs(copy.intro).map((paragraph) => (
            <p key={paragraph}>{paragraph}</p>
          ))}
          <div className="ability-grid" aria-label={copy.abilityLabel}>
            {abilities.map((ability, index) => {
              const abilityCopy = getAbilityCopy(ability, locale);

              return (
                <article className="ability-card" key={ability.title}>
                  <span>{String(index + 1).padStart(2, "0")}</span>
                  <h3>{abilityCopy.title}</h3>
                  <p>{abilityCopy.text}</p>
                </article>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}

function ContactSection({ locale }: { locale: Locale }) {
  const emailHref = `mailto:${email}?subject=${encodeURIComponent("Portfolio Inquiry")}`;
  const copy = uiCopy[locale].contact;
  const imdbName = locale === "zh" ? "吴晗默" : "Hanmo Wu";

  return (
    <footer className="contact-section" id="contact">
      <div className="section-frame contact-grid" data-reveal>
        <div>
          <p className="eyebrow">{copy.eyebrow}</p>
          <h2>{copy.heading}</h2>
          <p className="contact-location">{copy.location}</p>
        </div>
        <div className="contact-links">
          <a href={emailHref} aria-label={`${copy.emailAria} ${email}`}>
            <span>{copy.email}</span>
            <strong>{email}</strong>
          </a>
          <a href={imdbUrl} target="_blank" rel="noreferrer">
            <span>{copy.imdb}</span>
            <strong>{imdbName}</strong>
          </a>
          <a href={instagramUrl} target="_blank" rel="noreferrer">
            <span>{copy.instagram}</span>
            <strong>@lucas_filmmaking</strong>
          </a>
          <a href={linkedinUrl} target="_blank" rel="noreferrer">
            <span>{copy.linkedin}</span>
            <strong>{imdbName}</strong>
          </a>
        </div>
      </div>
    </footer>
  );
}

function ProjectPage({ project, locale }: { project: Project; locale: Locale }) {
  const currentIndex = projects.findIndex((item) => item.id === project.id);
  const next = projects[(currentIndex + 1) % projects.length];
  const copy = uiCopy[locale].project;
  const projectCopy = getProjectCopy(project, locale);
  const nextCopy = getProjectCopy(next, locale);

  return (
    <article className="project-page" id="top">
      <a className="project-home-link" href="#works">
        {copy.back}
      </a>
      <header
        className="project-hero"
        style={
          {
            "--hero": `url(${project.heroImage})`,
            "--hero-mobile": `url(${project.detailHeroImageMobile ?? project.heroImage})`,
            "--accent": project.accent,
          } as CSSProperties
        }
      >
        <div className="project-hero-grade" />
        <div className="project-hero-inner" data-reveal>
          <p className="eyebrow">{projectCopy.role}</p>
          <h1>{projectCopy.title}</h1>
        </div>
      </header>

      <main className="project-body">
        <section className="project-info section-frame">
          <div className="project-overview" data-reveal>
            <p className="eyebrow">{projectCopy.format}</p>
            <p className="project-logline">{projectCopy.logline}</p>
            {projectCopy.links.length ? (
              <div className="project-watch-links" aria-label={`${projectCopy.title} ${copy.externalLinks}`}>
                {projectCopy.links.map((link) => (
                  <a className="watch-cta" href={link.href} target="_blank" rel="noreferrer" key={link.href}>
                    <span>{link.label}</span>
                    <strong>{projectCopy.title}</strong>
                  </a>
                ))}
              </div>
            ) : null}
          </div>

          <aside className="project-facts" data-reveal>
            <dl>
              <div>
                <dt>{copy.year}</dt>
                <dd>{project.year}</dd>
              </div>
              <div>
                <dt>{copy.duration}</dt>
                <dd>{projectCopy.duration}</dd>
              </div>
              <div>
                <dt>{copy.role}</dt>
                <dd>{projectCopy.role}</dd>
              </div>
              <div>
                <dt>{copy.production}</dt>
                <dd>{projectCopy.production}</dd>
              </div>
              {projectCopy.language ? (
                <div>
                  <dt>{copy.language}</dt>
                  <dd>{projectCopy.language}</dd>
                </div>
              ) : null}
            </dl>
          </aside>
        </section>

        <section className="project-detail-grid section-frame" data-reveal>
          <div>
            <p className="eyebrow">{copy.credits}</p>
            <ul className="clean-list">
              {projectCopy.credits.map((credit) => (
                <li key={credit}>{credit}</li>
              ))}
            </ul>
          </div>
          <div>
            <p className="eyebrow">{copy.approach}</p>
            {projectCopy.detailSections.map((section) => (
              <section className="detail-note" key={section.title}>
                <h2>{section.title}</h2>
                {asParagraphs(section.body).map((paragraph) => (
                  <p key={paragraph}>{paragraph}</p>
                ))}
              </section>
            ))}
          </div>
          <div>
            <p className="eyebrow">{copy.awards}</p>
            {projectCopy.awards.length ? (
              <ul className="clean-list award-list">
                {projectCopy.awards.map((award) => (
                  <li key={award}>{award}</li>
                ))}
              </ul>
            ) : (
              <p className="muted-copy">{copy.fallback}</p>
            )}
          </div>
        </section>

        <section
          className={`project-gallery project-gallery-${project.id} section-frame`}
          data-reveal
          aria-label={`${projectCopy.title} ${copy.gallery}`}
        >
          {project.gallery.map((image, index) => (
            <figure className="gallery-item" key={`${image}-${index}`}>
              <img src={image} alt={`${projectCopy.title} ${copy.visual} ${index + 1}`} loading="lazy" decoding="async" />
            </figure>
          ))}
        </section>

        <nav className="next-work section-frame" aria-label={copy.next} data-reveal>
          <a href={`#/works/${next.id}`}>
            <span>{copy.next}</span>
            <strong>{nextCopy.title}</strong>
          </a>
        </nav>
      </main>
    </article>
  );
}

export default function App() {
  const projectId = useHashProject();
  const [locale, setLocale] = useState<Locale>("en");
  const activeProject = useMemo(
    () => projects.find((project) => project.id === projectId) ?? null,
    [projectId],
  );
  const routeKey = `${activeProject?.id ?? "home"}-${locale}`;

  useReveal(routeKey);

  useEffect(() => {
    document.documentElement.lang = locale === "zh" ? "zh-CN" : "en";
  }, [locale]);

  useEffect(() => {
    if (activeProject) {
      window.scrollTo({ top: 0, behavior: "auto" });
    }
  }, [activeProject]);

  useEffect(() => {
    if (activeProject) {
      return;
    }

    const hash = window.location.hash;
    if (!hash || hash === "#top" || hash.startsWith("#/")) {
      return;
    }

    window.requestAnimationFrame(() => {
      document.querySelector(hash)?.scrollIntoView({ behavior: "auto", block: "start" });
    });
  }, [activeProject]);

  return (
    <>
      <Nav locale={locale} setLocale={setLocale} />
      {activeProject ? <ProjectPage project={activeProject} locale={locale} /> : <HomePage locale={locale} />}
    </>
  );
}

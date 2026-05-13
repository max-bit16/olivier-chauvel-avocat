// ============================================================
// Shared components: GradientMesh, Nav, Footer, Icons, etc.
// ============================================================

const { useState, useEffect, useRef } = React;

// ----- Routing helpers -----
function useHashRoute() {
  const get = () => (window.location.hash || "#/").replace(/^#/, "");
  const [path, setPath] = useState(get());
  useEffect(() => {
    const onChange = () => {
      setPath(get());
      window.scrollTo({ top: 0, behavior: "instant" });
    };
    window.addEventListener("hashchange", onChange);
    return () => window.removeEventListener("hashchange", onChange);
  }, []);
  return path;
}

function Link({ to, className, children, ...rest }) {
  const onClick = (e) => {
    e.preventDefault();
    window.location.hash = "#" + to;
  };
  return (
    <a href={"#" + to} className={className} onClick={onClick} {...rest}>
      {children}
    </a>
  );
}

// ----- Gradient Mesh — refined editorial palette -----
function GradientMesh({ variant = "default", height = "100%" }) {
  return (
    <svg
      className="mesh-bg"
      style={{ height }}
      viewBox="0 0 1600 800"
      preserveAspectRatio="xMidYMid slice"
      aria-hidden="true"
    >
      <defs>
        <filter id="meshBlur" x="-25%" y="-25%" width="150%" height="150%">
          <feGaussianBlur stdDeviation="130" />
        </filter>
        <radialGradient id="g-warm" cx="50%" cy="50%" r="50%">
          <stop offset="0%" stopColor="#E8DCC4" stopOpacity="0.9" />
          <stop offset="100%" stopColor="#E8DCC4" stopOpacity="0" />
        </radialGradient>
        <radialGradient id="g-navy" cx="50%" cy="50%" r="50%">
          <stop offset="0%" stopColor="#1B2D47" stopOpacity="0.16" />
          <stop offset="100%" stopColor="#1B2D47" stopOpacity="0" />
        </radialGradient>
        <radialGradient id="g-gold" cx="50%" cy="50%" r="50%">
          <stop offset="0%" stopColor="#9A7332" stopOpacity="0.22" />
          <stop offset="100%" stopColor="#9A7332" stopOpacity="0" />
        </radialGradient>
      </defs>
      <rect width="1600" height="800" fill="#F9F7F2" />
      <g filter="url(#meshBlur)">
        {variant === "default" && (
          <>
            <ellipse cx="250" cy="320" rx="680" ry="480" fill="url(#g-warm)" />
            <ellipse cx="1320" cy="220" rx="580" ry="440" fill="url(#g-navy)" />
            <ellipse cx="820" cy="580" rx="480" ry="320" fill="url(#g-gold)" />
          </>
        )}
        {variant === "warm" && (
          <>
            <ellipse cx="280" cy="260" rx="640" ry="460" fill="url(#g-gold)" />
            <ellipse cx="1200" cy="310" rx="560" ry="420" fill="url(#g-warm)" />
            <ellipse cx="720" cy="580" rx="420" ry="280" fill="url(#g-navy)" />
          </>
        )}
        {variant === "cool" && (
          <>
            <ellipse cx="220" cy="300" rx="740" ry="520" fill="url(#g-navy)" />
            <ellipse cx="1340" cy="400" rx="540" ry="380" fill="url(#g-warm)" />
            <ellipse cx="860" cy="180" rx="400" ry="320" fill="url(#g-gold)" />
          </>
        )}
      </g>
    </svg>
  );
}

// ----- Navigation -----
const COMPETENCES = [
  { to: "/competences/droit-de-la-famille", label: "Droit de la famille", desc: "Divorce, garde, filiation" },
  { to: "/competences/droit-du-dommage-corporel", label: "Dommage corporel", desc: "Indemnisation, CIVI, SARVI" },
  { to: "/competences/droit-de-la-chasse", label: "Droit de la chasse", desc: "Litiges et juridictions répressives" },
  { to: "/competences/droit-des-etrangers", label: "Droit des étrangers", desc: "OQTF, IRTF, rétention" },
  { to: "/competences/droit-penal", label: "Droit pénal", desc: "Tribunal correctionnel, assises" },
];

const PUBLICATIONS = [
  { to: "/publications/les-juridictions", label: "Les juridictions" },
  { to: "/publications/le-cout-de-lavocat", label: "Le coût de l'avocat" },
  { to: "/publications/la-relation-client-avocat", label: "La relation client–avocat" },
  { to: "/publications/laide-juridictionnelle", label: "L'aide juridictionnelle" },
  { to: "/publications/le-role-de-lavocat", label: "Le rôle de l'avocat" },
  { to: "/publications/les-obligations-de-lavocat", label: "Les obligations de l'avocat" },
];

function Nav() {
  const path = useHashRoute();
  const [mobileOpen, setMobileOpen] = useState(false);
  const [openDropdown, setOpenDropdown] = useState(null);

  useEffect(() => setMobileOpen(false), [path]);
  useEffect(() => {
    const onKey = (e) => e.key === "Escape" && (setMobileOpen(false), setOpenDropdown(null));
    document.addEventListener("keydown", onKey);
    return () => document.removeEventListener("keydown", onKey);
  }, []);

  const isActive = (prefix) => path === prefix || path.startsWith(prefix + "/");

  return (
    <nav className="nav" aria-label="Navigation principale">
      <div className="nav-inner">
        <Link to="/" className="brand">
          <span className="brand-mark">OC</span>
          <span>Olivier Chauvel</span>
          <span style={{ color: "var(--ink-mute)", fontWeight: 300, marginLeft: 4 }}>· Avocat</span>
        </Link>

        <div className="nav-links">
          <div
            className={"nav-dropdown" + (openDropdown === "cabinet" ? " open" : "")}
            onMouseEnter={() => setOpenDropdown("cabinet")}
            onMouseLeave={() => setOpenDropdown(null)}
            onBlur={(e) => { if (!e.currentTarget.contains(e.relatedTarget)) setOpenDropdown(null); }}
          >
            <span
              className={"nav-link" + (isActive("/cabinet") ? " active" : "")}
              role="button"
              tabIndex={0}
              aria-expanded={openDropdown === "cabinet"}
              aria-haspopup="true"
              onClick={() => setOpenDropdown(openDropdown === "cabinet" ? null : "cabinet")}
              onKeyDown={(e) => { if (e.key === "Enter" || e.key === " ") { e.preventDefault(); setOpenDropdown(openDropdown === "cabinet" ? null : "cabinet"); } }}
            >Cabinet ▾</span>
            <div className="nav-dropdown-menu">
              <Link to="/cabinet/presentation" className="nav-dropdown-item">
                Présentation
                <div className="desc">Maître Chauvel, son parcours et ses fonctions</div>
              </Link>
              <Link to="/cabinet/honoraires" className="nav-dropdown-item">
                Honoraires
                <div className="desc">Temps passé, forfait, résultat</div>
              </Link>
            </div>
          </div>

          <div
            className={"nav-dropdown" + (openDropdown === "comp" ? " open" : "")}
            onMouseEnter={() => setOpenDropdown("comp")}
            onMouseLeave={() => setOpenDropdown(null)}
            onBlur={(e) => { if (!e.currentTarget.contains(e.relatedTarget)) setOpenDropdown(null); }}
          >
            <span
              className={"nav-link" + (isActive("/competences") ? " active" : "")}
              role="button"
              tabIndex={0}
              aria-expanded={openDropdown === "comp"}
              aria-haspopup="true"
              onClick={() => setOpenDropdown(openDropdown === "comp" ? null : "comp")}
              onKeyDown={(e) => { if (e.key === "Enter" || e.key === " ") { e.preventDefault(); setOpenDropdown(openDropdown === "comp" ? null : "comp"); } }}
            >Compétences ▾</span>
            <div className="nav-dropdown-menu">
              {COMPETENCES.map((c) => (
                <Link key={c.to} to={c.to} className="nav-dropdown-item">
                  {c.label}
                  <div className="desc">{c.desc}</div>
                </Link>
              ))}
            </div>
          </div>

          <Link to="/publications" className={"nav-link" + (isActive("/publications") ? " active" : "")}>
            Publications
          </Link>
          <Link to="/contact" className={"nav-link" + (isActive("/contact") ? " active" : "")}>
            Contact
          </Link>
        </div>

        <div className="row row-md" style={{ display: "flex", alignItems: "center", gap: 8 }}>
          <Link to="/contact" className="btn btn-primary btn-sm nav-cta-desktop">Prendre rendez-vous</Link>
          <button
            className="nav-mobile-toggle"
            onClick={() => setMobileOpen((v) => !v)}
            aria-label={mobileOpen ? "Fermer le menu" : "Ouvrir le menu"}
            aria-expanded={mobileOpen}
            aria-controls="nav-mobile-panel"
          >
            <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
              <path d="M4 7h16M4 12h16M4 17h16" />
            </svg>
          </button>
        </div>
      </div>

      <div id="nav-mobile-panel" className={"nav-mobile-panel" + (mobileOpen ? " open" : "")} aria-hidden={!mobileOpen}>
        <div style={{ display: "flex", justifyContent: "flex-end", marginBottom: 4 }}>
          <button
            onClick={() => setMobileOpen(false)}
            aria-label="Fermer le menu"
            style={{
              background: "none", border: "none", cursor: "pointer",
              color: "var(--ink-secondary)", padding: "8px",
              minWidth: 44, minHeight: 44,
              display: "flex", alignItems: "center", justifyContent: "center",
              borderRadius: "var(--r-md)"
            }}
          >
            <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round">
              <path d="M18 6L6 18M6 6l12 12" />
            </svg>
          </button>
        </div>
        <Link to="/cabinet/presentation">Présentation</Link>
        <Link to="/cabinet/honoraires">Honoraires</Link>
        {COMPETENCES.map((c) => (
          <Link key={c.to} to={c.to}>{c.label}</Link>
        ))}
        <Link to="/publications">Publications</Link>
        <Link to="/contact">Contact</Link>
      </div>
    </nav>
  );
}

// ----- Footer -----
function Footer() {
  return (
    <footer className="footer">
      <div className="footer-inner">
        <div className="footer-grid">
          <div className="footer-col">
            <div className="brand" style={{ marginBottom: 16 }}>
              <span className="brand-mark">OC</span>
              <span>Olivier Chauvel</span>
            </div>
            <div className="t-body-md muted" style={{ maxWidth: 280 }}>
              Cabinet d'avocat indépendant à Rennes. Conseil, rédaction et représentation
              en droit de la famille, dommage corporel et droit pénal.
            </div>
          </div>

          <div className="footer-col">
            <h3>Cabinet</h3>
            <ul>
              <li><Link to="/cabinet/presentation">Présentation</Link></li>
              <li><Link to="/cabinet/honoraires">Honoraires</Link></li>
              <li><Link to="/contact">Prendre rendez-vous</Link></li>
            </ul>
          </div>

          <div className="footer-col">
            <h3>Compétences</h3>
            <ul>
              {COMPETENCES.map((c) => (
                <li key={c.to}><Link to={c.to}>{c.label}</Link></li>
              ))}
            </ul>
          </div>

          <div className="footer-col">
            <h3>Publications</h3>
            <ul>
              {PUBLICATIONS.slice(0, 6).map((p) => (
                <li key={p.to}><Link to={p.to}>{p.label}</Link></li>
              ))}
            </ul>
          </div>

          <div className="footer-col">
            <h3>Contact</h3>
            <ul style={{ color: "var(--ink-mute)", fontSize: 14 }}>
              <li>6 rue Edith Cavell<br />35000 Rennes</li>
              <li><a href="tel:0299660819" className="tnum">02.99.66.08.19</a></li>
              <li><a href="tel:0664163577" className="tnum">06.64.16.35.77</a></li>
              <li><a href="mailto:contact@olivierchauvel-avocat.fr">contact@olivierchauvel-avocat.fr</a></li>
            </ul>
          </div>
        </div>

        <div className="footer-bottom">
          <div>© {new Date().getFullYear()} Cabinet Olivier Chauvel — Avocat au Barreau de Rennes</div>
          <div className="row row-md" style={{ gap: 24 }}>
            <Link to="/mentions-legales">Mentions légales</Link>
            <Link to="/cgv">CGV</Link>
            <Link to="/rgpd">RGPD</Link>
          </div>
        </div>
      </div>
    </footer>
  );
}

// ----- Hero -----
function Hero({ eyebrow, title, subtitle, primaryCta, secondaryCta, variant = "default", photo, photoAlt, sidePhoto, sidePhotoAlt, children }) {
  return (
    <section className={"hero-mesh" + (photo ? " has-photo" : "")}>
      {photo && (
        <div className="photo-hero">
          <img src={photo} alt={photoAlt || ""} loading="eager" />
        </div>
      )}
      <GradientMesh variant={variant} />
      {sidePhoto && (
        <div className="hero-photo-side">
          <img src={sidePhoto} alt={sidePhotoAlt || ""} aria-hidden="true" loading="lazy" />
        </div>
      )}
      <div className="hero-mesh-inner">
        <div className="container">
          <div style={{ maxWidth: 800, position: "relative", zIndex: 3 }} className="stack stack-lg">
            {eyebrow && <div className="eyebrow fade-up">{eyebrow}</div>}
            <h1 className="t-display-xxl fade-up fade-up-1">{title}</h1>
            {subtitle && (
              <p className="t-body-lg fade-up fade-up-2" style={{ maxWidth: 640, color: "var(--ink-secondary)", margin: 0 }}>
                {subtitle}
              </p>
            )}
            {(primaryCta || secondaryCta) && (
              <div className="row row-md fade-up fade-up-3" style={{ gap: 12, flexWrap: "wrap" }}>
                {primaryCta && (
                  <Link to={primaryCta.to} className="btn btn-primary btn-lg">{primaryCta.label}</Link>
                )}
                {secondaryCta && (
                  <Link to={secondaryCta.to} className="btn btn-secondary btn-lg">{secondaryCta.label}</Link>
                )}
              </div>
            )}
            {children}
          </div>
        </div>
      </div>
    </section>
  );
}

// ----- Icons (line, weight 1.5) -----
function Icon({ name, size = 22 }) {
  const props = {
    width: size, height: size, viewBox: "0 0 24 24",
    fill: "none", stroke: "currentColor", strokeWidth: 1.5,
    strokeLinecap: "round", strokeLinejoin: "round",
    "aria-hidden": "true", focusable: "false"
  };
  const paths = {
    clock: <><circle cx="12" cy="12" r="9" /><path d="M12 7v5l3 2" /></>,
    scale: <><path d="M12 4v16" /><path d="M5 20h14" /><path d="M5 8l-3 7a3 3 0 006 0L5 8z" /><path d="M19 8l-3 7a3 3 0 006 0l-3-7z" /><path d="M5 8h14" /></>,
    shield: <><path d="M12 3l8 3v6c0 5-3.5 8-8 9-4.5-1-8-4-8-9V6l8-3z" /></>,
    lock: <><rect x="5" y="11" width="14" height="10" rx="2" /><path d="M8 11V8a4 4 0 018 0v3" /></>,
    users: <><circle cx="9" cy="9" r="3.5" /><path d="M2 20c.5-4 3-6 7-6s6.5 2 7 6" /><circle cx="17" cy="7" r="2.5" /><path d="M16 14c2.5.3 5 1.8 5.5 5" /></>,
    heart: <><path d="M12 20s-7-4.4-7-10a4 4 0 017-2.6A4 4 0 0119 10c0 5.6-7 10-7 10z" /></>,
    medical: <><rect x="4" y="6" width="16" height="14" rx="2" /><path d="M12 10v6M9 13h6" /><path d="M9 6V4h6v2" /></>,
    tree: <><path d="M12 3l5 8h-3l4 6H6l4-6H7l5-8z" /><path d="M12 17v4" /></>,
    passport: <><rect x="5" y="3" width="14" height="18" rx="2" /><circle cx="12" cy="10" r="3" /><path d="M8 18h8" /></>,
    gavel: <><path d="M14 4l6 6" /><path d="M11 7l6 6" /><path d="M8 10l6 6" /><path d="M5 13l6 6" /><path d="M3 17l4 4" /><path d="M15 20h6" /></>,
    book: <><path d="M4 5a2 2 0 012-2h13v18H6a2 2 0 01-4-2V5z" /><path d="M4 18h15" /></>,
    file: <><path d="M7 3h7l5 5v13H7z" /><path d="M14 3v5h5" /></>,
    euro: <><path d="M18 7a6 6 0 100 10" /><path d="M4 10h9" /><path d="M4 14h9" /></>,
    bolt: <><path d="M13 3L4 14h6l-1 7 9-11h-6l1-7z" /></>,
    check: <><path d="M5 12l5 5 9-11" /></>,
    arrow: <><path d="M5 12h14" /><path d="M13 5l7 7-7 7" /></>,
    phone: <><path d="M5 4h4l2 5-2.5 1.5a11 11 0 005 5L15 13l5 2v4a2 2 0 01-2 2A16 16 0 013 6a2 2 0 012-2z" /></>,
    mail: <><rect x="3" y="5" width="18" height="14" rx="2" /><path d="M3 7l9 6 9-6" /></>,
    pin: <><path d="M12 21s-7-7.5-7-12a7 7 0 0114 0c0 4.5-7 12-7 12z" /><circle cx="12" cy="9" r="2.5" /></>,
    document: <><path d="M7 3h7l5 5v13H7z" /><path d="M14 3v5h5" /><path d="M9 13h6M9 17h6" /></>,
    family: <><circle cx="8" cy="8" r="2.5" /><circle cx="16" cy="8" r="2.5" /><path d="M3 20c0-3 2.5-5 5-5s5 2 5 5" /><path d="M11 20c0-3 2.5-5 5-5s5 2 5 5" /></>,
  };
  return <svg {...props}>{paths[name] || paths.check}</svg>;
}

// ----- Feature card -----
function FeatureCard({ icon, iconVariant, title, description, children }) {
  return (
    <div className="card">
      <div className="stack stack-md">
        {icon && (
          <div className={"icon-tile " + (iconVariant ? "icon-tile-" + iconVariant : "")}>
            <Icon name={icon} />
          </div>
        )}
        <div className="t-heading-md" style={{ fontWeight: 400, color: "var(--ink)" }}>{title}</div>
        {description && <div className="t-body-md muted">{description}</div>}
        {children}
      </div>
    </div>
  );
}

// ----- Page shell with scroll reveal -----
function PageShell({ children }) {
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("revealed");
            observer.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.1, rootMargin: "0px 0px -48px 0px" }
    );
    const timer = setTimeout(() => {
      document.querySelectorAll(".reveal").forEach((el) => observer.observe(el));
    }, 60);
    return () => { clearTimeout(timer); observer.disconnect(); };
  }, []);
  return <div className="page-enter">{children}</div>;
}

// ----- Section title -----
function SectionTitle({ eyebrow, title, subtitle, align = "left", dark = false }) {
  return (
    <div className="stack stack-md reveal" style={{ textAlign: align, maxWidth: align === "center" ? 760 : 720, margin: align === "center" ? "0 auto" : undefined }}>
      {eyebrow && <div className={"eyebrow" + (dark ? " eyebrow-dark" : "")}>{eyebrow}</div>}
      <h2 className="t-display-lg" style={{ margin: 0 }}>{title}</h2>
      {subtitle && <div className="t-body-lg" style={{ color: dark ? "rgba(255,255,255,0.7)" : "var(--ink-secondary)", maxWidth: 620, margin: align === "center" ? "0 auto" : undefined }}>{subtitle}</div>}
    </div>
  );
}

// ----- Breadcrumb -----
function Breadcrumb({ items }) {
  return (
    <nav aria-label="Fil d'Ariane" className="row row-sm" style={{ fontSize: 13, color: "var(--ink-mute)", flexWrap: "wrap" }}>
      {items.map((it, i) => (
        <React.Fragment key={i}>
          {i > 0 && <span style={{ margin: "0 8px" }}>/</span>}
          {it.to ? <Link to={it.to} style={{ color: "var(--ink-mute)" }}>{it.label}</Link> : <span style={{ color: "var(--ink-secondary)" }}>{it.label}</span>}
        </React.Fragment>
      ))}
    </nav>
  );
}

Object.assign(window, {
  useHashRoute, Link, GradientMesh, Nav, Footer, Hero, Icon,
  FeatureCard, PageShell, SectionTitle, Breadcrumb,
  COMPETENCES, PUBLICATIONS,
});

// ============================================================
// Pages: Accueil, Présentation, Honoraires, Contact
// ============================================================

function PageHome() {
  return (
    <PageShell>
      <Hero
        eyebrow="Cabinet d'avocat · Rennes"
        title="Un avocat rennais à vos côtés, depuis 2004."
        subtitle="Cabinet situé à deux pas du Parlement de Bretagne, de la Cour d'appel et de la Cité judiciaire. Disponible, rigoureux, transparent sur les honoraires."
        primaryCta={{ to: "/contact", label: "Prendre rendez-vous" }}
        secondaryCta={{ to: "/cabinet/presentation", label: "Découvrir le cabinet" }}
        photo="rennes-palais.jpg"
        photoAlt="Palais de Rennes, siège des institutions judiciaires bretonnes"
      >
        <div className="row row-md" style={{ gap: 0, marginTop: 20, flexWrap: "wrap", fontSize: 14, color: "var(--ink-mute)", letterSpacing: "0.01em" }}>
          <span>6 rue Edith Cavell, Rennes</span>
          <span style={{ margin: "0 14px", opacity: 0.35 }}>·</span>
          <a href="tel:0299660819" className="tnum" style={{ color: "inherit", textDecoration: "none" }}>02.99.66.08.19</a>
          <span style={{ margin: "0 14px", opacity: 0.35 }}>·</span>
          <span>Lun–Ven, sur rendez-vous</span>
        </div>
      </Hero>

      {/* Authority strip */}
      <section style={{ borderBottom: "1px solid var(--hairline)", padding: "48px 0" }}>
        <div className="container">
          <div className="grid grid-3" style={{ gap: 40 }}>
            <div className="reveal stack stack-sm">
              <div className="tnum" style={{ fontFamily: "'Spectral', Georgia, serif", fontSize: "clamp(40px, 4vw, 56px)", fontWeight: 300, lineHeight: 1, letterSpacing: "-1px", color: "var(--ink)" }}>
                {new Date().getFullYear() - 2004}
              </div>
              <div className="t-caption">ans de pratique au Barreau de Rennes</div>
            </div>
            <div className="reveal reveal-d1 stack stack-sm">
              <div className="tnum" style={{ fontFamily: "'Spectral', Georgia, serif", fontSize: "clamp(40px, 4vw, 56px)", fontWeight: 300, lineHeight: 1, letterSpacing: "-1px", color: "var(--ink)" }}>
                2004
              </div>
              <div className="t-caption">Serment au Barreau de Rennes</div>
            </div>
            <div className="reveal reveal-d2 stack stack-sm">
              <div style={{ fontFamily: "'Spectral', Georgia, serif", fontSize: "clamp(40px, 4vw, 56px)", fontWeight: 300, lineHeight: 1, letterSpacing: "-1px", color: "var(--ink)" }}>
                5
              </div>
              <div className="t-caption">Domaines d'intervention — famille, corporel, pénal, étrangers, chasse</div>
            </div>
          </div>
        </div>
      </section>

      {/* Philosophy section */}
      <section className="section-sm" style={{ borderBottom: "1px solid var(--hairline)" }}>
        <div className="container">
          <div className="grid grid-2 reveal" style={{ gap: 64, alignItems: "center" }}>
            <blockquote style={{ margin: 0, padding: 0 }}>
              <div aria-hidden="true" style={{ fontFamily: "'Spectral', Georgia, serif", fontSize: "clamp(72px, 9vw, 108px)", lineHeight: 0.6, color: "var(--gold)", fontWeight: 300, marginBottom: 4, userSelect: "none" }}>«</div>
              <p className="t-display-lg" style={{ margin: 0, fontFamily: "'Spectral', Georgia, serif", fontStyle: "italic", fontWeight: 300, lineHeight: 1.3, color: "var(--ink)" }}>
                Disponible, rigoureux, transparent sur les honoraires.
              </p>
              <footer style={{ marginTop: 20, fontSize: 13, color: "var(--ink-mute)", fontStyle: "normal", letterSpacing: "0.02em" }}>
                — Maître Olivier Chauvel
              </footer>
            </blockquote>
            <div className="stack stack-md">
              <div className="t-body-lg" style={{ color: "var(--ink-secondary)" }}>
                Le cabinet accompagne chaque client avec une attention constante à la clarté des échanges
                et à la maîtrise des coûts. Chaque dossier bénéficie d'une analyse complète dès le premier rendez-vous.
              </div>
              <div className="t-body-md" style={{ color: "var(--ink-secondary)" }}>
                Les solutions amiables sont privilégiées chaque fois que les intérêts du client le permettent.
                Lorsqu'une procédure judiciaire est nécessaire, le cabinet assure une représentation rigoureuse
                devant l'ensemble des juridictions civiles, pénales et administratives de Rennes.
              </div>
              <div>
                <Link to="/contact" className="btn btn-primary">Prendre rendez-vous</Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Compétences preview — 3 domaines principaux */}
      <section className="section section-soft" style={{ position: "relative", overflow: "hidden" }}>
        <div className="deco-side-photo" style={{ backgroundImage: "url('ethereal-forms.png')" }} aria-hidden="true"></div>
        <div className="container" style={{ position: "relative", zIndex: 1 }}>
          <div className="stack stack-xl">
            <div className="row" style={{ justifyContent: "space-between", alignItems: "flex-end", flexWrap: "wrap", gap: 24 }}>
              <SectionTitle
                eyebrow="Domaines d'intervention"
                title="Cinq domaines d'intervention."
                subtitle="Famille, dommage corporel, pénal, étrangers, chasse — conseil, rédaction et représentation."
              />
              <Link to="/competences" className="btn btn-secondary">Voir toutes les compétences</Link>
            </div>

            <div className="grid grid-3">
              <div className="reveal" style={{ display: "flex" }}>
                <CompTeaser
                  title="Droit de la famille"
                  bullets={["Divorce (consentement mutuel, faute)", "Pension, prestation compensatoire", "Autorité parentale, garde"]}
                  to="/competences/droit-de-la-famille"
                />
              </div>
              <div className="reveal reveal-d1" style={{ display: "flex" }}>
                <CompTeaser
                  title="Dommage corporel"
                  bullets={["Indemnisation du préjudice corporel", "Assistance expertise médicale", "Saisine CIVI et SARVI"]}
                  to="/competences/droit-du-dommage-corporel"
                />
              </div>
              <div className="reveal reveal-d2" style={{ display: "flex" }}>
                <CompTeaser
                  title="Droit pénal"
                  bullets={["Garde à vue, instruction", "Tribunal correctionnel, assises", "Défense des victimes"]}
                  to="/competences/droit-penal"
                />
              </div>
              <div className="reveal reveal-d3" style={{ display: "flex" }}>
                <CompTeaser
                  title="Droit des étrangers"
                  bullets={["Recours OQTF et IRTF", "Rétention administrative, JLD", "Procédures d'urgence"]}
                  to="/competences/droit-des-etrangers"
                />
              </div>
              <div className="reveal reveal-d4" style={{ display: "flex" }}>
                <CompTeaser
                  title="Droit de la chasse"
                  bullets={["Litiges administratifs et disciplinaires", "Juridictions répressives", "Responsabilité civile"]}
                  to="/competences/droit-de-la-chasse"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA strip — premier rendez-vous */}
      <div className="reveal section-xs">
        <div className="container">
          <a href="tel:0299660819" className="card-dark" style={{ textDecoration: "none", display: "block", padding: "48px 56px" }}>
            <div className="grid grid-2" style={{ gap: 64, alignItems: "center" }}>
              <div className="stack stack-md">
                <div className="t-micro-cap" style={{ color: "rgba(255,255,255,0.45)", letterSpacing: "0.18em" }}>Premier rendez-vous</div>
                <div style={{ fontFamily: "'Spectral', Georgia, serif", fontStyle: "italic", fontWeight: 300, fontSize: "clamp(28px, 3.5vw, 44px)", lineHeight: 1.2, color: "white" }}>
                  Une question juridique ?<br />Le premier échange permet<br />de cadrer votre dossier.
                </div>
                <div className="t-body-md" style={{ color: "rgba(255,255,255,0.72)", maxWidth: 440, lineHeight: 1.7 }}>
                  Présentation des faits, documents nécessaires, fixation des honoraires, vérification de la protection juridique ou de l'aide juridictionnelle.
                </div>
              </div>
              <div className="stack stack-lg" style={{ alignItems: "flex-start" }}>
                <div className="stack stack-sm" style={{ color: "rgba(255,255,255,0.45)", fontSize: 13, lineHeight: 1.8 }}>
                  <div>Cabinet Olivier Chauvel</div>
                  <div>6 rue Édith Cavell · 35000 Rennes</div>
                  <div>Lun–Ven · 9h–12h / 13h45–19h</div>
                </div>
                <div style={{ borderTop: "1px solid rgba(255,255,255,0.15)", paddingTop: 20, width: "100%" }}>
                  <span className="row row-sm" style={{ color: "rgba(255,255,255,0.9)", fontSize: 14, gap: 10, fontWeight: 400, letterSpacing: "0.02em" }}>
                    Contacter le cabinet <Icon name="arrow" size={16} />
                  </span>
                </div>
              </div>
            </div>
          </a>
        </div>
      </div>

      {/* Legal aid band */}
      <section className="section-sm" style={{ paddingBottom: 96 }}>
        <div className="container">
          <div className="card-cream reveal" style={{ padding: 48 }}>
            <div className="grid grid-2" style={{ gap: 48, alignItems: "center" }}>
              <div className="stack stack-md">
                <div className="eyebrow" style={{ color: "var(--cream-accent)" }}>Aide juridictionnelle</div>
                <div className="t-display-md" style={{ color: "var(--cream-text-dark)" }}>
                  Le cabinet accepte l'aide juridictionnelle.
                </div>
                <div className="t-body-md" style={{ color: "var(--cream-text-mid)" }}>
                  Sous conditions de ressources, l'État prend en charge tout ou partie des frais d'avocat et de procédure.
                  Nous vérifions votre éligibilité dès le premier rendez-vous.
                </div>
              </div>
              <div className="stack stack-md">
                <BareStat value="≤ 1 007 €" label="Ressources mensuelles pour aide totale" tnum />
                <BareStat value="55 %" label="Prise en charge entre 1 008 € et 1 190 €" tnum />
                <BareStat value="25 %" label="Prise en charge entre 1 191 € et 1 510 €" tnum />
                <p style={{ margin: 0, fontSize: 12, color: "var(--cream-text-mid)", lineHeight: 1.5 }}>
                  Seuils en vigueur au 1er janvier {new Date().getFullYear()}. Ces plafonds sont révisés annuellement par décret.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </PageShell>
  );
}

function CompTeaser({ title, bullets, to }) {
  return (
    <Link to={to} className="card" style={{ textDecoration: "none", display: "flex", flexDirection: "column", flex: 1 }}>
      <div className="stack stack-md" style={{ height: "100%" }}>
        <div style={{ width: 28, height: 1, background: "var(--gold)" }} />
        <div className="t-heading-md" style={{ fontWeight: 400 }}>{title}</div>
        <ul className="stack stack-sm muted" style={{ listStyle: "none", padding: 0, margin: 0, fontSize: 14 }}>
          {bullets.map((b, i) => (
            <li key={i} style={{ paddingLeft: 14, position: "relative", lineHeight: 1.5 }}>
              <span style={{ position: "absolute", left: 0, top: 0, color: "var(--hairline-input)", userSelect: "none" }}>·</span>
              {b}
            </li>
          ))}
        </ul>
        <div style={{ marginTop: "auto", paddingTop: 16 }}>
          <span className="comp-teaser-arrow row row-sm" style={{ color: "var(--primary)", fontSize: 14, gap: 8, fontWeight: 400 }}>
            En savoir plus <Icon name="arrow" size={14} />
          </span>
        </div>
      </div>
    </Link>
  );
}

function BareStat({ value, label, tnum }) {
  return (
    <div className="row" style={{ alignItems: "baseline", gap: 16, borderBottom: "1px solid rgba(154, 115, 50, 0.18)", paddingBottom: 12 }}>
      <div className={"t-display-md " + (tnum ? "tnum" : "")} style={{ color: "var(--cream-text-dark)", minWidth: 140 }}>{value}</div>
      <div className="t-body-md" style={{ color: "var(--cream-text-mid)" }}>{label}</div>
    </div>
  );
}

// ============================================================
// PRÉSENTATION
// ============================================================
function PagePresentation() {
  return (
    <PageShell>
      <Hero
        eyebrow="Le cabinet"
        title="Maître Olivier Chauvel, avocat depuis 2004."
        subtitle="Trois fonctions complémentaires : informer, rédiger, représenter. Une exigence constante de transparence et de confidentialité."
        primaryCta={{ to: "/contact", label: "Prendre rendez-vous" }}
        variant="cool"
      />

      <section className="section">
        <div className="container">
          <Breadcrumb items={[{ label: "Accueil", to: "/" }, { label: "Cabinet", to: "/cabinet/presentation" }, { label: "Présentation" }]} />

          <div className="reveal presentation-grid" style={{ marginTop: 48 }}>
            <div className="stack stack-lg">
              <div className="stack stack-md">
                <div className="eyebrow">Parcours</div>
                <div className="t-display-lg">Une formation et une pratique au service du contentieux.</div>
              </div>
              <div className="stack stack-md t-body-lg" style={{ color: "var(--ink-secondary)" }}>
                <p style={{ margin: 0 }}>
                  Maître Olivier Chauvel est titulaire d'une <strong style={{ fontWeight: 400, color: "var(--ink)" }}>maîtrise de droit privé</strong>,
                  d'une <strong style={{ fontWeight: 400, color: "var(--ink)" }}>maîtrise de droit des affaires</strong> et
                  d'un <strong style={{ fontWeight: 400, color: "var(--ink)" }}>DESS Contentieux</strong>.
                </p>
                <p style={{ margin: 0 }}>
                  Il a prêté serment au Barreau de Rennes en <span className="tnum">2004</span>. Depuis lors, il intervient
                  en conseil, en rédaction d'actes et en représentation devant l'ensemble des juridictions de la région.
                </p>
                <p style={{ margin: 0 }}>
                  Le cabinet met l'accent sur la <strong style={{ fontWeight: 400, color: "var(--ink)" }}>transparence des coûts</strong> et
                  sur la <strong style={{ fontWeight: 400, color: "var(--ink)" }}>confidentialité absolue</strong> qui régit la relation client–avocat.
                </p>
              </div>
            </div>
            <div className="editorial-photo">
              <img src="rennes-cite-judiciaire.jpg" alt="Cité judiciaire de Rennes, à proximité du cabinet" loading="lazy" />
            </div>
          </div>

          <div className="reveal reveal-d1 presentation-stats" style={{ marginTop: 64, borderTop: "1px solid var(--hairline)" }}>
            <div style={{ padding: "40px 40px 40px 0", borderRight: "1px solid var(--hairline)" }}>
              <div className="tnum" style={{ fontFamily: "'Spectral', Georgia, serif", fontSize: "clamp(48px, 4.5vw, 72px)", fontWeight: 300, color: "var(--ink)", letterSpacing: "-2px", lineHeight: 1 }}>2004</div>
              <div className="t-caption" style={{ marginTop: 10 }}>Année de prestation de serment</div>
            </div>
            <div style={{ padding: "40px 40px", borderRight: "1px solid var(--hairline)" }}>
              <div style={{ fontFamily: "'Spectral', Georgia, serif", fontSize: "clamp(48px, 4.5vw, 72px)", fontWeight: 300, color: "var(--ink)", lineHeight: 1 }}>3</div>
              <div className="t-caption" style={{ marginTop: 10 }}>Diplômes en droit privé et contentieux</div>
            </div>
            <div style={{ padding: "40px 40px" }}>
              <div style={{ fontFamily: "'Spectral', Georgia, serif", fontSize: "clamp(48px, 4.5vw, 72px)", fontWeight: 300, color: "var(--ink)", lineHeight: 1 }}>5</div>
              <div className="t-caption" style={{ marginTop: 10 }}>Domaines d'intervention principaux</div>
            </div>
          </div>
        </div>
      </section>

      {/* Trois fonctions */}
      <section className="section section-soft">
        <div className="container">
          <div className="stack stack-xl">
            <SectionTitle
              eyebrow="Trois fonctions"
              title="Informer, rédiger, représenter."
              subtitle="Chaque mission combine conseil et action — du premier avis juridique à la décision rendue."
            />
            <div className="grid grid-3">
              <div className="card-cream reveal">
                <div className="stack stack-md">
                  <div style={{ fontFamily: "'Spectral', Georgia, serif", fontSize: 48, fontWeight: 300, color: "var(--canvas-cream)", lineHeight: 1, letterSpacing: "-1px" }}>01</div>
                  <div className="t-heading-lg" style={{ fontWeight: 400, color: "var(--cream-text-dark)" }}>Information & Conseil</div>
                  <div className="t-body-md" style={{ color: "var(--cream-text-mid)" }}>
                    Analyse de votre situation, exposé du droit applicable, identification des options
                    procédurales et de leurs conséquences pratiques.
                  </div>
                </div>
              </div>
              <div className="card-cream reveal reveal-d1">
                <div className="stack stack-md">
                  <div style={{ fontFamily: "'Spectral', Georgia, serif", fontSize: 48, fontWeight: 300, color: "var(--canvas-cream)", lineHeight: 1, letterSpacing: "-1px" }}>02</div>
                  <div className="t-heading-lg" style={{ fontWeight: 400, color: "var(--cream-text-dark)" }}>Rédaction & Transaction</div>
                  <div className="t-body-md" style={{ color: "var(--cream-text-mid)" }}>
                    Rédaction d'actes, de conventions et de contrats. Négociation et formalisation
                    de transactions amiables, en évitant lorsque possible la voie contentieuse.
                  </div>
                </div>
              </div>
              <div className="card-cream reveal reveal-d2">
                <div className="stack stack-md">
                  <div style={{ fontFamily: "'Spectral', Georgia, serif", fontSize: 48, fontWeight: 300, color: "var(--canvas-cream)", lineHeight: 1, letterSpacing: "-1px" }}>03</div>
                  <div className="t-heading-lg" style={{ fontWeight: 400, color: "var(--cream-text-dark)" }}>Représentation</div>
                  <div className="t-body-md" style={{ color: "var(--cream-text-mid)" }}>
                    Représentation et plaidoirie devant l'ensemble des juridictions civiles, pénales et
                    administratives, de la première instance à la cassation.
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="section-sm" style={{ paddingBottom: 96 }}>
        <div className="container-narrow">
          <div className="card" style={{ padding: 40, display: "flex", gap: 24, alignItems: "center", flexWrap: "wrap" }}>
            <div className="icon-tile icon-tile-stone" style={{ width: 56, height: 56 }}>
              <Icon name="check" size={26} />
            </div>
            <div className="stack stack-sm" style={{ flex: 1, minWidth: 240 }}>
              <div className="t-heading-md" style={{ fontWeight: 400 }}>L'aide juridictionnelle est acceptée.</div>
              <div className="t-body-md muted">
                Sous conditions de ressources, l'État prend en charge tout ou partie des frais
                d'avocat et de procédure.
              </div>
            </div>
            <Link to="/publications/laide-juridictionnelle" className="btn btn-secondary">En savoir plus</Link>
          </div>
        </div>
      </section>
    </PageShell>
  );
}

// ============================================================
// HONORAIRES
// ============================================================
function PageHonoraires() {
  return (
    <PageShell>
      <Hero
        eyebrow="Le cabinet · Honoraires"
        title="Trois formules, une exigence : la clarté."
        subtitle="Tous les honoraires font l'objet d'une convention écrite préalable. Le mode de calcul, le tarif et les modalités de paiement sont fixés ensemble dès le premier rendez-vous."
        primaryCta={{ to: "/contact", label: "Demander un devis" }}
        variant="warm"
      />

      <section className="section">
        <div className="container">
          <Breadcrumb items={[{ label: "Accueil", to: "/" }, { label: "Cabinet", to: "/cabinet/honoraires" }, { label: "Honoraires" }]} />

          <div className="stack stack-xl" style={{ marginTop: 24 }}>
            <SectionTitle
              eyebrow="Trois formules"
              title="Le mode de rémunération est fixé selon la nature du dossier."
              subtitle="Une convention d'honoraires écrite, signée avant toute intervention, précise le mode retenu, le montant et les éventuels frais à prévoir."
            />

            {/* Trois formules — layout horizontal */}
            <div className="stack" style={{ gap: 0, border: "1px solid var(--hairline)", borderRadius: "var(--r-lg)", overflow: "hidden" }}>
              {/* Au temps passé */}
              <div className="reveal formula-row" style={{ background: "white" }}>
                <div style={{ padding: "40px 40px", borderRight: "1px solid var(--hairline)", display: "flex", flexDirection: "column", gap: 12 }}>
                  <div style={{ fontFamily: "'Spectral', Georgia, serif", fontSize: 56, fontWeight: 300, color: "var(--hairline)", lineHeight: 1, letterSpacing: "-2px" }}>01</div>
                  <div className="t-heading-lg" style={{ fontWeight: 400, color: "var(--ink)" }}>Au temps<br />passé</div>
                  <div className="t-caption tnum" style={{ color: "var(--ink-mute)", marginTop: "auto" }}>Tarif horaire</div>
                </div>
                <div style={{ padding: "40px 48px", display: "flex", flexDirection: "column", gap: 16 }}>
                  <div className="t-body-md" style={{ color: "var(--ink-secondary)" }}>
                    Décompte du temps mis à votre disposition. Chaque étape — rendez-vous, étude, rédaction, audience — est consignée et facturée au temps réellement consacré.
                  </div>
                  <ul className="stack stack-sm" style={{ listStyle: "none", padding: 0, margin: 0, fontSize: 14, color: "var(--ink-secondary)" }}>
                    <CheckLine>Note d'honoraires détaillée à chaque étape</CheckLine>
                    <CheckLine>Estimation prévisionnelle communiquée</CheckLine>
                    <CheckLine>Adapté aux dossiers à durée incertaine</CheckLine>
                  </ul>
                </div>
              </div>
              {/* Au forfait — featured */}
              <div className="reveal formula-row formula-row--dark" style={{ background: "var(--primary)", borderTop: "1px solid rgba(255,255,255,0.08)", borderBottom: "1px solid rgba(255,255,255,0.08)" }}>
                <div style={{ padding: "40px 40px", borderRight: "1px solid rgba(255,255,255,0.1)", display: "flex", flexDirection: "column", gap: 12 }}>
                  <div style={{ fontFamily: "'Spectral', Georgia, serif", fontSize: 56, fontWeight: 300, color: "rgba(255,255,255,0.15)", lineHeight: 1, letterSpacing: "-2px" }}>02</div>
                  <div className="t-heading-lg" style={{ fontWeight: 400, color: "white" }}>Au forfait</div>
                  <div className="pill pill-dark" style={{ alignSelf: "flex-start", marginTop: "auto" }}>Le plus demandé</div>
                </div>
                <div style={{ padding: "40px 48px", display: "flex", flexDirection: "column", gap: 16 }}>
                  <div className="t-body-md" style={{ color: "rgba(255,255,255,0.72)" }}>
                    Un montant convenu pour l'ensemble du dossier, lorsque l'aléa procédural est faible et que les étapes peuvent être anticipées. Coût total connu dès la signature de la convention.
                  </div>
                  <ul className="stack stack-sm" style={{ listStyle: "none", padding: 0, margin: 0, fontSize: 14, color: "rgba(255,255,255,0.8)" }}>
                    <CheckLine dark>Coût total connu d'avance</CheckLine>
                    <CheckLine dark>Adapté aux divorces par consentement mutuel</CheckLine>
                    <CheckLine dark>Adapté aux procédures simples</CheckLine>
                  </ul>
                </div>
              </div>
              {/* Au résultat */}
              <div className="reveal formula-row" style={{ background: "white" }}>
                <div style={{ padding: "40px 40px", borderRight: "1px solid var(--hairline)", display: "flex", flexDirection: "column", gap: 12 }}>
                  <div style={{ fontFamily: "'Spectral', Georgia, serif", fontSize: 56, fontWeight: 300, color: "var(--hairline)", lineHeight: 1, letterSpacing: "-2px" }}>03</div>
                  <div className="t-heading-lg" style={{ fontWeight: 400, color: "var(--ink)" }}>Au résultat</div>
                  <div className="t-caption tnum" style={{ color: "var(--ink-mute)", marginTop: "auto" }}>Complément</div>
                </div>
                <div style={{ padding: "40px 48px", display: "flex", flexDirection: "column", gap: 16 }}>
                  <div className="t-body-md" style={{ color: "var(--ink-secondary)" }}>
                    Un complément calculé sur le gain ou l'économie procurés par la procédure. Ne peut être <strong style={{ fontWeight: 400, color: "var(--ink)" }}>le seul mode de rémunération</strong> — s'ajoute nécessairement à un honoraire fixe ou horaire.
                  </div>
                  <ul className="stack stack-sm" style={{ listStyle: "none", padding: 0, margin: 0, fontSize: 14, color: "var(--ink-secondary)" }}>
                    <CheckLine>Convention écrite préalable obligatoire</CheckLine>
                    <CheckLine>S'ajoute à un honoraire fixe ou horaire</CheckLine>
                    <CheckLine>Adapté aux indemnisations corporelles</CheckLine>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Dispositifs complémentaires */}
      <section className="section section-soft">
        <div className="container">
          <div className="stack stack-xl">
            <SectionTitle
              eyebrow="Dispositifs complémentaires"
              title="Réduire le coût net à votre charge."
              subtitle="Deux mécanismes peuvent diminuer ou annuler les honoraires effectivement supportés."
            />
            <div className="grid grid-2">
              <FeatureCard
                icon="shield"
                iconVariant=""
                title="Assurance protection juridique"
                description="Si vous bénéficiez d'une assurance protection juridique (contrat habitation, automobile ou souscription spécifique), elle prend en charge tout ou partie de vos frais d'avocat. Le cabinet vérifie l'étendue de la garantie dès le premier rendez-vous."
              />
              <FeatureCard
                icon="euro"
                iconVariant="cream"
                title="Remboursement par la partie adverse"
                description="En cas de succès, le juge peut condamner la partie perdante à vous rembourser tout ou partie de vos frais sur le fondement des articles 700 CPC, 475-1 et 375 CPP. Le cabinet sollicite systématiquement ce remboursement."
              />
            </div>

            <div className="card-cream" style={{ padding: 32 }}>
              <div className="row" style={{ gap: 24, alignItems: "center", flexWrap: "wrap" }}>
                <div className="icon-tile icon-tile-cream" style={{ width: 56, height: 56 }}>
                  <Icon name="document" size={26} />
                </div>
                <div className="stack stack-sm" style={{ flex: 1, minWidth: 280 }}>
                  <div className="t-heading-md" style={{ fontWeight: 400, color: "var(--cream-text-dark)" }}>Aide juridictionnelle acceptée</div>
                  <div className="t-body-md" style={{ color: "var(--cream-text-mid)" }}>
                    Sous conditions de ressources, l'État prend en charge tout ou partie des frais
                    d'avocat et de procédure.
                  </div>
                </div>
                <Link to="/publications/laide-juridictionnelle" className="btn btn-secondary">Barèmes et conditions</Link>
              </div>
            </div>
          </div>
        </div>
      </section>
    </PageShell>
  );
}

function CheckLine({ children, dark }) {
  return (
    <li className="row row-sm" style={{ alignItems: "flex-start", gap: 10 }}>
      <span style={{ color: dark ? "var(--gold-light)" : "var(--primary)", marginTop: 3 }}>
        <Icon name="check" size={14} />
      </span>
      <span>{children}</span>
    </li>
  );
}

// ============================================================
// CONTACT
// ============================================================
function PageContact() {
  const [formState, setFormState] = useState({ submitted: false, loading: false });
  const [values, setValues] = useState({
    nom: "", prenom: "", telephone: "", email: "", domaine: "", message: ""
  });
  const [errors, setErrors] = useState({});
  const [touched, setTouched] = useState({});

  const validate = (name, value) => {
    const required = ["nom", "prenom", "telephone", "email", "message"];
    if (required.includes(name) && !value.trim()) return "Ce champ est requis.";
    if (name === "telephone" && value.trim() && !/^[\d\s.+\-() ]{9,}$/.test(value.trim())) {
      return "Format invalide (ex : 06 12 34 56 78).";
    }
    if (name === "email" && value.trim() && !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(value)) {
      return "Adresse e-mail invalide.";
    }
    return null;
  };

  const onChange = (k) => (e) => {
    const val = e.target.value;
    setValues((v) => ({ ...v, [k]: val }));
    if (touched[k]) setErrors((err) => ({ ...err, [k]: validate(k, val) }));
  };

  const onBlur = (k) => () => {
    setTouched((t) => ({ ...t, [k]: true }));
    setErrors((err) => ({ ...err, [k]: validate(k, values[k]) }));
  };

  const onSubmit = async (e) => {
    e.preventDefault();
    const required = ["nom", "prenom", "telephone", "email", "message"];
    const newErrors = {};
    const newTouched = {};
    required.forEach((k) => { newTouched[k] = true; newErrors[k] = validate(k, values[k]); });
    setTouched(newTouched);
    setErrors(newErrors);
    if (Object.values(newErrors).some(Boolean)) return;
    setFormState({ loading: true });
    try {
      const cfg = (window.EMAILJS_CONFIG) || {};
      await window.emailjs.send(
        cfg.serviceId  || 'YOUR_SERVICE_ID',
        cfg.templateId || 'YOUR_TEMPLATE_ID',
        {
          from_name: values.nom + ' ' + values.prenom,
          reply_to:  values.email,
          telephone: values.telephone,
          domaine:   values.domaine || 'Non précisé',
          message:   values.message,
        },
        { publicKey: cfg.publicKey || 'YOUR_PUBLIC_KEY' }
      );
      setFormState({ submitted: true });
    } catch (err) {
      console.error('EmailJS error:', err);
      setFormState({ error: true });
    }
  };

  return (
    <PageShell>
      <Hero
        eyebrow="Contact"
        title="Prenez rendez-vous avec le cabinet."
        subtitle="Sur rendez-vous, du lundi au vendredi. Le cabinet est accessible en métro (station République) et par les parkings Kleber, Hoche et Vilaine."
        variant="default"
        compact
      />

      <div className="banner-photo">
        <img src="rennes-vieux.jpg" alt="Place du Parlement de Bretagne, cœur historique de Rennes" loading="lazy" />
      </div>

      <section className="section">
        <div className="container">
          <Breadcrumb items={[{ label: "Accueil", to: "/" }, { label: "Contact" }]} />
          <div className="contact-grid">
            {/* Form */}
            <div className="card" style={{ padding: 40 }}>
              {formState.submitted ? (
                <div className="stack stack-md" style={{ padding: 32, textAlign: "center" }}>
                  <div className="icon-tile icon-tile-success" style={{ width: 56, height: 56, margin: "0 auto" }}>
                    <Icon name="check" size={26} />
                  </div>
                  <div className="t-display-md">Demande envoyée</div>
                  <div className="t-body-md muted">
                    Votre message a bien été envoyé. Le cabinet vous contactera sous 48h.
                  </div>
                  <div>
                    <button type="button" className="btn btn-secondary" onClick={() => { setFormState({}); setErrors({}); setTouched({}); setValues({ nom: "", prenom: "", telephone: "", email: "", domaine: "", message: "" }); }}>
                      Envoyer une autre demande
                    </button>
                  </div>
                </div>
              ) : formState.error ? (
                <div className="stack stack-md" style={{ padding: 32, textAlign: "center" }}>
                  <div className="icon-tile" style={{ width: 56, height: 56, margin: "0 auto", background: "rgba(185,28,28,0.08)", color: "#b91c1c", border: "1px solid rgba(185,28,28,0.12)" }}>
                    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" aria-hidden="true"><circle cx="12" cy="12" r="9"/><path d="M12 8v4M12 16h.01"/></svg>
                  </div>
                  <div className="t-heading-lg" style={{ fontWeight: 400 }}>Envoi échoué</div>
                  <div className="t-body-md muted">
                    Une erreur est survenue. Veuillez réessayer ou nous appeler au <a href="tel:0299660819" className="link tnum">02.99.66.08.19</a>.
                  </div>
                  <div>
                    <button type="button" className="btn btn-secondary" onClick={() => setFormState({})}>
                      Réessayer
                    </button>
                  </div>
                </div>
              ) : (
                <form className="stack stack-lg" onSubmit={onSubmit} noValidate>
                  <div className="stack stack-sm">
                    <div className="eyebrow">Formulaire</div>
                    <div className="t-display-md">Décrivez-nous votre demande.</div>
                  </div>

                  <div className="grid grid-2" style={{ gap: 16 }}>
                    <div className={"field" + (errors.nom && touched.nom ? " has-error" : "")}>
                      <label htmlFor="contact-nom">Nom *</label>
                      <input id="contact-nom" autoComplete="family-name" value={values.nom} onChange={onChange("nom")} onBlur={onBlur("nom")} placeholder="Dupont" />
                      {errors.nom && touched.nom && <span className="field-error" role="alert">{errors.nom}</span>}
                    </div>
                    <div className={"field" + (errors.prenom && touched.prenom ? " has-error" : "")}>
                      <label htmlFor="contact-prenom">Prénom *</label>
                      <input id="contact-prenom" autoComplete="given-name" value={values.prenom} onChange={onChange("prenom")} onBlur={onBlur("prenom")} placeholder="Marie" />
                      {errors.prenom && touched.prenom && <span className="field-error" role="alert">{errors.prenom}</span>}
                    </div>
                  </div>

                  <div className="grid grid-2" style={{ gap: 16 }}>
                    <div className={"field" + (errors.telephone && touched.telephone ? " has-error" : "")}>
                      <label htmlFor="contact-telephone">Téléphone *</label>
                      <input id="contact-telephone" type="tel" autoComplete="tel" className="tnum" value={values.telephone} onChange={onChange("telephone")} onBlur={onBlur("telephone")} placeholder="06 12 34 56 78" />
                      {errors.telephone && touched.telephone && <span className="field-error" role="alert">{errors.telephone}</span>}
                    </div>
                    <div className={"field" + (errors.email && touched.email ? " has-error" : "")}>
                      <label htmlFor="contact-email">E-mail *</label>
                      <input id="contact-email" type="email" autoComplete="email" value={values.email} onChange={onChange("email")} onBlur={onBlur("email")} placeholder="marie.dupont@email.fr" />
                      {errors.email && touched.email && <span className="field-error" role="alert">{errors.email}</span>}
                    </div>
                  </div>

                  <div className="field">
                    <label htmlFor="contact-domaine">Domaine juridique</label>
                    <select id="contact-domaine" autoComplete="off" value={values.domaine} onChange={onChange("domaine")}>
                      <option value="">— Sélectionner —</option>
                      <option>Droit de la famille</option>
                      <option>Dommage corporel</option>
                      <option>Droit de la chasse</option>
                      <option>Droit des étrangers</option>
                      <option>Droit pénal</option>
                      <option>Autre / Je ne sais pas</option>
                    </select>
                  </div>

                  <div className={"field" + (errors.message && touched.message ? " has-error" : "")}>
                    <label htmlFor="contact-message">Votre message *</label>
                    <textarea id="contact-message" autoComplete="off" value={values.message} onChange={onChange("message")} onBlur={onBlur("message")} placeholder="Présentez brièvement votre situation. Aucun document confidentiel ne doit être envoyé via ce formulaire." />
                    {errors.message && touched.message && <span className="field-error" role="alert">{errors.message}</span>}
                  </div>

                  <div className="row" style={{ justifyContent: "space-between", flexWrap: "wrap", gap: 12 }}>
                    <div className="t-caption" style={{ maxWidth: 380 }}>
                      Les informations envoyées via ce formulaire sont strictement confidentielles.
                      Aucun document sensible ne doit y figurer.
                    </div>
                    <button type="submit" className="btn btn-primary btn-lg" disabled={formState.loading} style={{ minWidth: 200, justifyContent: "center" }}>
                      {formState.loading ? (
                        <span className="row row-sm" style={{ gap: 8 }}>
                          <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" aria-hidden="true" style={{ animation: "spin 0.8s linear infinite" }}>
                            <circle cx="12" cy="12" r="10" strokeOpacity="0.25" />
                            <path d="M12 2a10 10 0 0110 10" />
                          </svg>
                          Envoi en cours…
                        </span>
                      ) : "Envoyer ma demande"}
                    </button>
                  </div>
                </form>
              )}
            </div>

            {/* Sidebar — coordonnées */}
            <div className="stack stack-lg">
              <div className="card-dark">
                <div className="stack stack-md">
                  <div className="eyebrow eyebrow-dark">Coordonnées</div>
                  <div className="t-heading-lg" style={{ fontWeight: 400, color: "white" }}>Cabinet de Rennes</div>
                  <div className="stack stack-md" style={{ color: "rgba(255,255,255,0.85)", fontSize: 14 }}>
                    <ContactRow icon="pin" label="Adresse">
                      6 rue Edith Cavell<br />35000 Rennes
                    </ContactRow>
                    <ContactRow icon="phone" label="Téléphone">
                      <a href="tel:0299660819" className="tnum" style={{ color: "white" }}>02.99.66.08.19</a><br />
                      <a href="tel:0664163577" className="tnum" style={{ color: "rgba(255,255,255,0.7)" }}>06.64.16.35.77</a>
                    </ContactRow>
                    <ContactRow icon="mail" label="E-mail">
                      <a href="mailto:contact@olivierchauvel-avocat.fr" style={{ color: "white" }}>contact@olivierchauvel-avocat.fr</a>
                    </ContactRow>
                  </div>
                </div>
              </div>

              <div className="card">
                <div className="stack stack-md">
                  <div className="row row-sm" style={{ gap: 10 }}>
                    <Icon name="clock" />
                    <div className="t-heading-md" style={{ fontWeight: 400 }}>Horaires</div>
                  </div>
                  <div className="stack stack-sm tnum" style={{ fontSize: 14, color: "var(--ink-secondary)" }}>
                    <div className="row" style={{ justifyContent: "space-between" }}><span>Lundi – Vendredi</span><span>9h00 – 12h00</span></div>
                    <div className="row" style={{ justifyContent: "space-between" }}><span>&nbsp;</span><span>13h45 – 19h00</span></div>
                    <div className="row" style={{ justifyContent: "space-between" }}><span>Samedi – Dimanche</span><span style={{ color: "var(--ink-mute)" }}>Fermé</span></div>
                  </div>
                  <div className="t-caption" style={{ paddingTop: 8, borderTop: "1px solid var(--hairline)" }}>
                    Consultations sur rendez-vous uniquement.
                  </div>
                </div>
              </div>

              <div className="card-cream">
                <div className="stack stack-sm">
                  <div className="t-micro-cap" style={{ color: "var(--cream-accent)" }}>Accès</div>
                  <div className="t-heading-md" style={{ fontWeight: 400, color: "var(--cream-text-dark)" }}>Comment venir ?</div>
                  <div className="stack stack-sm" style={{ fontSize: 14, color: "var(--cream-text-mid)" }}>
                    <div><strong style={{ fontWeight: 400, color: "var(--cream-text-dark)" }}>Métro :</strong> ligne A, station République</div>
                    <div><strong style={{ fontWeight: 400, color: "var(--cream-text-dark)" }}>Parkings :</strong> Kleber, Hoche, Vilaine</div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Map */}
          <div className="mockup" style={{ marginTop: 48, padding: 0, overflow: "hidden" }}>
            <MapPlaceholder />
          </div>
        </div>
      </section>
    </PageShell>
  );
}

function ContactRow({ icon, label, children }) {
  return (
    <div className="row" style={{ alignItems: "flex-start", gap: 14 }}>
      <div style={{ width: 36, height: 36, borderRadius: "var(--r-md)", background: "rgba(255,255,255,0.08)", display: "grid", placeItems: "center", flexShrink: 0 }}>
        <Icon name={icon} size={16} />
      </div>
      <div className="stack stack-sm">
        <div className="t-caption" style={{ color: "rgba(255,255,255,0.5)" }}>{label}</div>
        <div style={{ lineHeight: 1.5 }}>{children}</div>
      </div>
    </div>
  );
}

function MapPlaceholder() {
  return (
    <div style={{ position: "relative", height: 400, background: "#e9eef4" }} role="img" aria-label="Plan d'accès — Cabinet Olivier Chauvel, 6 rue Édith Cavell, Rennes">
      <svg viewBox="0 0 1200 400" preserveAspectRatio="xMidYMid slice" style={{ width: "100%", height: "100%", display: "block" }}>
        <defs>
          <pattern id="grid" width="40" height="40" patternUnits="userSpaceOnUse">
            <path d="M 40 0 L 0 0 0 40" fill="none" stroke="#d3dbe5" strokeWidth="0.5" />
          </pattern>
        </defs>
        <rect width="1200" height="400" fill="#e9eef4" />
        <rect width="1200" height="400" fill="url(#grid)" />
        <path d="M0 200 Q 300 180, 600 200 T 1200 220" stroke="#c4cfdb" strokeWidth="14" fill="none" />
        <path d="M0 200 Q 300 180, 600 200 T 1200 220" stroke="#fff" strokeWidth="6" fill="none" />
        <path d="M600 0 L 620 200 L 640 400" stroke="#c4cfdb" strokeWidth="10" fill="none" />
        <path d="M600 0 L 620 200 L 640 400" stroke="#fff" strokeWidth="4" fill="none" />
        <path d="M400 0 L 380 400" stroke="#d3dbe5" strokeWidth="6" fill="none" />
        <path d="M820 0 L 860 400" stroke="#d3dbe5" strokeWidth="6" fill="none" />
        <path d="M0 320 Q 200 340, 500 310 T 1200 340 L 1200 400 L 0 400 Z" fill="#bcd6ee" opacity="0.7" />
        <rect x="200" y="60" width="120" height="80" fill="#dde4ec" rx="2" />
        <rect x="700" y="50" width="100" height="100" fill="#dde4ec" rx="2" />
        <rect x="900" y="250" width="140" height="80" fill="#dde4ec" rx="2" />
        <rect x="100" y="240" width="100" height="60" fill="#dde4ec" rx="2" />
        <text x="40" y="180" fontSize="11" fill="#7a8a9c" fontWeight="400">Rue de Brest</text>
        <text x="640" y="40" fontSize="11" fill="#7a8a9c" fontWeight="400">Rue Édith Cavell</text>
        <text x="60" y="360" fontSize="11" fill="#5a7d9c" fontWeight="500">La Vilaine</text>
        <g transform="translate(620, 200)">
          <circle r="32" fill="rgba(27,45,71,0.15)" />
          <circle r="20" fill="rgba(27,45,71,0.3)" />
          <path d="M0 -14 C -8 -14, -12 -8, -12 -2 C -12 8, 0 16, 0 16 C 0 16, 12 8, 12 -2 C 12 -8, 8 -14, 0 -14 Z" fill="var(--primary)" />
          <circle cy="-2" r="3.5" fill="white" />
        </g>
        <g transform="translate(620, 232)">
          <rect x="-80" y="14" width="160" height="42" rx="8" fill="white" stroke="#e3e8ee" />
          <text x="0" y="32" fontSize="12" fontWeight="500" fill="#0d253d" textAnchor="middle">Cabinet O. Chauvel</text>
          <text x="0" y="48" fontSize="10" fill="#64748d" textAnchor="middle">6 rue Edith Cavell</text>
        </g>
      </svg>
      <div style={{ position: "absolute", top: 16, left: 16, padding: "6px 12px", background: "white", borderRadius: 6, boxShadow: "var(--shadow-1)", fontSize: 12, color: "var(--ink-mute)", display: "flex", alignItems: "center", gap: 6 }}>
        <Icon name="pin" size={14} /> Rennes · Édith Cavell
      </div>
    </div>
  );
}

Object.assign(window, {
  PageHome, PagePresentation, PageHonoraires, PageContact
});

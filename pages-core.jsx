// ============================================================
// Pages: Accueil, Présentation, Honoraires, Contact
// ============================================================

function PageHome() {
  return (
    <PageShell>
      <Hero
        eyebrow="Cabinet d'avocat · Rennes"
        title="Disponibilité, rigueur et clarté au service de vos droits."
        subtitle="Cabinet situé à proximité immédiate du Parlement de Bretagne, de la Cour d'appel de Rennes, du Tribunal administratif et de la Cité judiciaire."
        primaryCta={{ to: "/contact", label: "Prendre rendez-vous" }}
        secondaryCta={{ to: "/cabinet/presentation", label: "Découvrir le cabinet" }}
        photo="rennes-palais.jpg"
        photoAlt="Palais de Rennes, siège des institutions judiciaires bretonnes"
      >
        <div className="row row-md" style={{ gap: 32, marginTop: 24, flexWrap: "wrap", fontSize: 13, color: "var(--ink-mute)" }}>
          <span className="row row-sm" style={{ gap: 8 }}><Icon name="pin" size={16} /> 6 rue Edith Cavell, Rennes</span>
          <span className="row row-sm" style={{ gap: 8 }}><Icon name="phone" size={16} /> <span className="tnum">02.99.66.08.19</span></span>
          <span className="row row-sm" style={{ gap: 8 }}><Icon name="clock" size={16} /> Lun–Ven, sur rendez-vous</span>
        </div>
      </Hero>

      {/* Engagements */}
      <section className="section section-textured">
        <div className="container">
          <div className="stack stack-xl">
            <SectionTitle
              eyebrow="Nos engagements"
              title="Quatre principes qui guident chaque dossier."
              subtitle="Une relation de confiance se construit sur des règles claires, énoncées dès le premier rendez-vous et tenues jusqu'à la décision finale."
            />
            <div className="grid grid-4">
              <FeatureCard icon="bolt" title="Disponibilité & Réactivité" description="Une réponse rapide à vos demandes, en conseil comme en procédure judiciaire." />
              <FeatureCard icon="euro" iconVariant="cream" title="Clarté des honoraires" description="Convention écrite préalable, mode de calcul transparent, aucun frais caché." />
              <FeatureCard icon="scale" iconVariant="ruby" title="Rigueur & Pragmatisme" description="Une analyse juridique exigeante, traduite en stratégie concrète pour votre dossier." />
              <FeatureCard icon="lock" iconVariant="mint" title="Confidentialité" description="Secret professionnel absolu et illimité dans le temps, garanti par la loi." />
            </div>
          </div>
        </div>
      </section>

      {/* Compétences preview */}
      <section className="section section-soft" style={{ position: "relative", overflow: "hidden" }}>
        <div className="deco-side-photo" style={{ backgroundImage: "url('ethereal-forms.png')" }} aria-hidden="true"></div>
        <div className="container" style={{ position: "relative", zIndex: 1 }}>
          <div className="stack stack-xl">
            <div className="row" style={{ justifyContent: "space-between", alignItems: "flex-end", flexWrap: "wrap", gap: 24 }}>
              <SectionTitle
                eyebrow="Domaines d'intervention"
                title="Cinq compétences principales."
                subtitle="Le cabinet intervient en conseil, rédaction et représentation devant l'ensemble des juridictions civiles, pénales et administratives."
              />
              <Link to="/contact" className="btn btn-secondary">Discuter de votre dossier</Link>
            </div>

            <div className="grid grid-3">
              <CompTeaser
                icon="family"
                iconVariant=""
                title="Droit de la famille"
                bullets={["Divorce (consentement mutuel, faute)", "Pension, prestation compensatoire", "Autorité parentale, garde"]}
                to="/competences/droit-de-la-famille"
              />
              <CompTeaser
                icon="medical"
                iconVariant="ruby"
                title="Dommage corporel"
                bullets={["Indemnisation du préjudice corporel", "Assistance expertise médicale", "Saisine CIVI et SARVI"]}
                to="/competences/droit-du-dommage-corporel"
              />
              <CompTeaser
                icon="gavel"
                iconVariant="cream"
                title="Droit pénal"
                bullets={["Garde à vue, instruction", "Tribunal correctionnel, assises", "Défense des victimes"]}
                to="/competences/droit-penal"
              />
              <CompTeaser
                icon="passport"
                iconVariant="mint"
                title="Droit des étrangers"
                bullets={["OQTF, IRTF, recours", "Rétention administrative", "Garde à vue, interpellation"]}
                to="/competences/droit-des-etrangers"
              />
              <CompTeaser
                icon="tree"
                iconVariant=""
                title="Droit de la chasse"
                bullets={["Litiges relatifs à la chasse", "Tribunal de police", "Tribunal correctionnel"]}
                to="/competences/droit-de-la-chasse"
              />

              {/* Featured card — dark navy */}
              <Link to="/contact" className="card-dark" style={{ textDecoration: "none", display: "block" }}>
                <div className="stack stack-md" style={{ height: "100%" }}>
                  <div className="pill pill-dark">Premier rendez-vous</div>
                  <div className="t-heading-lg" style={{ fontWeight: 400, color: "white" }}>
                    Une question juridique ? Le premier échange permet de cadrer votre dossier.
                  </div>
                  <div className="t-body-md" style={{ color: "rgba(255,255,255,0.72)" }}>
                    Présentation des faits, documents nécessaires, fixation des honoraires, vérification de la protection juridique ou de l'aide juridictionnelle.
                  </div>
                  <div style={{ marginTop: "auto", paddingTop: 16 }}>
                    <span className="row row-sm" style={{ color: "var(--primary-soft)", fontSize: 14, gap: 8 }}>
                      Prendre rendez-vous <Icon name="arrow" size={16} />
                    </span>
                  </div>
                </div>
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Quote / cream band */}
      <section className="section-sm">
        <div className="container">
          <div className="card-cream" style={{ padding: 48 }}>
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
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA band */}
      <section className="section-sm" style={{ paddingBottom: 96 }}>
        <div className="container">
          <div className="card-dark" style={{ padding: 48, position: "relative", overflow: "hidden" }}>
            <div style={{ position: "absolute", inset: 0, pointerEvents: "none", opacity: 0.6 }}>
              <GradientMesh variant="cool" />
            </div>
            <div style={{ position: "relative", zIndex: 2 }} className="grid grid-2">
              <div className="stack stack-md">
                <div className="eyebrow eyebrow-dark">Premier rendez-vous</div>
                <div className="t-display-lg" style={{ color: "white" }}>Présentez-nous votre dossier.</div>
                <div className="t-body-md" style={{ color: "rgba(255,255,255,0.72)", maxWidth: 460 }}>
                  Sur rendez-vous, du lundi au vendredi. Métro République. Parkings Kleber, Hoche, Vilaine à proximité.
                </div>
              </div>
              <div className="stack stack-md" style={{ justifyContent: "center" }}>
                <div className="row row-md" style={{ gap: 12, flexWrap: "wrap" }}>
                  <Link to="/contact" className="btn btn-primary btn-lg">Prendre rendez-vous</Link>
                  <a href="tel:0299660819" className="btn btn-secondary btn-lg" style={{ background: "transparent", color: "white", borderColor: "rgba(255,255,255,0.3)" }}>
                    <Icon name="phone" size={16} /> <span className="tnum">02.99.66.08.19</span>
                  </a>
                </div>
                <div className="t-caption" style={{ color: "rgba(255,255,255,0.5)" }}>
                  Lun–Ven · 9h–12h / 13h45–19h · Sur RDV uniquement
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </PageShell>
  );
}

function CompTeaser({ icon, iconVariant, title, bullets, to }) {
  return (
    <Link to={to} className="card" style={{ textDecoration: "none", display: "block", transition: "transform 0.2s, box-shadow 0.2s" }}>
      <div className="stack stack-md" style={{ height: "100%" }}>
        <div className={"icon-tile " + (iconVariant ? "icon-tile-" + iconVariant : "")}>
          <Icon name={icon} />
        </div>
        <div className="t-heading-md" style={{ fontWeight: 400 }}>{title}</div>
        <ul className="stack stack-sm muted" style={{ listStyle: "none", padding: 0, margin: 0, fontSize: 14 }}>
          {bullets.map((b, i) => (
            <li key={i} className="row row-sm" style={{ alignItems: "flex-start", gap: 8 }}>
              <span style={{ color: "var(--primary)", marginTop: 6 }}>
                <svg width="10" height="10" viewBox="0 0 10 10"><circle cx="5" cy="5" r="2.5" fill="currentColor"/></svg>
              </span>
              <span>{b}</span>
            </li>
          ))}
        </ul>
        <div style={{ marginTop: "auto", paddingTop: 16 }}>
          <span className="row row-sm" style={{ color: "var(--primary)", fontSize: 14, gap: 8, fontWeight: 400 }}>
            En savoir plus <Icon name="arrow" size={14} />
          </span>
        </div>
      </div>
    </Link>
  );
}

function BareStat({ value, label, tnum }) {
  return (
    <div className="row" style={{ alignItems: "baseline", gap: 16, borderBottom: "1px solid rgba(107,72,24,0.15)", paddingBottom: 12 }}>
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
          <div className="split">
            <div className="stack stack-lg">
              <Breadcrumb items={[{ label: "Accueil", to: "/" }, { label: "Cabinet", to: "/cabinet/presentation" }, { label: "Présentation" }]} />
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

              <div className="row" style={{ gap: 32, marginTop: 8 }}>
                <div className="stack stack-sm">
                  <div className="t-display-md tnum" style={{ color: "var(--ink)" }}>2004</div>
                  <div className="t-caption">Année de prestation de serment</div>
                </div>
                <div className="stack stack-sm">
                  <div className="t-display-md tnum" style={{ color: "var(--ink)" }}>3</div>
                  <div className="t-caption">Diplômes en droit privé et contentieux</div>
                </div>
                <div className="stack stack-sm">
                  <div className="t-display-md tnum" style={{ color: "var(--ink)" }}>5</div>
                  <div className="t-caption">Domaines d'intervention principaux</div>
                </div>
              </div>
            </div>

            <div className="editorial-photo">
              <img src="rennes-cite-judiciaire.jpg" alt="Cité judiciaire de Rennes, à proximité du cabinet" loading="lazy" />
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
              <div className="card-cream">
                <div className="stack stack-md">
                  <div className="t-micro-cap" style={{ color: "var(--cream-accent)" }}>01</div>
                  <div className="t-heading-lg" style={{ fontWeight: 400, color: "var(--cream-text-dark)" }}>Information & Conseil</div>
                  <div className="t-body-md" style={{ color: "var(--cream-text-mid)" }}>
                    Analyse de votre situation, exposé du droit applicable, identification des options
                    procédurales et de leurs conséquences pratiques.
                  </div>
                </div>
              </div>
              <div className="card-cream">
                <div className="stack stack-md">
                  <div className="t-micro-cap" style={{ color: "var(--cream-accent)" }}>02</div>
                  <div className="t-heading-lg" style={{ fontWeight: 400, color: "var(--cream-text-dark)" }}>Rédaction & Transaction</div>
                  <div className="t-body-md" style={{ color: "var(--cream-text-mid)" }}>
                    Rédaction d'actes, de conventions et de contrats. Négociation et formalisation
                    de transactions amiables, en évitant lorsque possible la voie contentieuse.
                  </div>
                </div>
              </div>
              <div className="card-cream">
                <div className="stack stack-md">
                  <div className="t-micro-cap" style={{ color: "var(--cream-accent)" }}>03</div>
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
            <div className="icon-tile icon-tile-mint" style={{ width: 56, height: 56 }}>
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

            <div className="grid grid-3">
              {/* Au temps passé */}
              <div className="card" style={{ padding: 32 }}>
                <div className="stack stack-md" style={{ height: "100%" }}>
                  <div className="pill">Formule 1</div>
                  <div className="t-heading-lg" style={{ fontWeight: 400 }}>Au temps passé</div>
                  <div className="row" style={{ alignItems: "baseline", gap: 4 }}>
                    <span className="t-display-md tnum">Tarif horaire</span>
                  </div>
                  <div className="t-body-md muted">
                    Décompte du temps mis à votre disposition. Chaque étape (rendez-vous, étude, rédaction, audience)
                    est consignée et facturée au temps réellement consacré.
                  </div>
                  <hr className="hr" style={{ margin: "8px 0" }} />
                  <ul className="stack stack-sm" style={{ listStyle: "none", padding: 0, margin: 0, fontSize: 14, color: "var(--ink-secondary)" }}>
                    <CheckLine>Note d'honoraires détaillée à chaque étape</CheckLine>
                    <CheckLine>Estimation prévisionnelle communiquée</CheckLine>
                    <CheckLine>Adapté aux dossiers à durée incertaine</CheckLine>
                  </ul>
                </div>
              </div>

              {/* Au forfait — featured (dark) */}
              <div className="card-dark" style={{ padding: 32, transform: "translateY(-12px)" }}>
                <div className="stack stack-md" style={{ height: "100%" }}>
                  <div className="pill pill-dark">Le plus demandé</div>
                  <div className="t-heading-lg" style={{ fontWeight: 400, color: "white" }}>Au forfait</div>
                  <div className="row" style={{ alignItems: "baseline", gap: 4 }}>
                    <span className="t-display-md tnum" style={{ color: "white" }}>Montant fixe</span>
                  </div>
                  <div className="t-body-md" style={{ color: "rgba(255,255,255,0.7)" }}>
                    Un montant convenu pour l'ensemble du dossier, lorsque l'aléa procédural est faible
                    et que les étapes peuvent être anticipées.
                  </div>
                  <hr className="hr" style={{ margin: "8px 0", background: "rgba(255,255,255,0.12)" }} />
                  <ul className="stack stack-sm" style={{ listStyle: "none", padding: 0, margin: 0, fontSize: 14, color: "rgba(255,255,255,0.8)" }}>
                    <CheckLine dark>Coût total connu d'avance</CheckLine>
                    <CheckLine dark>Adapté aux divorces par consentement mutuel</CheckLine>
                    <CheckLine dark>Adapté aux procédures simples</CheckLine>
                  </ul>
                </div>
              </div>

              {/* Au résultat */}
              <div className="card" style={{ padding: 32 }}>
                <div className="stack stack-md" style={{ height: "100%" }}>
                  <div className="pill">Formule 3</div>
                  <div className="t-heading-lg" style={{ fontWeight: 400 }}>Au résultat</div>
                  <div className="row" style={{ alignItems: "baseline", gap: 4 }}>
                    <span className="t-display-md tnum">Complément</span>
                  </div>
                  <div className="t-body-md muted">
                    Un complément calculé sur le gain ou l'économie procurés par la procédure.
                    Ne peut être <strong style={{ fontWeight: 400, color: "var(--ink)" }}>le seul mode de rémunération</strong>.
                  </div>
                  <hr className="hr" style={{ margin: "8px 0" }} />
                  <ul className="stack stack-sm" style={{ listStyle: "none", padding: 0, margin: 0, fontSize: 14, color: "var(--ink-secondary)" }}>
                    <CheckLine>Convention écrite préalable obligatoire</CheckLine>
                    <CheckLine>S'ajoute à un honoraire fixe ou horaire</CheckLine>
                    <CheckLine>Adapté aux indemnisations corporelles</CheckLine>
                  </ul>
                </div>
              </div>
            </div>

            {/* Récap table */}
            <div className="mockup" style={{ marginTop: 24 }}>
              <div className="row" style={{ justifyContent: "space-between", marginBottom: 16, alignItems: "center" }}>
                <div className="t-heading-md" style={{ fontWeight: 400 }}>Récapitulatif</div>
                <div className="pill">Convention d'honoraires</div>
              </div>
              <table className="data">
                <thead>
                  <tr>
                    <th>Formule</th>
                    <th>Mode de calcul</th>
                    <th>Visibilité du coût</th>
                    <th>Cas d'usage typique</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td style={{ fontWeight: 400, color: "var(--ink)" }}>Au temps passé</td>
                    <td className="tnum">Tarif horaire × heures</td>
                    <td>Décompte à chaque étape</td>
                    <td>Dossiers à durée incertaine</td>
                  </tr>
                  <tr>
                    <td style={{ fontWeight: 400, color: "var(--ink)" }}>Au forfait</td>
                    <td className="tnum">Montant fixe</td>
                    <td>Coût total connu d'avance</td>
                    <td>Faible aléa procédural</td>
                  </tr>
                  <tr>
                    <td style={{ fontWeight: 400, color: "var(--ink)" }}>Au résultat</td>
                    <td className="tnum">% du gain / économie</td>
                    <td>Calculé en fin de procédure</td>
                    <td>Indemnisations, recouvrements</td>
                  </tr>
                </tbody>
              </table>
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
      <span style={{ color: dark ? "var(--primary-soft)" : "var(--primary)", marginTop: 3 }}>
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
  const [formState, setFormState] = useState({ submitted: false });
  const [values, setValues] = useState({
    nom: "", prenom: "", telephone: "", email: "", domaine: "", message: ""
  });
  const onChange = (k) => (e) => setValues((v) => ({ ...v, [k]: e.target.value }));
  const onSubmit = (e) => {
    e.preventDefault();
    setFormState({ submitted: true });
  };

  return (
    <PageShell>
      <Hero
        eyebrow="Contact"
        title="Prenez rendez-vous avec le cabinet."
        subtitle="Sur rendez-vous, du lundi au vendredi. Le cabinet est accessible en métro (station République) et par les parkings Kleber, Hoche et Vilaine."
        variant="cool"
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
                  <div className="icon-tile icon-tile-mint" style={{ width: 56, height: 56, margin: "0 auto" }}>
                    <Icon name="check" size={26} />
                  </div>
                  <div className="t-display-md">Demande envoyée</div>
                  <div className="t-body-md muted">
                    Le cabinet vous recontactera dans les meilleurs délais à l'adresse <strong style={{ color: "var(--ink)" }}>{values.email}</strong>.
                  </div>
                  <div>
                    <button className="btn btn-secondary" onClick={() => { setFormState({}); setValues({ nom: "", prenom: "", telephone: "", email: "", domaine: "", message: "" }); }}>
                      Envoyer une autre demande
                    </button>
                  </div>
                </div>
              ) : (
                <form className="stack stack-lg" onSubmit={onSubmit}>
                  <div className="stack stack-sm">
                    <div className="eyebrow">Formulaire</div>
                    <div className="t-display-md">Décrivez-nous votre demande.</div>
                  </div>

                  <div className="grid grid-2" style={{ gap: 16 }}>
                    <div className="field">
                      <label htmlFor="contact-nom">Nom *</label>
                      <input id="contact-nom" required value={values.nom} onChange={onChange("nom")} placeholder="Dupont" />
                    </div>
                    <div className="field">
                      <label htmlFor="contact-prenom">Prénom *</label>
                      <input id="contact-prenom" required value={values.prenom} onChange={onChange("prenom")} placeholder="Marie" />
                    </div>
                  </div>

                  <div className="grid grid-2" style={{ gap: 16 }}>
                    <div className="field">
                      <label htmlFor="contact-telephone">Téléphone *</label>
                      <input id="contact-telephone" required type="tel" className="tnum" value={values.telephone} onChange={onChange("telephone")} placeholder="06 12 34 56 78" />
                    </div>
                    <div className="field">
                      <label htmlFor="contact-email">E-mail *</label>
                      <input id="contact-email" required type="email" value={values.email} onChange={onChange("email")} placeholder="marie.dupont@email.fr" />
                    </div>
                  </div>

                  <div className="field">
                    <label htmlFor="contact-domaine">Domaine juridique</label>
                    <select id="contact-domaine" value={values.domaine} onChange={onChange("domaine")}>
                      <option value="">— Sélectionner —</option>
                      <option>Droit de la famille</option>
                      <option>Dommage corporel</option>
                      <option>Droit de la chasse</option>
                      <option>Droit des étrangers</option>
                      <option>Droit pénal</option>
                      <option>Autre / Je ne sais pas</option>
                    </select>
                  </div>

                  <div className="field">
                    <label htmlFor="contact-message">Votre message *</label>
                    <textarea id="contact-message" required value={values.message} onChange={onChange("message")} placeholder="Présentez brièvement votre situation. Aucun document confidentiel ne doit être envoyé via ce formulaire." />
                  </div>

                  <div className="row" style={{ justifyContent: "space-between", flexWrap: "wrap", gap: 12 }}>
                    <div className="t-caption" style={{ maxWidth: 380 }}>
                      Les informations envoyées via ce formulaire sont strictement confidentielles.
                      Aucun document sensible ne doit y figurer.
                    </div>
                    <button type="submit" className="btn btn-primary btn-lg">Envoyer ma demande</button>
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
      <div style={{ width: 36, height: 36, borderRadius: 8, background: "rgba(255,255,255,0.08)", display: "grid", placeItems: "center", flexShrink: 0 }}>
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
    <div style={{ position: "relative", height: 400, background: "#e9eef4" }}>
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
          <circle r="32" fill="rgba(83,58,253,0.15)" />
          <circle r="20" fill="rgba(83,58,253,0.3)" />
          <path d="M0 -14 C -8 -14, -12 -8, -12 -2 C -12 8, 0 16, 0 16 C 0 16, 12 8, 12 -2 C 12 -8, 8 -14, 0 -14 Z" fill="#533afd" />
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

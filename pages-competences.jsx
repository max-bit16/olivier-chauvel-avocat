// ============================================================
// Pages: 5 compétences
// ============================================================

function CompetenceLayout({ title, eyebrow, subtitle, breadcrumb, intro, sections, related, icon, iconVariant, sideImage, heroVariant = "default", heroBgImage }) {
  return (
    <PageShell>
      <Hero
        eyebrow={eyebrow || "Compétences"}
        title={title}
        subtitle={subtitle}
        primaryCta={{ to: "/contact", label: "Discuter de votre dossier" }}
        variant={heroVariant}
        heroBgImage={heroBgImage}
      />

      <section className="section">
        <div className="container">
          <Breadcrumb items={breadcrumb} />
          <div className="split" style={{ marginTop: 32, gap: 64 }}>
            <div className="stack stack-lg">
              <div className="stack stack-md">
                <div className="t-display-lg">{intro.title}</div>
                <div className="t-body-lg" style={{ color: "var(--ink-secondary)", maxWidth: "56ch" }}>{intro.body}</div>
              </div>
            </div>
            <div>
              {sideImage}
            </div>
          </div>
        </div>
      </section>

      <section className="section section-soft" style={{ paddingTop: 0, paddingBottom: 96 }}>
        <div className="container">
          <div style={{ paddingTop: 64 }}>
            <div style={{ border: "1px solid var(--hairline)", borderRadius: "var(--r-lg)", overflow: "hidden" }}>
              {sections.map((sec, i) => (
                <div key={i} className={"reveal comp-section-row" + (i > 0 ? " reveal-d" + Math.min(i, 3) : "")}
                     style={{ borderBottom: i < sections.length - 1 ? "1px solid var(--hairline)" : "none", background: "white" }}>
                  <div style={{ padding: "40px 24px 40px 40px", borderRight: "1px solid var(--hairline)", display: "flex", alignItems: "flex-start" }}>
                    <div style={{ fontFamily: "'Cormorant Garamond', serif", fontSize: 48, fontWeight: 300, color: "var(--hairline)", lineHeight: 1, letterSpacing: "-2px" }}>
                      {String(i + 1).padStart(2, "0")}
                    </div>
                  </div>
                  <div style={{ padding: "40px 48px" }}>
                    <div className="stack stack-md">
                      <div className="t-heading-lg" style={{ fontWeight: 400 }}>{sec.title}</div>
                      {sec.body && <div className="t-body-md" style={{ color: "var(--ink-secondary)" }}>{sec.body}</div>}
                      {sec.bullets && (
                        <ul className="stack stack-sm" style={{ listStyle: "none", padding: 0, margin: 0 }}>
                          {sec.bullets.map((b, j) => (
                            <li key={j} className="row row-sm" style={{ alignItems: "flex-start", gap: 12, fontSize: 15, color: "var(--ink-secondary)" }}>
                              <span style={{ color: "var(--primary)", marginTop: 5 }}>
                                <svg width="6" height="6" viewBox="0 0 6 6"><circle cx="3" cy="3" r="3" fill="currentColor"/></svg>
                              </span>
                              <span>{b}</span>
                            </li>
                          ))}
                        </ul>
                      )}
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Related */}
      <section className="section-sm" style={{ paddingBottom: 96 }}>
        <div className="container">
          <div className="stack stack-lg">
            <div className="row" style={{ justifyContent: "space-between", alignItems: "baseline", flexWrap: "wrap", gap: 16 }}>
              <div className="t-display-md">Autres compétences</div>
              <Link to="/contact" className="btn btn-secondary">Une autre question ? Contactez-nous</Link>
            </div>
            <div className="grid grid-4">
              {related.map((r) => (
                <Link key={r.to} to={r.to} className="card-flat" style={{ padding: 24, textDecoration: "none", display: "block" }}>
                  <div className="stack stack-sm">
                    <div className="t-heading-sm" style={{ fontWeight: 400 }}>{r.label}</div>
                    <div className="t-caption">{r.desc}</div>
                  </div>
                </Link>
              ))}
            </div>
          </div>
        </div>
      </section>
    </PageShell>
  );
}

// Decorative side composition — process timelines for competence pages
function SideComposition({ variant }) {
  const timelines = {
    famille: {
      label: "La procédure en 4 étapes",
      steps: [
        { n: "01", title: "Premier rendez-vous", desc: "Analyse de la situation matrimoniale et évaluation des droits de chaque époux." },
        { n: "02", title: "Rédaction de la convention", desc: "Accord sur les conditions du divorce ; acte notarié si un bien immobilier est concerné." },
        { n: "03", title: "Dépôt au notaire", desc: "Enregistrement de la convention par acte authentique." },
        { n: "04", title: "Homologation", desc: "Contrôle par le juge aux affaires familiales et prononcé du divorce." },
      ]
    },
    corporel: {
      label: "La procédure en 4 étapes",
      steps: [
        { n: "01", title: "Analyse du dossier", desc: "Examen des pièces médicales et identification des postes de préjudice indemnisables." },
        { n: "02", title: "Expertise médicale", desc: "Assistance lors de l'expertise amiable ou judiciaire face au médecin conseil adverse." },
        { n: "03", title: "Évaluation du préjudice", desc: "Chiffrage complet : ITT, AIPP, souffrances endurées, préjudice esthétique et d'agrément." },
        { n: "04", title: "Négociation ou procédure", desc: "Accord amiable avec l'assureur ou saisine de la juridiction compétente (CIVI, SARVI)." },
      ]
    },
    chasse: {
      label: "La procédure en 3 étapes",
      steps: [
        { n: "01", title: "Analyse de la situation", desc: "Nature de l'infraction, modalités procédurales, risques pour le permis de chasser." },
        { n: "02", title: "Préparation de la défense", desc: "Rassemblement des éléments probants, étude des textes du code de l'environnement." },
        { n: "03", title: "Audience", desc: "Représentation devant le tribunal de police ou correctionnel selon la qualification retenue." },
      ]
    },
    etrangers: {
      label: "Le recours OQTF en 4 étapes",
      steps: [
        { n: "01", title: "Notification de l'OQTF", desc: "Délai de recours : 48h en rétention, 15 ou 30 jours selon la nature de la mesure." },
        { n: "02", title: "Saisine du tribunal administratif", desc: "Dépôt de la requête en référé liberté ou au fond selon les délais applicables." },
        { n: "03", title: "Audience", desc: "Délai légal de jugement de 48h à 6 semaines. Une réactivité immédiate est essentielle." },
        { n: "04", title: "Décision du juge", desc: "Annulation ou confirmation de la mesure. Possibilité d'appel devant la Cour administrative." },
      ]
    },
    penal: {
      label: "La procédure en 4 étapes",
      steps: [
        { n: "01", title: "Garde à vue", desc: "Assistance immédiate, entretien confidentiel de 30 minutes, présence aux auditions." },
        { n: "02", title: "Instruction ou convocation", desc: "Accès au dossier, assistance lors de la mise en examen, discussion du contrôle judiciaire." },
        { n: "03", title: "Audience de jugement", desc: "Plaidoirie devant le tribunal correctionnel ou la cour d'assises selon la qualification." },
        { n: "04", title: "Voies de recours", desc: "Appel, pourvoi en cassation, aménagement de peine selon la décision rendue." },
      ]
    }
  };

  const data = timelines[variant];
  if (!data) return null;

  return (
    <div className="mockup" style={{ padding: 32 }}>
      <div className="stack stack-md">
        <div className="eyebrow">{data.label}</div>
        <div style={{ paddingTop: 8 }}>
          {data.steps.map((step, i) => (
            <div key={i} style={{ display: "grid", gridTemplateColumns: "32px 1fr", gap: "0 16px", position: "relative" }}>
              {i < data.steps.length - 1 && (
                <div style={{ position: "absolute", left: 15, top: 32, bottom: 0, width: 1, background: "var(--hairline)" }} />
              )}
              <div style={{ width: 32, height: 32, borderRadius: "50%", background: "var(--primary)", color: "white", display: "grid", placeItems: "center", fontSize: 11, fontWeight: 500, letterSpacing: "0.02em", flexShrink: 0, position: "relative", zIndex: 1 }}>
                {step.n}
              </div>
              <div className="stack" style={{ paddingBottom: i < data.steps.length - 1 ? 24 : 0 }}>
                <div className="t-body-md" style={{ fontWeight: 400, color: "var(--ink)", lineHeight: 1.4 }}>{step.title}</div>
                <div className="t-caption" style={{ color: "var(--ink-mute)", lineHeight: 1.5, marginTop: 4 }}>{step.desc}</div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

function relatedFor(currentTo) {
  const map = {
    "/competences/droit-de-la-famille": { icon: "family", variant: "", desc: "Divorce, garde, filiation" },
    "/competences/droit-du-dommage-corporel": { icon: "medical", variant: "", desc: "Indemnisation, expertise médicale" },
    "/competences/droit-de-la-chasse": { icon: "tree", variant: "cream", desc: "Litiges, juridictions répressives" },
    "/competences/droit-des-etrangers": { icon: "passport", variant: "stone", desc: "OQTF, IRTF, rétention" },
    "/competences/droit-penal": { icon: "gavel", variant: "", desc: "Délits, crimes, garde à vue" },
  };
  return COMPETENCES.filter((c) => c.to !== currentTo).map((c) => ({
    to: c.to, label: c.label, ...map[c.to]
  }));
}

function PageDroitFamille() {
  return (
    <CompetenceLayout
      eyebrow="Compétence · Droit de la famille"
      title="Droit de la famille."
      subtitle="Divorces, autorité parentale, filiation, pensions et indemnisations. Le cabinet vous accompagne dans toutes les étapes du contentieux familial."
      breadcrumb={[{ label: "Accueil", to: "/" }, { label: "Compétences" }, { label: "Droit de la famille" }]}
      icon="family"
      iconVariant=""
      heroBgImage="images/competences/bg-famille.webp"
      intro={{
        title: "Préserver vos liens et vos droits.",
        body: "Le droit de la famille est un domaine où la dimension juridique et la dimension humaine se rejoignent. Le cabinet privilégie autant que possible les solutions amiables (consentement mutuel, médiation) tout en assurant une défense rigoureuse lorsque la voie contentieuse s'impose."
      }}
      sideImage={<SideComposition variant="famille" />}
      sections={[
        {
          title: "Pensions et prestations",
          body: "Calcul, fixation, revalorisation et recouvrement des sommes dues entre époux et entre parents.",
          bullets: [
            "Pension alimentaire (enfant, époux)",
            "Prestation compensatoire — calcul et révision",
            "Recouvrement de pensions impayées (procédure de paiement direct, ARIPA)"
          ]
        },
        {
          title: "Enfants et autorité parentale",
          bullets: [
            "Exercice de l'autorité parentale (conjoint, alternance)",
            "Droit de garde et droit de visite et d'hébergement",
            "Transfert de mesure de placement et d'organisation (TMFPO)",
            "Audition de l'enfant capable de discernement"
          ]
        },
        {
          title: "Divorce",
          body: "Trois grandes voies, à choisir selon la situation du couple.",
          bullets: [
            "Divorce par consentement mutuel (devant notaire ou judiciaire)",
            "Divorce pour altération définitive du lien conjugal",
            "Divorce pour faute"
          ]
        },
        {
          title: "Paternité et filiation",
          bullets: [
            "Action en recherche de paternité",
            "Action en contestation de paternité",
            "Reconnaissance, légitimation"
          ]
        },
        {
          title: "Mineurs en danger et assistance éducative",
          bullets: [
            "Représentation devant le juge des enfants",
            "Procédures d'assistance éducative",
            "Recours contre les mesures de placement"
          ]
        },
        {
          title: "Responsabilité civile",
          body: "Évaluation des préjudices et procédure d'indemnisation.",
          bullets: [
            "Dommages-intérêts (préjudice matériel, moral, économique)",
            "Sinistres (assurances, recours)",
            "Indemnisation à la suite d'un fait dommageable"
          ]
        }
      ]}
      related={relatedFor("/competences/droit-de-la-famille")}
    />
  );
}

function PageDommageCorporel() {
  return (
    <CompetenceLayout
      eyebrow="Compétence · Dommage corporel"
      title="Dommage corporel."
      subtitle="Conseil, accompagnement à l'expertise médicale et procédure d'indemnisation devant les juridictions et organismes compétents (CIVI, SARVI)."
      breadcrumb={[{ label: "Accueil", to: "/" }, { label: "Compétences" }, { label: "Dommage corporel" }]}
      icon="medical"
      iconVariant=""
      heroVariant="warm"
      heroBgImage="images/competences/bg-corporel.webp"
      intro={{
        title: "Faire reconnaître et évaluer chaque préjudice.",
        body: "L'indemnisation d'un dommage corporel exige une analyse détaillée — nature et durée de l'incapacité, retentissement professionnel, douleurs endurées, préjudice esthétique et d'agrément. Le cabinet vous accompagne à chaque étape, en particulier lors de l'expertise médicale qui détermine l'essentiel de l'indemnisation."
      }}
      sideImage={<SideComposition variant="corporel" />}
      sections={[
        {
          title: "Conseil et stratégie",
          body: "Analyse de votre dossier, vérification des assurances mobilisables (assurance du tiers responsable, garantie du conducteur, contrats personnels) et choix de la voie procédurale la plus efficace."
        },
        {
          title: "Procédure d'indemnisation",
          bullets: [
            "Constitution du dossier médico-légal",
            "Négociation avec l'assureur du responsable",
            "Procédure judiciaire en cas de désaccord",
            "Évaluation de chaque poste de préjudice (nomenclature Dintilhac)"
          ]
        },
        {
          title: "Assistance lors de l'expertise médicale",
          body: "L'expertise médicale détermine concrètement le montant de l'indemnisation. Le cabinet assiste les victimes dès la convocation et veille à ce que l'ensemble des préjudices soit pris en compte par l'expert."
        },
        {
          title: "Saisine de la CIVI et du SARVI",
          bullets: [
            "CIVI — Commission d'Indemnisation des Victimes d'Infractions",
            "SARVI — Service d'Aide au Recouvrement des Victimes d'Infractions",
            "Conditions d'éligibilité, délais et constitution du dossier",
            "Saisine et représentation en audience"
          ]
        }
      ]}
      related={relatedFor("/competences/droit-du-dommage-corporel")}
    />
  );
}

function PageChasse() {
  return (
    <CompetenceLayout
      eyebrow="Compétence · Droit de la chasse"
      title="Droit de la chasse."
      subtitle="Assistance dans tous les litiges relatifs à la chasse et défense devant les juridictions répressives (tribunal de police, correctionnel)."
      breadcrumb={[{ label: "Accueil", to: "/" }, { label: "Compétences" }, { label: "Droit de la chasse" }]}
      icon="tree"
      iconVariant="cream"
      heroBgImage="images/competences/bg-chasse.webp"
      intro={{
        title: "Une matière technique au croisement de plusieurs codes.",
        body: "Le droit de la chasse mêle code de l'environnement, code pénal et règlements préfectoraux. Les contentieux portent aussi bien sur les autorisations administratives que sur les infractions de chasse et la responsabilité civile des chasseurs."
      }}
      sideImage={<SideComposition variant="chasse" />}
      sections={[
        {
          title: "Litiges administratifs",
          bullets: [
            "Permis de chasser (retrait, suspension, refus)",
            "Plans de chasse et arrêtés préfectoraux",
            "Indemnisation des dégâts de gibier",
            "Différends avec les fédérations et ACCA"
          ]
        },
        {
          title: "Juridictions répressives",
          body: "Défense des chasseurs poursuivis pour des infractions au code de l'environnement, au code pénal ou au code de la route (transport, détention d'arme).",
          bullets: [
            "Tribunal de police (contraventions)",
            "Tribunal correctionnel (délits)",
            "Représentation en appel"
          ]
        },
        {
          title: "Responsabilité civile et accidents",
          body: "Indemnisation des victimes d'accidents de chasse, défense des chasseurs mis en cause, articulation avec les assurances et le fonds de garantie."
        }
      ]}
      related={relatedFor("/competences/droit-de-la-chasse")}
    />
  );
}

function PageDroitEtrangers() {
  return (
    <CompetenceLayout
      eyebrow="Compétence · Droit des étrangers"
      title="Droit des étrangers."
      subtitle="Recours contre les mesures d'éloignement, contestation des décisions administratives, défense en rétention et en garde à vue."
      breadcrumb={[{ label: "Accueil", to: "/" }, { label: "Compétences" }, { label: "Droit des étrangers" }]}
      icon="passport"
      iconVariant="stone"
      heroVariant="cool"
      heroBgImage="images/competences/bg-etrangers.webp"
      intro={{
        title: "Des délais courts, une réactivité immédiate.",
        body: "Les procédures d'éloignement et de rétention sont soumises à des délais de recours très courts (parfois 48 heures). Le cabinet intervient en urgence pour préserver vos droits et engager les recours nécessaires devant le juge administratif et le juge des libertés et de la détention."
      }}
      sideImage={<SideComposition variant="etrangers" />}
      sections={[
        {
          title: "Recours contre les mesures d'éloignement",
          bullets: [
            "OQTF — Obligation de Quitter le Territoire Français",
            "IRTF — Interdiction de Retour sur le Territoire Français",
            "Assignation à résidence",
            "Décisions de transfert (procédure Dublin)"
          ]
        },
        {
          title: "Rétention administrative",
          body: "Assistance devant le juge des libertés et de la détention dès les premières 48 heures, contestation de la légalité du placement et des prolongations.",
          bullets: [
            "Saisine du JLD",
            "Recours en appel devant le Premier Président",
            "Articulation avec la procédure d'éloignement en cours"
          ]
        },
        {
          title: "Garde à vue et contrôles",
          body: "Assistance lors du contrôle d'identité, de l'interpellation et de la garde à vue. Vérification du respect des droits et de la régularité des actes de procédure."
        }
      ]}
      related={relatedFor("/competences/droit-des-etrangers")}
    />
  );
}

function PageDroitPenal() {
  return (
    <CompetenceLayout
      eyebrow="Compétence · Droit pénal"
      title="Droit pénal."
      subtitle="Représentation devant l'ensemble des juridictions répressives, défense des personnes mises en cause et indemnisation des victimes."
      breadcrumb={[{ label: "Accueil", to: "/" }, { label: "Compétences" }, { label: "Droit pénal" }]}
      icon="gavel"
      iconVariant=""
      heroBgImage="images/competences/bg-penal.webp"
      intro={{
        title: "Une défense présente à chaque étape de la procédure.",
        body: "De la garde à vue au prononcé de la peine, en passant par l'instruction et l'audience, le cabinet assure une défense exigeante des personnes mises en cause comme des parties civiles. La maîtrise du temps procédural et la connaissance des juridictions de Rennes sont essentielles à la qualité de la défense."
      }}
      sideImage={<SideComposition variant="penal" />}
      sections={[
        {
          title: "Représentation devant les juridictions",
          bullets: [
            "Tribunal de police (contraventions)",
            "Tribunal correctionnel (délits, peines jusqu'à 10 ans)",
            "Cour d'assises (crimes, peines à partir de 10 ans)",
            "Représentation en appel et devant la Cour de cassation"
          ]
        },
        {
          title: "Défense des victimes",
          body: "Constitution de partie civile, demandes de dommages-intérêts et indemnisation par les organismes dédiés.",
          bullets: [
            "Constitution de partie civile",
            "Saisine de la CIVI",
            "Saisine du SARVI"
          ]
        },
        {
          title: "Délits et crimes",
          body: "Le cabinet intervient sur l'ensemble des infractions, de la délinquance routière aux affaires criminelles.",
          bullets: [
            "Délits : vol, abus de faiblesse, faux, violences volontaires…",
            "Crimes : homicides, viols, vols à main armée…",
            "Contraventions et infractions au code de la route"
          ]
        },
        {
          title: "Garde à vue et instruction",
          body: "Assistance dès la première heure de garde à vue, présence aux auditions et confrontations, accompagnement devant le juge d'instruction et le juge des libertés et de la détention.",
          bullets: [
            "Assistance en garde à vue (24h, 48h, 96h)",
            "Audition libre",
            "Représentation devant le juge d'instruction",
            "Demande de mise en liberté, contestation du contrôle judiciaire"
          ]
        }
      ]}
      related={relatedFor("/competences/droit-penal")}
    />
  );
}

Object.assign(window, {
  PageDroitFamille, PageDommageCorporel, PageChasse, PageDroitEtrangers, PageDroitPenal
});

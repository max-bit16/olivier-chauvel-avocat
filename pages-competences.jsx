// ============================================================
// Pages: 5 compétences
// ============================================================

function CompetenceLayout({ title, eyebrow, subtitle, breadcrumb, intro, sections, related, icon, iconVariant, sideImage }) {
  return (
    <PageShell>
      <Hero
        eyebrow={eyebrow || "Compétences"}
        title={title}
        subtitle={subtitle}
        primaryCta={{ to: "/contact", label: "Discuter de votre dossier" }}
        variant={iconVariant === "ruby" ? "warm" : iconVariant === "mint" ? "cool" : "default"}
      />

      <section className="section">
        <div className="container">
          <Breadcrumb items={breadcrumb} />
          <div className="split" style={{ marginTop: 32, gap: 64 }}>
            <div className="stack stack-lg">
              <div className="stack stack-md">
                <div className={"icon-tile " + (iconVariant ? "icon-tile-" + iconVariant : "")} style={{ width: 56, height: 56 }}>
                  <Icon name={icon} size={26} />
                </div>
                <div className="t-display-lg">{intro.title}</div>
                <div className="t-body-lg" style={{ color: "var(--ink-secondary)" }}>{intro.body}</div>
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
          <div className="stack stack-xl" style={{ paddingTop: 64 }}>
            {sections.map((sec, i) => (
              <div key={i} className="card" style={{ padding: 40 }}>
                <div className="grid" style={{ gridTemplateColumns: "0.6fr 1.4fr", gap: 48, alignItems: "flex-start" }}>
                  <div className="stack stack-sm">
                    <div className="t-micro-cap eyebrow-mute">{String(i + 1).padStart(2, "0")} / {String(sections.length).padStart(2, "0")}</div>
                    <div className="t-heading-lg" style={{ fontWeight: 400 }}>{sec.title}</div>
                  </div>
                  <div className="stack stack-md">
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
                  <div className="stack stack-md">
                    <div className={"icon-tile " + (r.variant ? "icon-tile-" + r.variant : "")}>
                      <Icon name={r.icon} />
                    </div>
                    <div className="t-heading-md" style={{ fontWeight: 400 }}>{r.label}</div>
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

// Decorative side composition for competence pages
function SideComposition({ variant }) {
  if (variant === "famille") {
    return (
      <div className="mockup-dark" style={{ padding: 32 }}>
        <div className="stack stack-md">
          <div className="row" style={{ justifyContent: "space-between", alignItems: "center" }}>
            <div className="pill pill-dark">Procédure de divorce</div>
            <div className="t-caption" style={{ color: "rgba(255,255,255,0.5)" }}>Suivi en temps réel</div>
          </div>
          <div className="stack stack-sm">
            <Phase label="Premier rendez-vous" status="done" />
            <Phase label="Convention rédigée" status="done" />
            <Phase label="Dépôt au notaire" status="current" />
            <Phase label="Homologation" status="pending" />
          </div>
          <hr style={{ border: 0, height: 1, background: "rgba(255,255,255,0.08)" }} />
          <div className="row" style={{ justifyContent: "space-between", alignItems: "baseline" }}>
            <div className="t-caption" style={{ color: "rgba(255,255,255,0.5)" }}>Prestation compensatoire</div>
            <div className="tnum" style={{ fontSize: 20, fontWeight: 300, color: "white", letterSpacing: "-0.4px" }}>32 400,00 €</div>
          </div>
        </div>
      </div>
    );
  }
  if (variant === "corporel") {
    return (
      <div className="mockup-dark" style={{ padding: 32 }}>
        <div className="stack stack-md">
          <div className="row" style={{ justifyContent: "space-between" }}>
            <div className="pill pill-dark">Préjudice corporel</div>
            <div className="t-caption" style={{ color: "rgba(255,255,255,0.5)" }}>Dossier #2024-1287</div>
          </div>
          <div className="stack stack-sm tnum" style={{ fontSize: 14 }}>
            <StatRow label="ITT" value="42 jours" />
            <StatRow label="DFTP (25%)" value="120 jours" />
            <StatRow label="DFTP (10%)" value="180 jours" />
            <StatRow label="AIPP" value="8 %" />
            <StatRow label="Souffrances endurées" value="4/7" />
          </div>
          <hr style={{ border: 0, height: 1, background: "rgba(255,255,255,0.08)" }} />
          <div className="row" style={{ justifyContent: "space-between", alignItems: "baseline" }}>
            <div className="t-caption" style={{ color: "rgba(255,255,255,0.5)" }}>Indemnisation totale</div>
            <div className="tnum" style={{ fontSize: 22, fontWeight: 300, color: "white", letterSpacing: "-0.4px" }}>78 230,00 €</div>
          </div>
        </div>
      </div>
    );
  }
  if (variant === "chasse") {
    return (
      <div className="card-cream" style={{ padding: 32 }}>
        <div className="stack stack-md">
          <div className="t-micro-cap" style={{ color: "#8a5a1c" }}>Litige type</div>
          <div className="t-heading-lg" style={{ fontWeight: 400, color: "#3a2a14" }}>Infraction au code de l'environnement</div>
          <div className="stack stack-sm" style={{ color: "#5a4220", fontSize: 14 }}>
            <RowItem label="Juridiction" value="Tribunal de police" />
            <RowItem label="Quantum" value="Contravention 5e classe" />
            <RowItem label="Procédure" value="Comparution sur PV" />
            <RowItem label="Risque" value="Suspension du permis de chasser" />
          </div>
        </div>
      </div>
    );
  }
  if (variant === "etrangers") {
    return (
      <div className="mockup-dark" style={{ padding: 32 }}>
        <div className="stack stack-md">
          <div className="pill pill-dark">Recours OQTF</div>
          <div className="stack stack-sm">
            <Phase label="Notification de l'OQTF" status="done" />
            <Phase label="Saisine du Tribunal administratif" status="current" />
            <Phase label="Audience (délai 48h–6 sem.)" status="pending" />
            <Phase label="Décision du juge" status="pending" />
          </div>
          <hr style={{ border: 0, height: 1, background: "rgba(255,255,255,0.08)" }} />
          <div className="t-caption" style={{ color: "rgba(255,255,255,0.6)" }}>
            Le délai de recours dépend du type de mesure (48h en rétention, 15 jours, 30 jours…).
            Une réactivité immédiate est essentielle.
          </div>
        </div>
      </div>
    );
  }
  if (variant === "penal") {
    return (
      <div className="mockup-dark" style={{ padding: 32 }}>
        <div className="stack stack-md">
          <div className="row" style={{ justifyContent: "space-between" }}>
            <div className="pill pill-dark">Juridictions répressives</div>
            <div className="t-caption" style={{ color: "rgba(255,255,255,0.5)" }}>Compétences</div>
          </div>
          <div className="stack stack-sm" style={{ fontSize: 14, color: "rgba(255,255,255,0.85)" }}>
            <JurRow label="Tribunal de police" right="Contraventions" />
            <JurRow label="Tribunal correctionnel" right="Délits — jusqu'à 10 ans" />
            <JurRow label="Cour d'assises" right="Crimes — min. 10 ans" />
            <JurRow label="Juge d'instruction" right="Mise en examen" />
            <JurRow label="JLD" right="Détention provisoire" />
          </div>
        </div>
      </div>
    );
  }
  return null;
}

function Phase({ label, status }) {
  const dot = {
    done: { bg: "var(--primary-soft)", inner: "white" },
    current: { bg: "white", inner: "var(--primary)" },
    pending: { bg: "rgba(255,255,255,0.15)", inner: "transparent" },
  }[status];
  return (
    <div className="row row-sm" style={{ gap: 12 }}>
      <div style={{ width: 16, height: 16, borderRadius: "50%", background: dot.bg, display: "grid", placeItems: "center" }}>
        {status === "current" && <div style={{ width: 6, height: 6, borderRadius: "50%", background: dot.inner }} />}
        {status === "done" && <Icon name="check" size={10} />}
      </div>
      <div style={{ fontSize: 14, color: status === "pending" ? "rgba(255,255,255,0.5)" : "rgba(255,255,255,0.92)" }}>{label}</div>
    </div>
  );
}

function StatRow({ label, value }) {
  return (
    <div className="row" style={{ justifyContent: "space-between", padding: "8px 0", borderBottom: "1px solid rgba(255,255,255,0.06)" }}>
      <span style={{ color: "rgba(255,255,255,0.7)" }}>{label}</span>
      <span style={{ color: "white", fontWeight: 400 }}>{value}</span>
    </div>
  );
}

function RowItem({ label, value }) {
  return (
    <div className="row" style={{ justifyContent: "space-between", padding: "6px 0", borderBottom: "1px solid rgba(107,72,24,0.15)" }}>
      <span style={{ color: "#8a5a1c", fontWeight: 400 }}>{label}</span>
      <span style={{ color: "#3a2a14" }}>{value}</span>
    </div>
  );
}

function JurRow({ label, right }) {
  return (
    <div className="row" style={{ justifyContent: "space-between", padding: "8px 0", borderBottom: "1px solid rgba(255,255,255,0.08)" }}>
      <span style={{ color: "white", fontWeight: 400 }}>{label}</span>
      <span style={{ color: "rgba(255,255,255,0.6)", fontSize: 13 }}>{right}</span>
    </div>
  );
}

function relatedFor(currentTo) {
  const map = {
    "/competences/droit-de-la-famille": { icon: "family", variant: "", desc: "Divorce, garde, filiation" },
    "/competences/droit-du-dommage-corporel": { icon: "medical", variant: "ruby", desc: "Indemnisation, expertise médicale" },
    "/competences/droit-de-la-chasse": { icon: "tree", variant: "cream", desc: "Litiges, juridictions répressives" },
    "/competences/droit-des-etrangers": { icon: "passport", variant: "mint", desc: "OQTF, IRTF, rétention" },
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
      iconVariant="ruby"
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
      iconVariant="mint"
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

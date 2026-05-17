// ============================================================
// Publications: index + 6 articles
// ============================================================

const ARTICLE_META = {
  "les-juridictions": { title: "Les juridictions", excerpt: "Deux ordres, plusieurs degrés. Comprendre l'architecture des juridictions civiles, pénales et administratives.", reading: "8 min", icon: "scale" },
  "le-cout-de-lavocat": { title: "Le coût de l'avocat", excerpt: "Honoraires, dépens, droit de plaidoirie. Trois sommes distinctes que la procédure peut faire supporter au client.", reading: "5 min", icon: "euro" },
  "la-relation-client-avocat": { title: "La relation entre le client et l'avocat", excerpt: "Choix de l'avocat, premier rendez-vous, désaccords. Les règles qui structurent la relation.", reading: "4 min", icon: "users" },
  "laide-juridictionnelle": { title: "L'aide juridictionnelle", excerpt: "Barèmes, conditions de ressources et dispense. Le mécanisme qui ouvre l'accès au droit pour tous.", reading: "6 min", icon: "shield" },
  "le-role-de-lavocat": { title: "Le rôle de l'avocat", excerpt: "Quatre missions complémentaires : conseiller, mandater, rédiger, défendre.", reading: "5 min", icon: "book" },
  "les-obligations-de-lavocat": { title: "Les obligations de l'avocat", excerpt: "Indépendance, loyauté, confidentialité, diligence. Quatre principes garantis par la loi.", reading: "5 min", icon: "lock" },
};

const ARTICLE_ORDER = [
  "les-juridictions", "le-cout-de-lavocat", "la-relation-client-avocat",
  "laide-juridictionnelle", "le-role-de-lavocat", "les-obligations-de-lavocat"
];

function PagePublications() {
  return (
    <PageShell>
      <Hero
        eyebrow="Publications"
        title="Comprendre le droit, sans jargon."
        subtitle="Six articles pour éclairer le fonctionnement de la justice et la relation avec votre avocat."
        variant="default"
        sidePhoto="petal-elegance.png"
      />

      <section className="section">
        <div className="container">
          <Breadcrumb items={[{ label: "Accueil", to: "/" }, { label: "Publications" }]} />

          <div style={{ marginTop: 32, marginBottom: 32 }}>
            <div className="stack stack-md">
              <div className="eyebrow">6 articles</div>
              <div className="t-display-lg">Les essentiels.</div>
            </div>
          </div>

          <div className="grid grid-3">
            {ARTICLE_ORDER.map((slug, i) => {
              const meta = ARTICLE_META[slug];
              return (
                <Link key={slug} to={"/publications/" + slug} className="card" style={{ textDecoration: "none", display: "block", padding: 32 }}>
                  <div className="stack stack-md" style={{ height: "100%" }}>
                    <div className="t-micro-cap eyebrow-mute">Article {String(i + 1).padStart(2, "0")} · {meta.reading}</div>
                    <div className="t-heading-md" style={{ fontWeight: 400 }}>{meta.title}</div>
                    <div className="t-body-md muted">{meta.excerpt}</div>
                    <div style={{ marginTop: "auto", paddingTop: 12 }}>
                      <span className="row row-sm" style={{ color: "var(--primary)", fontSize: 14, gap: 8 }}>
                        Lire l'article <Icon name="arrow" size={14} />
                      </span>
                    </div>
                  </div>
                </Link>
              );
            })}
          </div>
        </div>
      </section>
    </PageShell>
  );
}

// ============================================================
// Article shell
// ============================================================
function ArticleShell({ slug, eyebrow, children }) {
  const meta = ARTICLE_META[slug];
  const idx = ARTICLE_ORDER.indexOf(slug);
  const prev = idx > 0 ? ARTICLE_ORDER[idx - 1] : null;
  const next = idx < ARTICLE_ORDER.length - 1 ? ARTICLE_ORDER[idx + 1] : null;

  useEffect(() => {
    const data = {
      "@context": "https://schema.org",
      "@type": "Article",
      "headline": meta.title,
      "author": { "@type": "Person", "name": "Maître Olivier Chauvel" },
      "publisher": { "@type": "LegalService", "name": "Cabinet Maître Olivier Chauvel" },
      "datePublished": "2018-09-04",
      "dateModified": "2022-03-18",
      "url": "https://olivierchauvel-avocat.fr/publications/" + slug
    };
    const el = document.createElement("script");
    el.type = "application/ld+json";
    el.id = "article-json-ld";
    el.text = JSON.stringify(data);
    document.head.appendChild(el);
    return () => { const s = document.getElementById("article-json-ld"); if (s) s.remove(); };
  }, [slug]);

  return (
    <PageShell>
      <Hero
        eyebrow={eyebrow || ("Publication · Article " + String(idx + 1).padStart(2, "0"))}
        title={meta.title}
        subtitle={meta.excerpt}
        variant={idx % 2 === 0 ? "default" : "cool"}
      />

      <section className="section">
        <div className="container-narrow">
          <Breadcrumb items={[{ label: "Accueil", to: "/" }, { label: "Publications", to: "/publications" }, { label: meta.title }]} />

          <div className="row row-md" style={{ gap: 24, marginTop: 24, marginBottom: 32, color: "var(--ink-mute)", fontSize: 13, flexWrap: "wrap" }}>
            <span className="row row-sm"><Icon name="clock" size={14} /> {meta.reading} de lecture</span>
            <span className="row row-sm"><Icon name="file" size={14} /> Mis à jour le <span className="tnum">18/03/2022</span></span>
            <span className="row row-sm"><Icon name="users" size={14} /> Maître O. Chauvel</span>
          </div>

          <article className="stack stack-xl article-content">
            {children}
          </article>

          <hr className="hr" style={{ margin: "64px 0 24px" }} />
          <div className="row" style={{ justifyContent: "space-between", flexWrap: "wrap", gap: 16 }}>
            {prev ? (
              <Link to={"/publications/" + prev} className="stack stack-sm" style={{ textAlign: "left" }}>
                <span className="t-caption">← Article précédent</span>
                <span className="t-heading-sm" style={{ fontWeight: 400 }}>{ARTICLE_META[prev].title}</span>
              </Link>
            ) : <div />}
            {next ? (
              <Link to={"/publications/" + next} className="stack stack-sm" style={{ textAlign: "right", marginLeft: "auto" }}>
                <span className="t-caption">Article suivant →</span>
                <span className="t-heading-sm" style={{ fontWeight: 400 }}>{ARTICLE_META[next].title}</span>
              </Link>
            ) : <div />}
          </div>
        </div>
      </section>

      <section className="section-sm section-soft" style={{ paddingBottom: 96 }}>
        <div className="container">
          <div className="t-display-md" style={{ marginBottom: 24 }}>Autres publications</div>
          <div className="grid grid-3">
            {ARTICLE_ORDER.filter((s) => s !== slug).slice(0, 3).map((s) => {
              const m = ARTICLE_META[s];
              return (
                <Link key={s} to={"/publications/" + s} className="card-flat" style={{ padding: 24, textDecoration: "none", display: "block" }}>
                  <div className="stack stack-sm">
                    <div className="t-heading-md" style={{ fontWeight: 400 }}>{m.title}</div>
                    <div className="t-caption">{m.excerpt}</div>
                  </div>
                </Link>
              );
            })}
          </div>
        </div>
      </section>

      <style>{`
        .article-content p { margin: 0; font-size: 17px; line-height: 1.75; color: var(--ink-secondary); font-weight: 400; max-width: 68ch; }
        .article-content h2 { font-family: 'Spectral', Georgia, serif; font-size: clamp(24px, 2.8vw, 32px); font-weight: 300; letter-spacing: -0.5px; line-height: 1.2; color: var(--ink); margin: 0; }
        .article-content h3 { font-size: 19px; font-weight: 400; line-height: 1.4; color: var(--ink); margin: 0; }
        .article-content strong { font-weight: 500; color: var(--ink); }
        .article-content ul { margin: 0; padding-left: 0; list-style: none; }
        .article-content ul li { padding: 8px 0 8px 24px; position: relative; color: var(--ink-secondary); font-size: 16px; line-height: 1.65; }
        .article-content ul li::before { content: ""; position: absolute; left: 0; top: 16px; width: 5px; height: 5px; border-radius: 50%; background: var(--gold); }
      `}</style>
    </PageShell>
  );
}

// ============================================================
// Article 1: Les juridictions
// ============================================================
function ArticleJuridictions() {
  return (
    <ArticleShell slug="les-juridictions">
      <section className="stack stack-md">
        <p>
          L'organisation judiciaire française repose sur <strong>deux ordres distincts</strong>, indépendants l'un de l'autre :
          l'ordre <strong>administratif</strong>, qui tranche les litiges entre les particuliers et l'administration, et
          l'ordre <strong>judiciaire</strong>, qui statue sur les litiges entre personnes privées (ordre civil) et sur les
          infractions pénales (ordre pénal).
        </p>
        <p>
          La juridiction suprême est, pour l'ordre administratif, le <strong>Conseil d'État</strong>, et pour l'ordre judiciaire,
          la <strong>Cour de cassation</strong>.
        </p>
      </section>

      <section className="stack stack-md">
        <h2>L'ordre judiciaire civil</h2>
        <p>La compétence des juridictions civiles est déterminée principalement par le montant en jeu et la nature du litige.</p>
        <div className="mockup" style={{ padding: 0, overflow: "hidden", borderRadius: 12 }}>
          <table className="data">
            <thead>
              <tr><th>Juridiction</th><th>Compétence</th><th>Montant / Domaine</th></tr>
            </thead>
            <tbody>
              <tr><td style={{ color: "var(--ink)" }}>Juge de proximité</td><td>Petits litiges civils</td><td className="tnum">&lt; 4 000 €</td></tr>
              <tr><td style={{ color: "var(--ink)" }}>Tribunal d'Instance</td><td>Litiges civils courants</td><td className="tnum">4 000 € – 10 000 €</td></tr>
              <tr><td style={{ color: "var(--ink)" }}>Tribunal de Grande Instance</td><td>Affaires civiles importantes, état des personnes, immobilier</td><td className="tnum">&gt; 10 000 €</td></tr>
              <tr><td style={{ color: "var(--ink)" }}>Conseil de Prud'hommes</td><td>Litiges entre employeurs et salariés</td><td>Tous montants</td></tr>
              <tr><td style={{ color: "var(--ink)" }}>Tribunal de Commerce</td><td>Litiges entre commerçants, sociétés</td><td>Tous montants</td></tr>
            </tbody>
          </table>
        </div>
      </section>

      <section className="stack stack-md">
        <h2>L'ordre judiciaire pénal</h2>
        <p>Les juridictions pénales sont compétentes selon la <strong>gravité de l'infraction</strong> — contravention, délit ou crime.</p>
        <div className="grid grid-3">
          <div className="card" style={{ padding: 24 }}>
            <div className="stack stack-sm">
              <div className="pill">Contraventions</div>
              <div className="t-heading-md" style={{ fontWeight: 400 }}>Tribunal de police</div>
              <div className="t-body-md muted">Infractions punies d'amendes (5 classes) et de peines complémentaires.</div>
            </div>
          </div>
          <div className="card" style={{ padding: 24 }}>
            <div className="stack stack-sm">
              <div className="pill">Délits</div>
              <div className="t-heading-md" style={{ fontWeight: 400 }}>Tribunal correctionnel</div>
              <div className="t-body-md muted">Peines pouvant aller jusqu'à <span className="tnum">10 ans</span> d'emprisonnement.</div>
            </div>
          </div>
          <div className="card" style={{ padding: 24 }}>
            <div className="stack stack-sm">
              <div className="pill">Crimes</div>
              <div className="t-heading-md" style={{ fontWeight: 400 }}>Cour d'Assises</div>
              <div className="t-body-md muted">Peines à partir de <span className="tnum">10 ans</span> de réclusion. Jury populaire.</div>
            </div>
          </div>
        </div>
      </section>

      <section className="stack stack-md">
        <h2>L'ordre administratif</h2>
        <p>
          L'ordre administratif comporte trois degrés : le <strong>Tribunal administratif</strong> en première instance,
          la <strong>Cour administrative d'appel</strong> en appel, et le <strong>Conseil d'État</strong> en cassation.
        </p>
        <div className="card-dark" style={{ padding: 32 }}>
          <div className="stack stack-md">
            <div className="eyebrow eyebrow-dark">Architecture</div>
            <div className="row" style={{ justifyContent: "space-between", color: "white", flexWrap: "wrap", gap: 24 }}>
              <Hierarchy step="1" label="Tribunal administratif" desc="Première instance" />
              <Arrow />
              <Hierarchy step="2" label="Cour administrative d'appel" desc="Appel" />
              <Arrow />
              <Hierarchy step="3" label="Conseil d'État" desc="Cassation" />
            </div>
          </div>
        </div>
      </section>
    </ArticleShell>
  );
}

function Hierarchy({ step, label, desc }) {
  return (
    <div className="stack stack-sm" style={{ minWidth: 160 }}>
      <div className="t-micro-cap" style={{ color: "var(--primary-soft)" }}>Degré {step}</div>
      <div className="t-heading-md" style={{ fontWeight: 400, color: "white" }}>{label}</div>
      <div className="t-caption" style={{ color: "rgba(255,255,255,0.5)" }}>{desc}</div>
    </div>
  );
}
function Arrow() {
  return <div style={{ color: "var(--primary-soft)", opacity: 0.6, fontSize: 24, alignSelf: "center" }}>→</div>;
}

// ============================================================
// Article 2: Le coût de l'avocat
// ============================================================
function ArticleCoutAvocat() {
  return (
    <ArticleShell slug="le-cout-de-lavocat">
      <section className="stack stack-md">
        <p>Le coût d'une procédure peut comporter <strong>trois types de sommes distinctes</strong> qui ne se confondent pas.</p>
      </section>
      <section className="stack stack-md">
        <div className="grid grid-3">
          <div className="card" style={{ padding: 32 }}>
            <div className="stack stack-md">
              <div className="pill">01</div>
              <div className="t-heading-lg" style={{ fontWeight: 400 }}>Les honoraires</div>
              <div className="t-body-md muted">Rémunération de l'avocat pour son travail intellectuel. Ils sont <strong>librement fixés</strong> dans une convention écrite préalable.</div>
            </div>
          </div>
          <div className="card" style={{ padding: 32 }}>
            <div className="stack stack-md">
              <div className="pill">02</div>
              <div className="t-heading-lg" style={{ fontWeight: 400 }}>Les dépens</div>
              <div className="t-body-md muted">Frais de procédure tarifés par la loi (frais d'huissier, d'expertise judiciaire…). La partie perdante peut être condamnée à les rembourser.</div>
            </div>
          </div>
          <div className="card" style={{ padding: 32 }}>
            <div className="stack stack-md">
              <div className="pill">03</div>
              <div className="t-heading-lg" style={{ fontWeight: 400 }}>Le droit de plaidoirie</div>
              <div className="t-body-md muted">Somme fixe versée à la CNBF pour chaque audience. Son montant est de <strong className="tnum">13 €</strong>.</div>
            </div>
          </div>
        </div>
      </section>
      <section className="stack stack-md">
        <h2>Ce que couvrent les honoraires</h2>
        <p>Les honoraires couvrent également les <strong>frais généraux du cabinet</strong> (loyer, secrétariat, documentation, logiciels, cotisations), qui représentent en moyenne <strong className="tnum">40 % à 60 %</strong> du montant facturé.</p>
        <div className="mockup">
          <div className="t-caption" style={{ marginBottom: 16 }}>Décomposition indicative d'un honoraire</div>
          <StackedBar segments={[
            { label: "Frais généraux du cabinet", value: 50, color: "#665efd" },
            { label: "Charges sociales et fiscales", value: 25, color: "#c7b9ff" },
            { label: "Rémunération nette de l'avocat", value: 25, color: "#1c1e54" },
          ]} />
        </div>
      </section>
    </ArticleShell>
  );
}

function StackedBar({ segments }) {
  return (
    <div className="stack stack-md">
      <div style={{ height: 16, borderRadius: 8, overflow: "hidden", display: "flex", border: "1px solid var(--hairline)" }}>
        {segments.map((s, i) => (
          <div key={i} style={{ width: s.value + "%", background: s.color }} />
        ))}
      </div>
      <div className="grid grid-3" style={{ gap: 16 }}>
        {segments.map((s, i) => (
          <div key={i} className="row row-sm" style={{ gap: 8, alignItems: "flex-start" }}>
            <div style={{ width: 10, height: 10, borderRadius: 2, background: s.color, marginTop: 4, flexShrink: 0 }} />
            <div className="stack stack-sm">
              <div style={{ fontSize: 13, color: "var(--ink-secondary)", fontWeight: 400 }}>{s.label}</div>
              <div className="t-caption tnum">~ {s.value} %</div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

// ============================================================
// Article 3: La relation client–avocat
// ============================================================
function ArticleRelationClient() {
  return (
    <ArticleShell slug="la-relation-client-avocat">
      <section className="stack stack-md">
        <p>La relation entre un avocat et son client repose sur un <strong>choix libre fondé sur la confiance</strong>.</p>
      </section>
      <section className="stack stack-md">
        <h2>Le premier rendez-vous</h2>
        <p>Le premier rendez-vous est consacré à <strong>cadrer la mission</strong>. Il convient d'y :</p>
        <ul>
          <li><strong>Exposer l'affaire</strong> dans son ensemble — les faits, l'historique, les attentes.</li>
          <li><strong>Fournir les documents</strong> utiles à l'analyse (contrats, courriers, décisions de justice).</li>
          <li><strong>Fixer les honoraires</strong> — mode de calcul, montant prévisionnel, modalités de paiement.</li>
          <li><strong>Vérifier l'éligibilité</strong> à une assurance protection juridique ou à l'aide juridictionnelle.</li>
        </ul>
        <p>À l'issue de ce rendez-vous, une <strong>convention d'honoraires écrite</strong> est signée.</p>
      </section>
      <section className="stack stack-md">
        <h2>En cas de désaccord</h2>
        <p>En cas de différend sur les honoraires, la compétence revient au <strong>Bâtonnier de l'Ordre des avocats</strong>.</p>
        <div className="card-cream" style={{ padding: 32 }}>
          <div className="stack stack-sm">
            <div className="t-micro-cap" style={{ color: "#8a5a1c" }}>Référence légale</div>
            <div className="t-heading-md" style={{ fontWeight: 400, color: "#3a2a14" }}>Articles 174 et suivants du décret n° 91-1197 du 27 novembre 1991</div>
            <div className="t-body-md" style={{ color: "#5a4220" }}>
              Le Bâtonnier statue sur les contestations relatives au montant et au recouvrement des honoraires. Sa décision est susceptible de recours devant le Premier Président de la Cour d'appel.
            </div>
          </div>
        </div>
      </section>
    </ArticleShell>
  );
}

// ============================================================
// Article 4: Aide juridictionnelle
// ============================================================
function ArticleAideJuridictionnelle() {
  return (
    <ArticleShell slug="laide-juridictionnelle">
      <section className="stack stack-md">
        <p>L'aide juridictionnelle est un dispositif d'<strong>accès au droit</strong> qui permet à toute personne dont les ressources sont modestes de bénéficier d'une prise en charge par l'État.</p>
      </section>
      <section className="stack stack-md">
        <h2>Barèmes de ressources (référence 2017)</h2>
        <div className="mockup" style={{ padding: 0, overflow: "hidden", borderRadius: 12 }}>
          <table className="data">
            <thead>
              <tr><th>Ressources mensuelles</th><th>Prise en charge</th><th>Reste à charge</th></tr>
            </thead>
            <tbody>
              <tr><td className="tnum" style={{ color: "var(--ink)" }}>≤ 1 007 €</td><td><span className="pill" style={{ background: "#d5f1e3", color: "#16633e" }}>Aide totale (100 %)</span></td><td className="tnum">0 €</td></tr>
              <tr><td className="tnum" style={{ color: "var(--ink)" }}>1 008 – 1 190 €</td><td><span className="pill">Partielle 55 %</span></td><td>45 % des honoraires</td></tr>
              <tr><td className="tnum" style={{ color: "var(--ink)" }}>1 191 – 1 510 €</td><td><span className="pill" style={{ background: "#f5d6a8", color: "#6b4818" }}>Partielle 25 %</span></td><td>75 % des honoraires</td></tr>
              <tr><td className="tnum" style={{ color: "var(--ink)" }}>&gt; 1 510 €</td><td><span className="t-caption">Non éligible</span></td><td className="tnum">Intégralité</td></tr>
            </tbody>
          </table>
        </div>
      </section>
      <section className="stack stack-md">
        <h2>Majorations pour personnes à charge</h2>
        <div className="grid grid-2">
          <div className="card" style={{ padding: 24 }}>
            <div className="stack stack-sm">
              <div className="t-display-md tnum" style={{ color: "var(--primary)" }}>+ 181 €</div>
              <div className="t-body-md muted">Pour chacune des deux premières personnes à charge.</div>
            </div>
          </div>
          <div className="card" style={{ padding: 24 }}>
            <div className="stack stack-sm">
              <div className="t-display-md tnum" style={{ color: "var(--primary)" }}>+ 114 €</div>
              <div className="t-body-md muted">À partir de la troisième personne à charge.</div>
            </div>
          </div>
        </div>
      </section>
      <section className="stack stack-md">
        <h2>Dispenses de condition de ressources</h2>
        <ul>
          <li>Bénéficiaires du <strong>RSA</strong>.</li>
          <li>Victimes des <strong>crimes les plus graves</strong>.</li>
          <li>Personnes placées en <strong>garde à vue</strong>.</li>
        </ul>
      </section>
      <section className="stack stack-md">
        <div className="card-cream" style={{ padding: 32 }}>
          <div className="row" style={{ gap: 24, alignItems: "center", flexWrap: "wrap" }}>
            <div className="t-display-md tnum" style={{ color: "#3a2a14" }}>1 an</div>
            <div className="t-body-md" style={{ color: "#5a4220", flex: 1, minWidth: 240 }}>
              L'avocat dispose d'<strong>un an</strong> à compter de l'admission à l'aide juridictionnelle pour engager effectivement la procédure.
            </div>
          </div>
        </div>
      </section>
    </ArticleShell>
  );
}

// ============================================================
// Article 5: Le rôle de l'avocat
// ============================================================
function ArticleRoleAvocat() {
  return (
    <ArticleShell slug="le-role-de-lavocat">
      <section className="stack stack-md">
        <p>L'avocat exerce <strong>quatre rôles complémentaires</strong>, qui se combinent en fonction des besoins de chaque dossier.</p>
      </section>
      <section className="grid grid-2">
        <RoleCard num="01" icon="book" title="Information & Conseil" body="Analyse de la situation, exposé du droit applicable, identification des options procédurales et de leurs conséquences pratiques." />
        <RoleCard num="02" icon="users" variant="" title="Agent mandaté" body="L'avocat agit au nom et pour le compte de son client dans des opérations de recouvrement, de gestion ou de surendettement." />
        <RoleCard num="03" icon="document" variant="cream" title="Rédacteur & Transacteur" body="Rédaction d'actes — contrats, statuts, pactes d'associés, transactions. La rédaction privilégie la sécurité juridique." />
        <RoleCard num="04" icon="gavel" variant="stone" title="Défenseur" body="Représentation et plaidoirie devant l'ensemble des juridictions civiles, pénales et administratives." />
      </section>
      <section className="stack stack-md">
        <h2>Une combinaison adaptée à chaque dossier</h2>
        <p>Selon la nature de l'affaire, ces quatre fonctions se combinent différemment. <strong>Le bon avocat est celui qui sait basculer d'un rôle à l'autre.</strong></p>
      </section>
    </ArticleShell>
  );
}

function RoleCard({ num, icon, title, body, variant }) {
  return (
    <div className="card" style={{ padding: 32 }}>
      <div className="stack stack-md">
        <div className="row" style={{ justifyContent: "space-between", alignItems: "flex-start" }}>
          <div className={"icon-tile " + (variant ? "icon-tile-" + variant : "")}>
            <Icon name={icon} />
          </div>
          <div className="t-display-md tnum eyebrow-mute" style={{ color: "var(--hairline)", fontWeight: 300 }}>{num}</div>
        </div>
        <div className="t-heading-lg" style={{ fontWeight: 400 }}>{title}</div>
        <div className="t-body-md muted">{body}</div>
      </div>
    </div>
  );
}

// ============================================================
// Article 6: Obligations de l'avocat
// ============================================================
function ArticleObligations() {
  return (
    <ArticleShell slug="les-obligations-de-lavocat">
      <section className="stack stack-md">
        <p>L'exercice de la profession d'avocat est soumis à <strong>quatre principes fondamentaux</strong>, garantis par la loi et les règles déontologiques du barreau.</p>
      </section>
      <section className="grid grid-2">
        <PrincipleCard num="01" title="Indépendance" body="L'avocat exerce sa profession en toute indépendance — à l'égard des juridictions, des autres avocats, des pouvoirs publics et de ses propres clients." />
        <PrincipleCard num="02" title="Loyauté" body="L'avocat agit avec loyauté envers son client, ses confrères et la justice. Il informe le client des chances réelles de succès." />
        <PrincipleCard num="03" title="Confidentialité" body="Le secret professionnel est absolu et illimité dans le temps. Il couvre l'ensemble des informations confiées par le client." />
        <PrincipleCard num="04" title="Diligence" body="L'avocat exécute sa mission avec soin et célérité. Il informe son client de l'avancement du dossier et respecte les délais procéduraux." />
      </section>
      <section className="stack stack-md">
        <h2>Trois types de responsabilité</h2>
        <div className="grid grid-3">
          <ResponsibilityCard title="Civile" body="Réparation des préjudices causés au client. L'avocat est obligatoirement assuré en RCP." />
          <ResponsibilityCard title="Pénale" body="Sanctions pénales en cas de violation de la loi (faux, abus de confiance, complicité)." />
          <ResponsibilityCard title="Disciplinaire" body="Sanctions ordinales pour manquement aux règles déontologiques." />
        </div>
      </section>
      <section className="stack stack-md">
        <h2>L'échelle des sanctions disciplinaires</h2>
        <div className="mockup">
          <div className="row" style={{ justifyContent: "space-between", flexWrap: "wrap", gap: 16 }}>
            <Sanction num="1" label="Avertissement" intensity={0.2} />
            <Sanction num="2" label="Blâme" intensity={0.4} />
            <Sanction num="3" label="Interdiction temporaire" intensity={0.65} />
            <Sanction num="4" label="Radiation du barreau" intensity={1} />
          </div>
        </div>
      </section>
    </ArticleShell>
  );
}

function PrincipleCard({ num, title, body }) {
  return (
    <div className="card" style={{ padding: 32 }}>
      <div className="stack stack-md">
        <div className="t-display-md tnum" style={{ color: "var(--canvas-cream)", fontWeight: 300 }}>{num}</div>
        <div className="t-heading-lg" style={{ fontWeight: 400 }}>{title}</div>
        <div className="t-body-md muted">{body}</div>
      </div>
    </div>
  );
}

function ResponsibilityCard({ title, body }) {
  return (
    <div className="card" style={{ padding: 24 }}>
      <div className="stack stack-sm">
        <div className="t-heading-md" style={{ fontWeight: 400 }}>Responsabilité {title.toLowerCase()}</div>
        <div className="t-body-md muted">{body}</div>
      </div>
    </div>
  );
}

function Sanction({ num, label, intensity }) {
  const bg = `rgba(83, 58, 253, ${0.06 + intensity * 0.5})`;
  return (
    <div className="stack stack-sm" style={{ flex: 1, minWidth: 140 }}>
      <div style={{ height: 60, background: bg, borderRadius: 8, display: "grid", placeItems: "center", color: intensity > 0.6 ? "white" : "var(--primary-deep)", fontWeight: 400, fontSize: 13 }}>
        Niveau {num}
      </div>
      <div className="t-caption" style={{ color: "var(--ink)", fontWeight: 400 }}>{label}</div>
    </div>
  );
}

Object.assign(window, {
  PagePublications,
  ArticleJuridictions, ArticleCoutAvocat, ArticleRelationClient,
  ArticleAideJuridictionnelle, ArticleRoleAvocat, ArticleObligations,
  ARTICLE_META, ARTICLE_ORDER
});

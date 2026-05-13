// ============================================================
// Pages légales : Mentions légales, CGV, RGPD
// ============================================================

function LegalShell({ title, eyebrow, breadcrumbLabel, children }) {
  return (
    <PageShell>
      <Hero
        eyebrow={eyebrow}
        title={title}
        variant="cool"
      />
      <section className="section">
        <div className="container-narrow">
          <Breadcrumb items={[{ label: "Accueil", to: "/" }, { label: breadcrumbLabel }]} />
          <div className="stack stack-xl" style={{ marginTop: 32 }}>
            {children}
          </div>
        </div>
      </section>
    </PageShell>
  );
}

function LegalSection({ title, children }) {
  return (
    <div className="stack stack-md">
      <h2 className="t-heading-lg" style={{ fontWeight: 400, margin: 0 }}>{title}</h2>
      <div className="t-body-md" style={{ color: "var(--ink-secondary)" }}>{children}</div>
    </div>
  );
}

// ============================================================
// MENTIONS LÉGALES
// ============================================================
function PageMentionsLegales() {
  return (
    <LegalShell
      eyebrow="Informations légales"
      title="Mentions légales."
      breadcrumbLabel="Mentions légales"
    >
      <LegalSection title="Éditeur du site">
        <p style={{ margin: 0 }}>
          Cabinet Olivier Chauvel — Maître Olivier Chauvel, avocat au Barreau de Rennes.<br />
          6 rue Édith Cavell, 35000 Rennes<br />
          Téléphone : <a href="tel:0299660819" className="link">02.99.66.08.19</a><br />
          E-mail : <a href="mailto:contact@olivierchauvel-avocat.fr" className="link">contact@olivierchauvel-avocat.fr</a>
        </p>
      </LegalSection>

      <LegalSection title="Directeur de la publication">
        <p style={{ margin: 0 }}>
          Maître Olivier Chauvel, avocat inscrit au Barreau de Rennes depuis 2004.
          Numéro SIRET disponible sur demande.
        </p>
      </LegalSection>

      <LegalSection title="Hébergeur">
        <p style={{ margin: 0 }}>
          Vercel Inc.<br />
          440 N Barranca Ave #4133, Covina, CA 91723, États-Unis<br />
          Site : <span className="link">vercel.com</span>
        </p>
      </LegalSection>

      <LegalSection title="Propriété intellectuelle">
        <p style={{ margin: 0 }}>
          L'ensemble des contenus de ce site (textes, structure, mise en page) est la propriété
          exclusive du cabinet Olivier Chauvel. Toute reproduction, même partielle, est interdite
          sans autorisation préalable et écrite.
        </p>
      </LegalSection>

      <LegalSection title="Responsabilité">
        <p style={{ margin: 0 }}>
          Les informations publiées sur ce site ont un caractère général et ne constituent pas
          un conseil juridique personnalisé. Pour toute question relative à votre situation,
          prenez rendez-vous avec le cabinet.
        </p>
      </LegalSection>

      <div style={{ paddingTop: 16 }}>
        <Link to="/contact" className="btn btn-primary">Prendre rendez-vous</Link>
      </div>
    </LegalShell>
  );
}

// ============================================================
// CGV
// ============================================================
function PageCGV() {
  return (
    <LegalShell
      eyebrow="Conditions générales"
      title="Conditions générales de vente."
      breadcrumbLabel="CGV"
    >
      <LegalSection title="Prestation de services juridiques">
        <p style={{ margin: 0 }}>
          Le cabinet Olivier Chauvel intervient en qualité d'avocat indépendant inscrit au
          Barreau de Rennes. Les prestations proposées sont des services juridiques : conseil,
          rédaction d'actes et représentation en justice.
        </p>
      </LegalSection>

      <LegalSection title="Honoraires">
        <p style={{ margin: 0 }}>
          Les honoraires sont librement fixés en accord avec le client, conformément à l'article 10
          de la loi du 31 décembre 1971. Ils font l'objet d'une <strong style={{ fontWeight: 400, color: "var(--ink)" }}>convention d'honoraires écrite</strong>,
          signée avant toute intervention, qui précise le mode de calcul retenu (temps passé, forfait
          ou résultat), le montant prévisionnel et les modalités de paiement.
        </p>
      </LegalSection>

      <LegalSection title="Conditions de paiement">
        <p style={{ margin: 0 }}>
          Les modalités de règlement (virement, chèque) sont précisées dans la convention
          d'honoraires. Des provisions peuvent être demandées en cours de procédure.
          En cas de non-paiement, les procédures légales de recouvrement pourront être engagées.
        </p>
      </LegalSection>

      <LegalSection title="Réclamations">
        <p style={{ margin: 0 }}>
          Toute réclamation peut être adressée directement au cabinet. En l'absence de résolution
          amiable, le client peut saisir le Bâtonnier du Barreau de Rennes ou le médiateur de
          la consommation compétent pour les litiges de consommation.
        </p>
      </LegalSection>

      <div style={{ paddingTop: 16 }}>
        <Link to="/cabinet/honoraires" className="btn btn-secondary">En savoir plus sur les honoraires</Link>
      </div>
    </LegalShell>
  );
}

// ============================================================
// RGPD
// ============================================================
function PageRGPD() {
  return (
    <LegalShell
      eyebrow="Protection des données"
      title="Politique de confidentialité."
      breadcrumbLabel="RGPD"
    >
      <LegalSection title="Responsable du traitement">
        <p style={{ margin: 0 }}>
          Cabinet Olivier Chauvel — Maître Olivier Chauvel<br />
          6 rue Édith Cavell, 35000 Rennes<br />
          E-mail : <a href="mailto:contact@olivierchauvel-avocat.fr" className="link">contact@olivierchauvel-avocat.fr</a>
        </p>
      </LegalSection>

      <LegalSection title="Données collectées">
        <p style={{ margin: 0 }}>
          Le formulaire de contact collecte les données suivantes : nom, prénom, numéro de
          téléphone, adresse e-mail, domaine juridique concerné et message libre.
          Ces données sont collectées uniquement pour répondre à votre demande de contact.
        </p>
        <p style={{ margin: "12px 0 0" }}>
          <strong style={{ fontWeight: 400, color: "var(--ink)" }}>Aucun document confidentiel</strong> ne
          doit être transmis via le formulaire de contact.
        </p>
      </LegalSection>

      <LegalSection title="Durée de conservation">
        <p style={{ margin: 0 }}>
          Les données de contact sont conservées le temps nécessaire au traitement de votre
          demande et, en cas de relation contractuelle, pendant toute la durée de la mission
          et jusqu'à expiration des délais légaux de prescription applicables.
        </p>
      </LegalSection>

      <LegalSection title="Vos droits">
        <p style={{ margin: 0 }}>
          Conformément au Règlement (UE) 2016/679 (RGPD) et à la loi Informatique et Libertés,
          vous disposez des droits suivants sur vos données :
        </p>
        <ul style={{ margin: "12px 0 0", paddingLeft: 20, display: "flex", flexDirection: "column", gap: 6 }}>
          <li>Droit d'accès et de rectification</li>
          <li>Droit à l'effacement (« droit à l'oubli »)</li>
          <li>Droit à la limitation du traitement</li>
          <li>Droit d'opposition</li>
          <li>Droit à la portabilité</li>
        </ul>
        <p style={{ margin: "12px 0 0" }}>
          Pour exercer ces droits, contactez le cabinet par e-mail ou courrier à l'adresse indiquée
          ci-dessus. En cas de réponse insatisfaisante, vous pouvez déposer une réclamation
          auprès de la <strong style={{ fontWeight: 400, color: "var(--ink)" }}>CNIL</strong> (Commission
          nationale de l'informatique et des libertés).
        </p>
      </LegalSection>

      <LegalSection title="Hébergement des données">
        <p style={{ margin: 0 }}>
          Le site est hébergé par Vercel Inc. (États-Unis). Des garanties contractuelles adaptées
          encadrent ce transfert de données hors UE (Clauses contractuelles types de la Commission
          européenne).
        </p>
      </LegalSection>

      <div style={{ paddingTop: 16 }}>
        <Link to="/contact" className="btn btn-secondary">Exercer vos droits par e-mail</Link>
      </div>
    </LegalShell>
  );
}

Object.assign(window, {
  PageMentionsLegales, PageCGV, PageRGPD
});

// ============================================================
// App — hash-based router
// ============================================================

const BASE_URL = "https://olivierchauvel-avocat.fr";
const SEG_LABELS = {
  "cabinet": "Cabinet",
  "presentation": "Présentation",
  "honoraires": "Honoraires",
  "competences": "Compétences",
  "droit-de-la-famille": "Droit de la famille",
  "droit-du-dommage-corporel": "Droit du dommage corporel",
  "droit-de-la-chasse": "Droit de la chasse",
  "droit-des-etrangers": "Droit des étrangers",
  "droit-penal": "Droit pénal",
  "publications": "Publications",
  "contact": "Contact",
  "mentions-legales": "Mentions légales",
  "cgv": "CGV",
  "rgpd": "RGPD",
  "les-juridictions": "Les juridictions compétentes",
  "le-cout-de-lavocat": "Le coût de l'avocat",
  "la-relation-client-avocat": "La relation client–avocat",
  "laide-juridictionnelle": "L'aide juridictionnelle",
  "le-role-de-lavocat": "Le rôle de l'avocat",
  "les-obligations-de-lavocat": "Les obligations de l'avocat",
};

const ROUTES = {
  "/": () => <PageHome />,
  "/cabinet/presentation": () => <PagePresentation />,
  "/cabinet/honoraires": () => <PageHonoraires />,
  "/competences": () => <PageCompetences />,
  "/competences/droit-de-la-famille": () => <PageDroitFamille />,
  "/competences/droit-du-dommage-corporel": () => <PageDommageCorporel />,
  "/competences/droit-de-la-chasse": () => <PageChasse />,
  "/competences/droit-des-etrangers": () => <PageDroitEtrangers />,
  "/competences/droit-penal": () => <PageDroitPenal />,
  "/publications": () => <PagePublications />,
  "/publications/les-juridictions": () => <ArticleJuridictions />,
  "/publications/le-cout-de-lavocat": () => <ArticleCoutAvocat />,
  "/publications/la-relation-client-avocat": () => <ArticleRelationClient />,
  "/publications/laide-juridictionnelle": () => <ArticleAideJuridictionnelle />,
  "/publications/le-role-de-lavocat": () => <ArticleRoleAvocat />,
  "/publications/les-obligations-de-lavocat": () => <ArticleObligations />,
  "/contact": () => <PageContact />,
  "/mentions-legales": () => <PageMentionsLegales />,
  "/cgv": () => <PageCGV />,
  "/rgpd": () => <PageRGPD />,
};

function NotFound() {
  return (
    <PageShell>
      <Hero
        eyebrow="Erreur 404"
        title="Cette page est introuvable."
        subtitle="Vous pouvez revenir à l'accueil ou consulter directement nos domaines d'intervention."
        primaryCta={{ to: "/", label: "Retour à l'accueil" }}
        secondaryCta={{ to: "/contact", label: "Nous contacter" }}
      />
    </PageShell>
  );
}

const PAGE_TITLES = {
  "/": "Maître Olivier Chauvel · Avocat à Rennes",
  "/cabinet/presentation": "Présentation · Cabinet Chauvel",
  "/cabinet/honoraires": "Honoraires · Cabinet Chauvel",
  "/competences": "Compétences · Cabinet Chauvel",
  "/competences/droit-de-la-famille": "Droit de la famille · Cabinet Chauvel",
  "/competences/droit-du-dommage-corporel": "Dommage corporel · Cabinet Chauvel",
  "/competences/droit-de-la-chasse": "Droit de la chasse · Cabinet Chauvel",
  "/competences/droit-des-etrangers": "Droit des étrangers · Cabinet Chauvel",
  "/competences/droit-penal": "Droit pénal · Cabinet Chauvel",
  "/publications": "Publications · Cabinet Chauvel",
  "/publications/les-juridictions": "Les juridictions compétentes · Maître Olivier Chauvel",
  "/publications/le-cout-de-lavocat": "Le coût de l'avocat · Maître Olivier Chauvel",
  "/publications/la-relation-client-avocat": "La relation client–avocat · Maître Olivier Chauvel",
  "/publications/laide-juridictionnelle": "L'aide juridictionnelle · Maître Olivier Chauvel",
  "/publications/le-role-de-lavocat": "Le rôle de l'avocat · Maître Olivier Chauvel",
  "/publications/les-obligations-de-lavocat": "Les obligations de l'avocat · Maître Olivier Chauvel",
  "/contact": "Contact · Cabinet Chauvel",
  "/mentions-legales": "Mentions légales · Cabinet Chauvel",
  "/cgv": "CGV · Cabinet Chauvel",
  "/rgpd": "RGPD · Cabinet Chauvel",
};

const PAGE_DESCRIPTIONS = {
  "/": "Cabinet d'avocat à Rennes. Droit de la famille, dommage corporel, droit pénal, droit des étrangers, droit de la chasse. Disponibilité, rigueur, clarté.",
  "/cabinet/presentation": "Maître Olivier Chauvel, avocat au Barreau de Rennes depuis 2004. Présentation du cabinet, du parcours et des missions du conseil à la représentation.",
  "/cabinet/honoraires": "Honoraires au temps passé, au forfait ou au résultat. Convention écrite préalable systématique. Aide juridictionnelle acceptée. Cabinet Chauvel, Rennes.",
  "/competences": "Cinq domaines d'intervention : famille, dommage corporel, pénal, étrangers, chasse. Conseil, rédaction et représentation devant toutes les juridictions.",
  "/competences/droit-de-la-famille": "Divorce, séparation, garde d'enfants, pension alimentaire. Maître Chauvel vous représente devant le Tribunal judiciaire de Rennes.",
  "/competences/droit-du-dommage-corporel": "Indemnisation du préjudice corporel, assistance expertise médicale, CIVI et SARVI. Cabinet Chauvel, avocat en dommage corporel à Rennes.",
  "/competences/droit-de-la-chasse": "Litiges administratifs (permis, fédérations), juridictions répressives, responsabilité civile. Maître Chauvel, avocat spécialisé en droit de la chasse.",
  "/competences/droit-des-etrangers": "Recours contre OQTF et IRTF, rétention administrative, défense en procédure d'urgence. Cabinet Chauvel, Rennes.",
  "/competences/droit-penal": "Défense en garde à vue, tribunal correctionnel et cour d'assises. Cabinet Chauvel, avocat pénaliste à Rennes depuis 2004.",
  "/publications": "Six articles pour comprendre le droit sans jargon : juridictions, honoraires, aide juridictionnelle, obligations de l'avocat.",
  "/contact": "Prendre rendez-vous avec Maître Olivier Chauvel, avocat à Rennes. Cabinet au 6 rue Édith Cavell, accessible métro station République.",
};

function App() {
  const path = useHashRoute();
  const { useEffect } = React;

  useEffect(() => {
    document.title = PAGE_TITLES[path] || "Maître Olivier Chauvel · Avocat à Rennes";
    const metaDesc = document.querySelector('meta[name="description"]');
    if (metaDesc) {
      metaDesc.setAttribute('content', PAGE_DESCRIPTIONS[path] || PAGE_DESCRIPTIONS["/"]);
    }

    const old = document.getElementById("breadcrumb-json-ld");
    if (old) old.remove();

    if (path !== "/") {
      const segs = path.split("/").filter(Boolean);
      const items = [{ "@type": "ListItem", "position": 1, "name": "Accueil", "item": BASE_URL + "/" }];
      segs.forEach((seg, i) => {
        items.push({
          "@type": "ListItem",
          "position": i + 2,
          "name": SEG_LABELS[seg] || seg,
          "item": BASE_URL + "/" + segs.slice(0, i + 1).join("/")
        });
      });
      const el = document.createElement("script");
      el.type = "application/ld+json";
      el.id = "breadcrumb-json-ld";
      el.text = JSON.stringify({ "@context": "https://schema.org", "@type": "BreadcrumbList", "itemListElement": items });
      document.head.appendChild(el);
    }
  }, [path]);

  const Render = ROUTES[path] || NotFound;
  return (
    <>
      <Nav />
      <main id="main-content" key={path}>
        <Render />
      </main>
      <Footer />
    </>
  );
}

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<App />);

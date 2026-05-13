// ============================================================
// App — hash-based router
// ============================================================

const ROUTES = {
  "/": () => <PageHome />,
  "/cabinet/presentation": () => <PagePresentation />,
  "/cabinet/honoraires": () => <PageHonoraires />,
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

function App() {
  const path = useHashRoute();
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

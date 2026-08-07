import { createFileRoute } from "@tanstack/react-router";
import { SiteNav } from "@/components/site/site-nav";
import { Hero } from "@/components/site/hero";
import { Sobre } from "@/components/site/sobre";
import { Experiencia } from "@/components/site/experiencia";
import { Habilidades } from "@/components/site/habilidades";
import { Projetos } from "@/components/site/projetos";
import { Servicos } from "@/components/site/servicos";
import { Contato } from "@/components/site/contato";
import { WhatsAppFab } from "@/components/site/whatsapp-fab";
import { perfil } from "@/lib/portfolio-data";

const titulo = "José André | Desenvolvedor Full Stack";
const descricao =
  "Desenvolvedor Full Stack em Natal (RN) com experiência em fintechs e ERPs: APIs em Python e Django, frontend em Vue.js e Angular, PostgreSQL, Redis, Docker e CI/CD.";

export const Route = createFileRoute("/")({
  component: Index,
  head: () => ({
    meta: [
      { title: titulo },
      { name: "description", content: descricao },
      { property: "og:title", content: titulo },
      { property: "og:description", content: descricao },
      { property: "og:type", content: "profile" },
      { property: "og:url", content: "/" },
      { name: "twitter:card", content: "summary_large_image" },
      { name: "twitter:title", content: titulo },
      { name: "twitter:description", content: descricao },
    ],
    links: [{ rel: "canonical", href: "/" }],
    scripts: [
      {
        type: "application/ld+json",
        children: JSON.stringify({
          "@context": "https://schema.org",
          "@type": "Person",
          name: perfil.nomeCompleto,
          alternateName: perfil.nome,
          jobTitle: perfil.cargo,
          email: `mailto:${perfil.email}`,
          telephone: `+${perfil.whatsapp}`,
          address: { "@type": "PostalAddress", addressLocality: "Natal", addressRegion: "RN", addressCountry: "BR" },
          sameAs: [perfil.linkedin, perfil.github],
          knowsAbout: [
            "Python",
            "Django",
            "Flask",
            "Vue.js",
            "Angular",
            "PostgreSQL",
            "MongoDB",
            "Redis",
            "Docker",
            "CI/CD",
            "ETL",
          ],
          alumniOf: {
            "@type": "CollegeOrUniversity",
            name: "Universidade Federal do Rio Grande do Norte",
          },
        }),
      },
    ],
  }),
});

function Index() {
  return (
    <>
      <SiteNav />
      <main>
        <Hero />
        <Sobre />
        <Experiencia />
        <Habilidades />
        <Projetos />
        <Servicos />
        <Contato />
      </main>
      <WhatsAppFab />
    </>
  );
}

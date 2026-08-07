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

export const Route = createFileRoute("/")({
  component: Index,
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

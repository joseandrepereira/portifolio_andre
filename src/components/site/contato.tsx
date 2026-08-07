import { Download, Github, Linkedin, Mail, MessageCircle } from "lucide-react";
import { Reveal } from "@/components/site/section";
import curriculo from "@/assets/curriculo.pdf.asset.json";
import { mailtoUrl, perfil, whatsappUrl } from "@/lib/portfolio-data";

export function Contato() {
  return (
    <section id="contato" className="relative overflow-hidden py-20 sm:py-28">
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-x-0 bottom-0 h-[420px] opacity-20 blur-[120px]"
        style={{ background: "var(--gradient-ember)" }}
      />
      <div className="relative mx-auto w-full max-w-6xl px-5 sm:px-8">
        <Reveal className="mx-auto max-w-2xl text-center">
          <p className="section-eyebrow">Contato</p>
          <h2 className="mt-3 text-3xl font-bold sm:text-5xl">Vamos trabalhar juntos?</h2>
          <p className="mt-4 text-base leading-relaxed text-muted-foreground">
            Se você tem um sistema para construir, evoluir ou destravar — ou uma vaga de desenvolvedor full stack —
            me chame. Respondo mais rápido pelo WhatsApp.
          </p>
        </Reveal>

        <Reveal delay={100} className="mt-10">
          <div className="mx-auto flex max-w-xl flex-col gap-3 sm:flex-row sm:justify-center">
            <a href={whatsappUrl} target="_blank" rel="noreferrer" className="btn-ember">
              <MessageCircle className="h-4 w-4" aria-hidden="true" />
              Falar comigo pelo WhatsApp
            </a>
            <a href={mailtoUrl} className="btn-outline">
              <Mail className="h-4 w-4" aria-hidden="true" />
              Enviar e-mail
            </a>
          </div>
        </Reveal>

        <Reveal delay={160} className="mt-10">
          <ul className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
            {[
              {
                Icon: MessageCircle,
                rotulo: "WhatsApp",
                valor: perfil.whatsappExibicao,
                href: whatsappUrl,
              },
              { Icon: Mail, rotulo: "E-mail", valor: perfil.email, href: mailtoUrl },
              {
                Icon: Linkedin,
                rotulo: "LinkedIn",
                valor: "/jose-andre-desenvolvedor-de-software",
                href: perfil.linkedin,
              },
              { Icon: Github, rotulo: "GitHub", valor: "@joseandrepereira", href: perfil.github },
            ].map(({ Icon, rotulo, valor, href }) => (
              <li key={rotulo}>
                <a
                  href={href}
                  target={href.startsWith("http") ? "_blank" : undefined}
                  rel="noreferrer"
                  className="surface-card flex h-full items-center gap-4 p-5"
                >
                  <span className="grid h-10 w-10 shrink-0 place-items-center rounded-xl border border-border bg-surface-2 text-[color:var(--ember)]">
                    <Icon className="h-5 w-5" aria-hidden="true" />
                  </span>
                  <span className="min-w-0">
                    <span className="block text-xs text-muted-foreground">{rotulo}</span>
                    <span className="block truncate text-sm font-medium text-foreground">{valor}</span>
                  </span>
                </a>
              </li>
            ))}
          </ul>
        </Reveal>

        <Reveal delay={220} className="mt-10 text-center">
          <a href={curriculo.url} download className="btn-outline">
            <Download className="h-4 w-4" aria-hidden="true" />
            Baixar currículo em PDF
          </a>
        </Reveal>

        <footer className="mt-20 border-t border-border pt-8">
          <div className="grid grid-cols-[minmax(0,1fr)_auto] items-center gap-4 text-xs text-muted-foreground sm:flex sm:justify-between">
            <p className="min-w-0 truncate">
              © {new Date().getFullYear()} {perfil.nomeCompleto}
            </p>
            <p className="font-mono">{perfil.local}</p>
          </div>
        </footer>
      </div>
    </section>
  );
}

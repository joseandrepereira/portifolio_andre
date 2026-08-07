import { ArrowRight, Download, Github, Linkedin, Mail, MapPin, MessageCircle } from "lucide-react";
import { ParticleField } from "@/components/particle-field";
import foto from "@/assets/jose-andre.jpg.asset.json";
import curriculo from "@/assets/curriculo.pdf.asset.json";
import { destaques, mailtoUrl, perfil, whatsappUrl } from "@/lib/portfolio-data";

export function Hero() {
  return (
    <section id="inicio" className="relative overflow-hidden pb-20 pt-28 sm:pt-36">
      <ParticleField className="pointer-events-none absolute inset-0 h-full w-full opacity-70" />
      <div aria-hidden="true" className="pointer-events-none absolute inset-0 grid-lines opacity-40" />
      <div
        aria-hidden="true"
        className="pointer-events-none absolute -top-40 left-1/2 h-[420px] w-[720px] -translate-x-1/2 rounded-full opacity-25 blur-[120px]"
        style={{ background: "var(--gradient-ember)" }}
      />

      <div className="relative mx-auto grid max-w-6xl gap-14 px-5 sm:px-8 lg:grid-cols-[1.15fr_0.85fr] lg:items-center">
        <div>
          <p className="chip">
            <span className="mr-2 inline-block h-1.5 w-1.5 rounded-full bg-[color:var(--whatsapp)]" />
            Disponível para projetos e oportunidades
          </p>

          <h1 className="mt-6 text-4xl font-bold leading-[1.05] sm:text-6xl">
            {perfil.nome}
            <span className="mt-2 block text-ember-gradient">Desenvolvedor Full Stack</span>
          </h1>

          <p className="mt-6 max-w-xl text-lg leading-relaxed text-muted-foreground">
            {perfil.posicionamento}
          </p>

          <p className="mt-4 flex items-center gap-2 font-mono text-xs text-muted-foreground">
            <MapPin className="h-4 w-4" aria-hidden="true" />
            {perfil.local}
          </p>

          <div className="mt-8 flex flex-wrap gap-3">
            <a href="#projetos" className="btn-ember">
              Ver meus projetos
              <ArrowRight className="h-4 w-4" aria-hidden="true" />
            </a>
            <a href="#contato" className="btn-outline">
              Entrar em contato
            </a>
            <a href={curriculo.url} download className="btn-outline">
              <Download className="h-4 w-4" aria-hidden="true" />
              Baixar currículo
            </a>
          </div>

          <ul className="mt-8 flex flex-wrap items-center gap-3">
            {[
              { href: perfil.linkedin, Icon: Linkedin, label: "LinkedIn" },
              { href: perfil.github, Icon: Github, label: "GitHub" },
              { href: whatsappUrl, Icon: MessageCircle, label: "WhatsApp" },
              { href: mailtoUrl, Icon: Mail, label: "E-mail" },
            ].map(({ href, Icon, label }) => (
              <li key={label}>
                <a
                  href={href}
                  target={href.startsWith("http") ? "_blank" : undefined}
                  rel="noreferrer"
                  aria-label={label}
                  title={label}
                  className="grid h-11 w-11 place-items-center rounded-xl border border-border bg-surface text-muted-foreground transition-colors hover:border-primary/50 hover:text-foreground"
                >
                  <Icon className="h-5 w-5" aria-hidden="true" />
                </a>
              </li>
            ))}
          </ul>

          <dl className="mt-10 grid max-w-lg grid-cols-2 gap-6 border-t border-border pt-8 sm:grid-cols-3">
            {destaques.map((d) => (
              <div key={d.rotulo}>
                <dt className="font-display text-2xl font-bold text-foreground">{d.valor}</dt>
                <dd className="mt-1 text-xs leading-snug text-muted-foreground">{d.rotulo}</dd>
              </div>
            ))}
          </dl>
        </div>

        <div className="relative mx-auto w-full max-w-sm lg:max-w-none">
          <div
            aria-hidden="true"
            className="absolute -inset-3 rounded-[2rem] opacity-30 blur-2xl"
            style={{ background: "var(--gradient-ember)" }}
          />
          <figure className="relative overflow-hidden rounded-[1.75rem] border border-border bg-surface">
            <img
              src={foto.url}
              width={1280}
              height={1920}
              alt="Retrato de José André Pereira da Silva Neto, desenvolvedor full stack"
              className="aspect-[4/5] w-full origin-center scale-[1.38] translate-x-[17%] object-cover object-[50%_14%] grayscale transition-all duration-700 will-change-transform hover:grayscale-0"
            />
            <div
              aria-hidden="true"
              className="pointer-events-none absolute inset-0"
              style={{
                background:
                  "linear-gradient(to top, color-mix(in oklab, var(--background) 92%, transparent) 6%, transparent 55%)",
              }}
            />
            <figcaption className="absolute inset-x-4 bottom-4 flex items-center justify-between gap-3 rounded-xl border border-border/70 bg-[color-mix(in_oklab,var(--surface)_80%,transparent)] px-4 py-3 backdrop-blur">
              <span className="font-mono text-[0.7rem] text-muted-foreground">
                Python · Django · Vue · Angular
              </span>
              <span className="h-2 w-2 shrink-0 rounded-full bg-[color:var(--ember)]" />
            </figcaption>
          </figure>
        </div>
      </div>
    </section>
  );
}

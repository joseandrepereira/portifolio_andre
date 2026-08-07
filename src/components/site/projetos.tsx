import { ExternalLink, Github, Star } from "lucide-react";
import { Reveal, Section } from "@/components/site/section";
import { projetos, whatsappUrl } from "@/lib/portfolio-data";

export function Projetos() {
  const destaque = projetos.find((p) => p.destaque);
  const demais = projetos.filter((p) => !p.destaque);

  return (
    <Section
      id="projetos"
      eyebrow="Projetos"
      titulo="Sistemas que ajudei a construir"
      descricao="Todos são sistemas de produção desenvolvidos em contexto profissional. O foco está no problema resolvido e na minha contribuição técnica."
    >
      {destaque ? (
        <Reveal>
          <article className="surface-card relative overflow-hidden p-7 sm:p-10">
            <div
              aria-hidden="true"
              className="pointer-events-none absolute -right-24 -top-24 h-64 w-64 rounded-full opacity-20 blur-3xl"
              style={{ background: "var(--gradient-ember)" }}
            />
            <div className="relative">
              <p className="chip">
                <Star className="mr-2 h-3 w-3" aria-hidden="true" />
                Projeto em destaque
              </p>
              <h3 className="mt-5 font-display text-3xl font-bold sm:text-4xl">{destaque.nome}</h3>
              <p className="mt-2 text-sm text-[color:var(--ember)]">{destaque.contexto}</p>

              <div className="mt-8 grid gap-8 lg:grid-cols-2">
                <div>
                  <h4 className="font-mono text-[0.7rem] uppercase tracking-[0.2em] text-muted-foreground">
                    O problema
                  </h4>
                  <p className="mt-3 text-sm leading-relaxed text-muted-foreground">{destaque.problema}</p>
                </div>
                <div>
                  <h4 className="font-mono text-[0.7rem] uppercase tracking-[0.2em] text-muted-foreground">
                    Minha contribuição
                  </h4>
                  <ul className="mt-3 space-y-2">
                    {destaque.contribuicao.map((c) => (
                      <li key={c} className="flex gap-3 text-sm leading-relaxed text-muted-foreground">
                        <span
                          aria-hidden="true"
                          className="mt-2 h-1 w-1 shrink-0 rounded-full bg-[color:var(--ember)]"
                        />
                        {c}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>

              <ul className="mt-8 flex flex-wrap gap-2">
                {destaque.tecnologias.map((t) => (
                  <li key={t} className="chip">
                    {t}
                  </li>
                ))}
              </ul>
            </div>
          </article>
        </Reveal>
      ) : null}

      <div className="mt-6 grid gap-5 md:grid-cols-2">
        {demais.map((p, i) => (
          <Reveal key={p.nome} delay={i * 60}>
            <article className="surface-card flex h-full flex-col p-6">
              <div className="grid grid-cols-[minmax(0,1fr)_auto] items-start gap-3">
                <div className="min-w-0">
                  <h3 className="font-display text-xl font-semibold text-foreground">{p.nome}</h3>
                  <p className="mt-1 text-xs text-[color:var(--ember)]">{p.contexto}</p>
                </div>
                <div className="flex shrink-0 gap-2">
                  {p.link ? (
                    <a
                      href={p.link}
                      target="_blank"
                      rel="noreferrer"
                      aria-label={`Abrir demonstração de ${p.nome}`}
                      className="grid h-9 w-9 place-items-center rounded-lg border border-border text-muted-foreground hover:text-foreground"
                    >
                      <ExternalLink className="h-4 w-4" aria-hidden="true" />
                    </a>
                  ) : null}
                  {p.repositorio ? (
                    <a
                      href={p.repositorio}
                      target="_blank"
                      rel="noreferrer"
                      aria-label={`Repositório de ${p.nome}`}
                      className="grid h-9 w-9 place-items-center rounded-lg border border-border text-muted-foreground hover:text-foreground"
                    >
                      <Github className="h-4 w-4" aria-hidden="true" />
                    </a>
                  ) : null}
                </div>
              </div>

              <p className="mt-4 text-sm leading-relaxed text-muted-foreground">{p.problema}</p>

              <ul className="mt-4 space-y-2">
                {p.contribuicao.map((c) => (
                  <li key={c} className="flex gap-3 text-sm leading-relaxed text-muted-foreground">
                    <span aria-hidden="true" className="mt-2 h-1 w-1 shrink-0 rounded-full bg-[color:var(--ember)]" />
                    {c}
                  </li>
                ))}
              </ul>

              <ul className="mt-5 flex flex-wrap gap-2 pt-1">
                {p.tecnologias.map((t) => (
                  <li key={t} className="chip">
                    {t}
                  </li>
                ))}
              </ul>
            </article>
          </Reveal>
        ))}
      </div>

      <Reveal className="mt-10 text-center">
        <p className="text-sm text-muted-foreground">
          Quer entender como algum desses sistemas foi construído?
        </p>
        <a href={whatsappUrl} target="_blank" rel="noreferrer" className="btn-outline mt-4">
          Conversar sobre um projeto
        </a>
      </Reveal>
    </Section>
  );
}

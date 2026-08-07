import { Reveal, Section } from "@/components/site/section";
import { experiencias } from "@/lib/portfolio-data";

export function Experiencia() {
  return (
    <Section
      id="experiencia"
      eyebrow="Trajetória"
      titulo="Experiência profissional"
      descricao="Consultoria em Python, fintech e ERPs — com os resultados que consegui medir em cada contexto."
    >
      <ol className="relative space-y-6 border-l border-border pl-6 sm:pl-8">
        {experiencias.map((exp, i) => (
          <li key={`${exp.empresa}-${exp.periodo}`} className="relative">
            <span
              aria-hidden="true"
              className="absolute -left-[1.85rem] top-7 h-3 w-3 rounded-full border-2 border-background sm:-left-[2.35rem]"
              style={{
                background: exp.atual ? "var(--gradient-ember)" : "var(--surface-2)",
                boxShadow: exp.atual ? "var(--shadow-ember)" : undefined,
              }}
            />
            <Reveal delay={i * 60}>
              <article className="surface-card p-6">
                <div className="grid grid-cols-[minmax(0,1fr)_auto] items-start gap-3 sm:flex sm:flex-wrap sm:justify-between">
                  <div className="min-w-0">
                    <h3 className="text-lg font-semibold text-foreground">{exp.cargo}</h3>
                    <p className="mt-1 text-sm text-[color:var(--ember)]">{exp.empresa}</p>
                  </div>
                  <div className="text-right">
                    <p className="font-mono text-[0.7rem] text-muted-foreground">{exp.periodo}</p>
                    <p className="mt-1 font-mono text-[0.7rem] text-muted-foreground">{exp.local}</p>
                  </div>
                </div>

                <ul className="mt-4 space-y-2">
                  {exp.pontos.map((p) => (
                    <li key={p} className="flex gap-3 text-sm leading-relaxed text-muted-foreground">
                      <span aria-hidden="true" className="mt-2 h-1 w-1 shrink-0 rounded-full bg-[color:var(--ember)]" />
                      {p}
                    </li>
                  ))}
                </ul>

                <ul className="mt-5 flex flex-wrap gap-2">
                  {exp.tecnologias.map((t) => (
                    <li key={t} className="chip">
                      {t}
                    </li>
                  ))}
                </ul>
              </article>
            </Reveal>
          </li>
        ))}
      </ol>
    </Section>
  );
}

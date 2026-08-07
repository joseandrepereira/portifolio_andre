import { Reveal, Section } from "@/components/site/section";
import { stacks } from "@/lib/portfolio-data";

export function Habilidades() {
  return (
    <Section
      id="habilidades"
      eyebrow="Stack"
      titulo="Tecnologias que uso no dia a dia"
      descricao="Organizadas por onde de fato aparecem no meu trabalho, com o contexto em que cada grupo é aplicado."
    >
      <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
        {stacks.map((s, i) => (
          <Reveal key={s.categoria} delay={i * 60}>
            <article className="surface-card h-full p-6">
              <div className="flex items-baseline justify-between gap-3">
                <h3 className="font-display text-base font-semibold text-foreground">{s.categoria}</h3>
                <span className="font-mono text-[0.7rem] text-muted-foreground">
                  {String(i + 1).padStart(2, "0")}
                </span>
              </div>
              <ul className="mt-4 flex flex-wrap gap-2">
                {s.itens.map((item) => (
                  <li key={item} className="chip">
                    {item}
                  </li>
                ))}
              </ul>
              <p className="mt-4 border-t border-border pt-4 text-xs leading-relaxed text-muted-foreground">
                {s.nota}
              </p>
            </article>
          </Reveal>
        ))}
      </div>
    </Section>
  );
}

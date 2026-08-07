import { Reveal, Section } from "@/components/site/section";
import { diferenciais, processo, servicos, whatsappUrl } from "@/lib/portfolio-data";

export function Servicos() {
  return (
    <Section
      id="servicos"
      eyebrow="Freelance"
      titulo="Como posso ajudar seu projeto"
      descricao="Serviços dentro do que já entreguei em produção — sem prometer o que não faço."
    >
      <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
        {servicos.map((s, i) => (
          <Reveal key={s.titulo} delay={(i % 4) * 60}>
            <article className="surface-card h-full p-6">
              <span className="font-mono text-[0.7rem] text-[color:var(--ember)]">
                {String(i + 1).padStart(2, "0")}
              </span>
              <h3 className="mt-3 text-base font-semibold text-foreground">{s.titulo}</h3>
              <p className="mt-2 text-sm leading-relaxed text-muted-foreground">{s.texto}</p>
            </article>
          </Reveal>
        ))}
      </div>

      <Reveal className="mt-16">
        <h3 className="font-display text-2xl font-bold">Diferenciais</h3>
        <p className="mt-2 max-w-2xl text-sm text-muted-foreground">
          Baseados no que já foi construído e medido, não em adjetivos.
        </p>
      </Reveal>
      <div className="mt-8 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
        {diferenciais.map((d, i) => (
          <Reveal key={d.titulo} delay={(i % 3) * 60}>
            <article className="surface-card h-full border-l-2 border-l-[color:var(--ember)] p-6">
              <h4 className="text-base font-semibold text-foreground">{d.titulo}</h4>
              <p className="mt-2 text-sm leading-relaxed text-muted-foreground">{d.texto}</p>
            </article>
          </Reveal>
        ))}
      </div>

      <Reveal className="mt-16">
        <h3 className="font-display text-2xl font-bold">Como um projeto acontece</h3>
      </Reveal>
      <div className="mt-8 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
        {processo.map((p, i) => (
          <Reveal key={p.n} delay={(i % 3) * 60}>
            <article className="surface-card h-full p-6">
              <span className="font-display text-3xl font-bold text-ember-gradient">{p.n}</span>
              <h4 className="mt-3 text-base font-semibold text-foreground">{p.titulo}</h4>
              <p className="mt-2 text-sm leading-relaxed text-muted-foreground">{p.texto}</p>
            </article>
          </Reveal>
        ))}
      </div>

      <Reveal className="mt-12 text-center">
        <a href={whatsappUrl} target="_blank" rel="noreferrer" className="btn-ember">
          Solicitar orçamento
        </a>
      </Reveal>
    </Section>
  );
}

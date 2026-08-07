import { GraduationCap, Layers, Server, Workflow } from "lucide-react";
import { Reveal, Section } from "@/components/site/section";
import { formacao, perfil } from "@/lib/portfolio-data";

const pilares = [
  {
    Icon: Server,
    titulo: "Backend e dados",
    texto: "APIs em Django e Flask, modelagem e otimização em PostgreSQL, MongoDB e Redis.",
  },
  {
    Icon: Layers,
    titulo: "Frontend de sistemas",
    texto: "Vue.js 2/3 e Angular em telas operacionais densas, com muitos fluxos e permissões.",
  },
  {
    Icon: Workflow,
    titulo: "Integração e automação",
    texto: "Pipelines de ETL, integrações entre plataformas e rotinas que eliminam trabalho manual.",
  },
];

export function Sobre() {
  return (
    <Section
      id="sobre"
      eyebrow="Sobre"
      titulo="Quem é José André"
      descricao="Desenvolvedor em Natal (RN), atuando desde 2021 em software que sustenta operações — não em protótipos."
    >
      <div className="grid gap-10 lg:grid-cols-[1.1fr_0.9fr]">
        <Reveal className="space-y-5 text-base leading-relaxed text-muted-foreground">
          <p>{perfil.resumo}</p>
          <p>
            Meu trabalho tem sido em <strong className="text-foreground">ERPs e sistemas corporativos</strong>:
            licitações, transporte e logística, indústria química e, mais recentemente, uma
            <strong className="text-foreground"> fintech de concessão de crédito</strong>. São contextos em que a
            regra de negócio é complexa, os dados são grandes e cada segundo de query aparece na conta do cliente.
          </p>
          <p>
            O que me diferencia é conseguir atravessar todas as camadas do problema — do índice no banco à tela que o
            usuário abre todo dia — e medir o resultado. Hoje atuo como consultor especialista em Python e curso
            pós-graduação em Inteligência Artificial no IMD/UFRN.
          </p>

          <div className="grid gap-4 pt-2 sm:grid-cols-3">
            {pilares.map(({ Icon, titulo, texto }) => (
              <div key={titulo} className="surface-card p-5">
                <Icon className="h-5 w-5 text-[color:var(--ember)]" aria-hidden="true" />
                <h3 className="mt-3 text-sm font-semibold text-foreground">{titulo}</h3>
                <p className="mt-2 text-xs leading-relaxed text-muted-foreground">{texto}</p>
              </div>
            ))}
          </div>
        </Reveal>

        <Reveal delay={120}>
          <div className="surface-card h-full p-6">
            <h3 className="flex items-center gap-2 font-display text-lg font-semibold">
              <GraduationCap className="h-5 w-5 text-[color:var(--ember)]" aria-hidden="true" />
              Formação acadêmica
            </h3>
            <ul className="mt-6 space-y-6">
              {formacao.map((f) => (
                <li key={f.curso} className="border-l-2 border-border pl-4">
                  <p className="font-mono text-[0.7rem] text-[color:var(--ember)]">{f.periodo}</p>
                  <p className="mt-1 text-sm font-semibold text-foreground">{f.curso}</p>
                  <p className="mt-1 text-xs text-muted-foreground">{f.instituicao}</p>
                </li>
              ))}
            </ul>
          </div>
        </Reveal>
      </div>
    </Section>
  );
}

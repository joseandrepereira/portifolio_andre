import { useEffect, useState } from "react";
import { Menu, X, MessageCircle } from "lucide-react";
import { secoes, whatsappUrl } from "@/lib/portfolio-data";
import { cn } from "@/lib/utils";

export function SiteNav() {
  const [aberto, setAberto] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [ativo, setAtivo] = useState("inicio");

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    const io = new IntersectionObserver(
      (entries) => {
        const vis = entries
          .filter((e) => e.isIntersecting)
          .sort((a, b) => b.intersectionRatio - a.intersectionRatio)[0];
        if (vis?.target.id) setAtivo(vis.target.id);
      },
      { threshold: [0.2, 0.5], rootMargin: "-80px 0px -50% 0px" },
    );
    secoes.forEach((s) => {
      const el = document.getElementById(s.id);
      if (el) io.observe(el);
    });
    return () => io.disconnect();
  }, []);

  return (
    <header
      className={cn(
        "fixed inset-x-0 top-0 z-50 transition-shadow",
        scrolled && "glass-bar shadow-[0_10px_30px_-25px_rgba(0,0,0,0.9)]",
      )}
    >
      <nav
        aria-label="Navegação principal"
        className="mx-auto grid max-w-6xl grid-cols-[minmax(0,1fr)_auto] items-center gap-4 px-5 py-4 sm:px-8"
      >
        <a href="#inicio" className="flex min-w-0 items-center gap-2 font-display text-base font-bold">
          <span className="grid h-8 w-8 shrink-0 place-items-center rounded-lg bg-[image:var(--gradient-ember)] font-mono text-sm text-primary-foreground">
            JA
          </span>
          <span className="truncate">
            José André<span className="text-muted-foreground"> · Full Stack</span>
          </span>
        </a>

        <div className="hidden items-center gap-1 lg:flex">
          {secoes.map((s) => (
            <a
              key={s.id}
              href={`#${s.id}`}
              className={cn(
                "rounded-full px-3 py-2 text-sm text-muted-foreground transition-colors hover:text-foreground",
                ativo === s.id && "text-foreground",
              )}
              aria-current={ativo === s.id ? "true" : undefined}
            >
              {s.rotulo}
            </a>
          ))}
          <a href={whatsappUrl} target="_blank" rel="noreferrer" className="btn-ember ml-2 !px-4 !py-2 text-sm">
            <MessageCircle className="h-4 w-4" aria-hidden="true" />
            Fale comigo
          </a>
        </div>

        <button
          type="button"
          onClick={() => setAberto((v) => !v)}
          aria-expanded={aberto}
          aria-label={aberto ? "Fechar menu" : "Abrir menu"}
          className="grid h-11 w-11 place-items-center rounded-xl border border-border bg-surface lg:hidden"
        >
          {aberto ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
        </button>
      </nav>

      {aberto ? (
        <div className="glass-bar lg:hidden">
          <div className="mx-auto flex max-w-6xl flex-col gap-1 px-5 pb-6 sm:px-8">
            {secoes.map((s) => (
              <a
                key={s.id}
                href={`#${s.id}`}
                onClick={() => setAberto(false)}
                className="rounded-xl px-3 py-3 text-base text-muted-foreground transition-colors hover:bg-surface hover:text-foreground"
              >
                {s.rotulo}
              </a>
            ))}
            <a
              href={whatsappUrl}
              target="_blank"
              rel="noreferrer"
              onClick={() => setAberto(false)}
              className="btn-ember mt-3"
            >
              <MessageCircle className="h-4 w-4" aria-hidden="true" />
              Falar no WhatsApp
            </a>
          </div>
        </div>
      ) : null}
    </header>
  );
}

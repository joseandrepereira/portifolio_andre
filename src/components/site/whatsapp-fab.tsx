import { useEffect, useState } from "react";
import { MessageCircle } from "lucide-react";
import { whatsappUrl } from "@/lib/portfolio-data";
import { cn } from "@/lib/utils";

export function WhatsAppFab() {
  const [visivel, setVisivel] = useState(false);

  useEffect(() => {
    const onScroll = () => setVisivel(window.scrollY > 600);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <a
      href={whatsappUrl}
      target="_blank"
      rel="noreferrer"
      aria-label="Falar comigo pelo WhatsApp"
      className={cn(
        "fixed bottom-5 right-5 z-40 grid h-14 w-14 place-items-center rounded-full border border-border text-background shadow-[0_16px_40px_-16px_rgba(0,0,0,0.9)] transition-all duration-300",
        visivel ? "translate-y-0 opacity-100" : "pointer-events-none translate-y-4 opacity-0",
      )}
      style={{ background: "var(--whatsapp)" }}
    >
      <MessageCircle className="h-6 w-6" aria-hidden="true" />
    </a>
  );
}

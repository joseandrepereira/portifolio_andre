import { useEffect, useRef } from "react";

type Particle = {
  x: number;
  y: number;
  vx: number;
  vy: number;
  tx: number;
  ty: number;
  r: number;
};

/**
 * Fundo animado do hero: pontos conectados que reagem ao cursor e,
 * em ciclos, se organizam para sugerir o nome "ANDRÉ".
 * Desativado em telas pequenas e quando o usuário pede menos movimento.
 */
export function ParticleField({ className }: { className?: string }) {
  const canvasRef = useRef<HTMLCanvasElement | null>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const reduced = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    const small = window.matchMedia("(max-width: 767px)").matches;
    if (reduced || small) return;

    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    let width = 0;
    let height = 0;
    let dpr = 1;
    let particles: Particle[] = [];
    let targets: { x: number; y: number }[] = [];
    let raf = 0;
    let running = true;
    const pointer = { x: -9999, y: -9999, active: false };

    const sampleText = () => {
      const off = document.createElement("canvas");
      off.width = Math.max(1, Math.floor(width));
      off.height = Math.max(1, Math.floor(height));
      const octx = off.getContext("2d");
      if (!octx) return [] as { x: number; y: number }[];
      const size = Math.min(width * 0.17, 190);
      octx.fillStyle = "#fff";
      octx.font = `700 ${size}px "Space Grotesk", sans-serif`;
      octx.textAlign = "center";
      octx.textBaseline = "middle";
      octx.fillText("ANDRÉ", width / 2, height / 2);
      const data = octx.getImageData(0, 0, off.width, off.height).data;
      const pts: { x: number; y: number }[] = [];
      const step = 7;
      for (let y = 0; y < off.height; y += step) {
        for (let x = 0; x < off.width; x += step) {
          if ((data[(y * off.width + x) * 4 + 3] ?? 0) > 128) pts.push({ x, y });
        }
      }
      return pts;
    };

    const build = () => {
      const rect = canvas.getBoundingClientRect();
      dpr = Math.min(window.devicePixelRatio || 1, 2);
      width = rect.width;
      height = rect.height;
      canvas.width = Math.floor(width * dpr);
      canvas.height = Math.floor(height * dpr);
      ctx.setTransform(dpr, 0, 0, dpr, 0, 0);

      targets = sampleText();
      const count = Math.min(150, Math.floor((width * height) / 12000));
      particles = Array.from({ length: count }, () => ({
        x: Math.random() * width,
        y: Math.random() * height,
        vx: (Math.random() - 0.5) * 0.25,
        vy: (Math.random() - 0.5) * 0.25,
        tx: 0,
        ty: 0,
        r: Math.random() * 1.4 + 0.7,
      }));
      // distribui alvos do texto entre as partículas
      particles.forEach((p, i) => {
        const t = targets.length ? targets[(i * 7) % targets.length] : undefined;
        p.tx = t ? t.x : p.x;
        p.ty = t ? t.y : p.y;
      });
    };

    const start = performance.now();
    const CYCLE = 22000; // ciclo completo
    const FORM_START = 9000;
    const FORM_END = 16000;

    const draw = (now: number) => {
      if (!running) return;
      const t = (now - start) % CYCLE;
      // 0 -> livre, 1 -> formando o nome
      let form = 0;
      if (t > FORM_START && t < FORM_END) {
        const local = (t - FORM_START) / (FORM_END - FORM_START);
        form = Math.sin(local * Math.PI); // sobe e volta suavemente
      }

      ctx.clearRect(0, 0, width, height);

      for (const p of particles) {
        if (form > 0.01) {
          p.x += (p.tx - p.x) * 0.02 * form;
          p.y += (p.ty - p.y) * 0.02 * form;
        }
        p.x += p.vx * (1 - form);
        p.y += p.vy * (1 - form);

        if (p.x < 0 || p.x > width) p.vx *= -1;
        if (p.y < 0 || p.y > height) p.vy *= -1;

        if (pointer.active) {
          const dx = p.x - pointer.x;
          const dy = p.y - pointer.y;
          const d2 = dx * dx + dy * dy;
          if (d2 < 18000 && d2 > 0.5) {
            const f = (1 - d2 / 18000) * 0.9;
            const d = Math.sqrt(d2);
            p.x += (dx / d) * f * 2.2;
            p.y += (dy / d) * f * 2.2;
          }
        }

        ctx.beginPath();
        ctx.arc(p.x, p.y, p.r, 0, Math.PI * 2);
        ctx.fillStyle = `rgba(232, 140, 90, ${0.28 + form * 0.4})`;
        ctx.fill();
      }

      for (let i = 0; i < particles.length; i++) {
        for (let j = i + 1; j < particles.length; j++) {
          const a = particles[i];
          const b = particles[j];
          if (!a || !b) continue;
          const dx = a.x - b.x;
          const dy = a.y - b.y;
          const d2 = dx * dx + dy * dy;
          if (d2 < 13000) {
            ctx.beginPath();
            ctx.moveTo(a.x, a.y);
            ctx.lineTo(b.x, b.y);
            ctx.strokeStyle = `rgba(180, 130, 105, ${(1 - d2 / 13000) * 0.16})`;
            ctx.lineWidth = 0.6;
            ctx.stroke();
          }
        }
      }

      raf = requestAnimationFrame(draw);
    };

    const onPointerMove = (e: PointerEvent) => {
      const rect = canvas.getBoundingClientRect();
      pointer.x = e.clientX - rect.left;
      pointer.y = e.clientY - rect.top;
      pointer.active = true;
    };
    const onPointerLeave = () => {
      pointer.active = false;
    };

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (!entry) return;
        if (entry.isIntersecting && !running) {
          running = true;
          raf = requestAnimationFrame(draw);
        } else if (!entry.isIntersecting && running) {
          running = false;
          cancelAnimationFrame(raf);
        }
      },
      { threshold: 0 },
    );

    build();
    raf = requestAnimationFrame(draw);
    observer.observe(canvas);

    const onResize = () => build();
    window.addEventListener("resize", onResize);
    window.addEventListener("pointermove", onPointerMove, { passive: true });
    document.addEventListener("pointerleave", onPointerLeave);

    return () => {
      running = false;
      cancelAnimationFrame(raf);
      observer.disconnect();
      window.removeEventListener("resize", onResize);
      window.removeEventListener("pointermove", onPointerMove);
      document.removeEventListener("pointerleave", onPointerLeave);
    };
  }, []);

  return <canvas ref={canvasRef} aria-hidden="true" className={className} />;
}

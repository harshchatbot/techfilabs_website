import { useEffect, useRef } from "react";

export default function DottedSurface({ className = "" }) {
  const canvasRef = useRef(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    let animationFrameId = 0;
    let phase = 0;

    const render = () => {
      const { width, height } = canvas;
      ctx.clearRect(0, 0, width, height);

      const separation = Math.max(18, Math.min(32, width / 42));
      const columns = Math.ceil(width / separation) + 2;
      const rows = Math.ceil(height / separation) + 2;

      for (let ix = 0; ix < columns; ix++) {
        for (let iy = 0; iy < rows; iy++) {
          const x = ix * separation - separation;
          const baseY = iy * separation - separation;
          const waveY =
            Math.sin(ix * 0.32 + phase) * 10 +
            Math.sin(iy * 0.48 + phase * 1.2) * 8;
          const y = baseY + waveY;
          const alpha = 0.14 + ((Math.sin(ix * 0.18 + iy * 0.12 + phase) + 1) / 2) * 0.22;
          const radius = 1 + ((Math.cos(ix * 0.22 + phase) + 1) / 2) * 1.6;

          ctx.beginPath();
          ctx.fillStyle = `rgba(190, 242, 100, ${alpha})`;
          ctx.arc(x, y, radius, 0, Math.PI * 2);
          ctx.fill();
        }
      }

      phase += 0.02;
      animationFrameId = window.requestAnimationFrame(render);
    };

    const resize = () => {
      const parent = canvas.parentElement;
      if (!parent) return;
      const dpr = Math.min(window.devicePixelRatio || 1, 2);
      const width = parent.clientWidth;
      const height = parent.clientHeight;
      canvas.width = width * dpr;
      canvas.height = height * dpr;
      canvas.style.width = `${width}px`;
      canvas.style.height = `${height}px`;
      ctx.setTransform(dpr, 0, 0, dpr, 0, 0);
    };

    resize();
    render();
    window.addEventListener("resize", resize);

    return () => {
      window.removeEventListener("resize", resize);
      window.cancelAnimationFrame(animationFrameId);
    };
  }, []);

  return <canvas ref={canvasRef} className={`pointer-events-none absolute inset-0 ${className}`} aria-hidden="true" />;
}

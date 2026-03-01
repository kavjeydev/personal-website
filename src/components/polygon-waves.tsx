"use client";

import { useEffect, useRef } from "react";

export function PolygonWaves() {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    let animationId: number;
    let time = 0;

    const resize = () => {
      const dpr = window.devicePixelRatio || 1;
      const rect = canvas.getBoundingClientRect();
      canvas.width = rect.width * dpr;
      canvas.height = rect.height * dpr;
      ctx.scale(dpr, dpr);
    };

    const getWaveColor = () => {
      const isLight =
        document.documentElement.classList.contains("light");
      return isLight
        ? { r: 154, g: 109, b: 58 }
        : { r: 196, g: 154, b: 107 };
    };

    const draw = () => {
      const w = canvas.getBoundingClientRect().width;
      const h = canvas.getBoundingClientRect().height;
      const { r, g, b } = getWaveColor();

      ctx.clearRect(0, 0, w, h);

      const cols = 36;
      const rows = 14;
      const cellW = w / cols;
      const cellH = h / rows;

      const points: [number, number][][] = [];

      for (let row = 0; row <= rows; row++) {
        points[row] = [];
        for (let col = 0; col <= cols; col++) {
          const x = col * cellW;
          const baseY = row * cellH;
          const wave1 = Math.sin(col * 0.25 + time * 0.6) * 10;
          const wave2 = Math.sin(row * 0.4 + time * 0.5) * 7;
          const wave3 = Math.cos((col + row) * 0.15 + time * 0.35) * 5;
          const y = baseY + wave1 + wave2 + wave3;
          points[row][col] = [x, y];
        }
      }

      for (let row = 0; row < rows; row++) {
        for (let col = 0; col < cols; col++) {
          const tl = points[row][col];
          const tr = points[row][col + 1];
          const bl = points[row + 1][col];
          const br = points[row + 1][col + 1];

          const centerDist = Math.abs(col / cols - 0.5) * 2;
          const opacity = 0.12 + (1 - centerDist) * 0.18;

          ctx.strokeStyle = `rgba(${r}, ${g}, ${b}, ${opacity})`;
          ctx.lineWidth = 0.5;

          ctx.beginPath();
          ctx.moveTo(tl[0], tl[1]);
          ctx.lineTo(tr[0], tr[1]);
          ctx.lineTo(bl[0], bl[1]);
          ctx.closePath();
          ctx.stroke();

          ctx.beginPath();
          ctx.moveTo(tr[0], tr[1]);
          ctx.lineTo(br[0], br[1]);
          ctx.lineTo(bl[0], bl[1]);
          ctx.closePath();
          ctx.stroke();
        }
      }

      for (let row = 0; row <= rows; row++) {
        for (let col = 0; col <= cols; col++) {
          const [x, y] = points[row][col];
          const centerDist = Math.abs(col / cols - 0.5) * 2;
          const opacity = 0.2 + (1 - centerDist) * 0.4;

          ctx.fillStyle = `rgba(${r}, ${g}, ${b}, ${opacity})`;
          ctx.beginPath();
          ctx.arc(x, y, 1, 0, Math.PI * 2);
          ctx.fill();
        }
      }

      time += 0.012;
      animationId = requestAnimationFrame(draw);
    };

    resize();
    draw();

    window.addEventListener("resize", resize);

    return () => {
      window.removeEventListener("resize", resize);
      cancelAnimationFrame(animationId);
    };
  }, []);

  return (
    <div className="mb-14 rounded-lg overflow-hidden">
      <canvas
        ref={canvasRef}
        className="w-full block"
        style={{ height: "240px" }}
      />
    </div>
  );
}

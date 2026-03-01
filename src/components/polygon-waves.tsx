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

    const draw = () => {
      const w = canvas.getBoundingClientRect().width;
      const h = canvas.getBoundingClientRect().height;

      ctx.clearRect(0, 0, w, h);
      ctx.strokeStyle = "#d0d0d0";
      ctx.lineWidth = 0.5;

      const cols = 32;
      const rows = 16;
      const cellW = w / cols;
      const cellH = h / rows;

      const points: [number, number][][] = [];

      for (let row = 0; row <= rows; row++) {
        points[row] = [];
        for (let col = 0; col <= cols; col++) {
          const x = col * cellW;
          const baseY = row * cellH;
          const wave1 = Math.sin(col * 0.3 + time * 0.8) * 8;
          const wave2 = Math.sin(row * 0.5 + time * 0.6) * 6;
          const wave3 = Math.cos((col + row) * 0.2 + time * 0.4) * 4;
          const y = baseY + wave1 + wave2 + wave3;
          points[row][col] = [x, y];
        }
      }

      // Draw triangulated mesh
      for (let row = 0; row < rows; row++) {
        for (let col = 0; col < cols; col++) {
          const tl = points[row][col];
          const tr = points[row][col + 1];
          const bl = points[row + 1][col];
          const br = points[row + 1][col + 1];

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

      // Draw dots at vertices
      ctx.fillStyle = "#999";
      for (let row = 0; row <= rows; row++) {
        for (let col = 0; col <= cols; col++) {
          const [x, y] = points[row][col];
          ctx.beginPath();
          ctx.arc(x, y, 1.2, 0, Math.PI * 2);
          ctx.fill();
        }
      }

      time += 0.015;
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
    <div className="border border-[#e0e0e0] rounded overflow-hidden mb-10">
      <canvas
        ref={canvasRef}
        className="w-full block"
        style={{ height: "280px" }}
      />
    </div>
  );
}

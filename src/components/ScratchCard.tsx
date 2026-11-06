
import {
  useEffect,
  useRef,
  useState,
  type PointerEvent,
} from "react";

interface ScratchCardProps {
  value: string;
  label: string;
  onReveal?: () => void;
}

export default function ScratchCard({
  value,
  label,
  onReveal,
}: ScratchCardProps) {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const drawingRef = useRef(false);
  const revealedRef = useRef(false);
  const [revealed, setRevealed] = useState(false);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const rect = canvas.getBoundingClientRect();
    const dpr = window.devicePixelRatio || 1;

    canvas.width = rect.width * dpr;
    canvas.height = rect.height * dpr;

    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    ctx.scale(dpr, dpr);

    const gradient = ctx.createLinearGradient(
      0, 0, rect.width, rect.height
    );

    gradient.addColorStop(0, "#E9D2A5");
    gradient.addColorStop(0.5, "#B99558");
    gradient.addColorStop(1, "#E8D1A2");

    ctx.fillStyle = gradient;
    ctx.fillRect(0, 0, rect.width, rect.height);

    // Decorative gold pattern
    ctx.strokeStyle = "rgba(255,255,255,0.3)";
    ctx.lineWidth = 1;

    for (let x = 12; x < rect.width; x += 20) {
      ctx.beginPath();
      ctx.moveTo(x, 0);
      ctx.lineTo(x - 10, rect.height);
      ctx.stroke();
    }

    ctx.fillStyle = "#fff8e9";
    ctx.textAlign = "center";
    ctx.font = "12px Georgia";
    ctx.fillText("✦", rect.width / 2, 36);

    ctx.font = "10px sans-serif";
    ctx.fillText("SCRATCH HERE", rect.width / 2, 72);

    ctx.font = "20px Georgia";
    ctx.fillText("✧", rect.width / 2, 108);

    return () => {
      drawingRef.current = false;
    };
  }, []);

  const scratch = (e: PointerEvent<HTMLCanvasElement>) => {
    const canvas = canvasRef.current;
    const ctx = canvas?.getContext("2d");

    if (!canvas || !ctx || revealedRef.current) return;

    const rect = canvas.getBoundingClientRect();

    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;

    ctx.globalCompositeOperation = "destination-out";
    ctx.lineWidth = 35;
    ctx.lineCap = "round";
    ctx.lineJoin = "round";

    ctx.lineTo(x, y);
    ctx.stroke();

    ctx.beginPath();
    ctx.moveTo(x, y);
  };

  const checkReveal = () => {
    const canvas = canvasRef.current;
    const ctx = canvas?.getContext("2d");

    if (!canvas || !ctx || revealedRef.current) return;

    const pixels = ctx.getImageData(
      0, 0, canvas.width, canvas.height
    ).data;

    let transparent = 0;
    let total = 0;

    // Sample pixels to estimate how much has been scratched
    for (let i = 3; i < pixels.length; i += 4 * 20) {
      total++;
      if (pixels[i] < 100) transparent++;
    }

    if (transparent / total > 0.38) {
      revealedRef.current = true;
      setRevealed(true);
      onReveal?.();
    }
  };

  return (
    <div className="scratch-card">
      <div className="scratch-card-content">
        <span className="scratch-label">{label}</span>
        <strong>{value}</strong>
      </div>

      {!revealed && (
        <canvas
          ref={canvasRef}
          className="scratch-canvas"
          onPointerDown={(e) => {
            drawingRef.current = true;
            e.currentTarget.setPointerCapture(e.pointerId);

            const ctx = e.currentTarget.getContext("2d");
            if (ctx) {
              const rect = e.currentTarget.getBoundingClientRect();
              const x = e.clientX - rect.left;
              const y = e.clientY - rect.top;

              ctx.beginPath();
              ctx.moveTo(x, y);
            }
          }}
          onPointerMove={(e) => {
            if (drawingRef.current) scratch(e);
          }}
          onPointerUp={() => {
            drawingRef.current = false;
            checkReveal();
          }}
          onPointerCancel={() => {
            drawingRef.current = false;
          }}
        />
      )}
    </div>
  );
}

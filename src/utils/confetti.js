import confetti from "canvas-confetti";

export const triggerConfetti = () => {
  const duration = 3000;
  const end = Date.now() + duration;

  const colors = ["#22c55e", "#10b981", "#34d399", "#6ee7b7", "#a7f3d0"];

  const frame = () => {
    confetti({
      particleCount: 3,
      angle: 60,
      spread: 55,
      origin: { x: 0, y: 0.7 },
      colors,
    });

    confetti({
      particleCount: 3,
      angle: 120,
      spread: 55,
      origin: { x: 1, y: 0.7 },
      colors,
    });

    if (Date.now() < end) {
      requestAnimationFrame(frame);
    }
  };

  frame();
};

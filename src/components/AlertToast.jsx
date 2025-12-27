import { useEffect, useRef } from "react";
import gsap from "gsap";
import { CheckCircle } from "lucide-react";

const AlertToast = ({ show, onClose }) => {
  const toastRef = useRef(null);

  useEffect(() => {
    if (!show || !toastRef.current) return;

    // Entrance animation
    gsap.fromTo(
      toastRef.current,
      { scale: 0.5, opacity: 0, y: 50 },
      {
        scale: 1,
        opacity: 1,
        y: 0,
        duration: 0.6,
        ease: "elastic.out(1, 0.5)",
      }
    );

    // Auto-hide after 4 seconds
    const hideTimeout = setTimeout(() => {
      gsap.to(toastRef.current, {
        y: 100,
        opacity: 0,
        duration: 0.3,
        ease: "power2.in",
        onComplete: onClose,
      });
    }, 4000);

    return () => clearTimeout(hideTimeout);
  }, [show, onClose]);

  if (!show) return null;

  return (
    <div
      ref={toastRef}
      className="fixed bottom-8 left-1/2 -translate-x-1/2 z-[9999] px-6 py-4 rounded-2xl bg-green-500/10 border border-green-500/20 backdrop-blur-md shadow-2xl flex items-center gap-4"
    >
      {/* Glowing Icon */}
      <div className="relative">
        <div className="absolute inset-0 bg-green-500/30 rounded-full blur-md" />
        <div className="relative w-10 h-10 rounded-full bg-green-500/20 flex items-center justify-center">
          <CheckCircle className="w-6 h-6 text-green-400" />
        </div>
      </div>

      {/* Text */}
      <div>
        <p className="text-white font-semibold">Message Sent!</p>
        <p className="text-green-300/80 text-sm">I'll get back to you soon.</p>
      </div>
    </div>
  );
};

export default AlertToast;

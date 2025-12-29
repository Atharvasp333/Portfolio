import { useGSAP } from "@gsap/react";
import gsap from "gsap";

import CTAButton from "../components/CTAButton";
import TypewriterEffect from "../components/TypewriterEffect";
import HeroExperience from "../components/models/hero_models/HeroExperience";

const Hero = () => {
  useGSAP(() => {
    gsap.fromTo(
      ".hero-layer",
      { y: 30, opacity: 0 },
      { y: 0, opacity: 1, stagger: 0.15, duration: 0.8, ease: "power2.out" }
    );
  });

  const handleSeeWorkClick = (e) => {
    e.preventDefault();
    const target = document.getElementById("work");
    if (target) {
      const offset = window.innerHeight * 0.1;
      const top = target.getBoundingClientRect().top + window.pageYOffset - offset;
      window.scrollTo({ top, behavior: "smooth" });
    }
  };

  return (
    <section id="hero" className="relative overflow-hidden min-h-screen">
      <div className="absolute top-0 left-0 z-0">
        <img src="/images/bg.png" alt="" />
      </div>

      <div className="hero-layout">
        {/* LEFT: Hero Content */}
        <header className="flex flex-col justify-center w-full lg:w-1/2 px-5 md:px-10 lg:px-16 relative z-20">
          {/* Text Container - Compact */}
          <div className="flex flex-col gap-3 max-w-lg">
            
            {/* Layer 1: Eyebrow Text */}
            <div className="hero-layer">
              <p className="text-sm md:text-base uppercase tracking-widest text-gray-300 font-medium">
                Hi, I'm Atharva.
              </p>
            </div>

            {/* Layer 2: Main Headline with Typewriter */}
            <div className="hero-layer">
              <h1 className="text-2xl md:text-3xl lg:text-4xl font-bold leading-[1.15] text-white">
                I build{" "}
                <TypewriterEffect />
              </h1>
            </div>

            {/* Layer 3: Description */}
            <div className="hero-layer">
              <p className="text-sm md:text-base text-gray-300 max-w-md leading-relaxed">
                Transforming complex requirements into seamless, user-centric digital experiences.
              </p>
            </div>

            {/* Layer 4: CTA Buttons */}
            <div className="hero-layer mt-1">
              <div className="flex flex-col sm:flex-row items-center sm:items-start gap-3">
                {/* Primary CTA - See Work */}
                <CTAButton
                  text="See My Work"
                  variant="primary"
                  onClick={handleSeeWorkClick}
                  icon={
                    <svg 
                      xmlns="http://www.w3.org/2000/svg" 
                      width="18" 
                      height="18" 
                      viewBox="0 0 24 24" 
                      fill="none" 
                      stroke="currentColor" 
                      strokeWidth="2" 
                      strokeLinecap="round" 
                      strokeLinejoin="round"
                      className="transition-transform duration-300 group-hover:translate-x-1"
                    >
                      <path d="M5 12h14"/>
                      <path d="m12 5 7 7-7 7"/>
                    </svg>
                  }
                  className="group"
                />

                {/* Secondary CTA - Resume */}
                <CTAButton
                  text="Resume"
                  variant="secondary"
                  href="/resume.pdf"
                  target="_blank"
                  icon={
                    <svg 
                      xmlns="http://www.w3.org/2000/svg" 
                      width="18" 
                      height="18" 
                      viewBox="0 0 24 24" 
                      fill="none" 
                      stroke="currentColor" 
                      strokeWidth="2" 
                      strokeLinecap="round" 
                      strokeLinejoin="round"
                    >
                      <path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"/>
                      <polyline points="7 10 12 15 17 10"/>
                      <line x1="12" x2="12" y1="15" y2="3"/>
                    </svg>
                  }
                />

                {/* Tertiary CTA - Hire Me */}
                <CTAButton
                  text="Hire Me"
                  variant="secondary"
                  href="#contact"
                  icon={
                    <svg 
                      xmlns="http://www.w3.org/2000/svg" 
                      width="18" 
                      height="18" 
                      viewBox="0 0 24 24" 
                      fill="none" 
                      stroke="currentColor" 
                      strokeWidth="2" 
                      strokeLinecap="round" 
                      strokeLinejoin="round"
                    >
                      <path d="M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2"/>
                      <circle cx="9" cy="7" r="4"/>
                      <line x1="19" x2="19" y1="8" y2="14"/>
                      <line x1="22" x2="16" y1="11" y2="11"/>
                    </svg>
                  }
                  className="group"
                />
              </div>
            </div>
          </div>
        </header>

        {/* RIGHT: 3D Model or Visual */}
        <figure className="hidden lg:flex w-1/2 items-center justify-center relative z-10">
          <div className="w-full h-[70vh] relative">
            <HeroExperience />
          </div>
        </figure>
      </div>
    </section>
  );
};

export default Hero;

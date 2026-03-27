import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import { ScrollTrigger } from "gsap/ScrollTrigger";

import { expCards } from "../constants";
import TitleHeader from "../components/TitleHeader";
import GlowCard from "../components/GlowCard";

gsap.registerPlugin(ScrollTrigger);

const Experience = () => {
  useGSAP(() => {
    gsap.utils.toArray(".timeline-card").forEach((card) => {
      gsap.from(card, {
        xPercent: -100,
        opacity: 0,
        transformOrigin: "left left",
        duration: 1,
        ease: "power2.inOut",
        scrollTrigger: {
          trigger: card,
          start: "top 80%",
        },
      });
    });

    gsap.to(".timeline", {
      transformOrigin: "bottom bottom",
      ease: "power1.inOut",
      scrollTrigger: {
        trigger: ".timeline",
        start: "top center",
        end: "70% center",
        onUpdate: (self) => {
          gsap.to(".timeline", {
            scaleY: 1 - self.progress,
          });
        },
      },
    });

    gsap.utils.toArray(".expText").forEach((text) => {
      gsap.from(text, {
        opacity: 0,
        xPercent: 0,
        duration: 1,
        ease: "power2.inOut",
        scrollTrigger: {
          trigger: text,
          start: "top 60%",
        },
      });
    }, "<");
  }, []);

  return (
    <section
      id="experience"
      className="flex-center md:mt-28 mt-14 section-padding xl:px-0"
    >
      <div className="w-full h-full md:px-20 px-5">
        <TitleHeader
          title="Professional Work Experience"
          sub="💼 My Career Overview"
        />
        <div className="mt-20 relative">
          <div className="relative z-50 xl:space-y-20 space-y-8">
            {expCards.map((card) => (
              <div key={card.title} className="exp-card-wrapper">
                
                {/* --- LEFT COLUMN: JOB INFO + COMPANY IMAGE --- */}
                <div className="xl:w-2/6">
                  <GlowCard card={card}>
                    <div className="p-4 h-full w-full flex flex-col justify-between bg-black/20 rounded-lg">
                      {/* Job Title and Date at the top */}
                      <div className="mb-4">
                        <h1 className="font-semibold text-xl mb-2">{card.title}</h1>
                        <p className="text-white-50 text-sm">
                          🗓️&nbsp;{card.date}
                        </p>
                      </div>
                      
                      {/* Company Image at the bottom */}
                      <div className="flex items-center justify-center mt-auto">
                        <img 
                          src={card.imgPath} 
                          alt="exp-img" 
                          className="w-full h-full object-contain rounded-lg max-h-[160px]" 
                        />
                      </div>
                    </div>
                  </GlowCard>
                </div>

                {/* --- RIGHT COLUMN: TIMELINE + RESPONSIBILITIES --- */}
                <div className="xl:w-4/6">
                  <div className="flex items-start">
                    <div className="timeline-wrapper">
                      <div className="timeline" />
                      <div className="gradient-line w-1 h-full" />
                    </div>
                    
                    <div className="expText flex xl:gap-20 md:gap-10 gap-5 relative z-20">
                      
                      {/* --- LOGO SECTION (PRESERVED) --- */}
                      <div className="timeline-logo">
                        <img 
                          src={card.logoPath} 
                          alt="logo" 
                          className="w-8 h-8 md:w-10 md:h-10 object-contain rounded-full bg-white/10 p-1 shadow-md border border-white/5"
                        />
                      </div>

                      {/* Responsibilities Section */}
                      <div>
                        <p className="text-[#839CB5] italic text-sm mb-3">
                          Responsibilities
                        </p>
                        <ul className="list-disc ms-4 flex flex-col gap-3 text-white-50">
                          {card.responsibilities.map(
                            (responsibility, index) => (
                              <li key={index} className="text-sm">
                                {responsibility}
                              </li>
                            )
                          )}
                        </ul>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Experience;
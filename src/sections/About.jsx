import { Instagram, Linkedin, Github } from 'lucide-react';
import LeetCodeIcon from '../components/icons/LeetCodeIcon';

const About = () => {
    return (
        <section className="py-14 bg-[#0a0a0a]" id="about">
            <div className="container mx-auto px-4">
                {/* Main Transparent Glass Container */}
                <div className="bg-white/5 backdrop-blur-lg border border-white/10 rounded-2xl p-6 md:p-8 overflow-hidden relative">

                    {/* Header Block */}
                    <div className="text-center mb-8 relative z-10">
                        <h4 className="text-gray-400 uppercase tracking-widest mb-3 text-xs">The developer</h4>
                        <h2 className="text-2xl md:text-3xl font-extrabold text-white tracking-tight">
                            Turning Vision <span className="italic text-transparent bg-clip-text bg-gradient-to-r from-gray-200 to-gray-500">into Digital Reality</span>
                        </h2>
                    </div>

                    {/* Content Grid */}
                    <div className="grid grid-cols-1 md:grid-cols-12 gap-8 items-start relative z-10">

                        {/* Left Column: Profile */}
                        <div className="md:col-span-4 flex flex-col items-center text-center">
                            {/* Profile Photo */}
                            <div className="w-56 h-64 md:w-64 md:h-72 rounded-xl overflow-hidden border-2 border-white/10 shadow-xl mb-4">
                                <img 
                                    src="/images/Atharva.jpeg" 
                                    alt="Atharva Pingale" 
                                    className="w-full h-full object-cover object-top"
                                />
                            </div>

                            {/* Name and Socials */}
                            <h3 className="text-lg font-bold text-white mb-3">Atharva Pingale</h3>
                            <div className="flex gap-3">
                                <a href="https://www.instagram.com/atharva_pingale45/" target="_blank" rel="noopener noreferrer" className="p-2 bg-white/10 rounded-full text-gray-300 hover:text-white hover:bg-white/20 transition-all">
                                    <Instagram size={16} />
                                </a>
                                <a href="https://www.linkedin.com/in/atharva-pingale-25387432a/" target="_blank" rel="noopener noreferrer" className="p-2 bg-white/10 rounded-full text-gray-300 hover:text-white hover:bg-white/20 transition-all">
                                    <Linkedin size={16} />
                                </a>
                                <a href="https://github.com/Atharvasp333" target="_blank" rel="noopener noreferrer" className="p-2 bg-white/10 rounded-full text-gray-300 hover:text-white hover:bg-white/20 transition-all">
                                    <Github size={16} />
                                </a>
                                <a href="https://leetcode.com/u/Atharva_0506/" target="_blank" rel="noopener noreferrer" className="p-2 bg-white/10 rounded-full text-gray-300 hover:text-white hover:bg-white/20 transition-all">
                                    <LeetCodeIcon size={16} />
                                </a>
                            </div>
                        </div>

                        {/* Right Column: Bio and Experience */}
                        <div className="md:col-span-8 text-left">

                            {/* Bio Text */}
                            <p className="text-sm text-gray-300 leading-relaxed mb-8">
                                Full-stack developer and Information Technology student passionate about building impactful web and mobile applications. Winner of the <span className="text-white font-semibold">AgriTech Hackathon 2025</span> for developing an AI-powered mobile platform aimed at empowering Indian farmers. I enjoy turning real-world problems into scalable digital solutions, with a strong focus on clean UI, performance, and user experience.
                            </p>

                            {/* Experience Section */}
                            <div className="border-t border-white/10 pt-6">
                                <h4 className="text-base font-bold text-white mb-4">Work Experience</h4>
                                <div className="space-y-4">

                                    {/* Experience Item 1 */}
                                    <div className="grid grid-cols-1 md:grid-cols-3 gap-3">
                                        <div>
                                            <h5 className="text-white font-semibold text-sm">Senior Content Writer</h5>
                                            <p className="text-gray-400 text-xs">QuestIT VESIT</p>
                                        </div>
                                        <div className="text-gray-400 md:text-right text-xs">
                                            <span>Sept 2025 → Present</span>
                                        </div>
                                    </div>

                                    {/* Experience Item 2 */}
                                    <div className="grid grid-cols-1 md:grid-cols-3 gap-3">
                                        <div>
                                            <h5 className="text-white font-semibold text-sm">Full Stack Developer</h5>
                                            <p className="text-gray-400 text-xs">Zemo Technologies</p>
                                        </div>
                                        <div className="text-gray-400 md:text-right text-xs">
                                            <span>May 2025 → Jul 2025</span>
                                        </div>
                                    </div>

                                    {/* Experience Item 3 */}
                                    <div className="grid grid-cols-1 md:grid-cols-3 gap-3">
                                        <div>
                                            <h5 className="text-white font-semibold text-sm">Mobile App Developer</h5>
                                            <p className="text-gray-400 text-xs">Atto Infotech</p>
                                        </div>
                                        <div className="text-gray-400 md:text-right text-xs">
                                            <span>Nov 2024 → Apr 2025</span>
                                        </div>
                                    </div>
                                </div>
                            </div>

                        </div>
                    </div>

                    {/* Background Blur Effect */}
                    <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[400px] h-[400px] bg-blue-500/20 rounded-full blur-[100px] opacity-30 pointer-events-none"></div>
                </div>
            </div>
        </section>
    );
};

export default About;
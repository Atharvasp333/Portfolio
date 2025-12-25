import { Instagram, Linkedin, Github } from 'lucide-react';

const About = () => {
    return (
        <section className="py-20 bg-[#0a0a0a]" id="about">
            <div className="container mx-auto px-4">
                {/* Main Transparent Glass Container */}
                <div className="bg-white/5 backdrop-blur-lg border border-white/10 rounded-3xl p-8 md:p-12 overflow-hidden relative">

                    {/* Header Block */}
                    <div className="text-center mb-12 relative z-10">
                        <h4 className="text-gray-400 uppercase tracking-widest mb-4 text-sm">The developer</h4>
                        <h2 className="text-4xl md:text-5xl font-extrabold text-white tracking-tight">
                            Turning Vision <span className="italic text-transparent bg-clip-text bg-gradient-to-r from-gray-200 to-gray-500">into Digital Reality</span>
                        </h2>
                    </div>

                    {/* Content Grid */}
                    <div className="grid grid-cols-1 md:grid-cols-12 gap-12 items-start relative z-10">

                        {/* Left Column: Profile */}
                        <div className="md:col-span-4 flex flex-col items-center text-center">
                            {/* Placeholder for Photo */}
                            <div className="w-64 h-64 rounded-2xl overflow-hidden border-4 border-white/10 shadow-2xl mb-6 bg-gray-800 flex items-center justify-center text-gray-500">
                                <span>Your Photo Here</span>
                            </div>

                            {/* Name and Socials */}
                            <h3 className="text-2xl font-bold text-white mb-4">Atharva Pingale</h3>
                            <div className="flex gap-4">
                                <a href="https://instagram.com" target="_blank" rel="noopener noreferrer" className="p-3 bg-white/10 rounded-full text-gray-300 hover:text-white hover:bg-white/20 transition-all">
                                    <Instagram size={20} />
                                </a>
                                <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer" className="p-3 bg-white/10 rounded-full text-gray-300 hover:text-white hover:bg-white/20 transition-all">
                                    <Linkedin size={20} />
                                </a>
                                <a href="https://github.com" target="_blank" rel="noopener noreferrer" className="p-3 bg-white/10 rounded-full text-gray-300 hover:text-white hover:bg-white/20 transition-all">
                                    <Github size={20} />
                                </a>
                            </div>
                        </div>

                        {/* Right Column: Bio and Experience */}
                        <div className="md:col-span-8 text-left">

                            {/* Bio Text */}
                            <p className="text-lg text-gray-300 leading-relaxed mb-12">
                                Full-stack developer and Information Technology student passionate about building impactful web and mobile applications. Winner of the <span className="text-white font-semibold">AgriTech Hackathon 2025</span> for developing an AI-powered mobile platform aimed at empowering Indian farmers. I enjoy turning real-world problems into scalable digital solutions, with a strong focus on clean UI, performance, and user experience.
                            </p>

                            {/* Experience Section */}
                            <div className="border-t border-white/10 pt-8">
                                <h4 className="text-xl font-bold text-white mb-6">Work Experience</h4>
                                <div className="space-y-6">

                                    {/* Experience Item 1 */}
                                    <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                                        <div>
                                            <h5 className="text-white font-semibold">Senior Content Writer</h5>
                                            <p className="text-gray-400 text-sm">QuestIT VESIT</p>
                                        </div>
                                        <div className="text-gray-400 md:text-right">
                                            <span>Sept 2025 → Present</span>
                                        </div>
                                    </div>

                                    {/* Experience Item 2 */}
                                    <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                                        <div>
                                            <h5 className="text-white font-semibold">Full Stack Developer</h5>
                                            <p className="text-gray-400 text-sm">Zemo Technologies</p>
                                        </div>
                                        <div className="text-gray-400 md:text-right">
                                            <span>May 2025 → Jul 2025</span>
                                        </div>
                                    </div>

                                    {/* Experience Item 3 */}
                                    <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                                        <div>
                                            <h5 className="text-white font-semibold">Mobile App Developer</h5>
                                            <p className="text-gray-400 text-sm">Atto Infotech</p>
                                        </div>
                                        <div className="text-gray-400 md:text-right">
                                            <span>Nov 2024 → Apr 2025</span>
                                        </div>
                                    </div>
                                </div>
                            </div>

                        </div>
                    </div>

                    {/* Background Blur Effect */}
                    <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] bg-blue-500/20 rounded-full blur-[120px] opacity-30 pointer-events-none"></div>
                </div>
            </div>
        </section>
    );
};

export default About;
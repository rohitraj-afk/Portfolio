import React from 'react';
import { motion } from 'framer-motion';
import { FiArrowRight } from 'react-icons/fi';
import { smoothScroll } from '../utils/helpers';
import { useTheme } from '../context/ThemeContext';

export default function Hero() {
    const { isDark } = useTheme();
    const [activeSection, setActiveSection] = React.useState('home');

    React.useEffect(() => {
        const sectionIds = ['home', 'about', 'skills', 'projects', 'contact'];

        const onScroll = () => {
            const scrollY = window.scrollY + 120;
            let current = 'home';

            for (const id of sectionIds) {
                const section = document.getElementById(id);
                if (!section) continue;

                if (scrollY >= section.offsetTop) {
                    current = id;
                }
            }

            setActiveSection(current);
        };

        onScroll();
        window.addEventListener('scroll', onScroll, { passive: true });
        return () => window.removeEventListener('scroll', onScroll);
    }, []);

    return (
        <section id="home" className="hero-shell min-h-screen flex items-center justify-center pt-20 px-4 sm:px-6 lg:px-8">
            <div className="max-w-4xl mx-auto text-center">
                <motion.h1
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6, delay: 0.1 }}
                    className="text-4xl sm:text-5xl lg:text-6xl font-bold mb-4 theme-heading"
                >
                    Hi, I'm <span className="gradient-text">Rohit Raj Singh</span>
                </motion.h1>

                <motion.p
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6, delay: 0.2 }}
                    className="text-lg sm:text-xl theme-text mb-8"
                >
                    Electrical Engineering Student | Software Developer | Problem Solver
                </motion.p>

                <motion.p
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6, delay: 0.3 }}
                    className="text-base sm:text-lg theme-muted mb-8 max-w-2xl mx-auto leading-relaxed"
                >
                    Passionate about building scalable and efficient software solutions.
                    Skilled in React, JavaScript, Python, and Java.
                    Have foundational knowledge of Electrical Engineering, including basic circuits and measurements.
                    Focused on practical projects and continuous learning.
                </motion.p>

                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6, delay: 0.4 }}
                    className="flex flex-col sm:flex-row gap-4 justify-center items-center"
                >
                    <motion.button
                        whileHover={{ scale: 1.05 }}
                        whileTap={{ scale: 0.95 }}
                        onClick={() => smoothScroll('projects')}
                        className={`hero-cta px-8 py-3 rounded-lg font-semibold flex items-center gap-2 transition-colors ${isDark
                            ? 'hover:bg-cyan-400/80'
                            : `${activeSection === 'projects' ? 'bg-accent/80 text-accent' : 'hover:bg-accent/80'}`
                            }`}
                    >
                        View My Work <FiArrowRight />
                    </motion.button>

                    <motion.button
                        whileHover={{ scale: 1.05 }}
                        whileTap={{ scale: 0.95 }}
                        onClick={() => smoothScroll('contact')}
                        className={`px-8 py-3 rounded-lg font-semibold transition-colors ${isDark
                            ? 'border border-cyan-400 text-cyan-400 hover:bg-cyan-400/10'
                            : `border border-accent text-accent ${activeSection === 'contact'
                                ? 'bg-accent/10'
                                : 'hover:bg-accent/10'
                            }`
                            }`}
                    >
                        Get in Touch
                    </motion.button>
                </motion.div>

                {/* Scroll indicator */}
                <motion.div
                    animate={{ y: [0, 10, 0] }}
                    transition={{ duration: 2, repeat: Infinity }}
                    className="mt-16 flex justify-center"
                >
                    <div className={`w-6 h-10 border-2 rounded-full flex justify-center ${isDark ? 'border-cyan-400' : 'border-[rgb(var(--accent-rgb))]'
                        }`}>
                        <div className={`w-1 h-2 rounded-full mt-2 ${isDark ? 'bg-cyan-400' : 'bg-[rgb(var(--accent-rgb))]'
                            }`} />
                    </div>
                </motion.div>
            </div>
        </section>
    );
}

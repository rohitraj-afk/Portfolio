import React from 'react';
import { FiMenu, FiX, FiMoon, FiSun } from 'react-icons/fi';
import { motion } from 'framer-motion';
import { useTheme } from '../context/ThemeContext';
import { smoothScroll } from '../utils/helpers';

export default function Navbar() {
    const [isOpen, setIsOpen] = React.useState(false);
    const [activeSection, setActiveSection] = React.useState('home');
    const { isDark, toggleTheme } = useTheme();

    const navItems = ['Home', 'About', 'Skills', 'Projects', 'Contact'];

    React.useEffect(() => {
        const sectionIds = navItems.map((item) => item.toLowerCase());

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
        <motion.nav
            initial={{ y: -100 }}
            animate={{ y: 0 }}
            transition={{ duration: 0.5 }}
            className="theme-nav fixed top-0 left-0 right-0 z-50"
        >
            <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="flex justify-between items-center h-16">
                    {/* Logo */}
                    <motion.div
                        whileHover={{ scale: 1.05 }}
                        className="text-xl font-bold cursor-pointer"
                        onClick={() => smoothScroll('home')}
                    >
                        <span className="gradient-text">Rohit</span>
                    </motion.div>

                    {/* Desktop Menu */}
                    <div className="hidden md:flex items-center gap-8">
                        {navItems.map((item) => (
                            <motion.button
                                key={item}
                                whileHover={{ scale: 1.03 }}
                                onClick={() => {
                                    const id = item.toLowerCase();
                                    setActiveSection(id);
                                    smoothScroll(id);
                                }}
                                aria-current={activeSection === item.toLowerCase() ? 'page' : undefined}
                                className={`transition-colors text-sm ${activeSection === item.toLowerCase()
                                    ? (isDark ? 'text-cyan-400' : 'text-[rgb(var(--accent-rgb))]')
                                    : (isDark ? 'theme-text hover:text-cyan-400' : 'theme-text hover:text-[rgb(var(--accent-rgb))]')
                                    }`}
                            >
                                {item}
                            </motion.button>
                        ))}
                    </div>

                    {/* Theme Toggle & Mobile Menu */}
                    <div className="flex items-center gap-4">
                        <motion.button
                            whileHover={{ scale: 1.1 }}
                            whileTap={{ scale: 0.9 }}
                            onClick={toggleTheme}
                            className="p-2 rounded-lg theme-panel hover:opacity-90"
                        >
                            {isDark ? <FiSun size={18} /> : <FiMoon size={18} />}
                        </motion.button>

                        <motion.button
                            whileHover={{ scale: 1.1 }}
                            whileTap={{ scale: 0.9 }}
                            onClick={() => setIsOpen(!isOpen)}
                            className="md:hidden p-2 rounded-lg theme-panel"
                        >
                            {isOpen ? <FiX size={20} /> : <FiMenu size={20} />}
                        </motion.button>
                    </div>
                </div>

                {/* Mobile Menu */}
                {isOpen && (
                    <motion.div
                        initial={{ opacity: 0, y: -10 }}
                        animate={{ opacity: 1, y: 0 }}
                        className="md:hidden pb-4 flex flex-col gap-2"
                    >
                        {navItems.map((item) => (
                            <button
                                key={item}
                                onClick={() => {
                                    const id = item.toLowerCase();
                                    setActiveSection(id);
                                    smoothScroll(id);
                                    setIsOpen(false);
                                }}
                                className={`text-left px-4 py-2 rounded-lg transition-all ${activeSection === item.toLowerCase()
                                    ? `${isDark ? 'text-cyan-400' : 'text-[rgb(var(--accent-rgb))]'} bg-black/5 dark:bg-white/5`
                                    : `${isDark ? 'theme-text hover:text-cyan-400' : 'theme-text hover:text-[rgb(var(--accent-rgb))]'} hover:bg-black/5 dark:hover:bg-white/5`
                                    }`}
                            >
                                {item}
                            </button>
                        ))}
                    </motion.div>
                )}
            </div>
        </motion.nav>
    );
}

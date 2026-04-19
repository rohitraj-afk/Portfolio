import React, { useState } from 'react';
import { AnimatePresence, motion } from 'framer-motion';
import { FiGithub, FiExternalLink } from 'react-icons/fi';

export default function Projects() {
    const [filter, setFilter] = useState('all');

    // Sample projects - you can update these with your actual projects
    const projectsData = [
        {
            id: 1,
            title: 'Portfolio Website',
            description: 'Modern, futuristic portfolio built with React, Tailwind CSS, and Framer Motion.',
            tech: ['React', 'Tailwind CSS', 'Framer Motion'],
            category: 'frontend',
            github: 'https://github.com/rohitraj-afk',
            demo: '#',
        },
        {
            id: 2,
            title: 'Tik-Tak-Toe Game',
            description: 'Classic Tic-Tac-Toe game implemented with JavaScript, HTML, and CSS.',
            tech: ['HTML', 'CSS', 'JavaScript'],
            category: 'frontend',
            github: 'https://github.com/rohitraj-afk/Tik-Tak-Toe',
            demo: '#',
        },
        {
            id: 3,
            title: 'Temperature Controlled Fan Speed System',
            description: 'An embedded system that adjusts fan speed based on temperature readings using a LM35 sensor.',
            tech: ['Arduino', 'LM35', 'IRFZ44N MOSFET'],
            category: 'Electrical & Electronics',
            github: 'https://github.com/rohitraj-afk',
            demo: '#',
        },
    ];

    const categories = ['all', 'frontend', 'backend', 'Electrical & Electronics'];
    const filtered =
        filter === 'all'
            ? projectsData
            : projectsData.filter((p) => p.category === filter);

    const gridVariants = {
        hidden: { opacity: 0 },
        visible: {
            opacity: 1,
            transition: {
                staggerChildren: 0.08,
                delayChildren: 0.04,
            },
        },
    };

    const cardVariants = {
        hidden: { opacity: 0, y: 18, scale: 0.98 },
        visible: {
            opacity: 1,
            y: 0,
            scale: 1,
            transition: {
                duration: 0.35,
                ease: 'easeOut',
            },
        },
        exit: {
            opacity: 0,
            y: 12,
            scale: 0.98,
            transition: {
                duration: 0.2,
                ease: 'easeIn',
            },
        },
    };

    return (
        <section id="projects" className="theme-section min-h-screen flex items-center py-20 px-4 sm:px-6 lg:px-8">
            <div className="max-w-5xl mx-auto w-full">
                <motion.h2
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5 }}
                    className="text-3xl sm:text-4xl font-bold mb-12 theme-heading"
                >
                    My <span className="gradient-text">Projects</span>
                </motion.h2>

                {/* Filter Buttons */}
                <motion.div
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    viewport={{ once: true }}
                    className="flex flex-wrap gap-3 mb-12"
                >
                    {categories.map((cat) => (
                        <motion.button
                            key={cat}
                            whileHover={{ scale: 1.05 }}
                            whileTap={{ scale: 0.95 }}
                            onClick={() => setFilter(cat)}
                            className={`px-4 py-2 rounded-lg font-medium transition-all ${filter === cat
                                ? 'project-active-filter bg-accent text-white'
                                : 'theme-panel theme-text hover:opacity-90'
                                }`}
                        >
                            {cat.charAt(0).toUpperCase() + cat.slice(1)}
                        </motion.button>
                    ))}
                </motion.div>

                {/* Projects Grid */}
                <motion.div
                    variants={gridVariants}
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true, amount: 0.2 }}
                    className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
                >
                    <AnimatePresence mode="popLayout">
                        {filtered.map((project) => (
                            <motion.div
                                key={project.id}
                                variants={cardVariants}
                                initial="hidden"
                                animate="visible"
                                exit="exit"
                                whileHover={{ y: -4, transition: { duration: 0.2, ease: 'easeOut' } }}
                                className="group p-6 glassmorphism rounded-xl hover:shadow-2xl transition-shadow duration-300 overflow-hidden h-full flex flex-col"
                            >
                                {/* Card Header */}
                                <div className="mb-4">
                                    <h3 className="project-card-title text-xl font-semibold theme-heading group-hover:text-accent transition-colors duration-300">
                                        {project.title}
                                    </h3>
                                    <p className="project-card-meta text-sm theme-muted mt-1 capitalize">
                                        {project.category}
                                    </p>
                                </div>

                                {/* Description */}
                                <p className="project-card-text theme-text text-sm mb-4 leading-relaxed">
                                    {project.description}
                                </p>

                                <div className="mt-auto">
                                    {/* Tech Stack */}
                                    <div className="flex flex-wrap gap-2 mb-4">
                                        {project.tech.map((tech, i) => (
                                            <span
                                                key={i}
                                                className="text-xs px-3 py-1 bg-accent/20 text-accent rounded-full"
                                            >
                                                {tech}
                                            </span>
                                        ))}
                                    </div>

                                    {/* Links */}
                                    <div className="flex gap-3 pt-4 border-t border-[var(--border-color)]">
                                        <motion.a
                                            whileHover={{ scale: 1.08 }}
                                            whileTap={{ scale: 0.96 }}
                                            href={project.github}
                                            target="_blank"
                                            rel="noopener noreferrer"
                                            className="p-2 rounded-lg theme-panel theme-text hover:bg-accent hover:text-white transition-colors duration-300"
                                        >
                                            <FiGithub size={18} />
                                        </motion.a>
                                        {project.demo !== '#' && (
                                            <motion.a
                                                whileHover={{ scale: 1.08 }}
                                                whileTap={{ scale: 0.96 }}
                                                href={project.demo}
                                                target="_blank"
                                                rel="noopener noreferrer"
                                                className="p-2 rounded-lg bg-accent text-white hover:bg-accent/80 transition-colors duration-300"
                                            >
                                                <FiExternalLink size={18} />
                                            </motion.a>
                                        )}
                                    </div>
                                </div>
                            </motion.div>
                        ))}
                    </AnimatePresence>
                </motion.div>

                {filtered.length === 0 && (
                    <motion.div
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        className="text-center py-12"
                    >
                        <p className="theme-muted text-lg">
                            No projects in this category yet.
                        </p>
                    </motion.div>
                )}
            </div>
        </section>
    );
}

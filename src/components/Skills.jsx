import React from 'react';
import { motion } from 'framer-motion';

export default function Skills() {
    const skillsData = [
        { category: 'Frontend', skills: ['React', 'JavaScript', 'HTML', 'CSS'] },
        { category: 'Language', skills: ['Python', 'Java', 'C'] },
        { category: 'Tools & Platforms', skills: ['Git & GitHub', 'VS Code', 'KiCad'] },
        { category: 'Concepts', skills: ['OOP', 'Data Structures', 'APIs', 'Circuit Analysis', 'Basic Electronics'] },
    ];

    const containerVariants = {
        hidden: { opacity: 0 },
        visible: {
            opacity: 1,
            transition: { staggerChildren: 0.1 },
        },
    };

    const itemVariants = {
        hidden: { opacity: 0, scale: 0.8 },
        visible: { opacity: 1, scale: 1, transition: { duration: 0.4 } },
    };

    return (
        <section id="skills" className="theme-section min-h-screen flex items-center py-20 px-4 sm:px-6 lg:px-8">
            <div className="max-w-5xl mx-auto w-full">
                <motion.h2
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5 }}
                    className="text-3xl sm:text-4xl font-bold mb-12 theme-heading"
                >
                    My <span className="gradient-text">Skills</span>
                </motion.h2>

                <motion.div
                    variants={containerVariants}
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true }}
                    className="grid grid-cols-1 md:grid-cols-2 gap-8"
                >
                    {skillsData.map((category, idx) => (
                        <motion.div
                            key={idx}
                            variants={itemVariants}
                            className="p-6 glassmorphism rounded-xl hover:shadow-2xl transition-all"
                        >
                            <h3 className="text-xl font-semibold text-accent mb-4">{category.category}</h3>
                            <div className="flex flex-wrap gap-3">
                                {category.skills.map((skill, i) => (
                                    <motion.span
                                        key={i}
                                        whileHover={{ scale: 1.05 }}
                                        className="px-4 py-2 bg-accent/20 text-accent rounded-full text-sm font-medium hover:bg-accent/30 transition-colors cursor-default"
                                    >
                                        {skill}
                                    </motion.span>
                                ))}
                            </div>
                        </motion.div>
                    ))}
                </motion.div>
            </div>
        </section>
    );
}

import React from 'react';
import { motion } from 'framer-motion';

export default function About() {
    const containerVariants = {
        hidden: { opacity: 0 },
        visible: {
            opacity: 1,
            transition: { staggerChildren: 0.1 },
        },
    };

    const itemVariants = {
        hidden: { opacity: 0, y: 20 },
        visible: { opacity: 1, y: 0, transition: { duration: 0.5 } },
    };

    return (
        <section id="about" className="theme-section min-h-screen flex items-center py-20 px-4 sm:px-6 lg:px-8">
            <div className="max-w-4xl mx-auto w-full">
                <motion.h2
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5 }}
                    className="text-3xl sm:text-4xl font-bold mb-12 theme-heading"
                >
                    About <span className="gradient-text">Me</span>
                </motion.h2>

                <motion.div
                    variants={containerVariants}
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true }}
                    className="space-y-6 theme-text"
                >
                    <motion.p variants={itemVariants} className="text-lg leading-relaxed">
                        I'm an Electrical Engineering undergraduate with a strong passion for software development, combining core engineering fundamentals with modern programming practices. Over the past few years, I've built expertise in full-stack development and problem-solving, specializing in <span className="text-accent font-semibold">JavaScript, React, Python</span> and <span className="text-accent font-semibold">Java</span>, along with hands-on experience in <span className="text-accent font-semibold">Git & GitHub</span> and modern web technologies.
                    </motion.p>

                    <motion.p variants={itemVariants} className="text-lg leading-relaxed">I also have a solid foundation in basic electrical engineering concepts such as circuit analysis and measurements, which strengthens my analytical approach to building scalable, efficient, and user-friendly solutions.
                    </motion.p>

                    <motion.p variants={itemVariants} className="text-lg leading-relaxed">
                        When I'm not coding, you'll find me exploring new technologies, making projects, contributing to open-source projects, or solving complex algorithmic problems. I'm passionate about continuous learning and sharing knowledge with the community.
                    </motion.p>

                    <motion.div
                        variants={itemVariants}
                        className="mt-8 p-6 glassmorphism rounded-lg"
                    >
                        <h3 className="text-xl font-semibold text-accent mb-4">Core Values</h3>
                        <ul className="space-y-2 theme-muted list-disc">
                            <li> Writing clean, maintainable code</li>
                            <li> Building scalable solutions</li>
                            <li> Continuous learning and growth</li>
                            <li> Collaborative problem-solving</li>
                            <li> Applying engineering fundamentals to practical solutions</li>
                        </ul>
                    </motion.div>
                </motion.div>
            </div>
        </section>
    );
}

import React from 'react';
import { motion } from 'framer-motion';
import { FiDownload, FiGithub, FiLinkedin, FiInstagram } from 'react-icons/fi';
import resumePdf from '../assets/Resume.pdf';

export default function Footer() {
    const currentYear = new Date().getFullYear();

    const socialLinks = [
        { icon: FiGithub, url: 'https://github.com/rohitraj-afk', label: 'GitHub' },
        { icon: FiLinkedin, url: 'https://linkedin.com/in/rohit-rajsingh', label: 'LinkedIn' },
        { icon: FiInstagram, url: 'https://instagram.com/void._.rohitt/', label: 'Instagram' },
    ];

    const handleResumeDownload = () => {
        const element = document.createElement('a');
        element.href = resumePdf;
        element.download = 'Rohit_Raj_Singh_Resume.pdf';
        document.body.appendChild(element);
        element.click();
        document.body.removeChild(element);
    };

    return (
        <motion.footer
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="footer-shell theme-section border-t border-[var(--border-color)] py-12 px-4 sm:px-6 lg:px-8"
        >
            <div className="max-w-6xl mx-auto">
                <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-8">
                    {/* Brand */}
                    <motion.div whileHover={{ scale: 1.05 }} className="text-center md:text-left">
                        <h3 className="text-2xl font-bold mb-2">
                            <span className="gradient-text">Rohit</span>
                        </h3>
                        <p className="theme-muted text-sm">
                            Building amazing digital experiences
                        </p>
                    </motion.div>

                    {/* Quick Links */}
                    <motion.div className="text-center">
                        <h4 className="theme-heading font-semibold mb-4">Quick Links</h4>
                        <div className="space-y-2">
                            {['Home', 'About', 'Skills', 'Projects', 'Contact'].map((link) => (
                                <motion.button
                                    key={link}
                                    whileHover={{ x: 5, transition: { duration: 0.12, delay: 0 } }}
                                    onClick={() => {
                                        const element = document.getElementById(link.toLowerCase());
                                        element?.scrollIntoView({ behavior: 'smooth' });
                                    }}
                                    className="block theme-muted hover:text-accent transition-colors text-sm"
                                >
                                    {link}
                                </motion.button>
                            ))}
                        </div>
                    </motion.div>

                    {/* Actions */}
                    <motion.div className="text-center md:text-right">
                        <h4 className="theme-heading font-semibold mb-4">Resources</h4>
                        <motion.button
                            whileHover={{ scale: 1.05, transition: { duration: 0.12, delay: 0 } }}
                            whileTap={{ scale: 0.95 }}
                            onClick={handleResumeDownload}
                            className="footer-resource-button inline-flex items-center gap-2 px-4 py-2 rounded-xl transition-colors font-medium text-sm"
                        >
                            <FiDownload size={16} />
                            Download Resume
                        </motion.button>
                    </motion.div>
                </div>

                {/* Divider */}
                <div className="h-px bg-gradient-to-r from-transparent via-[var(--border-color)] to-transparent my-8" />

                {/* Social Links */}
                <motion.div
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    viewport={{ once: true }}
                    className="flex justify-center gap-6 mb-8"
                >
                    {socialLinks.map((social, idx) => {
                        const Icon = social.icon;
                        return (
                            <motion.a
                                key={idx}
                                whileHover={{ scale: 1.12, rotate: 3, transition: { duration: 0.12, delay: 0 } }}
                                whileTap={{ scale: 0.9 }}
                                href={social.url}
                                target="_blank"
                                rel="noopener noreferrer"
                                aria-label={social.label}
                                className="footer-social-link p-3 rounded-lg theme-panel theme-text transition-all duration-150"
                            >
                                <Icon size={20} />
                            </motion.a>
                        );
                    })}
                </motion.div>

                {/* Copyright */}
                <motion.div
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    viewport={{ once: true }}
                    className="text-center theme-muted text-sm"
                >
                    <p>© {currentYear} Rohit Raj Singh. All rights reserved.</p>
                    <p className="mt-2">
                        Crafted with{' '}
                        <span className="text-accent animate-pulse">❤️</span> using React, Tailwind CSS & Framer Motion
                    </p>
                </motion.div>
            </div>
        </motion.footer>
    );
}

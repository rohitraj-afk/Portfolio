import React, { useRef } from 'react';
import { motion } from 'framer-motion';
import emailjs from '@emailjs/browser';

export default function Contact() {
    const formRef = useRef(null);
    const [loading, setLoading] = React.useState(false);
    const [submitted, setSubmitted] = React.useState(false);
    const [submitError, setSubmitError] = React.useState('');

    const SERVICE_ID = import.meta.env.VITE_EMAILJS_SERVICE_ID;
    const TEMPLATE_ID = import.meta.env.VITE_EMAILJS_TEMPLATE_ID;
    const PUBLIC_KEY = import.meta.env.VITE_EMAILJS_PUBLIC_KEY;

    const handleSubmit = async (e) => {
        e.preventDefault();
        setSubmitError('');
        setLoading(true);

        try {
            if (!SERVICE_ID || !TEMPLATE_ID || !PUBLIC_KEY) {
                throw new Error('EmailJS environment variables are missing.');
            }

            await emailjs.sendForm(SERVICE_ID, TEMPLATE_ID, formRef.current, {
                publicKey: PUBLIC_KEY,
            });

            setSubmitted(true);
            formRef.current.reset();
            setTimeout(() => setSubmitted(false), 3000);
        } catch (error) {
            console.error('Error sending email:', error);
            setSubmitError('Unable to send message right now. Please try again later.');
        } finally {
            setLoading(false);
        }
    };

    return (
        <section id="contact" className="theme-section min-h-screen flex items-center py-20 px-4 sm:px-6 lg:px-8">
            <div className="max-w-2xl mx-auto w-full">
                <motion.h2
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5 }}
                    className="text-3xl sm:text-4xl font-bold mb-4 theme-heading text-center"
                >
                    Let's <span className="gradient-text">Connect</span>
                </motion.h2>

                <motion.p
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5, delay: 0.1 }}
                    className="text-center theme-text mb-12"
                >
                    Have a project in mind or just want to chat? Feel free to reach out!
                </motion.p>

                <motion.form
                    ref={formRef}
                    onSubmit={handleSubmit}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5, delay: 0.2 }}
                    className="space-y-6 p-8 glassmorphism rounded-xl"
                >
                    {/* Name */}
                    <div>
                        <label className="block text-sm font-medium theme-text mb-2">
                            Your Name
                        </label>
                        <input
                            type="text"
                            name="user_name"
                            required
                            className="theme-input w-full px-4 py-3 rounded-lg placeholder:text-slate-400 focus:outline-none focus:border-accent transition-colors"
                            placeholder="John Doe"
                        />
                    </div>

                    {/* Email */}
                    <div>
                        <label className="block text-sm font-medium theme-text mb-2">
                            Email Address
                        </label>
                        <input
                            type="email"
                            name="user_email"
                            required
                            className="theme-input w-full px-4 py-3 rounded-lg placeholder:text-slate-400 focus:outline-none focus:border-accent transition-colors"
                            placeholder="you@example.com"
                        />
                    </div>

                    {/* Subject */}
                    <div>
                        <label className="block text-sm font-medium theme-text mb-2">
                            Subject
                        </label>
                        <input
                            type="text"
                            name="subject"
                            required
                            className="theme-input w-full px-4 py-3 rounded-lg placeholder:text-slate-400 focus:outline-none focus:border-accent transition-colors"
                            placeholder="Tell me about your project"
                        />
                    </div>

                    {/* Message */}
                    <div>
                        <label className="block text-sm font-medium theme-text mb-2">
                            Message
                        </label>
                        <textarea
                            name="message"
                            required
                            rows="5"
                            className="theme-input w-full px-4 py-3 rounded-lg placeholder:text-slate-400 focus:outline-none focus:border-accent transition-colors resize-none"
                            placeholder="Your message here..."
                        />
                    </div>

                    {/* Submit Button */}
                    <motion.button
                        whileHover={{ scale: 1.02 }}
                        whileTap={{ scale: 0.98 }}
                        type="submit"
                        disabled={loading}
                        className="footer-resource-button w-full py-3 inline-flex items-center justify-center gap-2 rounded-xl font-medium transition-colors disabled:opacity-50 disabled:cursor-not-allowed"
                    >
                        {loading ? 'Sending...' : 'Send Message'}
                    </motion.button>

                    {/* Success Message */}
                    {submitted && (
                        <motion.div
                            initial={{ opacity: 0, y: -10 }}
                            animate={{ opacity: 1, y: 0 }}
                            exit={{ opacity: 0 }}
                            className="p-4 bg-green-500/20 border border-green-500 text-green-400 rounded-lg text-center"
                        >
                            Message sent successfully! I'll get back to you soon.
                        </motion.div>
                    )}

                    {submitError && (
                        <motion.div
                            initial={{ opacity: 0, y: -10 }}
                            animate={{ opacity: 1, y: 0 }}
                            exit={{ opacity: 0 }}
                            className="p-4 bg-red-500/20 border border-red-500 text-red-400 rounded-lg text-center"
                        >
                            {submitError}
                        </motion.div>
                    )}
                </motion.form>

                {/* Contact Info */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5, delay: 0.3 }}
                    className="mt-12 text-center theme-muted"
                >
                    <p className="mb-4">Or reach out directly:</p>
                    <div className="flex flex-col sm:flex-row gap-4 justify-center">
                        <a href="mailto:your-email@gmail.com" className="text-accent hover:text-accent/80 transition-colors">
                            Email
                        </a>
                        <span className="hidden sm:block">•</span>
                        <a href="https://github.com/rohitraj-afk" target="_blank" rel="noopener noreferrer" className="text-accent hover:text-accent/80 transition-colors">
                            GitHub
                        </a>
                        <span className="hidden sm:block">•</span>
                        <a href="https://linkedin.com/in/rohit-rajsingh" target="_blank" rel="noopener noreferrer" className="text-accent hover:text-accent/80 transition-colors">
                            LinkedIn
                        </a>
                    </div>
                </motion.div>
            </div>
        </section>
    );
}

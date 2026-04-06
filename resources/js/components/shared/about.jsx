import { motion } from 'framer-motion';

function About() {
    return (
        <section id="about" className="mx-auto max-w-6xl px-4 py-16">
            <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.3 }}
                transition={{ duration: 0.6 }}
            >
                <h2 className="mb-4 text-xl font-semibold text-zinc-200">
                    About
                </h2>
                <p className="max-w-prose text-zinc-300">
                    I specialize in React, TypeScript, and design systems. My
                    focus is building accessible, maintainable interfaces with
                    thoughtful motion.
                </p>
            </motion.div>
        </section>
    );
}

export default About;

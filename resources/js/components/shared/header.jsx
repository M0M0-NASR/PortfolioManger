import { useEffect, useState } from 'react';
import { motion } from 'framer-motion';
function Header() {
    const [isScrolled, setIsScrolled] = useState(false);

    useEffect(() => {
        const onScroll = () => {
            setIsScrolled(window.scrollY > 10);
        };
        onScroll();
        window.addEventListener('scroll', onScroll, { passive: true });
        return () => window.removeEventListener('scroll', onScroll);
    }, []);

    return (
        <motion.header
            layout
            className="sticky top-0 z-50 mt-4"
            initial={false}
            animate={{
                paddingTop: isScrolled ? 8 : 0,
                paddingBottom: isScrolled ? 8 : 0,
            }}
            transition={{ type: 'spring', stiffness: 300, damping: 30 }}
        >
            <motion.div
                layout
                className={'mx-auto max-w-6xl px-4' + (isScrolled ? '' : '')}
            >
                <motion.nav
                    layout
                    className={
                        'flex items-center justify-between rounded-2xl border border-zinc-800/80 backdrop-blur transition-all supports-[backdrop-filter]:bg-zinc-950/40 ' +
                        (isScrolled
                            ? 'bg-zinc-950/50 px-4 py-2 shadow-lg shadow-black/20'
                            : 'px-4 py-3')
                    }
                >
                    <a
                        href="#hero"
                        className="font-semibold tracking-tight text-zinc-100"
                    >
                        MN SR{' '}
                    </a>
                    <div className="hidden items-center gap-6 text-sm text-zinc-300 sm:flex">
                        <a
                            href="#projects"
                            className="transition-colors hover:text-white"
                        >
                            Projects
                        </a>
                        <a
                            href="#experience"
                            className="transition-colors hover:text-white"
                        >
                            Experience
                        </a>
                        <a
                            href="#about"
                            className="transition-colors hover:text-white"
                        >
                            About
                        </a>
                        <a
                            href="#contact"
                            className="transition-colors hover:text-white"
                        >
                            Contact
                        </a>
                    </div>
                </motion.nav>
            </motion.div>
        </motion.header>
    );
}

export default Header;

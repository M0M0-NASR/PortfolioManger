import React from 'react';
import { Link } from '@inertiajs/react';
import Header from '@/components/header';
import Footer from '@/components/footer';
import Hero from '../components/hero';
import Projects from '../components/projects';
import WorkExperience from '../components/work-experience';
import About from '../components/about';
// import Contact from '../components/contact';
export default function AppLayout({ content }) {
    return (
        <>
            <Header />

            <main>
                <Hero />
                <Projects />
                <WorkExperience />
                <About />
                {/* <Contact /> */}
            </main>

            <Footer />
        </>
    );
}

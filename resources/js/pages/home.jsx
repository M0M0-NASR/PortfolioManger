import React from 'react';
import { Link } from '@inertiajs/react';
import Header from '@/components/shared/header';
import Footer from '@/components/shared/footer';
import Hero from '../components/shared/hero';
import Projects from '../components/shared/projects';
import WorkExperience from '../components/shared/work-experience';
import About from '../components/shared/about';
import Contact from '../components/shared/contact';
import AppLayout from '@/layouts/app-layout';
export default function Home({ content }) {
    let hero_data = content.hero_section;

    return (
        <>
            <Header />
            <main>
                <Hero hero_data={hero_data} />
                <Projects />
                <WorkExperience />
                <About />
                <Contact />
            </main>

            <Footer />
        </>
    );
}

Home.layout = (page) => <AppLayout content={page} />;

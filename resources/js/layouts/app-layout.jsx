import React from 'react';
import { Link } from '@inertiajs/react';
import Header from '@/components/shared/header';
import Footer from '@/components/shared/footer';
import Hero from '../components/shared/hero';
import Projects from '../components/shared/projects';
import WorkExperience from '../components/shared/work-experience';
import About from '../components/shared/about';
import Contact from '../components/shared/contact';
export default function AppLayout({ content }) {
    return <>{content}</>;
}

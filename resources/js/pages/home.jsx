import React from 'react';
import { Link } from '@inertiajs/react';
import AppLayout from '@/layouts/app-layout';
export default function Home() {
    return (
        <div className="flex h-screen items-center justify-center">
            <h1 className="text-4xl font-bold">Welcome to the Home Page</h1>
        </div>
    );
}

Home.layout = (page) => <AppLayout content={page} />;

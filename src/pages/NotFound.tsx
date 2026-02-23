import React from 'react';
import { Link } from 'react-router-dom';
import { Home } from 'lucide-react';

export default function NotFound() {
    return (
        <main className="flex flex-col items-center justify-center text-center px-4 pt-32 pb-20 min-h-screen">
            <h1 className="text-9xl font-black text-black mb-4">404</h1>
            <h2 className="text-3xl font-bold text-gray-700 mb-4">Page Not Found</h2>
            <p className="text-xl text-gray-500 max-w-md mx-auto mb-10">
                The page you're looking for doesn't exist or has been moved.
            </p>
            <Link
                to="/"
                className="inline-flex items-center gap-3 bg-black text-white px-8 py-4 rounded-full font-bold text-lg hover:scale-105 transition-all shadow-xl"
            >
                <Home size={20} />
                Back to Home
            </Link>
        </main>
    );
}

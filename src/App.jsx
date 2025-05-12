import { useState } from 'react';

export default function App() {
    const [currentPage, setCurrentPage] = useState('home');

    const navLinks = [
        { name: 'Home', path: '/' },
        { name: 'About', path: '/about' },
        { name: 'Services', path: '/services' },
        { name: 'Contact', path: '/contact' },
    ];

    const getPageContent = () => {
        switch (currentPage) {
            case 'Home':
                return "Welcome to the Home Page!";
            case 'About':
                return "Learn more about us here.";
            case 'Services':
                return "Check out our services.";
            case 'Contact':
                return "Get in touch with us.";
            default:
                return "Page not found.";
        }
    };

    return (
        <div className="min-h-screen">
            {/* Navbar */}
            <nav className="bg-white shadow-lg">
                {/* Mobile Menu */}
                    <div className="md:hidden bg-white pb-3 px-4">
                        {navLinks.map((link) => (
                            <button
                                key={link.name}
                                href={link.path}
                                onClick={() => setCurrentPage(link.name)}
                                className="block text-gray-700 hover:text-blue-500 px-3 py-2 rounded-md text-base font-medium"
                            >
                                {link.name}
                            </button>

                        ))}
                    </div>
            </nav>

            {/* Dynamic Content */}
            <div className="p-8">
                <h1 className="text-2xl font-bold text-blue-500">
                    {getPageContent()}
                </h1>
            </div>

        </div>
    );
}

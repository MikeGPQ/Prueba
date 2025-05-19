import { useState } from 'react';

export default function App() {
    const [currentPage, setCurrentPage] = useState('Home');

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
                return "Learn more about us here";
            case 'Services':
                return "Check out our services";
            case 'Contact':
                return "Get in touch with us";
            default:
                return "Page not found";
        }
    };

    return (
        <div className="min-h-screen flex">
            {/* Navbar */}
            <nav className="w-32 bg-white">
                {/* Mobile Menu */}
                <div className="flex flex-col space-y-0.5">
                    {navLinks.map((link) => (
                        <button
                            key={link.name}
                            href={link.path}
                            onClick={() => setCurrentPage(link.name)}
                            className= "bg-white text-black rounded-none hover:bg-gray-100"
                        >
                            {link.name}
                        </button>

                    ))}
                </div>
            </nav>

            {/* Dynamic Content */}
            <div className="flex flex-col justify-center">
                <h1>
                    {getPageContent()}
                </h1>
            </div>
        </div>


    );
}

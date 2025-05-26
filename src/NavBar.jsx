import { BrowserRouter as Router, Routes, Route, Link, useLocation } from "react-router-dom";

export function Loading() {
    const location = useLocation();
    const currentPage = location.pathname.slice(1) || "Home";

    const navLinks = [
        { name: 'Home', path: '/' },
        { name: 'About', path: '/about' },
        { name: 'Services', path: '/services' },
        { name: 'Contact', path: '/contact' },
    ];

    return (
        <div className="min-h-screen flex">
            {/* Navbar */}
            <nav className="w-32 bg-white">
                {/* Mobile Menu */}
                <div className="flex flex-col space-y-0.5">
                    {navLinks.map((link) => (
                        <Link
                            key={link.name}
                            to={link.path}
                            className={`block bg-white text-black p-2 rounded-none hover:bg-gray-100 ${currentPage === link.name.toLowerCase() ? 'font-bold border-l-2 border-black' : ''
                                }`}
                        >
                            {link.name}
                        </Link>
                    ))}
                </div>
            </nav>

            {/* Dynamic Content */}
            <div className="flex-1 flex flex-col justify-center p-8">
                <Routes>
                    <Route path="/" element={<h1>Welcome to the Home Page!</h1>} />
                    <Route path="/about" element={<h1>Learn more about us here</h1>} />
                    <Route path="/services" element={<h1>Check out our services</h1>} />
                    <Route path="/contact" element={<h1>Get in touch with us</h1>} />
                </Routes>
            </div>
        </div>
    );
}
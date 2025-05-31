import { Routes, Route, Link, useLocation } from "react-router-dom";
import { Home } from './Routes/Home';
import { Login } from './Routes/Login';
import { Register } from './Routes/Register';

export function Loading() {
    const location = useLocation();
    const currentPage = location.pathname.slice(1) || "Login";

    const navLinks = [
        { name: 'Login', path: '/' },
        { name: 'Register', path: '/register' },
    ];

    return (
        <div className="min-h-screen flex">
            {/* Navbar */}
            <nav className="w-32 bg-white">
                <div className="flex flex-col space-y-0.5">
                    {navLinks.map((link) => (
                        <Link
                            key={link.name}
                            to={link.path}
                            className={`block bg-white text-black p-2 rounded-none hover:bg-gray-100 ${currentPage === link.name.toLowerCase() ? 'font-bold border-l-2 border-black' : ''}`}>
                            {link.name}
                        </Link>
                    ))}
                </div>
            </nav>

            {/* Main Content */}
            <div className="flex-1 flex flex-col justify-center p-8">
                <Routes>
                    <Route path="/" element={<Login />} />
                    <Route path="/Home" element={<Home />} />
                    <Route path="/register" element={<Register />} />
                </Routes>
            </div>
        </div>
    );
}
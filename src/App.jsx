import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { AuthProvider } from './context/authContext';
import { Loading } from './NavBar';

export default function App() {
    return (
        <AuthProvider>
            <Router>
                <Routes>
                    <Route path="/*" element={<Loading />} />
                </Routes>
            </Router>
        </AuthProvider>
    );
}

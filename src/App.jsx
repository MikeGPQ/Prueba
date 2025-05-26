import { BrowserRouter as Router, Routes, Route, Link, useLocation } from "react-router-dom";
import { Loading } from './NavBar';


export default function App() {
    return (
        <Router>
            <Loading/>
        </Router>
    );
}

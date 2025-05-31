import { useState } from "react";
import { useAuth } from "../context/authContext"
import { useNavigate } from "react-router-dom";

export function Login() {
    const [user, setUser] = useState({
        email: "",
        password: ""

    });

    const [error, setError] = useState(null);
    const { login } = useAuth()
    const navigate = useNavigate()

    const handleChange = ({ target: { name, value } }) => {
        setUser({ ...user, [name]: value })
    }

    const handleSubmit = async (e) => {
        e.preventDefault(); 
        try {
            await login(user.email, user.password);
            navigate("/Home");
        } catch (error) {
            setError(error.message);
        }
    };

    return (
        <div>
            <form onSubmit={handleSubmit}>
                <label htmlFor="email">Email</label>
                <input type="email" name="email" id="email" onChange={handleChange} />

                <label htmlFor="password"> Password </label>
                <input type="password" name="password" id="password" onChange={handleChange} />


                <button>Login</button>
            </form>
            {error && <p>{error}</p>}
        </div>
    )
}
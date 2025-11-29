import { Link } from "react-router-dom"
import { useContext } from "react";
import { AuthContext } from "../../context/authContext.jsx";
import "./login.scss"

const Login = () => {

    const { login } = useContext(AuthContext);

    const handleLogin = (e) => {
        e.preventDefault();
        login();
    };

    return (
        <div className="login">
            <div className="card">
                <div className="left">
                    <h1>Hello World.</h1>
                    <p>Welcome to my application</p>
                    <span>Don't you have an account?</span>
                    <Link to="/register">
                        <button>Register</button>
                    </Link>
                </div>
                <div className="right">
                    <h1>Login</h1>
                    <form>
                        <input type="text" placeholder="Username" />
                        <input type="password" placeholder="Password" />
                        <button onClick={handleLogin}>Login</button>
                    </form>
                </div>
            </div>
        </div>
    )
}

export default Login
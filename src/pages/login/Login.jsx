import React, { useState } from "react";
import "./login.scss";
import { Link } from "react-router-dom";



export default function Login() {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");

    const handleLogin = (e) => {
        e.preventDefault();

    };

    return (
        <div className="login">
            <div className="top">
                <div className="wrapper">
                    <img
                        className="logo"
                        src="https://upload.wikimedia.org/wikipedia/commons/thumb/0/08/Netflix_2015_logo.svg/2560px-Netflix_2015_logo.svg.png"
                        alt=""
                    />
                </div>
            </div>
            <div className="container">
                <form>
                    <h1>Sign In</h1>
                    <input
                        type="email"
                        placeholder="Email or phone number"
                        onChange={(e) => setEmail(e.target.value)}
                    />
                    <input
                        type="password"
                        placeholder="Password"
                        onChange={(e) => setPassword(e.target.value)}
                    />
                    <button className="loginButton" onClick={handleLogin}>
                        <Link to="/home" className="link">Sign In</Link>
                    </button>
                    <span>
                        New to Netflix? <Link to="/" className="link">Sign up now.</Link>
                    </span>
                    <small>
                        This page is protected by Google reCAPTCHA to ensure you're not a
                        bot. <b>Learn more</b>.
                    </small>
                </form>
            </div>
        </div>
    );
}
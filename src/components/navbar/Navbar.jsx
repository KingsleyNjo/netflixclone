import React, { useState } from 'react';
import { ArrowDropDown, Notifications, Search } from "@material-ui/icons";
import "./navbar.scss";
import { Link } from "react-router-dom";


const Navbar = () => {
    const [isScrolled, setIsScrolled] = useState(false);

    window.onscroll = () => {
        setIsScrolled(window.pageYOffset === 0 ? false : true);
        return () => (window.onscroll = null);  /* this here is a cleanup function otherwise its going to be a loop */
    };

    return (
        <div className={isScrolled ? "navbar scrolled" : "navbar"}>
            <div className="container">
                <div className="left">
                    <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/0/08/Netflix_2015_logo.svg/2560px-Netflix_2015_logo.svg.png" alt="" />
                    <Link to="/" className="link">
                        <span>Homepage</span>
                    </Link>
                    <Link to="/series" className="link">
                        <span className="navbarmainLinks">Series</span>
                    </Link>
                    <Link to="/movies" className="link">
                        <span className="navbarmainLinks">Movies</span>
                    </Link>
                    <Link to="/login" className="link">
                        <span>Login</span>
                    </Link>

                    <span>New and Popular</span>
                </div>
                <div className="right">
                    <Search className="icon" />
                    <span>KINGSLEY</span>
                    <Notifications className="icon" />
                    <img
                        src="images/person1.jpeg"
                        alt=""
                    />
                    <div className="profile">
                        <ArrowDropDown className="icon" />
                        <div className="options">
                            <span>Settings</span>
                            <span>Logout</span>
                        </div>
                    </div>

                </div>
            </div>

        </div>
    )
}

export default Navbar;
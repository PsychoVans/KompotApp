import React, { useEffect, useState } from "react";
import "./../scss/navbar.scss";


const Navbar = () => {
    return (
        <nav className="navbar">
            <div className="container">
                <div className="navbar-brand">
                    <ul>
                        <li><a href="/dashboard">Home</a></li>
                    </ul>
                </div>
            </div>
        </nav>
    );
}

export default Navbar;
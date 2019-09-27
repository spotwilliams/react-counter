import React, {Component} from "react";

// Stateless functional component
const NavBar = ({totalCounters}) => {
    return (
        <nav className="navbar navbar-light bg-light">
            <span className="navbar-brand mb-0 h1">Ecommerce</span>
            <span className="badge badge-pill badge-secondary">
                {totalCounters} items
            </span>
        </nav>
    );
};

export default NavBar;
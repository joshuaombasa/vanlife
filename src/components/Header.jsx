import React from "react";
import { NavLink } from "react-router-dom";
export default function Header() {

    const activeStyles = {
        color: "red",
        fontWeight: "bold",
        textDecoration: "underline"
    }

    return (
        <header className="header--container">
            <h1 className="logo"><NavLink to="/">#VANLIFE</NavLink></h1>
            <nav>
                <ul>
                    <li>
                        <NavLink 
                            to="host"
                            style={({isActive}) => isActive ? activeStyles : null}
                        >Host</NavLink></li>
                    <li>
                        <NavLink 
                            to="about"
                            style={({isActive}) => isActive ? activeStyles : null}

                        >About</NavLink></li>
                    <li>
                        <NavLink 
                            to="vans"
                            style={({isActive}) => isActive ? activeStyles : null}
                        >Vans</NavLink></li>
                </ul>
            </nav>
        </header>
    )
}
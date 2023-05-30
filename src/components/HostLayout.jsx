import React from "react";
import { NavLink } from "react-router-dom";
export default function HostLayout() {

    const activeStyles = {
        color: "red",
        fontWeight: "bold",
        textDecoration: "underline"
    }

    return (
        <div className="host--layout--container">
            <nav>
                <NavLink 
                    to="dashboard"
                    style={({isActive}) => isActive ? activeStyles : null}
                >Dashboard</NavLink>
                <NavLink 
                    to="income"
                    style={({isActive}) => isActive ? activeStyles : null}
                >Income</NavLink>
                <NavLink 
                    to="vans"
                    style={({isActive}) => isActive ? activeStyles : null}
                >Vans</NavLink>
                <NavLink 
                    to="reviews"
                    style={({isActive}) => isActive ? activeStyles : null}
                >Reviews</NavLink>
            </nav>
        </div>
    )
}
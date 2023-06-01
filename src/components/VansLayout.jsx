import React from "react";
import { Link } from "react-router-dom";

export default function VansLayout() {
    return (
        <div className="vans--layout--container">
            
            <h1>Explore our van options</h1>
            <nav>
                <ul>
                    <li 
                       className="vans--filter--buttons">
                        <Link 
                           to="?type=simple"
                           >Simple</Link></li>
                    <li 
                       className="vans--filter--buttons">
                        <Link 
                           to="?type=luxury"
                           >Luxury</Link></li>
                    <li 
                       className="vans--filter--buttons">
                        <Link 
                           to="?type=rugged"
                           >Rugged</Link></li>
                    <li 
                       className="clear--filters--link">
                        <Link 
                           to=""
                           >Clear filters</Link></li>
                </ul>
            </nav>
        </div>
    )
}
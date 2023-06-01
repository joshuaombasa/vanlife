import React from "react";
import { Link,useSearchParams } from "react-router-dom";

export default function VansLayout() {

    const [searchParams, setSearchParams] = useSearchParams()

    // function getNewSearchParamsString(key, value) {
    //     const sp = new URLSearchParams(searchParams)
    //     if (value === null) {
    //         sp.delete(key)
    //     } else {
    //         sp.set(key, value)
    //     }

    //     return `?${sp.toString()}`
    // }

    function handleFilterChange(key, value) {
        setSearchParams(prevParams => {
            if (value === null) {
                prevParams.delete(key)
            } else {
                prevParams.set(key, value)
            }

            return prevParams
        })
    }

    return (
        <div className="vans--layout--container">
            
            <h1>Explore our van options</h1>
            <nav>
                <ul>
                    <li 
                       className="vans--filter--buttons">
                        <button 
                           onClick={() => handleFilterChange("type", "simple")}
                           >Simple</button></li>
                    <li 
                       className="vans--filter--buttons">
                        <button 
                           onClick={() => handleFilterChange("type", "luxury")}
                           >Luxury</button></li>
                    <li 
                       className="vans--filter--buttons">
                        <button 
                           onClick={() => handleFilterChange("type", "rugged")}
                           >Rugged</button></li>
                    <li 
                       className="clear--filters--link">
                        <button 
                           onClick={() => handleFilterChange("type", null)}
                        >Clear filters</button></li>
                </ul>
            </nav>
        </div>
    )
}
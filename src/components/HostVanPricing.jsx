import React from "react";
import { Link, useOutletContext } from "react-router-dom";
export default function HostVanPricing() {

    const {selectedVan} = useOutletContext()

    return (
        <h1 
        className="host--selected--van--details--price 
        padding-for-host-van-inner-nav-items">${selectedVan.price}<span>/day</span></h1>
    )
}
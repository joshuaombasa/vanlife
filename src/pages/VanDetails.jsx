import React from "react";
import {Link, useParams, useLocation, useLoaderData } from "react-router-dom";

import { getVans } from "../api";

export function loader({params}) {
   
    return getVans(params.id)
}

export default function VanDetails() {
    
    const data = useLoaderData()

    

    const currentVan = data.vans

    const prevFilter = location.state && location.state.search || ""

    let styles

    if (currentVan) {
        if (currentVan.type === "simple") {
            styles = { backgroundColor: "#E17654" }
        } else if (currentVan.type === "rugged") {
            styles = { backgroundColor: "#115E59" }
        } else if (currentVan.type === "luxury") {
            styles = { backgroundColor: "#161616" }
        }
    }

    return (
            <>
                <Link
                    to={`..?type=simple`}
                    relative="path"
                    className="back-button"
                >&larr; <span>Back to all vans</span></Link>
                <div className="van--details--container">
                    <img src={`${currentVan.imageUrl}`} alt="" />
                    <p style={styles}>{currentVan.type}</p>
                    <h1>{currentVan.name}</h1>
                    <h2>${currentVan.price}<span>/day</span></h2>
                    <h4>{currentVan.description}</h4>
                    <p className="rent-this-van-link">Rent this van</p>
                </div>
            </>
    )
}
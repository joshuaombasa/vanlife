import React from "react";
import {Link, useParams, useLocation } from "react-router-dom";

export default function VanDetails() {
    const { id } = useParams()

    const [currentVan, setCurrentVan] = React.useState(null)

    const location = useLocation()

    

    React.useEffect(() => {
        fetch(`/api/vans/${id}`)
            .then(res => res.json())
            .then(data => setCurrentVan(data.vans))
    }, [])

    const prevFilter = location.state && location.state.search || ""

    // console.log(prevFilter)

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
        currentVan ?
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
            :
            <h1>Loading...</h1>
    )
}
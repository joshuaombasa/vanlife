import React from "react";
import { useParams } from "react-router-dom";

export default function VanDetails() {
    const { id } = useParams()

    const [currentVan, setCurrentVan] = React.useState(null)

    React.useEffect(() => {
        fetch(`/api/vans/${id}`)
            .then(res => res.json())
            .then(data => setCurrentVan(data.vans))
    }, [])

    console.log(currentVan)

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
            <div className="van--details--container">
                <img src={`${currentVan.imageUrl}`} alt="" />
                <p style={styles}>{currentVan.type}</p>
                <h1>{currentVan.name}</h1>
                <h2>${currentVan.price}<span>/day</span></h2>
                <h4>{currentVan.description}</h4>
                <p className="rent-this-van-link">Rent this van</p>
            </div>
            :
            <h1>Loading...</h1>
    )
}
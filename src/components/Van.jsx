import React from "react";
import { Link, useSearchParams } from "react-router-dom";

export default function Van({ van }) {

    const [searchParams, setSearchParams] = useSearchParams()

    let styles
    if (van.type === "simple") {
        styles = { backgroundColor: "#E17654" }
    } else if (van.type === "rugged") {
        styles = { backgroundColor: "#115E59" }
    } else if (van.type === "luxury") {
        styles = { backgroundColor: "#161616" }
    }

    return (
        <div className="van--container">
            <Link
                to={`${van.id}`}
                state={{ search: `?${searchParams.toString()}`}}
            >
                <img src={van.imageUrl} alt="" />
                <div className="van--info">
                    <h2>{van.name}</h2>
                    <h2>$ {van.price}<br /><span className="per--day--text--styling">/day</span></h2>
                </div>
                <p style={styles}>{van.type}</p>
            </Link>
        </div>
    )
}
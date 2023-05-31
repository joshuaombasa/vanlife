import React from "react";
import { Link} from "react-router-dom";

export default function HostVan({van}) {


    return (
        <Link to={`${van.id}`}>
        <div className="host--van--container">
            <img src={`${van.imageUrl}`} alt="" />
            <div className="host--van--text">
                <h2>${van.name}</h2>
                <h3>${van.price}</h3>
            </div>
        </div>
        </Link>
    )
}
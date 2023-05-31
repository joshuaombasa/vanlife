import React from "react";
import {Link, NavLink, Outlet, useParams } from "react-router-dom";
export default function HostVanDetails() {

    const { id } = useParams()

    const [selectedVan, setSelectedVan] = React.useState(null)

    React.useEffect(() => {
        fetch(`/api/host/vans/${id}`)
            .then(res => res.json())
            .then(data => setSelectedVan(data.vans[0]))
    })

    let styles

    if (selectedVan) {
        if (selectedVan.type === "simple") {
            styles = { backgroundColor: "#E17654" }
        } else if (selectedVan.type === "rugged") {
            styles = { backgroundColor: "#115E59" }
        } else if (selectedVan.type === "luxury") {
            styles = { backgroundColor: "#161616" }
        }
    }

    const activeStyles = {
        color: "red",
        fontWeight: "bold",
        textDecoration: "underline"
    }

    return (
        <>
            {selectedVan ?
                <>
                <Link
                        to=".."
                        relative="path"
                        className="back-button"
                    >&larr; <span>Back to all vans</span></Link>
                <div className="host--van--details--page">
                    <div className="selected--host--van--container">
                        <img src={selectedVan.imageUrl} alt="" />
                        <div className="selected--host--van--info">
                            <p style={styles}>{selectedVan.type}</p>
                            <h2>{selectedVan.name}</h2>
                            <h3>${selectedVan.price}<span>/day</span></h3>
                        </div>
                    </div>
                    <nav className="host--nav">
                        <NavLink
                            to="."
                            end
                            style={({ isActive }) => isActive ? activeStyles : null}
                        >Details</NavLink>
                        <NavLink
                            to="pricing"
                            style={({ isActive }) => isActive ? activeStyles : null}
                        >Pricing</NavLink>
                        <NavLink
                            to="photos"
                            style={({ isActive }) => isActive ? activeStyles : null}
                        >Photos</NavLink>
                    </nav>
                    <Outlet context={{ selectedVan: selectedVan }} />
                </div>
                </>
                :
                <h1>Loading...</h1>
            }
        </>
    )
}
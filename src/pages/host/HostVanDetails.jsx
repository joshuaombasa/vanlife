import React from "react";
import { Link, NavLink, Outlet, useParams, useLoaderData } from "react-router-dom";
import { getHostVans } from "../../api";
import { requireAuth } from "../../utils";

export async function loader({ request, params }) {
    await requireAuth(request)
    return getHostVans(params.id)
}

export default function HostVanDetails() {

    const data = useLoaderData()

    const { id } = useParams()

    const selectedVan = data.vans

    let styles


    if (selectedVan.type === "simple") {
        styles = { backgroundColor: "#E17654" }
    } else if (selectedVan.type === "rugged") {
        styles = { backgroundColor: "#115E59" }
    } else if (selectedVan.type === "luxury") {
        styles = { backgroundColor: "#161616" }
    }


    const activeStyles = {
        color: "red",
        fontWeight: "bold",
        textDecoration: "underline"
    }

    return (
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
    )
}
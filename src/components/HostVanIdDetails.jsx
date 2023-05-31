import React from "react";
import { Link, useOutletContext } from "react-router-dom";
export default function HostVanIdDetails() {

    const {selectedVan} = useOutletContext()

    console.log(selectedVan)

    return (
        <div className="host--van--id--info">
        <h3 className="host--van--id--info">Name: <span>{selectedVan.name}</span></h3>
        <h3 className="host--van--id--info">Category: <span>{selectedVan.type}</span></h3>
        <h3 className="host--van--id--info">Description: <span>{selectedVan.description}</span></h3>
        <h3 className="host--van--id--info">Visibility: <span>Public</span></h3>
        </div>
    )
}
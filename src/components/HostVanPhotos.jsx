import React from "react";
import { Link, useOutletContext } from "react-router-dom";


export default function HostVanPhotos() {

    const {selectedVan} = useOutletContext()

    return (
        <img className="host--van--id--photo  padding-for-host-van-inner-nav-items" src={selectedVan.imageUrl} alt="" />
    )
}
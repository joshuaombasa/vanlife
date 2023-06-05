import React from "react";
import { useLoaderData, useParams } from "react-router-dom";
import HostVan from "../../components/HostVan";
import { getHostVans} from "../../api";

export function loader () {
    return getHostVans()
}

export default function HostVans() {

    const data = useLoaderData()
    console.log(data.vans)

    const hostVansData = data.vans

    let hostVansList

    if (hostVansData) {
        hostVansList = hostVansData.map(item => {
            return <HostVan key={item.id} van={item}/>
        })
    }

    return (
        <>
        <h1 className="listen--vans--title">Your listed vans</h1>
        <div className="host--vans--container">
           {hostVansList}
        </div>
        </>
    )
} 
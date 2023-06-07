import React from "react";
import { useLoaderData, useParams } from "react-router-dom";
import HostVan from "../../components/HostVan";
import { getHostVans} from "../../api";
import { requireAuth } from "../../utils";

export async function loader () {
    await requireAuth()
    return getHostVans()
}

export default function HostVans() {

    const data = useLoaderData()
    
    const hostVansData = data.vans

    const hostVansList = hostVansData.map(item => {
            return <HostVan key={item.id} van={item}/>
        })
    

    return (
        <>
        <h1 className="listen--vans--title">Your listed vans</h1>
        <div className="host--vans--container">
           {hostVansList}
        </div>
        </>
    )
} 
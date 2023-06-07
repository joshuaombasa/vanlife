import React from "react";
import { Link, useSearchParams, useLoaderData } from "react-router-dom";

import VansLayout from "../components/VansLayout";
import Van from "../components/Van";

import { getVans } from "../api";


export function loader() {
    return getVans()
}


export default function Vans() {

    const data = useLoaderData()

    const vansData = data.vans

    const [searchParams, setSearchParams] = useSearchParams()

    const typeFilter = searchParams.get("type")


    let filteredVans

    if (typeFilter) {
        filteredVans = vansData.filter(item => item.type === typeFilter)
    } else {
        filteredVans = vansData
    }


    let vansList

    if (filteredVans) {
        vansList = filteredVans.map(van => {
            return <Van key={van.id} van={van} />
        })
    }


    return (
        <div className="main--vans--container">
            <VansLayout />
                <div className="vans--container">
                    {vansList}
                </div>
        </div>
    )
}
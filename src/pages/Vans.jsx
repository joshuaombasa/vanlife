import React from "react";
import { Link, useSearchParams } from "react-router-dom";

import VansLayout from "../components/VansLayout";
import Van from "../components/Van";

export default function Vans() {

    const [vansData, setVansData] = React.useState(null)

    const [searchParams, setSearchParams] = useSearchParams()

    const typeFilter = searchParams.get("type")


    let filteredVans 

    if (typeFilter) {
        filteredVans = vansData.filter(item => item.type === typeFilter)
    } else {
        filteredVans = vansData
    }

    

    React.useEffect(() => {
        fetch("/api/vans")
            .then(res => res.json())
            .then(data => setVansData(data.vans))
    }, [])


    let vansList

    if (filteredVans) {
        vansList = filteredVans.map(van => {
            return <Van key={van.id} van={van} />
        })
    }


    return (
        <div className="main--vans--container">
            <VansLayout />
            {filteredVans ?
                <div className="vans--container">
                {vansList}
            </div>
            :
            <h1>Loading...</h1>
            }
        </div>
    )
}
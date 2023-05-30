import React from "react";
import VansLayout from "../components/VansLayout";
import Van from "../components/Van";

export default function Vans() {

    const [vansData, setVansData] = React.useState(null)

    React.useEffect(() => {
        fetch("/api/vans")
            .then(res => res.json())
            .then(data => setVansData(data.vans))
    }, [])


    let vansList

    if (vansData) {
        vansList = vansData.map(van => {
            return <Van key={van.id} van={van} />
        })
    }



    return (
        <div className="main--vans--container">
            <VansLayout />
            {vansData ?
                <div className="vans--container">
                {vansList}
            </div>
            :
            <h1>Loading...</h1>
            }
        </div>
    )
}
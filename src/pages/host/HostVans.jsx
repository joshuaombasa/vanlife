import React from "react";
import HostVan from "../../components/HostVan";

export default function HostVans() {

    const [hostVansData, setHostVansData] =  React.useState(null)

    React.useEffect(() => {
        fetch("/api/host/vans")
          .then(res => res.json())
          .then(data => setHostVansData(data.vans))
    },[])

 

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
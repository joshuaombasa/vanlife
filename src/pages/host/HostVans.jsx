import React from "react";
import { useLoaderData, useParams, defer, Await } from "react-router-dom";
import HostVan from "../../components/HostVan";
import { getHostVans } from "../../api";
import { requireAuth } from "../../utils";

export async function loader({ request }) {
    await requireAuth(request)
    return defer({ vans: getHostVans() })
}

export default function HostVans() {

    const data = useLoaderData()

    return (
        <>
            <h1 className="listen--vans--title">Your listed vans</h1>
            <React.Suspense fallback={<h1>Loading...</h1>}>
            <Await resolve={data.vans}>
                {(hostVans) => {
                    
                    const hostVansData = hostVans.vans
                    const hostVansList = hostVansData.map(item => {
                        return <HostVan key={item.id} van={item} />
                    })

                    return (
                        <div className="host--vans--container">
                            {hostVansList}
                        </div>
                    )
                }}

            </Await>
            </React.Suspense>
        </>
    )
} 
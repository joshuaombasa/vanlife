import React from "react";
import { Link, useSearchParams, useLoaderData, defer, Await } from "react-router-dom";

import VansLayout from "../components/VansLayout";
import Van from "../components/Van";

import { getVans } from "../api";


export function loader() {
    return defer({ vans: getVans() })
}


export default function Vans() {

    const data = useLoaderData()


    const [searchParams, setSearchParams] = useSearchParams()

    const typeFilter = searchParams.get("type")





    return (
        <div className="main--vans--container">
            <React.Suspense fallback={<h1>Loading...</h1>}>
                <Await resolve={data.vans}>
                    {(vansInfo) => {

                        const vansData = vansInfo.vans

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
                            <>
                                <VansLayout />
                                <div className="vans--container">
                                    {vansList}
                                </div>
                            </>
                        )
                    }}

                </Await>
            </React.Suspense>
        </div>
    )
}
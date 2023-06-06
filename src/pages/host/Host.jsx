import React from "react";
import { Outlet, redirect } from "react-router-dom";
import HostLayout from "../../components/HostLayout";
import { requireAuth } from "../../utils";

export function loader() {
    const isLoggedIn = false

    if (!isLoggedIn) {
        return redirect("/login")
    }
}

export default function Host() {

    
    return (
        <div className="host--container">
            <HostLayout/>
            <div className="host--content">
                <Outlet/>
            </div>
        </div>
    )
}
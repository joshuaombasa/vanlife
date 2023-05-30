import React from "react";
import { Outlet } from "react-router-dom";
import HostLayout from "../../components/HostLayout";

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
import React from "react";
import { Outlet } from "react-router-dom";

import Header from "./Header";
import Footer from "./Footer";

export default function MainLayout() {

    return (
        <section className="main--layout">
            <Header/>
            <Outlet/>
            <Footer/>
        </section>
    )

}
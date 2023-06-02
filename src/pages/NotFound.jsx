import React from "react";
import { Link } from "react-router-dom";
export default function NotFound() {
    return (
        <div className="not--found--page--container">
           <h1 className="not--found--error--title">Sorry, the page you were looking for was not found.</h1>
           <Link className="return--home--from--not--found--page">Return to home</Link>
        </div>
    )
}
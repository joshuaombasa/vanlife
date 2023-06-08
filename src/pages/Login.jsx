import React from "react";
import { 
          useLoaderData, 
          useNavigate, 
          Form, 
          redirect, 
          useActionData, 
          useNavigation 
        } from "react-router-dom";

import { loginUser } from "../api";

export function loader({ request }) {
    return new URL(request.url).searchParams.get("message")
}

export async function action({ request }) {
    try {
        const formData = await request.formData()
        const email = formData.get("email")
        const password = formData.get("password")
        const data = await loginUser({ email, password })
        localStorage.setItem("loggedin", true)
        const userPrevPathname = new URL(request.url).searchParams.get("prevPath") || "/host"
        console.log(userPrevPathname)
        location.replace(userPrevPathname);
        return null
    } catch(error) {
        return error
    }
}

export default function Login() {

    const navigation = useNavigation()

    const error = useActionData()

    const message = useLoaderData()

    return (
        <div className="login--container">
            <h1 className="login--title">Sign in to your account</h1>
            {message && <pre className="login--error--message">{message}</pre>}
            {error && <pre className="login--error--message">{error.message}</pre>}
            <Form method="post" className="login--form">
                <div className="signup--inputs--container">
                    <input
                        className="Email--input--login"
                        type="email"
                        placeholder="Email adress"
                        name="email"
                    />
                    <input
                        className="Password--input--login"
                        type="text"
                        placeholder="Password"
                        name="password"
                    />
                </div>
                <button
                    disabled={navigation.state === "submitting" ? true : false}
                >
                    {navigation.state === "submitting" ? "Logging in ..." : "Log in"}
                </button>
            </Form>
        </div>
    )
}
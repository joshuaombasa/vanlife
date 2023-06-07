import React from "react";
import { useLoaderData, useNavigate, Form, redirect } from "react-router-dom";
import { loginUser } from "../api";

export function loader({ request }) {
    return new URL(request.url).searchParams.get("message")
}

export async function action({request}) {
    const formData = await request.formData()
    const email = formData.get("email")
    const password = formData.get("password")
    const data = await loginUser({email, password})
    localStorage.setItem("loggedin", true)
    
    console.log(data)
    location.replace('/host');
    // redirect("/host")
    return  null
}

export default function Login() {

    const message = useLoaderData()

    const [formData, setFormData] = React.useState({
        email: "",
        password: ""
    })

    const [status, setStatus] = React.useState("idle")

    const [error, setError] = React.useState(null)

    

    const navigate = useNavigate()

    function handleSubmit(event) {
        event.preventDefault()
        setStatus("submitting")
        loginUser(formData).
            then(data => {
                navigate("/host")
            }).
            catch(error => {
                setError(error)
                console.log("There was an error")
            }) 
            .finally(setStatus("idle"))
        setError(null)
    }
    
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
                  disabled={status === "submitting" ? true : false}
                >
                   {status === "submitting" ? "Logging in ..." : "Log in"}
                </button>
            </Form>
        </div>
    )
}
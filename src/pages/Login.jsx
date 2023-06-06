import React from "react";
import { useLoaderData } from "react-router-dom";

export function loader({ request }) {
    return new URL(request.url).searchParams.get("message")
}

export default function Login() {

    const message = useLoaderData()

    console.log(message)

    const [formData, setFormData] = React.useState({
        email: "",
        password: ""
    })

    function handleChange(event) {
        const {name, value} = event.target
        setFormData(prevFormData => (
            {
                ...prevFormData,
                [name] : value
            }
        ))
    }

    function handleSubmit(event) {
        event.preventDefault()
    }

 
    
    return (
        <div className="login--container">
            <h1 className="login--title">Sign in to your account</h1>
            {message && <pre className="login--error--message">{message}</pre>}
            <form onSubmit={handleSubmit} className="login--form">
                <div className="signup--inputs--container">
                    <input 
                         className="Email--input--login" 
                         type="text" 
                         placeholder="Email adress"
                         name="email"
                         value={formData.firstName} 
                         onChange={handleChange}
                    />
                    <input 
                         className="Password--input--login" 
                         type="text" 
                         placeholder="Password" 
                         name="password"
                         value={formData.lastName}
                         onChange={handleChange}
                    />
                </div>
                <button>Sign in</button>
            </form>
        </div>
    )
}
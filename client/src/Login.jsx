import React from "react";
import { useState } from "react";
import { Link } from 'react-router-dom';
import API from "./api";
import { useNavigate } from "react-router-dom"

function Login() {
    const [email, setEmail] = useState()
    const [password, setPassword] = useState()
    const [error, setError] = useState("")
    const navigate = useNavigate()

    const handleSubmit = (e) => {
        e.preventDefault();

        // Sending login request to backend
        API.post('/login', { email, password })
            .then(result => {
                console.log(result)
                if (result.data === "Success") {
                    setError("")
                    navigate('/home')
                } else {
                    setError("Incorrect login or password");
                }


            })
            .catch(err => {
                console.log(err);
                setError("Server error");
            });


    }


    return (
        <div className="d-flex justify-content-center align-items-center bg-secondary vh-100">
            <div className="bg-white p-3 rounded w-25" style={{ minWidth: "350px" }}>
                <h2>Login</h2>
                <form onSubmit={handleSubmit}>

                    <div className="mb-3">
                        <label htmlFor="email">
                            <strong>Email</strong>
                        </label>
                        <input
                            type="email"
                            id="email"
                            placeholder="Enter Email"
                            autoComplete="off"
                            name="email"
                            className="form-control rounded-0"
                            onChange={(e) => setEmail(e.target.value)}
                        />
                    </div>

                    <div className="mb-3">
                        <label htmlFor="password">
                            <strong>Password</strong>
                        </label>
                        <input
                            type="password"
                            id="password"
                            placeholder="Enter Password"
                            autoComplete="off"
                            name="password"
                            className="form-control rounded-0"

                            onChange={(e) => setPassword(e.target.value)}
                        />
                    </div>
                    <button type="submit" className="btn btn-success w-100 rounded-0">
                        Login
                    </button >
                    {error && <div className="text-danger mt-2">{error}</div>}
                </form><br></br>
                <p className="small text-center">Don’t have an account?</p>
                <Link to="/" className="btn btn-default border w-100 bg-light rounded-0 text-decoration-none">Sign Up
                </Link>

            </div>
        </div>
    );
}

export default Login;
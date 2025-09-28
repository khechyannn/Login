import { useState } from "react";
import { Link } from 'react-router-dom';
import { useNavigate } from "react-router-dom"
import API from "./api";

function Signup() {
    const [name, setName] = useState()
    const [email, setEmail] = useState()
    const [password, setPassword] = useState()
    const navigate = useNavigate()
    const [error, setError] = useState("");


    const handleSubmit = (e) => {
        e.preventDefault();

        // Sending register request to backend
        API.post('/', { name, email, password })
            .then(result => {
                if (result.data.error) {
                    console.log(result.data.error);
                    setError(result.data.error);
                } else {
                    setError("");
                    navigate('/login');
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
                <h2>Register</h2>
                <form onSubmit={handleSubmit}>
                    <div className="mb-3">
                        <label htmlFor="name">
                            <strong>Name</strong>
                        </label>
                        <input
                            type="text"
                            id="name"
                            placeholder="Enter Name"
                            autoComplete="off"
                            name="name"
                            className="form-control rounded-0"
                            onChange={(e) => { setName(e.target.value); setError(""); }}
                        />
                    </div>

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
                            onChange={(e) => { setEmail(e.target.value); setError(""); }}
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

                            onChange={(e) => { setPassword(e.target.value); setError(""); }}
                        />
                    </div>
                    <button type="submit" className="btn btn-success w-100 rounded-0">
                        Register
                    </button >
                    {error && <div className="text-danger mt-2">{error}</div>}
                </form>
                <br></br>
                <p className="small text-center">Already have an account?</p>
                <Link to="/login" className="btn btn-default border w-100 bg-light rounded-0 text-decoration-none">Login
                </Link>

            </div>
        </div>
    );
}

export default Signup;
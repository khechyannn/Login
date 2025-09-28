import React from 'react'
import { Link } from "react-router-dom";

function Home() {
  return (
    <div className="d-flex flex-column justify-content-center align-items-center vh-100">
      <h2 className="mb-3">Successful</h2>
      <Link to="/login" className="btn btn-primary">
        Log out
      </Link>
    </div>
  );
}

export default Home;

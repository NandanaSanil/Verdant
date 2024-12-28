import React from 'react'
import { Link } from "react-router-dom";

function Homepage() {
  return (
    <div>
      <h1>Welcome to Our Store</h1>
      <Link to="/payment">Go to Payment</Link>
    </div>
  );
}


export default Homepage


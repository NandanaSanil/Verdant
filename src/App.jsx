import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './Pages/Home';
import About from './Pages/About';
import Product from './Pages/Product';
import Gallery from './Pages/Gallery';
import News from './Pages/News';
import Contact from './Pages/Contact';
import { Link } from 'react-router-dom';
import './Pages/Home.css';
import verdant from './img/verdant.png'


function App() {
  return (
    <Router>
      <div className='bg'>
        <nav>
          <div className='mg'>
            <img src={verdant} alt="Logo" />
          </div>
          <ul>
            <li><Link to='/' className='nav-link'>Home</Link></li>
            <li><Link to='/about' className='nav-link'>About</Link></li>
            <li><Link to='/product' className='nav-link'>Products</Link></li>
            <li><Link to='/gallery' className='nav-link'>Gallery</Link></li>
            <li><Link to='/news' className='nav-link'>News</Link></li>
            <li><Link to='/contact' className='nav-link'>Contact</Link></li>
          </ul>
        </nav>
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/about' element={<About />} />
          <Route path='/product' element={<Product />} />
          <Route path='/gallery' element={<Gallery />} />
          <Route path='/news' element={<News />} />
          <Route path='/contact' element={<Contact />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;


// import React from "react";
// import { Elements } from "@stripe/react-stripe-js";
// import { loadStripe } from "@stripe/stripe-js";
// import PaymentPage from "./PaymentPage"; // Payment page component

// const stripePromise = loadStripe("YOUR_PUBLISHABLE_KEY");

// function App() {
//   return (
//     <Elements stripe={stripePromise}>
//       <PaymentPage />
//     </Elements>
//   );
// }

// export default App;

import React from 'react'
import { useNavigate } from 'react-router-dom';
//import './Home.css'
//import banner from '../img/banner.png'
// import background from '../img/background.png'

const Home = () => {
    const navigate = useNavigate();
    const handleLearnMoreClick = () => {
        console.log("button clicked");
        navigate('/about');
    };

    return (
        <div>
            <h5 id='id5'>Serving IT-Solutions</h5>
            <h1>Crafting the Future of Technology</h1>
            <div id='idd'>
                <h5>Smart, user-friendly, and tailored solutions crafted to match your standards and fulfill your unique requirements</h5>
            </div>
            <button id='bt' onClick={handleLearnMoreClick}>Learn more</button>
            {/* <div>
                <img src={banner} alt='logo' style={{ maxWidth: '100%', height: 'auto', display: 'block', margin: '20px auto' }}
                />
            </div> */}
            {/* <div>
                <img src={background} alt='lo' />
            </div> */}
        </div>
    )
}

export default Home

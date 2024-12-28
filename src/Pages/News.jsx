import React from 'react'
import { useNavigate } from 'react-router-dom';
import './New.css'

const News = () => {
    const navigate = useNavigate();
    const handleLearnMoreClick = () => {
        navigate('/contact');
    };
    return (
        <div className='hiv'>

            <h1 id='ns'>News</h1>
            <div id='dnp'>
                <p id='np'><b>AI-Powered Predictive Maintenance Solution for Manufacturing Giant</b>: Announce the successful deployment of an AI-powered predictive maintenance solution for a leading manufacturing company. Highlight how the solution has significantly reduced downtime and improved operational efficiency.
                    Innovative Web Application for E-commerce Startup: Showcase a recently developed web application for a promising e-commerce startup. Emphasize the user-friendly design, seamless integration with payment gateways, and robust security features.
                </p>
            </div>
            <button id='bt1' onClick={handleLearnMoreClick}>&gt;&gt;</button>
        </div>
    )
}

export default News

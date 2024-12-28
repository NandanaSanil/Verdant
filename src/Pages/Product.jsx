import React from 'react'
import { useNavigate } from 'react-router-dom';
import './Product.css'

const Product = () => {
    const navigate = useNavigate();
    const handleLearnMoreClick = () => {
        navigate('/gallery');
    };

    return (
        <div id='section'>
            <div className='div1'>
                <img src='https://verdantitsolutions.com/images/icons/app.png' alt='lgo' id='divmg' />
                <h5 id='hi5'>App Development</h5>
                <p id='hi6'>Enhance your product visiblity , productivity and market liverage by an application which is developed by us.This will definitly bring a quantum jump in the acceptability of the product by enhancing it's visibility.</p>
            </div>
            <div className='div1'>
                <img src='https://verdantitsolutions.com/images/icons/uiux.png' id='divmg' />
                <h5 id='hi5'>UI/UX design</h5>
                <p id='hi6'>Creating exceptionally eye catching designs to visually promote a product in the most acceptable way thereby giving excellent solutions to your requirement.</p>
            </div>
            <div className='div1'>
                <img src='https://verdantitsolutions.com/images/icons/product.png' id='divmg' />
                <h5 id='hi5'> Product Branding</h5>
                <p id='hi6'>Branding is the process of enhancing acceptence of any product.This does not come automatically . It is generated and created by continous effort.We at Verdant assure our customers in add you visually promoting and branding your product globally.</p>
            </div>
            <div className='div1'>
                <img src='https://verdantitsolutions.com/images/icons/iot.png' id='divmg' />
                <h5 id='hi5'>Embedded and IOT Product Development</h5>
                <p id='hi6'>Connectivity, miniaturization and micro miniaturization is the demand of the day.World is moving at breakneck speed in providing connected solutions through cloud.Conceptualize your ideas and product through our highly professionalised team of engineers.</p>
            </div>
            <button id='bt1' onClick={handleLearnMoreClick}>&gt;&gt;</button>

        </div>
    )
}

export default Product

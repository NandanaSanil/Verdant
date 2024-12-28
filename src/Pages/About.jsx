import React from 'react'
import { useNavigate } from 'react-router-dom';
import './About.css'

const About = () => {
    const navigate = useNavigate();
    const handleLearnMoreClick = () => {
        console.log("button clicked");
        navigate('/product');
    };
    return (

        <div className='vm'>
            <div className='img'>

            </div>

            <section>
                <h1 id='h1'>About</h1>
                <h5 className='h5'><br></br>Vision</h5>
                <h6 className='h61'><br></br>Our goal is to rank among the top ten organizations delivering integrated, customized solutions to global clients through professional excellence and continuous technological advancement.</h6>
            </section>
            <div className='umg'>

            </div>
            <section className='sect'>
                <h5 className='h5'><br></br><br></br>Mission</h5>
                <h6 className='h6'><br></br>We strive to ethically enhance quality, productivity, and standards to meet customer demands and achieve our goals swiftly.<br></br><br></br><button id='bti' onClick={handleLearnMoreClick}><b>&gt;&gt;</b></button></h6>



            </section>


        </div >
    )
}

export default About

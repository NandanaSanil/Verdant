import React from 'react';
import { useNavigate } from 'react-router-dom';
import './Contact.css'

const Contact = () => {
    const navigate = useNavigate();
    const handleLearnMoreClick = () => {
        navigate('/');
    };
    return (
        <div>
            <h2 className='h2'>Contact</h2>
            <div>
                <div>
                    <iframe
                        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3928.728355733576!2d76.30988681447246!3d10.039260175112357!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3b080dcb61b5671b%3A0xc2af10cf185a554d!2sVerdant%20IT%20Solutions!5e0!3m2!1sen!2sin!4v1654599054726!5m2!1sen!2sin"
                        width="746"
                        height="410"
                        style={{ border: 0, marginLeft: "4px", marginTop: "10px" }}
                        allowFullScreen=""
                        loading="lazy"
                        referrerPolicy="no-referrer-when-downgrade"
                        title="Google Maps"

                    ></iframe>
                </div>
                <div className='cnt'>
                    <div id='contact'>
                        <p>Address</p>
                        <h4>37/422 A2-A3,PR Tower,Museum Nagar,Edapally North P.O, Pathadipalam,Pin:682024</h4>
                        <p>Phone</p>
                        <h4>+91 8850 830 259</h4>
                        <h4>0484 3503511</h4>
                        <h4>0484 3503510</h4>
                        <p>Email</p>
                        <h4><a href="mailto:info@verdantitsolutions.com">info@verdantitsolutions.com</a></h4>
                    </div>

                </div>
                <button id='btt' onClick={handleLearnMoreClick}>Home</button>
            </div>
        </div>
    );
};

export default Contact;

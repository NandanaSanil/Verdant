import React from 'react'
import { useNavigate } from 'react-router-dom';
import './Gallery.css'

const Gallery = () => {
    const navigate = useNavigate();
    const handleLearnMoreClick = () => {
        navigate('/news');
    };
    return (
        <div>
            <img src='https://cdn.pixabay.com/photo/2023/08/29/13/30/circuit-board-8221377_1280.png' className='gi'></img>
            <img src='https://images.pexels.com/photos/3912373/pexels-photo-3912373.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1 ' className='gi' />
            <img src='https://images.pexels.com/photos/39290/mother-board-electronics-computer-board-39290.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1' className='gi' />
            <img src='https://images.stockcake.com/public/3/e/8/3e83452c-6b60-479a-9161-56d0ddecf7a7_large/electronic-circuit-closeup-stockcake.jpg' className='gi' />

            <img src=' https://images.pexels.com/photos/3672355/pexels-photo-3672355.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1' className='gi' />
            {/* <img src='https://images.pexels.com/photos/29459444/pexels-photo-29459444/free-photo-of-colorful-code-on-computer-screen-for-web-development.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1' className='gi' /> */}
            <img src='https://images.pexels.com/photos/10556474/pexels-photo-10556474.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1' alt='go' className='gi' />
            <img src='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT0w28eYGjM68GOti-HrswtM892hV52lLtqlg&s' className='gi' />
            <img src='https://img.freepik.com/free-photo/3d-robot-hand-background-ai-technology-side-view_53876-129789.jpg?semt=ais_hybrid' className='gi' />
            <button id='bti' onClick={handleLearnMoreClick}>&gt;&gt;</button>
        </div>
    )
}

export default Gallery

import '../App.css';
import { useSpring, animated } from 'react-spring';
import Resumejpg from '../assets/RSME.jpg'
import { useState } from 'react';



function Resume() {
    const [isImageEnlarged, setIsImageEnlarged] = useState(false);
    const handleImageClick = () => {
        setIsImageEnlarged(!isImageEnlarged);
    }

    const yAnimation = useSpring({ to: { opacity: 1, x: 0 }, from: { opacity: 0, x: 50 }});
    return (
        <animated.div style={yAnimation}>
            <section className="resume">
                <h1>Resume</h1>
                <div className="resume-container">
                    <div className="resume-section">
                        <h3>Front End</h3>
                        <ul>
                            <li>HTML</li>
                            <li>CSS</li>
                            <li>JavaScript</li>
                            <li>jQuery</li>
                            <li>React</li>
                            <li>Bootstrap</li>
                        </ul>
                    </div>
                    <div className="resume-section">
                        <h3>Back End</h3>
                        <ul>
                            <li>Node</li>
                            <li>Express</li>
                            <li>MySQL, NoSQL, Sequelize</li>
                            <li>MongoDB, Mongoose</li>
                            <li>REST</li>
                            <li>GraphQL</li>
                        </ul>
                    </div>
                    <div className="resume-section">
                        <h3>Other</h3>
                        <ul>
                            <li>Git</li>
                            <li>GitHub</li>
                            <li>Heroku</li>
                            <li>Netlify</li>
                            <li>Webpack</li>
                        </ul>
                    </div>
                </div>
            </section>
            <img src={Resumejpg} alt="Resume" className='resumejpg' onClick={handleImageClick}></img>
        </animated.div>
        
    )
}

export default Resume;



// import React from 'react';
import { useSpring, animated } from 'react-spring';
// import { Link } from 'react-router-dom';

function Portfolio() {
    const yAnimation = useSpring({ to: { opacity: 1, x: 0 }, from: { opacity: 0, x: 50 }})
    return (
        <animated.div style={yAnimation}>
            <section className="portfolio">
                <h1>Portfolio</h1>
                <div className="projects">
                    <div className="project">
                        <h3>Project 1</h3>
                        {/* <a href=" */}
                    </div>
                    <div className="project">
                        <h3>Project 2</h3>
                    </div>
                    <div className="project">
                        <h3>Project 3</h3>
                    </div>
                    <div className="project">
                        <h3>Project 4</h3>
                    </div>
                </div>
            </section>
        </animated.div>
    )
}

export default Portfolio;

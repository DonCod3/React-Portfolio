// import React from 'react';
import { useSpring, animated } from 'react-spring';
// import { Link } from 'react-router-dom';
import demoGif from '../assets/demo.gif';
import ecomclip from '../assets/ecommerce.jpg';
import ee from '../assets/eeTrack.jpg';
import read from '../assets/Readme.jpg';
import pass from '../assets/pass.jpg';

const project = [
    {
        name: 'eCommerce Backend',
        description: 'This is a backend application for an ecommerce site. This application uses Express.js API and Sequelize to interact with a MySQL database. This application displays creation of database using mySQL with models and associations. This application also displays API routes to perform RESTful CRUD operations displayed in my walk through video.',
        image: ecomclip ,
        github: 'https://github.com/DonCod3/eCommerce to an external site.',
        link: "https://drive.google.com/file/d/1Dzs7nb2q8J1ZsMZ6hc8Q14D_4u2XjLiU/view"
    },
    {
        name: 'Employee Tracker',
        description: 'The Employee Tracker is a business management system that helps business owners to view and manipulate orgianizational data for their business. Theis is a command line application that utilizes Node.js, Inquirer, and MySQL.',
        image: ee,
        github: 'https://github.com/DonCod3/eeTracker to an external site.',
        link: 'https://github.com/DonCod3/eeTracker'
    },
    {
        name: 'Daily Planner',
        description: 'A simple calendar application that allows a user to save events for each hour of a typical working day (9am - 5pm)',
        image:  demoGif,
        github: 'https://github.com/DonCod3/Daily-Planner',
        link: 'https://github.com/DonCod3/Daily-Planner'
    },
    {
        name: 'README Generator',
        description: 'This project is meant to assist in quickly and easily creating a README file by using a command-line application to generate one. This allows the project creator to devote more time to working on the project.',
        image: read,
        github: 'https://github.com/DonCod3/README-Generator',
        link: 'https://github.com/DonCod3/README-Generator'
    },
    {
        name: 'Passowrd Generator',
        description: 'randomly generate a password that meets certain criteria so that I can create a strong password that provides greater security',
        image: pass,
        github: 'https://github.com/DonCod3/Password-Generator-',
        link: 'https://github.com/DonCod3/Password-Generator-'
    }
]

function Portfolio() {
    const yAnimation = useSpring({ to: { opacity: 1, x: 0 }, from: { opacity: 0, x: 50 } })
    return (
        <animated.div style={yAnimation}>
            <section className="portfolio">
                <h1>Portfolio</h1>
                <div className="projects">
                    {project.map((project) => (
                        <div className="project" key={project.id}>
                            <div className="project-info">
                                <img src={project.image} alt={project.name} className='project-image' />
                                <h3>{project.name}</h3>
                            </div>
                            <div className="project-description">
                                <p>{project.description}</p>
                                <a href={project.link}>Check out the link to my project here !</a>
                            </div>
                        </div>
                    ))}
                </div>
            </section>
        </animated.div>
    )

    
}


export default Portfolio;

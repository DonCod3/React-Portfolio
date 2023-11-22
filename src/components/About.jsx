import profilepic from '../assets/IMG_0011.jpeg'; 

function About() {
    return (
        <div className="about">
            <h3>About</h3>
            <img src={profilepic} alt="shamar profile picture" className='profile-pic'></img>
            <div className="about-text">
                <h1>Hi, My name is Shamar Melvin!</h1>
                <p>
                    A full stack web developer with a passion for technology. My background includes environmental economics and customer service. A lifelong learner and problem solver, I am a team player and am always looking for ways to hone my skills as a developer. I am a graduate of the University of Central Florida Coding Bootcamp. I am proficient in JavaScript, Node.js, Express.js, MySQL, MongoDB, and React.js. I am currently looking for a position as a software developer.
                </p>
            </div>
        </div>
    );
}

export default About;
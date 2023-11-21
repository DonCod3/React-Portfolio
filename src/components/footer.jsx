// import React from 'react';
import { useSpring, animated } from 'react-spring';

function Footer() {
    const yAnimation = useSpring({ to: { opacity: 1, x: 0 }, from: { opacity: 0, x: 50 }})
    return (
        <animated.footer style={yAnimation}>
            <ul className="footer">
                <li><a href="mailto:shmvrt@gmail.com">Email</a></li>
                <li><a href="https://github.com/DonCod3">Github</a></li>
                <li><a href="https://www.linkedin.com/in/shamar-melvin-b25001180/">Linkedin</a></li>
            </ul>
        </animated.footer>
    )
}


export default Footer;
import React from 'react';
// import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
// import Nav from './components/Nav';
// import Portfolio from './components/Portfolio';
// import Resume from './components/Resume';
// import ContactForm from './components/Contact';
// import Footer from './components/Footer';

// function App() {
//     return (
//         <Router>
//         <div>
//             <Nav></Nav>
//             <Switch>
//             <Route exact path="/" component={About} />
//             <Route exact path="/portfolio" component={Portfolio} />
//             <Route exact path="/resume" component={Resume} />
//             <Route exact path="/contact" component={ContactForm} />
//             </Switch>
//             <Footer></Footer>
//         </div>
//         </Router>
//     );
// }

function About() {
    return (
        <div className="about">
            <h1>About</h1>
            {/* Import picture */}
            {/* <img src={require("../../assets/images/profile-pic.jpg").default} alt="profile" /> */}
            <h2>Hi! My name is Shamar Melvin!</h2>
            <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer nec odio. Praesent libero.
                Sed cursus ante dapibus diam. Sed nisi. Nulla quis sem at nibh elementum imperdiet. Duis
                sagittis ipsum. Praesent mauris. Fusce nec tellus sed augue semper porta. Mauris massa.
                Vestibulum lacinia arcu eget nulla.
            </p>
        </div>
    );
}

export default About;
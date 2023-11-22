import './App.css';
import { Route, Switch } from 'react-router-dom';
import Nav from './components/Nav';
import About from './components/About';
import Portfolio from './components/Portfolio';
import Resume from './components/Resume';
import ContactForm from './components/ContactForm';
import Footer from './components/footer';

function App () {
  return (
    <div>
      <Nav></Nav>

      <Switch>
        <Route exact path="/" component={About} />
        <Route path="/about" component={About} />
        <Route path="/portfolio" component={Portfolio} />
        <Route path="/resume" component={Resume} />
        <Route path="/contact" component={ContactForm} />
      </Switch>

      <Footer></Footer>
    </div>
  );
}

export default App;



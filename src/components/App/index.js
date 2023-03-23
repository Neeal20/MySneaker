import Footer from './Footer/Footer';
import Home from './Home/Home';
import Navigation from './Navigation/Navigation';
import './styles.css';

// == Composant
const App = () => (
  <div className="app">
    <Navigation />
    <Home />
    <Footer />
  </div>
);

// == Export
export default App;

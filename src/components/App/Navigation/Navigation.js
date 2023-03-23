import './Navigation.scss';
import { RiShoppingBagLine } from 'react-icons/ri';

const Navigation = () => (
  <nav className="navigation">
    <div className="navigation-left">
      <h1 className="navigation-logo">MySneaker</h1>
    </div>
    <div className="navigation-middle">
      <span className="navigation-link">Women</span>
      <span className="navigation-link">Men</span>
      <span className="navigation-link">New Collection</span>
      <span className="navigation-link">Trends</span>
    </div>
    <div className="navigation-right">
      <RiShoppingBagLine className="navigation-bag" />
      <button type="button" className="navigation-button">Login</button>
    </div>
  </nav>
);

export default Navigation;

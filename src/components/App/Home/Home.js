import './Home.scss';
import Seller1 from '../../../assets/seller1.png';

const Home = () => (
  <div className="home">
    <div className="hero">
      <div className="hero-left">
        <div className="hero-subleft">
          <h1 className="hero-title">Find The Best<br />
            Fashion Style<br />
            For You
          </h1>
          <p className="hero-description">
            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Sint repudiandae corporis vero neque, culpa et architecto ipsam vitae iure amet rem pariatur! Laudantium culpa magnam porro iure corporis dolores molestias?
          </p><br />
          <button type="button" className="hero-button">
            Shop Now
          </button>
        </div>
      </div>
      <div className="hero-right" />
    </div>

    <div className="product-examples">
      <div className="product-examples-item">
        <div className="product-examples-subitem">
          <button type="button" className="product-examples-item-title">New Balance</button>
        </div>
      </div>
      <div className="product-examples-item">
        <div className="product-examples-subitem">
          <button type="button" className="product-examples-item-title">New Balance</button>
        </div>
      </div>
      <div className="product-examples-item">
        <div className="product-examples-subitem">
          <button type="button" className="product-examples-item-title">New Balance</button>
        </div>
      </div>
    </div>

    <div className="landing-description">
      <div className="landing-description-container">
        <div className="landing-description-left">
          <img src="" alt="" />
        </div>
        <div className="landing-description-right">
          <h1 className="landing-description-title">Best Fashion Since 2017</h1>
          <p className="landing-description-text">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed ullamcorper Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed ullamcorper.Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed ullamcorper Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed ullamcorper
          </p>
        </div>
      </div>
      <div className="landing-description-bottom">
        <div className="landing-description-bottom-container">
          <span className="landing-description-stats">2017</span>
          <p className="landing-description-stats-category">BestSeo Founded</p>
        </div>
        <div className="landing-description-bottom-container">
          <span className="landing-description-stats">10 000+</span>
          <p className="landing-description-stats-category">Product Sold</p>
        </div>
        <div className="landing-description-bottom-container">
          <span className="landing-description-stats">4 000+</span>
          <p className="landing-description-stats-category">Best Reviews</p>
        </div>
      </div>
    </div>

    <div className="landing-seller">
      <div className="landing-seller-container">
        <div className="landing-seller-container-left">
          <div className="landing-seller-subcontainer-left">
            <h1 className="landing-seller-title">Best Seller Product</h1>
            <p className="landing-seller-text">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed ullamcorper Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed ullamcorper
            </p>
            <button type="button" className="landing-seller-button">See more</button>
          </div>
        </div>
        <div className="landing-seller-products">
          <img className="landing-seller-products-image" src={Seller1} alt="" />
          <div className="landing-seller-products-subcontainer">
            <h2 className="landing-seller-products-title">Short Long Sleeve</h2><br />
            <span className="landing-seller-products-discount-price">$150</span>
            <span className="landing-seller-products-price">$100</span>
          </div>
        </div>
        <div className="landing-seller-products">
          <img className="landing-seller-products-image" src={Seller1} alt="" />
          <div className="landing-seller-products-subcontainer">
            <h2 className="landing-seller-products-title">Green Long Sleeve</h2><br />
            <span className="landing-seller-products-discount-price">$150</span>
            <span className="landing-seller-products-price">$100</span>
          </div>
        </div>
      </div>
    </div>
  </div>
);

export default Home;

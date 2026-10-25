import { Link, Route, Routes } from 'react-router-dom';
import { useState } from 'react';
import { Leaf, ArrowRight, Check, Sparkles } from 'lucide-react';
import { useSelector } from 'react-redux';
import { plants } from './data';
import ProductList, { Navbar } from './ProductList';
import CartItem from './CartItem';
import AboutUs from './AboutUs';

function Home() {
  const [showProductList, setShowProductList] = useState(false);
  const handleGetStartedClick = () => setShowProductList(true);
  if (showProductList) return <ProductList />;
  return (
    <main className="app-container">
      <section className="hero background-image">
        <div className="hero-copy">
          <p className="eyebrow"><Sparkles size={15} /> Plants for a softer everyday</p>
          <h1>Welcome to Paradise Nursery</h1>
          <p className="hero-text">Thoughtfully grown houseplants and everything you need to help them thrive, delivered to your door.</p>
          <button type="button" onClick={handleGetStartedClick} className="button button-light get-started-button">Get Started <ArrowRight size={18} /></button>
        </div>
        <div className="hero-image-wrap">
          <img src="https://images.unsplash.com/photo-1497250681960-ef046c08a56e?auto=format&fit=crop&w=1200&q=85" alt="Lush green houseplants" />
          <div className="hero-note"><span>01</span><strong>Bring the<br />outside in.</strong></div>
        </div>
      </section>
      <section className="intro section-shell">
        <div><p className="eyebrow dark">The paradise edit</p><h2>Good plants.<br /><em>Good energy.</em></h2></div>
        <p>Whether you have a sun-drenched living room or a cozy corner, our collection is chosen to make caring for plants feel natural. Find your new favorite green friend.</p>
      </section>
      <section className="feature-grid section-shell">
        <div className="feature-card feature-card-dark"><Leaf size={28} /><h3>Grown with<br />intention.</h3><p>Healthy plants, selected from trusted growers and ready for their forever home.</p></div>
        <div className="feature-card feature-card-image"><img src={plants[2].image} alt="Fiddle leaf fig" /><span>Find your<br /><em>leafy match.</em></span></div>
        <div className="feature-card feature-card-sand"><Check size={28} /><h3>Care made<br />simple.</h3><p>Every plant arrives with an easy care guide, so you can grow with confidence.</p></div>
      </section>
    </main>
  );
}

function Cart() {
  const items = useSelector((state) => state.cart.items);
  return <main className="page-shell cart-page"><div className="page-heading"><p className="eyebrow dark">Your little jungle</p><h1>Your cart</h1></div><CartItem items={items} /></main>;
}

export default function App() {
  return <><Navbar /><Routes><Route path="/" element={<Home />} /><Route path="/shop" element={<ProductList />} /><Route path="/about" element={<AboutUs />} /><Route path="/cart" element={<Cart />} /></Routes><footer><span>paradise<span className="brand-accent">.</span></span><span>Plants that make a house a home.</span></footer></>;
}

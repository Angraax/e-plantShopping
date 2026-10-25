import { useState } from 'react';
import { NavLink } from 'react-router-dom';
import { Leaf, ShoppingBag, Check, Plus } from 'lucide-react';
import { useDispatch, useSelector } from 'react-redux';
import { addItem, selectCartCount, selectCartItems } from './CartSlice';
import { plantsArray } from './data';

export function Navbar() {
  const cartQuantity = useSelector(selectCartCount);
  return (
    <header className="site-header navbar">
      <NavLink to="/" className="brand">
        <span className="brand-mark"><Leaf size={20} /></span>
        <span>paradise<span className="brand-accent">.</span></span>
      </NavLink>
      <nav>
        <NavLink to="/" end>Home</NavLink>
        <NavLink to="/shop">Plants</NavLink>
        <NavLink to="/about">Our story</NavLink>
        <NavLink to="/cart" className="cart-link">
          <ShoppingBag size={18} /> Cart
          <span className="cart-badge">{cartQuantity}</span>
        </NavLink>
      </nav>
    </header>
  );
}

export default function ProductList() {
  const dispatch = useDispatch();
  const cart = useSelector(selectCartItems);
  const [addedToCart, setAddedToCart] = useState({});
  const cartQuantity = cart.reduce((total, item) => total + item.quantity, 0);

  const handleAddToCart = (plant) => {
    dispatch(addItem(plant));
    setAddedToCart((current) => ({ ...current, [plant.name]: true }));
  };

  return (
    <main className="page-shell shop-page">
      <div className="page-heading shop-heading">
        <div><p className="eyebrow dark">Take a deep breath</p><h1>Meet the collection</h1></div>
        <p>Small rituals, big difference. Find a plant that fits your space and your pace.</p>
      </div>
      <div className="category-tabs">
        <span className="category-count">{cartQuantity} total plants in your cart</span>
      </div>
      {plantsArray.map((category) => (
        <section className="plant-category" key={category.category}>
          <h2 className="category-heading">{category.category}</h2>
          <div className="product-list product-grid">
            {category.plants.map((plant) => {
              const isAdded = addedToCart[plant.name] || cart.some((item) => item.name === plant.name);
              return (
                <article className="product-card" key={plant.name}>
                  <div className="product-image"><img src={plant.image} alt={plant.name} /><span>{category.category}</span></div>
                  <div className="product-info">
                    <div><h3>{plant.name}</h3><p>{plant.description}</p></div>
                    <div className="product-buy">
                      <strong>${plant.cost}</strong>
                      <button
                        type="button"
                        disabled={isAdded}
                        onClick={() => handleAddToCart(plant)}
                        className={isAdded ? 'added' : ''}
                      >
                        {isAdded ? <><Check size={16} /> Added to Cart</> : <><Plus size={16} /> Add to cart</>}
                      </button>
                    </div>
                  </div>
                </article>
              );
            })}
          </div>
        </section>
      ))}
    </main>
  );
}

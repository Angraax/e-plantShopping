import { useDispatch, useSelector } from 'react-redux';
import { addToCart, selectCartItems } from './CartSlice';
import { plants } from './data';
import { Check, Plus } from 'lucide-react';
import { useState } from 'react';

export default function ProductList() {
  const dispatch = useDispatch();
  const cartItems = useSelector(selectCartItems);
  const [category, setCategory] = useState('All plants');
  const categories = ['All plants', ...new Set(plants.map((plant) => plant.category))];
  const visiblePlants = category === 'All plants' ? plants : plants.filter((plant) => plant.category === category);
  return <main className="page-shell shop-page">
    <div className="page-heading shop-heading"><div><p className="eyebrow dark">Take a deep breath</p><h1>Meet the collection</h1></div><p>Small rituals, big difference. Find a plant that fits your space and your pace.</p></div>
    <div className="category-tabs">{categories.map((item) => <button key={item} className={category === item ? 'active' : ''} onClick={() => setCategory(item)}>{item}</button>)}</div>
    <div className="product-grid">{visiblePlants.map((plant) => {
      const inCart = cartItems.some((item) => item.id === plant.id);
      return <article className="product-card" key={plant.id}><div className="product-image"><img src={plant.image} alt={plant.name} /><span>{plant.category}</span></div><div className="product-info"><div><h3>{plant.name}</h3><p>{plant.description}</p></div><div className="product-buy"><strong>${plant.price}</strong><button onClick={() => dispatch(addToCart(plant))} className={inCart ? 'added' : ''}>{inCart ? <><Check size={16} /> Added</> : <><Plus size={16} /> Add to cart</>}</button></div></div></article>;
    })}</div>
  </main>;
}

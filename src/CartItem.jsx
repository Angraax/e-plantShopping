import { ArrowLeft, Minus, Plus, Trash2 } from 'lucide-react';
import { Link } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { decreaseQuantity, increaseQuantity, removeFromCart, selectCartTotal } from './CartSlice';

export default function CartItem({ items }) {
  const dispatch = useDispatch();
  const total = useSelector(selectCartTotal);
  if (!items.length) return <div className="empty-cart"><div className="empty-icon">🌱</div><h2>Your cart is waiting to grow.</h2><p>Pick out a plant or two and bring some life home.</p><Link to="/shop" className="button button-dark">Browse plants <ArrowLeft size={17} /></Link></div>;
  return <div className="cart-layout"><div className="cart-list">{items.map((item) => <article className="cart-item" key={item.id}><img src={item.image} alt={item.name} /><div className="cart-item-details"><div><p className="eyebrow dark">{item.category}</p><h3>{item.name}</h3><span className="unit-price">${item.price} each</span></div><div className="quantity-control"><button aria-label={`Decrease ${item.name}`} onClick={() => dispatch(decreaseQuantity(item.id))}><Minus size={15} /></button><span>{item.quantity}</span><button aria-label={`Increase ${item.name}`} onClick={() => dispatch(increaseQuantity(item.id))}><Plus size={15} /></button></div></div><div className="cart-item-total"><strong>${(item.price * item.quantity).toFixed(2)}</strong><button className="delete-button" onClick={() => dispatch(removeFromCart(item.id))}><Trash2 size={16} /> Delete</button></div></article>)}</div><aside className="order-summary"><p className="eyebrow dark">A good choice</p><h2>Order summary</h2><div className="summary-line"><span>Subtotal</span><strong>${total.toFixed(2)}</strong></div><div className="summary-line"><span>Delivery</span><strong>Free</strong></div><div className="summary-total"><span>Total</span><strong>${total.toFixed(2)}</strong></div><button className="button button-dark checkout">Checkout <Plus size={17} /></button><Link to="/shop" className="continue-link"><ArrowLeft size={16} /> Continue shopping</Link></aside></div>;
}

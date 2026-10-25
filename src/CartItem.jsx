import { ArrowLeft, Minus, Plus, Trash2 } from 'lucide-react';
import { useNavigate } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { removeItem, selectCartTotal, updateQuantity } from './CartSlice';

export default function CartItem({ items = [] }) {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const cart = items;
  const total = useSelector(selectCartTotal);

  const handleIncrement = (item) => {
    dispatch(updateQuantity({ id: item.id, quantity: item.quantity + 1 }));
  };

  const handleDecrement = (item) => {
    if (item.quantity <= 1) {
      handleRemove(item);
    } else {
      dispatch(updateQuantity({ id: item.id, quantity: item.quantity - 1 }));
    }
  };

  const handleRemove = (item) => {
    dispatch(removeItem(item.name));
  };

  const handleContinueShopping = (event) => {
    event.preventDefault();
    navigate('/shop');
  };

  const handleCheckout = () => {
    window.alert('Checkout is coming soon!');
  };

  if (!cart.length) {
    return <div className="empty-cart"><div className="empty-icon">🌱</div><h2>Your cart is waiting to grow.</h2><p>Pick out a plant or two and bring some life home.</p><button type="button" onClick={handleContinueShopping} className="button button-dark get-started-button">Browse plants <ArrowLeft size={17} /></button></div>;
  }

  return (
    <div className="cart-layout cart-container">
      <div className="cart-list">
        {cart.map((item) => (
          <article className="cart-item" key={item.id}>
            <img className="cart-item-image" src={item.image} alt={item.name} />
            <div className="cart-item-details">
              <div><p className="eyebrow dark">{item.category}</p><h3 className="cart-item-name">{item.name}</h3><span className="unit-price cart-item-price">${item.cost} each</span></div>
              <div className="quantity-control">
                <button type="button" aria-label={`Decrease ${item.name}`} onClick={() => handleDecrement(item)}><Minus size={15} /></button>
                <span>{item.quantity}</span>
                <button type="button" aria-label={`Increase ${item.name}`} onClick={() => handleIncrement(item)}><Plus size={15} /></button>
              </div>
            </div>
            <div className="cart-item-total">
              <strong>${(item.cost * item.quantity).toFixed(2)}</strong>
              <button type="button" className="delete-button cart-item-delete" onClick={() => handleRemove(item)}><Trash2 size={16} /> Delete</button>
            </div>
          </article>
        ))}
      </div>
      <aside className="order-summary">
        <p className="eyebrow dark">A good choice</p><h2>Order summary</h2>
        <div className="summary-line"><span>Subtotal</span><strong>${total.toFixed(2)}</strong></div>
        <div className="summary-line"><span>Delivery</span><strong>Free</strong></div>
        <div className="summary-total"><span>Total</span><strong>${total.toFixed(2)}</strong></div>
        <button type="button" onClick={handleCheckout} className="button button-dark checkout get-started-button1">Checkout <Plus size={17} /></button>
        <button type="button" onClick={handleContinueShopping} className="continue-link get-started-button"><ArrowLeft size={16} /> Continue shopping</button>
      </aside>
    </div>
  );
}

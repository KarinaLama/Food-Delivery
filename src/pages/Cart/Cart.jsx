import React, { useContext } from 'react';
import { StoreContext } from '../../context/StoreContext';
import './Cart.css';
import { useNavigate } from 'react-router-dom';

const Cart = () => {
  const { cartItems, food_list, removeFromCart, getTotalCartAmount } = useContext(StoreContext);
  const navigate = useNavigate();

  if (!food_list || food_list.length === 0) {
    return <p>Loading...</p>; // Handle loading state
  }

  return (
    <div className='cart'>
      <div className="cart-items">
        <div className="cart-items-title">
          <p>Item</p>
          <p>Title</p>
          <p>Price</p>
          <p>Quantity</p>
          <p>Total</p>
          <p>Remove</p>
        </div>
        <br />
        <hr />
        {food_list.map((item, index) => {
          const quantity = cartItems[item._id] || 0;
          if (quantity > 0) {
            return (
              <div>
                <div key={index} className="cart-items-title cart-items-item">
                  <img src={item.image} alt="" />
                  <p>{item.name}</p>
                  <p>${item.price}</p>
                  <p>{cartItems[item._id]}</p>
                  <p>{item.price * cartItems[item._id]}</p>
                  <p onClick={()=> removeFromCart(item._id)} className='cross'> x</p>

                </div>
                <hr />
              </div>

            );
          }
          return null;
        })}
        {Object.values(cartItems).every(qty => qty === 0) && (
          <p>Your cart is empty</p>
        )}
      </div>
      <div className="cart-bottom">
        <div className="cart-total">
          <h2>Cart Totals</h2>
          <div>
            <div className='cart-total-details'>
              <p>Subtotal</p>
              <p>{getTotalCartAmount}</p>
            </div>
            <hr/>
            <div className='cart-total-details'>
              <p>Dekivery Fee</p>
              <p>{2}</p>
            </div>
            <hr/>
            <div className='cart-total-details'>
              <b>Total</b>
              <b>{getTotalCartAmount()+2}</b>

            </div>
          </div>
          <button onClick={()=>navigate("/order")}>PRPCEED TO CHECKOUT</button>
        </div>
        <div className="cart-promocode">
          <div>
            <p>If you have  promo code Enter it here</p>
            <div className="cart-promocode-input">
              <input type="text"  placeholder='promocode'/>
              <button>Submitt</button></div>
          </div>
        </div>
      </div>

    </div>
  );
};

export default Cart;

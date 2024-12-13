import React, { useContext, useState } from "react";
import { StoreContext } from "../../context/StoreContext";
import "./PlaceOrder.css";

const PlaceOrder = () => {
  const { getTotalCartAmount } = useContext(StoreContext);
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    street: "",
    city: "",
    state: "",
    zipCode: "",
    country: "",
    phone: "",
  });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleProceedToPayment = (e) => {
    e.preventDefault();
    const isValid = Object.values(formData).every((field) => field.trim());
    if (!isValid) return alert("Please fill all fields!");
    console.log("Proceeding to payment with:", formData);
  };

  const totalCartAmount = getTotalCartAmount();

  return (
    <form className="place-order" onSubmit={handleProceedToPayment}>
      <div className="place-order-left">
        <p className="title">Delivery Information</p>
        <div className="multi-fields">
          <input
            type="text"
            name="firstName"
            placeholder="First Name"
            onChange={handleInputChange}
          />
          <input
            type="text"
            name="lastName"
            placeholder="Last Name"
            onChange={handleInputChange}
          />
        </div>
        <input
          type="email"
          name="email"
          placeholder="Email Address"
          onChange={handleInputChange}
        />
        <input
          type="text"
          name="street"
          placeholder="Street"
          onChange={handleInputChange}
        />
        <div className="multi-fields">
          <input
            type="text"
            name="city"
            placeholder="City"
            onChange={handleInputChange}
          />
          <input
            type="text"
            name="state"
            placeholder="State"
            onChange={handleInputChange}
          />
        </div>
        <div className="multi-fields">
          <input
            type="text"
            name="zipCode"
            placeholder="Zip Code"
            onChange={handleInputChange}
          />
          <input
            type="text"
            name="country"
            placeholder="Country"
            onChange={handleInputChange}
          />
        </div>
        <input
          type="text"
          name="phone"
          placeholder="Phone"
          onChange={handleInputChange}
        />
      </div>
      <div className="place-order-right">
        <div className="cart-total">
          <h2>Cart Totals</h2>
          <div className="cart-total-details">
            <p>Subtotal</p>
            <p>${totalCartAmount.toFixed(2)}</p>
          </div>
          <hr />
          <div className="cart-total-details">
            <p>Delivery Fee</p>
            <p>$2.00</p>
          </div>
          <hr />
          <div className="cart-total-details">
            <b>Total</b>
            <b>${(totalCartAmount + 2).toFixed(2)}</b>
          </div>
          <button type="submit">Proceed to Payment</button>
        </div>
      </div>
    </form>
  );
};

export default PlaceOrder;

import React, { useState, useEffect } from 'react';
import axios from 'axios';

function Cart() {
  const [couponCode, setCouponCode] = useState('');
  const [discount, setDiscount] = useState(0);
  const [error, setError] = useState('');
  const [cartItems, setCartItems] = useState([]);
  const [noExtraPackaging, setNoExtraPackaging] = useState(false);
  const [isBulk, setIsBulk] = useState(false);
  const [total, setTotal] = useState(0);
  const user_id = 1; // Replace with actual user ID (e.g., from auth context or localStorage)

  // Load cart items with quantity
  useEffect(() => {
    const storedCart = JSON.parse(localStorage.getItem('cart')) || [];
    const cartWithQuantity = storedCart.map((item) => ({
      ...item,
      quantity: item.quantity || 1,
    }));
    setCartItems(cartWithQuantity);
  }, []);

  // Update total price when cart changes
    // Update total price when cart changes
  useEffect(() => {
    const newTotal = cartItems.reduce(
      (sum, item) => sum + item.price * item.quantity,
      0
    );
    setTotal(newTotal);
  }, [cartItems]);

  // Load Razorpay script
  useEffect(() => {
    const script = document.createElement("script");
    script.src = "https://checkout.razorpay.com/v1/checkout.js";
    script.async = true;
    document.body.appendChild(script);
  }, []);
  
    const applyCoupon = async () => {
    try {
      const res = await axios.post('/api/coupons/apply', { code: couponCode });
      if (res.data.success) {
        setDiscount(res.data.discount);
        setError('');
      } else {
        setError('Invalid or expired coupon');
      }
    } catch (err) {
      setError('Server error');
    }
  };

  const updateQuantity = (index, newQty) => {
    const newCart = [...cartItems];
    newCart[index].quantity = newQty;
    setCartItems(newCart);
    localStorage.setItem('cart', JSON.stringify(newCart)); // Sync with localStorage
  };

  const handlePlaceOrder = async () => {
  try {
    // 1. Ask backend to create a Razorpay order
    const orderResponse = await axios.post('http://localhost:5000/api/payments/create-order', {
      amount: total * 100, // Razorpay takes amount in paise
    });

    const { id: order_id, currency, amount } = orderResponse.data;

    // 2. Setup Razorpay options
    const options = {
      key: "rzp_test_YOUR_KEY_HERE", // Replace with your Razorpay TEST Key
      amount: amount,
      currency: currency,
      name: "Meal Mates",
      description: "Food Order Payment",
      order_id: order_id,
      handler: async function (response) {
        // 3. Payment success — place the actual order
        await axios.post('http://localhost:5000/api/orders/create', {
          user_id,
          items: cartItems,
          total,
          noExtraPackaging,
          isBulk,
          payment_id: response.razorpay_payment_id
        });

        alert("Order placed and payment successful!");
        localStorage.removeItem("cart");
        setCartItems([]);
      },
      prefill: {
        name: "Your Name",
        email: "test@example.com",
        contact: "9999999999"
      },
      theme: {
        color: "#0f6"
      }
    };

    const razor = new window.Razorpay(options);
    razor.open();
  } catch (error) {
    console.error("Payment or order failed", error);
    alert("Something went wrong during payment.");
  }
};


  return (
    <div className="container mt-4">
      <h2>Your Cart</h2>

      {cartItems.length === 0 ? (
        <p>Your cart is empty.</p>
      ) : (
        cartItems.map((item, index) => (
          <div key={index} className="d-flex justify-content-between align-items-center border p-2">
            <span>{item.name}</span>
            <span>₹{item.price}</span>
            <input
              type="number"
              min="1"
              value={item.quantity}
              onChange={(e) => updateQuantity(index, parseInt(e.target.value))}
              className="form-control w-25 ms-2"
            />
          </div>
        ))
      )}

      <div className="form-check mt-3">
        <input
          className="form-check-input"
          type="checkbox"
          id="noExtraPackaging"
          checked={noExtraPackaging}
          onChange={(e) => setNoExtraPackaging(e.target.checked)}
        />
        <label className="form-check-label" htmlFor="noExtraPackaging">
          I don't want extra packaging (Go Green 🌱)
        </label>
      </div>

      <div className="form-check mt-2">
        <input
          className="form-check-input"
          type="checkbox"
          id="bulkOrder"
          checked={isBulk}
          onChange={(e) => setIsBulk(e.target.checked)}
        />
        <label className="form-check-label" htmlFor="bulkOrder">
          This is a Bulk Order
        </label>
      </div>

      {cartItems.length > 0 && (
  <>
    <div className="mt-3">
      <input
        type="text"
        placeholder="Enter Coupon Code"
        className="form-control mb-2"
        value={couponCode}
        onChange={(e) => setCouponCode(e.target.value)}
      />
      <button className="btn btn-primary" onClick={applyCoupon}>Apply</button>
      {error && <p className="text-danger mt-2">{error}</p>}
      {discount > 0 && <p className="text-success mt-2">✅ Coupon applied: {discount}% off</p>}
    </div>

    <h5 className="mt-3">
      Total: ₹{total - Math.round((total * discount) / 100)}
    </h5>

    <button className="btn btn-success mt-3" onClick={handlePlaceOrder}>
      Place Order
    </button>
  </>
)}

    </div>
  );
}

export default Cart;

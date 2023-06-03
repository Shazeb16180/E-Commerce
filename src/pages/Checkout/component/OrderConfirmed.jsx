import { useEffect } from "react";
import { popper } from "../../../utils/utils";

export function OrderConfirmed({ cart, razorpay, address, total }) {
  useEffect(() => {
    popper();
  }, []);
  return (
    <div className="success-container">
      <h1>Order Summary</h1>
      <div className="summary-card">
        <div className="summary-details">
          <h3 className="success-header">Order Confirmed</h3>
          <h3>Payment Id:{razorpay}</h3>
          <h3>Total Amount:{total}</h3>
          <h3>Ordered will be Delivered to:</h3>
          <p>{address.name}</p>
          <p>{`${address.houseNo}, ${address.city}`}</p>
          <p>{`${address.state},${address.country},${address.pinCode}`}</p>
          <p>Phone Number:{address.phoneNumber}</p>
        </div>
        <div className="summary-items">
          {cart.map((item, index) => (
            <div key={index} className="summary-item-card">
              <div className="summary-img">
                <img src={item.src} alt="Loading" />
              </div>
              <div className="summary-item-details">
                <h3>{item.name}</h3>
                <h3>Quantity:{item.qty}</h3>
                <h3>Price:{Number(item.price) * Number(item.qty) * 83}</h3>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

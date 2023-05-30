import "./Checkout.css";
import { useContext, useEffect, useState } from "react";
import { DataContext } from "../../context/DataContext";
export function Checkout() {
  const { state, setLoader } = useContext(DataContext);
  const price = state.cart.reduce((acc, curr) => {
    return (acc = acc + Number(curr.price) * curr.qty);
  }, 0);
  const discount = 200;
  const deliveryCharges = 100;
  const couponDiscount = 100;
  const total = price + deliveryCharges - (discount + couponDiscount);
  const [address, setAddress] = useState(state.address[0]);
  useEffect(() => {
    setLoader(true);
    setTimeout(() => {
      setLoader(false);
    }, 500);
  }, []);
  return (
    <div className="checkout-container">
      <h1>Checkout</h1>
      <div className="checkout-content">
        {state.address.length > 0 ? (
          <div className="checkout-address">
            {state.address.map((addr) => (
              <div className="checkout-address-card">
                <input
                  name="address"
                  type="radio"
                  value={addr.name}
                  onClick={() => setAddress(addr)}
                />
                <label>{addr.name}</label>
                <p>
                  {`${addr.houseNo === "" ? "Not Defined" : addr.houseNo},${
                    addr.state === "" ? "Not Defined" : addr.state
                  },${addr.city === "" ? "Not Defined" : addr.city},${
                    addr.pinCode === "" ? "Not Defined" : addr.pinCode
                  }`}
                </p>
                <p>
                  Phone Number:
                  {addr.phoneNumber === ""
                    ? "Not Defined"
                    : address.phoneNumber}
                </p>
              </div>
            ))}
          </div>
        ) : (
          <></>
        )}

        <div className="checkout-order-details">
          <div className="checkout-od">
            <h3>Order Details</h3>
            <div className="row">
              <p className="left-heading">Item</p>
              <p className="right-heading">Qty</p>
            </div>
            {state.cart.map(({ name, qty }) => (
              <div className="row">
                <p className="left">{name}</p>
                <p className="right">{qty}</p>
              </div>
            ))}
          </div>
          <div className="checkout-od">
            <h3>Price Details</h3>
            <div className="row">
              <p className="left">Price({state.cart.length})</p>
              <p className="right">${price}</p>
            </div>
            <div className="row">
              <p className="left">Discount</p>
              <p className="right">${discount}</p>
            </div>
            <div className="row">
              <p className="left">Delivery Charges</p>
              <p className="right">${deliveryCharges}</p>
            </div>
            <div className="row">
              <p className="left">Coupon Discount</p>
              <p className="right">${couponDiscount}</p>
            </div>
            <div className="row">
              <p className="left-heading">Total Amount</p>
              <p className="right-heading">${total}</p>
            </div>
          </div>
          <div className="checkout-od">
            <h3>Deliver To</h3>
            <p className="delivery">{address.name}</p>
            <p className="delivery">
              {`${address.houseNo === "" ? "Not Defined" : address.houseNo},${
                address.state === "" ? "Not Defined" : address.state
              },${address.city === "" ? "Not Defined" : address.city},${
                address.pinCode === "" ? "Not Defined" : address.pinCode
              }`}
            </p>
            <p className="delivery">
              Phone Number:
              {address.phoneNumber === "" ? "Not Defined" : address.phoneNumber}
            </p>
          </div>
          <div className="delivery-btn">
            <button>Place Order</button>
          </div>
        </div>
      </div>
    </div>
  );
}

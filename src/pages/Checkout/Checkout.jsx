import "./Checkout.css";
import { useContext, useEffect, useState } from "react";
import { DataContext } from "../../context/DataContext";
import { AuthContext } from "../../context/AuthContext";
import { toast } from "react-toastify";
import { removeFromCart } from "../../services/cartService";
import { OrderConfirmed } from "./component/OrderConfirmed";
export function Checkout() {
  const { state, dispatch, setLoader, cartData, cartState, setCartState } =
    useContext(DataContext);
  const { token } = useContext(AuthContext);
  const [address, setAddress] = useState(state.address[0]);
  const [orderConfirmed, setOrderConfirmed] = useState({
    confirmed: false,
    id: 0,
  });
  const orderSuccess = (razorpay) => {
    setOrderConfirmed({
      confirmed: true,
      id: razorpay,
      cart: state.cart,
      total: (total - total * (coupon / 100)) * 83,
    });
    setCartState({ couponCard: false, coupon: 0 });
    state.cart.forEach((cart) => removeFromCart(cart._id, dispatch, token));
    dispatch({ type: "ORDER_SUCCESS" });
    toast.success("Order Successfully Placed ID:" + razorpay);
  };
  const { price, discount, deliveryCharges } = cartData;
  const total = price + deliveryCharges - discount;
  const { coupon } = cartState;

  /*********** RAZORPAY *********************/

  const loadScript = async (url) => {
    return new Promise((resolve) => {
      const script = document.createElement("script");
      script.src = url;

      script.onload = () => {
        resolve(true);
      };

      script.onerror = () => {
        resolve(false);
      };
      document.body.appendChild(script);
    });
  };

  const displayRazorpay = async () => {
    const res = await loadScript(
      "https://checkout.razorpay.com/v1/checkout.js"
    );

    if (!res) {
      toast.error("Razorpay SDK failed to load, check you connection");
      return;
    }

    const options = {
      key: "rzp_test_M7jr3sNuOwTIPE",
      amount: (total - total * (coupon / 100)) * 100 * 83,
      currency: "INR",
      name: "Spare Parts",
      description: "Thank you for shopping with us",
      handler: function (response) {
        console.log(response);
        orderSuccess(response.razorpay_payment_id);
      },
      prefill: {
        name: `${address.firstName} ${address.lastName}`,
        email: address.email,
        contact: "6305286708",
      },
      theme: {
        color: "#333",
      },
    };
    const paymentObject = new window.Razorpay(options);
    paymentObject.open();
  };
  /*********** RAZORPAY *********************/

  useEffect(() => {
    setLoader(true);
    setTimeout(() => {
      setLoader(false);
    }, 1000);
  }, []);
  return orderConfirmed.confirmed ? (
    <OrderConfirmed
      cart={orderConfirmed.cart}
      razorpay={orderConfirmed.id}
      address={address}
      total={orderConfirmed.total}
    />
  ) : (
    <div className="checkout-container">
      <h1>Checkout</h1>
      <div className="checkout-content">
        {state.address.length > 0 ? (
          <div className="checkout-address">
            {state.address.map((addr, index) => (
              <div key={index} className="checkout-address-card">
                <input
                  name="address"
                  type="radio"
                  value={addr.name}
                  readOnly
                  checked={address.name === addr.name ? true : false}
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
                  {addr.phoneNumber === "" ? "Not Defined" : addr.phoneNumber}
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
              <div key={name} className="row">
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
              <p className="right">${coupon}%</p>
            </div>
            <div className="row">
              <p className="left-heading">Total Amount</p>
              <p className="right-heading">${total - total * (coupon / 100)}</p>
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
            <button onClick={() => displayRazorpay()}>Place Order</button>
          </div>
        </div>
      </div>
    </div>
  );
}

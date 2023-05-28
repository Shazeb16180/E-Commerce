import { useContext } from "react";
import { DataContext } from "../../../context/DataContext";

export function AddressCard({ addressForm, setAddressForm, setForm }) {
  const { state, dispatch } = useContext(DataContext);
  return (
    <div className="address-card">
      <div className="details">
        <h3>My Addresses</h3>
        {state.address &&
          state.address.map((addr) => {
            return (
              <div className="address-details">
                <p className="variable">{addr.name}</p>
                <p>{`${addr.houseNo} ${addr.city} ${addr.state}`}</p>
                <p>{addr.postalCode}</p>
                <p>{addr.country}</p>
                <p>Phone Number:{addr.phoneNumber}</p>
                <div className="addr-btn">
                  <button
                    className="edit-btn"
                    onClick={() => {
                      setForm({ ...addr });
                      setAddressForm(!addressForm);
                    }}
                  >
                    Edit
                  </button>
                  <button
                    className="remove-btn"
                    onClick={() => {
                      dispatch({
                        type: "INTIALIZE_ADDR",
                        payload: state.address.filter(
                          (ad) => ad.name !== addr.name
                        ),
                      });
                    }}
                  >
                    Remove
                  </button>
                </div>
              </div>
            );
          })}
        <div className="btn">
          <button onClick={() => setAddressForm(!addressForm)}>
            Add New Address
          </button>
        </div>
      </div>
    </div>
  );
}

import { useContext } from "react";
import { DataContext } from "../../../context/DataContext";
import { toast } from "react-toastify";

export function AddressCard({
  initalFormValue,
  addressForm,
  setAddressForm,
  setForm,
}) {
  const { state, dispatch } = useContext(DataContext);
  return (
    <div className="address-card">
      <div className="details">
        <h3>My Addresses</h3>
        {state.address &&
          state.address.map((addr, index) => {
            return (
              <div key={index} className="address-details">
                <p className="variable">{addr.name}</p>
                <p>{`${addr.houseNo} ${addr.city} ${addr.state}`}</p>
                <p>{addr.pinCode}</p>
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
                      toast.error("Address Removed");
                    }}
                  >
                    Remove
                  </button>
                </div>
              </div>
            );
          })}
        <div className="btn">
          <button
            onClick={() => {
              setForm({ ...initalFormValue });
              setAddressForm(!addressForm);
            }}
          >
            Add New Address
          </button>
        </div>
      </div>
    </div>
  );
}

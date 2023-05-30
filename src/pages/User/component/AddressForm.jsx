import { useContext } from "react";
import { DataContext } from "../../../context/DataContext";
import { toast } from "react-toastify";

export function AddressForm({
  addressForm,
  setAddressForm,
  form,
  setForm,
  initialFormValue,
}) {
  const { state, dispatch } = useContext(DataContext);
  return (
    <div className={`user-card-${addressForm ? "flex" : "none"}`}>
      <h1>Add New Address</h1>
      <div className="form-input">
        <input
          placeholder="Enter Name"
          value={form.name}
          onChange={(event) => setForm({ ...form, name: event.target.value })}
        />
        <input
          placeholder="Enter House No,Road,Colony"
          value={form.houseNo}
          onChange={(event) =>
            setForm({ ...form, houseNo: event.target.value })
          }
        />
        <input
          placeholder="Enter City"
          value={form.city}
          onChange={(event) => setForm({ ...form, city: event.target.value })}
        />
        <input
          placeholder="Enter State"
          value={form.state}
          onChange={(event) => setForm({ ...form, state: event.target.value })}
        />
        <input
          placeholder="Enter Country"
          value={form.country}
          onChange={(event) =>
            setForm({ ...form, country: event.target.value })
          }
        />
        <input
          placeholder="Enter Postal Code"
          value={form.postalCode}
          onChange={(event) =>
            setForm({ ...form, pinCode: event.target.value })
          }
        />
        <input
          placeholder="Enter Mobile Number"
          value={form.phoneNumber}
          onChange={(event) =>
            setForm({ ...form, phoneNumber: event.target.value })
          }
        />
      </div>
      <div className="form-buttons">
        <button
          className="save-btn"
          onClick={() => {
            const already =
              state.address?.find((addr) => addr.name === form.name) ===
              undefined
                ? false
                : true;
            console.log(already);
            if (already) {
              dispatch({
                type: "INTIALIZE_ADDR",
                payload: [
                  ...state.address.map((a) =>
                    a.name === form.name ? form : a
                  ),
                ],
              });
              toast.info("Address Updated");
            } else {
              dispatch({
                type: "INTIALIZE_ADDR",
                payload: [...state.address, form],
              });
              toast.success("Address Added");
            }
            setAddressForm(!addressForm);
            setForm(initialFormValue);
          }}
        >
          save
        </button>
        <button
          className="cancel-btn"
          onClick={() => {
            setAddressForm(!addressForm);
            toast.error("Canceled Address");
          }}
        >
          cancel
        </button>
      </div>
    </div>
  );
}

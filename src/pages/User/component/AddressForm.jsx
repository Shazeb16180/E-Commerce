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
  const cancelHandle = (e) => {
    e.preventDefault();
    setAddressForm(!addressForm);
    setForm(initialFormValue);
    toast.error("Canceled Address");
  };
  const saveHandle = (e) => {
    e.preventDefault();
    const already =
      state.address?.find((addr) => addr.name === form.name) === undefined
        ? false
        : true;
    if (already) {
      dispatch({
        type: "INTIALIZE_ADDR",
        payload: [
          ...state.address.map((a) => (a.name === form.name ? form : a)),
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
  };
  return (
    <div className={`user-card-${addressForm ? "flex" : "none"}`}>
      <form onSubmit={(e) => saveHandle(e)}>
        <h1>Add New Address</h1>
        <div className="form-input">
          <input
            placeholder="Enter Name"
            value={form.name}
            required={true}
            onChange={(event) => setForm({ ...form, name: event.target.value })}
          />
          <input
            placeholder="Enter House No,Road,Colony"
            value={form.houseNo}
            required={true}
            onChange={(event) =>
              setForm({ ...form, houseNo: event.target.value })
            }
          />
          <input
            placeholder="Enter City"
            value={form.city}
            required={true}
            onChange={(event) => setForm({ ...form, city: event.target.value })}
          />
          <input
            placeholder="Enter State"
            value={form.state}
            required={true}
            onChange={(event) =>
              setForm({ ...form, state: event.target.value })
            }
          />
          <input
            placeholder="Enter Country"
            value={form.country}
            required={true}
            onChange={(event) =>
              setForm({ ...form, country: event.target.value })
            }
          />
          <input
            placeholder="Enter Postal Code"
            value={form.pinCode}
            required={true}
            type="number"
            onChange={(event) =>
              setForm({ ...form, pinCode: event.target.value })
            }
          />
          <input
            placeholder="Enter Mobile Number"
            value={form.phoneNumber}
            required={true}
            type="number"
            onChange={(event) =>
              setForm({ ...form, phoneNumber: event.target.value })
            }
          />
        </div>
        <div className="form-buttons">
          <button className="save-btn" type="submit">
            save
          </button>
          <button
            className="cancel-btn"
            type="reset"
            onClick={(e) => cancelHandle(e)}
          >
            cancel
          </button>
        </div>
      </form>
    </div>
  );
}

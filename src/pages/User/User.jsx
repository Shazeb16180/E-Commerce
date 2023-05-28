import { useContext, useState } from "react";
import "./User.css";
import { ProfileCard } from "./component/ProfileCard";
import { AddressCard } from "./component/AddressCard";
import { AddressForm } from "./component/AddressForm";
import { DataContext } from "../../context/DataContext";
export function User() {
  const formValue = {
    name: "",
    houseNo: "",
    city: "",
    state: "",
    country: "",
    postalCode: "",
    phoneNumber: "",
  };

  const [form, setForm] = useState(formValue);
  console.log(form);
  const { state, dispatch } = useContext(DataContext);
  const [active, setActive] = useState(true);
  const [addressForm, setAddressForm] = useState(false);
  const component = active ? (
    <ProfileCard />
  ) : (
    <AddressCard
      addressForm={addressForm}
      setAddressForm={setAddressForm}
      setForm={setForm}
    />
  );

  return (
    <div className="user-details">
      <div className={`user-card-${addressForm ? "none" : "flex"}`}>
        <h1>Account</h1>
        <div className="details-card">
          <div className="nav-details">
            <button
              onClick={() => setActive(!active)}
              style={{
                backgroundColor: active ? " #ef233c" : "#333",
              }}
            >
              Profile
            </button>
            <button
              onClick={() => setActive(!active)}
              style={{
                backgroundColor: !active ? " #ef233c" : "#333",
              }}
            >
              Address
            </button>
          </div>
          {component}
        </div>
      </div>
      <AddressForm
        addressForm={addressForm}
        setAddressForm={setAddressForm}
        form={form}
        setForm={setForm}
        formValue={formValue}
      />
    </div>
  );
}

import "./User.css";
import { useContext, useEffect, useState } from "react";
import { ProfileCard } from "./component/ProfileCard";
import { AddressCard } from "./component/AddressCard";
import { AddressForm } from "./component/AddressForm";
import { DataContext } from "../../context/DataContext";
export function User() {
  const { setLoader } = useContext(DataContext);
  const initialFormValue = {
    name: "",
    houseNo: "",
    city: "",
    state: "",
    country: "",
    pinCode: "",
    phoneNumber: "",
  };
  const [form, setForm] = useState(initialFormValue);
  const [active, setActive] = useState(true);
  const [addressForm, setAddressForm] = useState(false);
  const component = active ? (
    <ProfileCard />
  ) : (
    <AddressCard
      addressForm={addressForm}
      setAddressForm={setAddressForm}
      setForm={setForm}
      initialFormValue={initialFormValue}
    />
  );
  useEffect(() => {
    setLoader(true);
    setTimeout(() => {
      setLoader(false);
    }, 500);
  }, []);

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
        initialFormValue={initialFormValue}
      />
    </div>
  );
}

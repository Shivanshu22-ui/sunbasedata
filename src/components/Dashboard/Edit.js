import React, { useState } from "react";
import Swal from "sweetalert2";

const Edit = ({ customers, selectedCustomer, setCustomers, setIsEditing }) => {
  const id = selectedCustomer.id;

  const [firstName, setFirstName] = useState(selectedCustomer.firstName);
  const [lastName, setLastName] = useState(selectedCustomer.lastName);
  const [email, setEmail] = useState(selectedCustomer.email);
  const [phone, setPhone] = useState(selectedCustomer.phone);
  const [street, setStreet] = useState(selectedCustomer.street);
  const [city, setCity] = useState(selectedCustomer.city);
  const [address, setAddress] = useState(selectedCustomer.address);
  const [state, setState] = useState(selectedCustomer.state);

  const handleUpdate = (e) => {
    e.preventDefault();

    if (
      !firstName ||
      !lastName ||
      !email ||
      !phone ||
      !street ||
      !city ||
      !address ||
      !state
    ) {
      return Swal.fire({
        icon: "error",
        title: "Error!",
        text: "All fields are required.",
        showConfirmButton: true,
      });
    }

    const customer = {
      id,
      firstName,
      lastName,
      email,
      phone,
      street,
      city,
      address,
      state,
    };

    for (let i = 0; i < customers.length; i++) {
      if (customers[i].id === id) {
        customers.splice(i, 1, customer);
        break;
      }
    }

    localStorage.setItem("customers_data", JSON.stringify(customers));
    setCustomers(customers);
    setIsEditing(false);

    Swal.fire({
      icon: "success",
      title: "Updated!",
      text: `${customer.firstName} ${customer.lastName}'s data has been updated.`,
      showConfirmButton: false,
      timer: 1500,
    });
  };

  return (
    <div className="small-container">
      <form onSubmit={handleUpdate}>
        <h1>Edit Customer</h1>
        <label htmlFor="firstName">First Name</label>
        <input
          id="firstName"
          type="text"
          name="firstName"
          value={firstName}
          onChange={(e) => setFirstName(e.target.value)}
        />
        <label htmlFor="lastName">Last Name</label>
        <input
          id="lastName"
          type="text"
          name="lastName"
          value={lastName}
          onChange={(e) => setLastName(e.target.value)}
        />
        <label htmlFor="email">Email</label>
        <input
          id="email"
          type="email"
          name="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
        <label htmlFor="phone">Phone</label>
        <input
          id="phone"
          type="number"
          name="phone"
          value={phone}
          onChange={(e) => setPhone(e.target.value)}
        />
        <label htmlFor="street">Street</label>
        <input
          id="street"
          type="text"
          name="street"
          value={street}
          onChange={(e) => setStreet(e.target.value)}
        />
        <label htmlFor="city">City</label>
        <input
          id="city"
          type="text"
          name="city"
          value={city}
          onChange={(e) => setCity(e.target.value)}
        />
        <label htmlFor="address">Address</label>
        <input
          id="address"
          type="text"
          name="address"
          value={address}
          onChange={(e) => setAddress(e.target.value)}
        />
        <label htmlFor="state">State</label>
        <input
          id="state"
          type="text"
          name="state"
          value={state}
          onChange={(e) => setState(e.target.value)}
        />
        {/* <label htmlFor="salary">Salary ($)</label>
        <input
          id="salary"
          type="number"
          name="salary"
          value={salary}
          onChange={e => setSalary(e.target.value)}
        />
        <label htmlFor="date">Date</label>
        <input
          id="date"
          type="date"
          name="date"
          value={date}
          onChange={e => setDate(e.target.value)}
        /> */}
        <div style={{ marginTop: "30px" }}>
          <input type="submit" value="Update" />
          <input
            style={{ marginLeft: "12px" }}
            className="muted-button"
            type="button"
            value="Cancel"
            onClick={() => setIsEditing(false)}
          />
        </div>
      </form>
    </div>
  );
};

export default Edit;

import React, { useState } from "react";
import AdminLayout from "../../components/AdminLayout";
import "./addHR.css"; // Page-specific styles

function AddManager() {
  return (
    <AdminLayout>
      <div > {/* Adjusted class */}
        <ManagerForm />
      </div>
    </AdminLayout>
  );
}

const ManagerForm = () => {
  const [formData, setFormData] = useState({
    fullName: "",
    password: "",
    gender: "",
    email: "",
    phoneNumber: "",
    address: "",
    dateOfJoining: "",
  });

  const today = new Date().toISOString().split("T")[0];

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!/^[A-Za-z\s]+$/.test(formData.fullName)) {
      alert("Full Name should contain only letters.");
      return;
    }

    if (!/(?=.*[A-Za-z])(?=.*\d)(?=.*[@$!%*?&])/.test(formData.password)) {
      alert("Password must contain at least one letter, one number, and one special character.");
      return;
    }

    if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) {
      alert("Please enter a valid email in the format xxxxx@gmail.com");
      return;
    }

    if (!/^\d+$/.test(formData.phoneNumber)) {
      alert("Phone Number should contain only digits.");
      return;
    }

    if (formData.address.length < 10) {
      alert("Please enter a valid address with at least 10 characters.");
      return;
    }

    if (formData.dateOfJoining < today) {
      alert("Date of Joining cannot be a past date.");
      return;
    }

    console.log("Manager Added:", formData);
    alert("Manager successfully added!");
  };

  return (
    <div className="admin-form-container1"> {/* Adjusted class */}
      

      <form className="admin-form-body" onSubmit={handleSubmit}>
        <h2>Fill in the details below</h2>

        <div className="form-row">
          <div className="form-column">
            <label htmlFor="fullName">Full Name</label>
            <input
              type="text"
              id="fullName"
              name="fullName"
              placeholder="Full Name"
              value={formData.fullName}
              onChange={handleChange}
              required
            />
          </div>

          <div className="form-column">
            <label htmlFor="gender">Gender</label>
            <select
              name="gender"
              id="gender"
              value={formData.gender}
              onChange={handleChange}
              required
            >
              <option value="">Select Gender</option>
              <option value="Male">Male</option>
              <option value="Female">Female</option>
              <option value="Other">Other</option>
            </select>
          </div>
        </div>

        <div className="form-row">
          <div className="form-column">
            <label htmlFor="password">Password</label>
            <input
              type="password"
              id="password"
              name="password"
              placeholder="Password"
              value={formData.password}
              onChange={handleChange}
              required
            />
          </div>

          <div className="form-column">
            <label htmlFor="email">Email</label>
            <input
              type="email"
              id="email"
              name="email"
              placeholder="Email"
              value={formData.email}
              onChange={handleChange}
              required
            />
          </div>
        </div>

        <div className="form-row">
          <div className="form-column">
            <label htmlFor="phoneNumber">Phone Number</label>
            <input
              type="text"
              id="phoneNumber"
              name="phoneNumber"
              placeholder="Phone Number"
              value={formData.phoneNumber}
              onChange={handleChange}
              required
            />
          </div>

          <div className="form-column">
            <label htmlFor="dateOfJoining">Date of Joining</label>
            <input
              type="date"
              id="dateOfJoining"
              name="dateOfJoining"
              value={formData.dateOfJoining}
              onChange={handleChange}
              min={today}
              required
            />
          </div>
        </div>

        <div className="form-row">
          <div className="form-column full-width">
            <label htmlFor="address">Address</label>
            <textarea
              id="address"
              name="address"
              placeholder="House #123, Street 4, New York, 10001"
              value={formData.address}
              onChange={handleChange}
              required
            />
          </div>
        </div>

        <button type="submit" className="submit-btn">Add Manager</button>
      </form>
    </div>
  );
};

export default AddManager;

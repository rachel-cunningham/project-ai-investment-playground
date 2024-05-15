import React, { useState } from "react";

function NewUserForm() {
  const [formData, setFormData] = useState({
    name: "",
    age: "",
    occupation: "",
    investmentStrategy: "",
    riskLevel: "",
    contactInfo: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // form submission
    console.log(formData);
  };

  return (
    <form onSubmit={handleSubmit}>
      <label>Name:</label>
      <input
        type="text"
        name="name"
        value={formData.name}
        onChange={handleChange}
        required
      />

      <label>Age:</label>
      <input
        type="number"
        name="age"
        value={formData.age}
        onChange={handleChange}
        required
      />

      <label>Occupation:</label>
      <input
        type="text"
        name="occupation"
        value={formData.occupation}
        onChange={handleChange}
        required
      />

      <label>Investment Strategy:</label>
      <input
        type="text"
        name="investmentStrategy"
        value={formData.investmentStrategy}
        onChange={handleChange}
      />

      <label>Risk Level:</label>
      <select
        name="riskLevel"
        value={formData.riskLevel}
        onChange={handleChange}
      >
        <option value="">Select</option>
        <option value="low">Low</option>
        <option value="moderate">Moderate</option>
        <option value="aggressive">Aggressive</option>
      </select>

      <label>Contact Info:</label>
      <input
        type="text"
        name="contactInfo"
        value={formData.contactInfo}
        onChange={handleChange}
      />

      <button type="submit">Submit</button>
    </form>
  );
}

export default NewUserForm;

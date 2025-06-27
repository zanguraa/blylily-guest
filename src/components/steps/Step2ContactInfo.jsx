import { useState } from "react";

const Step2ContactInfo = ({ formData, setFormData, next }) => {
  const [error, setError] = useState("");

  const handleChange = (e) => {
    const { name, value } = e.target;
    if (["country", "city", "street", "houseNumber"].includes(name)) {
      setFormData((prev) => ({
        ...prev,
        address: {
          ...prev.address,
          [name]: value,
        },
      }));
    } else {
      setFormData((prev) => ({ ...prev, [name]: value }));
    }
  };

  const handleVerify = () => {
    const { email, phone, dateOfBirth, gender, address } = formData;
    if (
      !email ||
      !phone ||
      !dateOfBirth ||
      !gender ||
      !address.country ||
      !address.city
    ) {
      setError("Please fill all required fields");
      return;
    }

    setError("");
    next();
  };

  return (
    <div className="bg-white p-6 rounded shadow max-w-xl mx-auto">
      <h2 className="text-xl font-bold mb-4">Contact Info Verification</h2>

      <div className="grid grid-cols-1 gap-4">
        <input
          type="email"
          name="email"
          value={formData.email}
          onChange={handleChange}
          placeholder="Email"
          className="border rounded px-3 py-2 w-full"
        />

        <input
          type="text"
          name="phone"
          value={formData.phone}
          onChange={handleChange}
          placeholder="Phone"
          className="border rounded px-3 py-2 w-full"
        />

        <input
          type="date"
          name="dateOfBirth"
          value={formData.dateOfBirth}
          onChange={handleChange}
          className="border rounded px-3 py-2 w-full"
        />

        <select
          name="gender"
          value={formData.gender}
          onChange={handleChange}
          className="border rounded px-3 py-2 w-full"
        >
          <option value="">Select Gender</option>
          <option value="Male">Male</option>
          <option value="Female">Female</option>
          <option value="Other">Other</option>
        </select>

        <div className="grid grid-cols-2 gap-2">
          <input
            type="text"
            name="country"
            value={formData.address.country}
            onChange={handleChange}
            placeholder="Country"
            className="border rounded px-3 py-2"
          />
          <input
            type="text"
            name="city"
            value={formData.address.city}
            onChange={handleChange}
            placeholder="City"
            className="border rounded px-3 py-2"
          />
        </div>

        <div className="grid grid-cols-2 gap-2">
          <input
            type="text"
            name="street"
            value={formData.address.street}
            onChange={handleChange}
            placeholder="Street"
            className="border rounded px-3 py-2"
          />
          <input
            type="text"
            name="houseNumber"
            value={formData.address.houseNumber}
            onChange={handleChange}
            placeholder="House number"
            className="border rounded px-3 py-2"
          />
        </div>

        {error && <p className="text-red-500 text-sm">{error}</p>}

        <button
          onClick={handleVerify}
          className="bg-blue-500 hover:bg-blue-600 text-white px-4 py-2 rounded mt-4"
        >
          Verify
        </button>
      </div>
    </div>
  );
};

export default Step2ContactInfo;

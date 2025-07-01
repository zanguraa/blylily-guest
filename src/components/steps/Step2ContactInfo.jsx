import { useEffect, useState } from "react";

const Step2ContactInfo = ({ formData, setFormData, next, back }) => {
  const [error, setError] = useState("");

  const saveToLocalStorage = (updated) => {
    const existing = JSON.parse(localStorage.getItem("guestProfile") || "{}");
    const merged = { ...existing, ...updated };
    localStorage.setItem("guestProfile", JSON.stringify(merged));
  };

  const handleChange = (e) => {
    const { name, value } = e.target;

    if (["country", "city", "street", "houseNumber"].includes(name)) {
      const updatedAddress = {
        ...formData.address,
        [name]: value,
      };

      setFormData((prev) => ({
        ...prev,
        address: updatedAddress,
      }));

      saveToLocalStorage({ address: updatedAddress });
    } else {
      setFormData((prev) => ({
        ...prev,
        [name]: value,
      }));

      saveToLocalStorage({ [name]: value });
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

  useEffect(() => {
    const saved = JSON.parse(localStorage.getItem("guestProfile") || "{}");

    setFormData((prev) => ({
      ...prev,
      email: saved.email || "",
      phone: saved.phone || "",
      dateOfBirth: saved.dateOfBirth || "",
      gender: saved.gender || "",
      address: {
        ...prev.address,
        ...saved.address,
      },
    }));
  }, []);

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

        <div className="flex justify-between mt-4">
          <button
            onClick={back}
            className="bg-gray-300 hover:bg-gray-400 text-black px-4 py-2 rounded"
          >
            Back
          </button>

          <button
            onClick={handleVerify}
            className="bg-blue-500 hover:bg-blue-600 text-white px-4 py-2 rounded"
          >
            Verify
          </button>
        </div>
      </div>
    </div>
  );
};

export default Step2ContactInfo;

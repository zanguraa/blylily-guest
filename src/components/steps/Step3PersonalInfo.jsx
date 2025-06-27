import { useState } from "react";

const Step3PersonalInfo = ({ formData, setFormData, next }) => {
  const [error, setError] = useState("");

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleNext = () => {
    const { firstName, lastName, dateOfBirth, gender } = formData;
    if (!firstName || !lastName || !dateOfBirth || !gender) {
      setError("Please fill in all required fields");
      return;
    }

    setError("");
    next();
  };

  return (
    <div className="bg-white p-6 rounded shadow max-w-md mx-auto">
      <h2 className="text-xl font-bold mb-4">Personal Info</h2>

      <div className="grid grid-cols-1 gap-4">
        <input
          type="text"
          name="firstName"
          placeholder="First name"
          value={formData.firstName}
          onChange={handleChange}
          className="border rounded px-3 py-2 w-full"
        />

        <input
          type="text"
          name="lastName"
          placeholder="Last name"
          value={formData.lastName}
          onChange={handleChange}
          className="border rounded px-3 py-2 w-full"
        />

        <input
          type="date"
          name="dateOfBirth"
          placeholder="Date of birth"
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

        {error && <p className="text-red-500 text-sm">{error}</p>}

        <button
          onClick={handleNext}
          className="bg-blue-500 hover:bg-blue-600 text-white px-4 py-2 rounded mt-4"
        >
          Next
        </button>
      </div>
    </div>
  );
};

export default Step3PersonalInfo;

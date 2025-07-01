import { useEffect, useState } from "react";

const Step3PersonalInfo = ({ formData, setFormData, next, back }) => {
  const [error, setError] = useState("");

  const saveToLocalStorage = (updated) => {
    const existing = JSON.parse(localStorage.getItem("guestProfile") || "{}");
    const merged = { ...existing, ...updated };
    localStorage.setItem("guestProfile", JSON.stringify(merged));
  };

  const handleChange = (e) => {
    const { name, value } = e.target;

    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));

    saveToLocalStorage({ [name]: value });
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

  // 📥 დაბრუნებისას localStorage-დან წამოღება
  useEffect(() => {
    const saved = JSON.parse(localStorage.getItem("guestProfile") || "{}");
    const { firstName, lastName, dateOfBirth, gender } = saved;

    setFormData((prev) => ({
      ...prev,
      firstName: firstName || "",
      lastName: lastName || "",
      dateOfBirth: dateOfBirth || "",
      gender: gender || "",
    }));
  }, []);

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

        <div className="flex justify-between mt-4">
          <button
            onClick={back}
            className="bg-gray-300 hover:bg-gray-400 text-black px-4 py-2 rounded"
          >
            Back
          </button>

          <button
            onClick={handleNext}
            className="bg-blue-500 hover:bg-blue-600 text-white px-4 py-2 rounded"
          >
            Next
          </button>
        </div>
      </div>
    </div>
  );
};

export default Step3PersonalInfo;

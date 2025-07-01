import { useEffect, useState } from "react";
import profilePlaceholder from "../../assets/profile-placeholder.png";

const Step1ProfilePhoto = ({ formData, setFormData, next }) => {
  const [uploading, setUploading] = useState(false);

  const handleFileChange = (e) => {
    const file = e.target.files[0];
    if (!file) return;

    const reader = new FileReader();
    reader.onloadend = () => {
      const base64 = reader.result;

      const existingData = JSON.parse(
        localStorage.getItem("guestProfile") || "{}"
      );

      const updatedData = {
        ...existingData,
        profilePhoto: base64,
      };

      localStorage.setItem("guestProfile", JSON.stringify(updatedData));

      setFormData((prev) => ({
        ...prev,
        profilePhoto: base64,
      }));
    };

    reader.readAsDataURL(file);
  };

  const handleNext = () => {
    next();
  };

  useEffect(() => {
    const saved = JSON.parse(localStorage.getItem("guestProfile") || "{}");
    if (saved.profilePhoto) {
      setFormData((prev) => ({
        ...prev,
        profilePhoto: saved.profilePhoto,
      }));
    }
  }, []);

  return (
    <div className="bg-white p-6 rounded shadow max-w-md mx-auto">
      <h2 className="text-xl font-bold mb-4">Step 1: ატვირთე ფოტო</h2>
      <div className="flex flex-col items-center">
        <img
          src={formData.profilePhoto || profilePlaceholder}
          alt="Profile"
          className="w-18 h-18 rounded-full object-cover mb-4 border"
        />

        <input
          type="file"
          accept="image/*"
          onChange={handleFileChange}
          className="mb-4"
        />

        <button
          className="mt-2 bg-blue-500 text-white px-4 py-2 rounded"
          onClick={handleNext}
        >
          Next
        </button>
      </div>
    </div>
  );
};

export default Step1ProfilePhoto;

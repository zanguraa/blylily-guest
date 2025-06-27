const Step1ProfilePhoto = ({ formData, setFormData, next }) => {
  const handleNext = () => {
    // optional validation here
    next();
  };

  return (
    <div className="bg-white p-6 rounded shadow">
      <h2 className="text-xl font-bold mb-4">Step 1: Upload Photo</h2>
      <div className="flex flex-col items-center">
        <img
          src={formData.profilePhoto || "/assets/profile-placeholder.png"}
          alt="Profile"
          className="w-24 h-24 rounded-full object-cover mb-4"
        />
        <input
          type="file"
          accept="image/*"
          onChange={(e) =>
            setFormData((prev) => ({
              ...prev,
              profilePhoto: URL.createObjectURL(e.target.files[0]),
            }))
          }
        />
        <button
          className="mt-6 bg-blue-500 text-white px-4 py-2 rounded"
          onClick={handleNext}
        >
          Next
        </button>
      </div>
    </div>
  );
};

export default Step1ProfilePhoto;

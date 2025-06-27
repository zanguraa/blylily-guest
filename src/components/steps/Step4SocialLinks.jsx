import { useState } from "react";

const Step4SocialLinks = ({ formData, setFormData, next }) => {
  const [error, setError] = useState("");

  const handleLinkChange = (index, value) => {
    const updatedLinks = [...formData.socialLinks];
    updatedLinks[index] = value;
    setFormData((prev) => ({ ...prev, socialLinks: updatedLinks }));
  };

  const handleAddLink = () => {
    setFormData((prev) => ({
      ...prev,
      socialLinks: [...prev.socialLinks, ""],
    }));
  };

  const handleDeleteLink = (index) => {
    const updatedLinks = [...formData.socialLinks];
    updatedLinks.splice(index, 1);
    setFormData((prev) => ({ ...prev, socialLinks: updatedLinks }));
  };

  const handleNext = () => {
    next();
  };

  return (
    <div className="bg-white p-6 rounded shadow max-w-md mx-auto">
      <h2 className="text-xl font-bold mb-4">Social Media Links</h2>

      <div className="grid grid-cols-1 gap-4">
        {formData.socialLinks.map((link, index) => (
          <div key={index} className="flex items-center gap-2">
            <input
              type="url"
              value={link}
              onChange={(e) => handleLinkChange(index, e.target.value)}
              placeholder={`Social Link #${index + 1}`}
              className="border rounded px-3 py-2 w-full"
            />
            <button
              type="button"
              onClick={() => handleDeleteLink(index)}
              className="text-red-500 text-sm"
            >
              Delete
            </button>
          </div>
        ))}

        <button
          type="button"
          onClick={handleAddLink}
          className="text-blue-600 font-medium underline"
        >
          + Add more
        </button>

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

export default Step4SocialLinks;

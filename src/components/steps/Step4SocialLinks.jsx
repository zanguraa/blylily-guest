import { useEffect, useState } from "react";
import {
  FaFacebook,
  FaInstagram,
  FaLinkedin,
  FaXTwitter,
  FaTiktok,
} from "react-icons/fa6";

const Step4SocialLinks = ({ formData, setFormData, next, back }) => {
  const [error, setError] = useState("");

  const socialPlatforms = [
    { name: "Facebook", icon: <FaFacebook /> },
    { name: "Instagram", icon: <FaInstagram /> },
    { name: "LinkedIn", icon: <FaLinkedin /> },
    { name: "X", icon: <FaXTwitter /> },
    { name: "TikTok", icon: <FaTiktok /> },
  ];

  useEffect(() => {
    const saved = JSON.parse(localStorage.getItem("guestProfile") || "{}");
    if (saved.socialLinks) {
      setFormData((prev) => ({
        ...prev,
        socialLinks: saved.socialLinks,
      }));
    }
  }, []);

  const saveToLocalStorage = (updatedLinks) => {
    const existing = JSON.parse(localStorage.getItem("guestProfile") || "{}");
    const updated = { ...existing, socialLinks: updatedLinks };
    localStorage.setItem("guestProfile", JSON.stringify(updated));
  };

  const handleLinkChange = (index, field, value) => {
    const updatedLinks = [...formData.socialLinks];
    updatedLinks[index][field] = value;

    setFormData((prev) => ({
      ...prev,
      socialLinks: updatedLinks,
    }));

    saveToLocalStorage(updatedLinks);
  };

  const handleAddLink = () => {
    const newLinks = [...formData.socialLinks, { platform: "", url: "" }];
    setFormData((prev) => ({
      ...prev,
      socialLinks: newLinks,
    }));
    saveToLocalStorage(newLinks);
  };

  const handleDeleteLink = (index) => {
    const updatedLinks = [...formData.socialLinks];
    updatedLinks.splice(index, 1);

    setFormData((prev) => ({
      ...prev,
      socialLinks: updatedLinks,
    }));
    saveToLocalStorage(updatedLinks);
  };

  const handleNext = () => {
    next();
  };

  return (
    <div className="bg-white p-6 rounded shadow max-w-md mx-auto">
      <h2 className="text-xl font-bold mb-4">Social Media Links</h2>

      <div className="grid grid-cols-1 gap-4">
        {formData.socialLinks.map((link, index) => (
          <div key={index} className="flex flex-col gap-2 border p-3 rounded">
            <div className="flex items-center gap-2">
              <select
                value={link.platform}
                onChange={(e) =>
                  handleLinkChange(index, "platform", e.target.value)
                }
                className="border rounded px-3 py-2 w-full"
              >
                <option value="">Select Platform</option>
                {socialPlatforms.map((sp) => (
                  <option key={sp.name} value={sp.name}>
                    {sp.name}
                  </option>
                ))}
              </select>

              {link.platform && (
                <span className="text-xl">
                  {
                    socialPlatforms.find((sp) => sp.name === link.platform)
                      ?.icon
                  }
                </span>
              )}
            </div>

            <input
              type="url"
              value={link.url}
              onChange={(e) => handleLinkChange(index, "url", e.target.value)}
              placeholder="Enter profile URL"
              className="border rounded px-3 py-2 w-full"
            />

            <button
              type="button"
              onClick={() => handleDeleteLink(index)}
              className="text-red-500 text-sm self-end"
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
          + Add Social Link
        </button>

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

export default Step4SocialLinks;

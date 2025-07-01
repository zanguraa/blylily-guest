import { useEffect, useState } from "react";
import {
  FaFacebook,
  FaInstagram,
  FaLinkedin,
  FaXTwitter,
  FaTiktok,
} from "react-icons/fa6";

const platformIcons = {
  Facebook: <FaFacebook />,
  Instagram: <FaInstagram />,
  LinkedIn: <FaLinkedin />,
  X: <FaXTwitter />,
  TikTok: <FaTiktok />,
};

const Profile = () => {
  const [profile, setProfile] = useState(null);
  const [activeTab, setActiveTab] = useState("about");

  useEffect(() => {
    const saved = localStorage.getItem("completedProfile");
    if (saved) {
      setProfile(JSON.parse(saved));
    }
  }, []);

  if (!profile) {
    return (
      <p className="text-center mt-10 text-gray-500">Profile not found.</p>
    );
  }

  const {
    profilePhoto,
    firstName,
    lastName,
    email,
    gender,
    dateOfBirth,
    address,
    socialLinks,
  } = profile;

  const fullName = `${firstName || ""} ${lastName || ""}`.trim();
  const photo = profilePhoto || "/assets/profile-placeholder.png";

  return (
    <div className="flex max-w-6xl mx-auto mt-8">
      <aside className="w-1/4 pr-4">
        <nav className="bg-white rounded shadow p-4">
          <ul className="space-y-3 text-gray-700 text-sm font-medium">
            <li
              className={`cursor-pointer ${
                activeTab === "about" ? "text-blue-600" : ""
              }`}
              onClick={() => setActiveTab("about")}
            >
              About Me
            </li>
            <li
              className={`cursor-pointer ${
                activeTab === "trips" ? "text-blue-600" : ""
              }`}
              onClick={() => setActiveTab("trips")}
            >
              Past Trips
            </li>
            <li
              className={`cursor-pointer ${
                activeTab === "messages" ? "text-blue-600" : ""
              }`}
              onClick={() => setActiveTab("messages")}
            >
              Messages
            </li>
          </ul>
        </nav>
      </aside>

      <main className="w-3/4 bg-white p-6 rounded shadow">
        {/* Header */}
        <div className="flex items-center gap-6 mb-6">
          <img
            src={photo}
            alt="Profile"
            className="w-20 h-20 rounded-full border object-cover"
          />
          <div>
            <h2 className="text-2xl font-bold">{fullName}</h2>
            {email && <p className="text-sm text-gray-600">{email}</p>}
            {gender && (
              <p className="text-sm text-gray-500">Gender: {gender}</p>
            )}
            {dateOfBirth && (
              <p className="text-sm text-gray-500">DOB: {dateOfBirth}</p>
            )}
            {address?.country && (
              <p className="text-sm text-gray-500">
                {address?.country}, {address?.city}
              </p>
            )}
            {socialLinks?.length > 0 && (
              <div className="flex gap-3 mt-3">
                {socialLinks.map((link, idx) => (
                  <a
                    key={idx}
                    href={link.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-gray-500 hover:text-blue-600 text-xl"
                    title={link.platform}
                  >
                    {platformIcons[link.platform] || "🔗"}
                  </a>
                ))}
              </div>
            )}
          </div>
        </div>

        {activeTab === "about" && (
          <section>
            <h3 className="text-lg font-semibold mb-2">About Me</h3>
            <p className="text-sm text-gray-700">
              Welcome to my profile! I'm {fullName || "a guest"} from{" "}
              {address?.country || "somewhere"}.
            </p>
          </section>
        )}

        {activeTab === "trips" && (
          <section>
            <h3 className="text-lg font-semibold mb-2">Past Trips</h3>
            <p className="text-sm text-gray-700">No past trips yet.</p>
          </section>
        )}

        {activeTab === "messages" && (
          <section>
            <h3 className="text-lg font-semibold mb-2">Messages</h3>
            <p className="text-sm text-gray-700">No messages yet.</p>
          </section>
        )}
      </main>
    </div>
  );
};

export default Profile;

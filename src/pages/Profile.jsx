import { useState } from "react";

const Profile = () => {
  // დროებითი ფეიქ დეიტა
  const profile = {
    photo: "/assets/profile-placeholder.png",
    name: "John Smith",
    role: "Guest",
    email: "j.smith@example.com",
    work: "Developer",
    activeYears: 3,
    verified: true,
    socialLinks: [
      "linkedin.com/in/john",
      "facebook.com/john",
      "twitter.com/john",
    ],
    reviews: [
      {
        text: "John was a wonderful guest, respectful and tidy.",
        date: "March 10, 2024",
      },
      {
        text: "Great guest, friendly and easy to communicate with.",
        date: "January 5, 2024",
      },
    ],
    booking: {
      host: "Lisa",
      city: "New York, NY",
      dates: "Apr 25 – Apr 30",
      apartment: "Private Studio Apartment",
      status: "Ongoing Stay",
    },
  };

  const [activeTab, setActiveTab] = useState("about");

  return (
    <div className="flex max-w-6xl mx-auto mt-8">
      {/* Aside Menu */}
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

      {/* Main Profile Content */}
      <main className="w-3/4 bg-white p-6 rounded shadow">
        {/* Profile Header */}
        <div className="flex items-center gap-6 mb-6">
          <img
            src={profile.photo}
            alt="Profile"
            className="w-24 h-24 rounded-full border object-cover"
          />
          <div>
            <h2 className="text-2xl font-bold">{profile.name}</h2>
            <p className="text-gray-500">{profile.role}</p>
            <div className="text-sm text-gray-600 flex gap-2 items-center mt-1">
              <span>{profile.activeYears} years active</span>
              {profile.verified && (
                <span className="text-blue-600">✅ Identity verified</span>
              )}
            </div>
            <p className="mt-2 text-sm">
              <strong>My work:</strong> {profile.work}
            </p>
            <p className="text-sm text-gray-600">{profile.email}</p>
            <div className="flex gap-3 mt-2">
              <a href="#" className="text-gray-500 hover:text-blue-600">
                🔗
              </a>
              <a href="#" className="text-gray-500 hover:text-blue-600">
                🔗
              </a>
              <a href="#" className="text-gray-500 hover:text-blue-600">
                🔗
              </a>
            </div>
          </div>
        </div>

        {/* Reviews */}
        <section className="mb-6">
          <h3 className="text-lg font-semibold mb-2">Reviews</h3>
          <div className="space-y-3">
            {profile.reviews.map((rev, idx) => (
              <div
                key={idx}
                className="border rounded p-3 text-sm text-gray-700 bg-gray-50"
              >
                <p>{rev.text}</p>
                <p className="text-xs text-gray-500 mt-1">{rev.date}</p>
              </div>
            ))}
          </div>
        </section>

        {/* Current Booked Room */}
        <section>
          <h3 className="text-lg font-semibold mb-2">Current Booked Room</h3>
          <div className="border rounded p-4 flex gap-4 items-start bg-gray-50">
            <img
              src="/assets/profile-placeholder.png"
              alt="Host"
              className="w-12 h-12 rounded-full object-cover"
            />
            <div className="flex-1">
              <div className="flex justify-between items-center">
                <h4 className="font-semibold">{profile.booking.host}</h4>
                <span className="text-sm text-green-600 border border-green-600 rounded-full px-2 py-0.5">
                  {profile.booking.status}
                </span>
              </div>
              <p className="text-sm text-gray-600">{profile.booking.city}</p>
              <p className="text-sm text-gray-600">{profile.booking.dates}</p>
              <p className="text-sm text-gray-600 mb-2">
                {profile.booking.apartment}
              </p>

              <div className="flex gap-2 flex-wrap">
                <button className="border border-blue-500 text-blue-500 rounded px-3 py-1 text-sm hover:bg-blue-50">
                  Order Room
                </button>
                <button className="border border-blue-500 text-blue-500 rounded px-3 py-1 text-sm hover:bg-blue-50">
                  Request Food
                </button>
                <button className="border border-blue-500 text-blue-500 rounded px-3 py-1 text-sm hover:bg-blue-50">
                  Request Transport
                </button>
              </div>
            </div>
          </div>
        </section>
      </main>
    </div>
  );
};

export default Profile;

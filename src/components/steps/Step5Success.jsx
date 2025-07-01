import { useEffect } from "react";
import { useNavigate } from "react-router-dom";

const Step5Success = () => {
  const navigate = useNavigate();

  useEffect(() => {
    const guestProfile = JSON.parse(
      localStorage.getItem("guestProfile") || "{}"
    );

    localStorage.setItem("completedProfile", JSON.stringify(guestProfile));

    //localStorage.removeItem("guestProfile");

    const timer = setTimeout(() => {
      navigate("/profile");
    }, 3000);

    return () => clearTimeout(timer);
  }, [navigate]);

  return (
    <div className="flex flex-col items-center justify-center h-[60vh] text-center px-4">
      <svg
        className="w-20 h-20 text-green-500 mb-4"
        fill="none"
        stroke="currentColor"
        strokeWidth="2"
        viewBox="0 0 24 24"
      >
        <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
      </svg>
      <h1 className="text-2xl font-semibold mb-2">Profile Created!</h1>
      <p className="text-gray-600 mb-4">
        Everything looks great. We’re redirecting you to your profile page...
      </p>
      <p className="text-sm text-gray-400">
        If not redirected, click{" "}
        <span
          className="underline cursor-pointer text-blue-600"
          onClick={() => navigate("/profile")}
        >
          here
        </span>
        .
      </p>
    </div>
  );
};

export default Step5Success;

const StepProgressBar = ({ currentStep }) => {
  return (
    <div className="flex justify-center space-x-4 mb-6">
      {[1, 2, 3, 4, 5].map((stepNum) => (
        <div
          key={stepNum}
          className={`w-8 h-8 rounded-full flex items-center justify-center border text-sm font-bold ${
            stepNum <= currentStep
              ? "bg-blue-500 text-white"
              : "bg-gray-200 text-gray-500"
          }`}
        >
          {stepNum}
        </div>
      ))}
    </div>
  );
};
export default StepProgressBar;

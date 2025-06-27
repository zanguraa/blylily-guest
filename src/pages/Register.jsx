import { useState } from "react";
import Step1ProfilePhoto from "../components/steps/Step1ProfilePhoto";
import Step2ContactInfo from "../components/steps/Step2ContactInfo";
import Step3PersonalInfo from "../components/steps/Step3PersonalInfo";
import Step4SocialLinks from "../components/steps/Step4SocialLinks";
import Step5Success from "../components/steps/Step5Success";
import StepProgressBar from "../components/StepProgressBar";

const Register = () => {
  const [step, setStep] = useState(1);
  const [formData, setFormData] = useState({
    profilePhoto: null,
    email: "",
    phone: "",
    dateOfBirth: "",
    gender: "",
    address: {
      country: "",
      city: "",
      street: "",
      houseNumber: "",
    },
    firstName: "",
    lastName: "",
    socialLinks: [],
  });

  const nextStep = () => setStep((prev) => prev + 1);
  const prevStep = () => setStep((prev) => prev - 1);

  return (
    <div className="p-6 max-w-4xl mx-auto">
      <StepProgressBar currentStep={step} />
      {step === 1 && (
        <Step1ProfilePhoto
          formData={formData}
          setFormData={setFormData}
          next={nextStep}
        />
      )}
      {step === 2 && (
        <Step2ContactInfo
          formData={formData}
          setFormData={setFormData}
          next={nextStep}
        />
      )}
      {step === 3 && (
        <Step3PersonalInfo
          formData={formData}
          setFormData={setFormData}
          next={nextStep}
        />
      )}
      {step === 4 && (
        <Step4SocialLinks
          formData={formData}
          setFormData={setFormData}
          next={nextStep}
        />
      )}
      {step === 5 && <Step5Success formData={formData} />}
    </div>
  );
};

export default Register;

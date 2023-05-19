import React, { ReactNode, createContext, useContext } from "react";

interface FormContextProps {
  currentStep: number;
  totalSteps: number;
  formData: { [key: string]: any };
  setFormData: React.Dispatch<React.SetStateAction<{ [key: string]: any }>>;
  goToNextStep: () => void;
  goToPreviousStep: () => void;
  goToStep: (step: number) => void;
  handleSubmit: () => void;
}

const FormContext = createContext<FormContextProps>({
  currentStep: 0,
  totalSteps: 1,
  formData: {},
  setFormData: () => {},
  goToNextStep: () => {},
  goToPreviousStep: () => {},
  goToStep: () => {},
  handleSubmit: () => {},
});

export const useFormContext = (): FormContextProps => useContext(FormContext);

interface FormProviderProps {
  children: ReactNode;
}

export const FormProvider = ({ children }: FormProviderProps) => {
  const [currentStep, setCurrentStep] = React.useState(1);
  const [formData, setFormData] = React.useState<{ [key: string]: any }>({});

  const goToNextStep = () => {
    setCurrentStep((prevStep) => prevStep + 1);
  };

  const goToPreviousStep = () => {
    setCurrentStep((prevStep) => prevStep - 1);
  };

  const goToStep = (step: number) => {
    setCurrentStep(step);
  };

  const handleSubmit = () => {
    // Lógica para enviar o formulário
    console.log(formData);
  };

  const formContextValue: FormContextProps = {
    currentStep,
    totalSteps: 3, // Defina o número total de etapas do formulário
    formData,
    setFormData,
    goToNextStep,
    goToPreviousStep,
    goToStep,
    handleSubmit,
  };

  return (
    <FormContext.Provider value={formContextValue}>
      {children}
    </FormContext.Provider>
  );
};

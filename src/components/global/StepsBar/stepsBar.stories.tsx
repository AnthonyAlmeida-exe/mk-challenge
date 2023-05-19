import { Meta } from "@storybook/react";
import { StepsBar } from "./";
import classNames from "classnames";

import * as S from "./styles";
import { useFormContext } from "../../../context/useFormContext";

export default {
  title: "Components/StepsBar",
  component: StepsBar,
} as Meta;

const StepClasses = (currentStep: number, index: number) =>
  classNames({
    actualStep: currentStep === index,
    filled: currentStep > index,
  });

const Template = () => {
  const { currentStep } = useFormContext();

  const steps = [
    { title: "Produto" },
    { title: "Cliente" },
    { title: "Anexar Arquivo" },
    { title: "Pagamentos" },
    { title: "Contrato" },
  ];

  return (
    <S.StepsWrapper>
      {steps.map((e, index) => (
        <S.Step className={StepClasses(currentStep, index)} key={e.title}>
          <span>{index + 1}</span> <p>{e?.title} </p>
          <div className="complement" />
        </S.Step>
      ))}
    </S.StepsWrapper>
  );
};

export const Default = Template.bind({});

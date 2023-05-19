import classNames from "classnames";
import * as S from "./styles";

import { useFormContext } from "../../../context/useFormContext";

export function StepsBar() {
  const { currentStep } = useFormContext();
  const StepClasses = (index: number) =>
    classNames({
      actualStep: currentStep === index,
      filled: currentStep > index,
    });
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
        <S.Step className={StepClasses(index)} key={e.title}>
          <span>{index + 1}</span> <p>{e?.title} </p>
          <div className="complement" />
        </S.Step>
      ))}
    </S.StepsWrapper>
  );
}

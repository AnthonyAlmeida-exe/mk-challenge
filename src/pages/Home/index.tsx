import { AmountBar } from "@/components/global/AmountBar";
import { StepsBar } from "../../components/global/StepsBar";
import { StepClientRegister } from "../../components/local/StepClientRegister";

import { useFormContext } from "../../context/useFormContext";
import * as S from "./styles";
import { StepDocumentsRegister } from "@/components/local/StepDocumentsRegister ";

export function Home() {
  const { currentStep } = useFormContext();

  return (
    <div
      style={{
        display: "flex",
        height: "100%",
        width: "100%",
      }}
    >
      <S.WhiteBar />
      <S.PageWrapper>
        <S.PageTitle>Vendas</S.PageTitle>
        <S.PageSubTitle>Nova venda</S.PageSubTitle>

        <StepsBar />
        <AmountBar />
        {currentStep === 1 && <StepClientRegister />}
        {currentStep === 2 && <StepDocumentsRegister />}
      </S.PageWrapper>
    </div>
  );
}

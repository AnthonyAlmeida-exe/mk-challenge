import { ReactNode } from "react";
import * as S from "./styles";
import { Button } from "../Button";

import { Divider } from "../Divider";

interface FormWrapperProps {
  title?: string;
  children?: ReactNode;
  cta?: () => void;
  goBack?: () => void;
  disabled?: boolean;
}

export function FormWrapper({
  title,
  goBack,
  children,
  cta,
  disabled,
}: FormWrapperProps) {
  return (
    <S.FormWrapper>
      <S.TitleWrapper>
        <S.Title>{title}</S.Title>
        <S.FakeBorder />
      </S.TitleWrapper>

      {children}
      <Divider />
      <S.CTAsWrapper>
        <div>
          <Button
            title={"Continuar"}
            type="submit"
            onClick={cta}
            disabled={disabled}
          />

          <Button title={"Voltar"} modifier="link" onClick={goBack} />
        </div>
      </S.CTAsWrapper>
    </S.FormWrapper>
  );
}

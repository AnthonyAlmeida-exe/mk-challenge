import { ButtonHTMLAttributes } from "react";
import * as S from "./styles";

export interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  title: string;
  modifier?: "default" | "link" | "link green";
}

export function Button({ title, modifier = "default", ...rest }: ButtonProps) {
  return (
    <S.Button className={modifier} {...rest}>
      {title}
    </S.Button>
  );
}

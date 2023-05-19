import { InputHTMLAttributes, forwardRef } from "react";
import InputMask from "react-input-mask";
import * as S from "./styles";

interface InputProps extends InputHTMLAttributes<HTMLInputElement> {
  label: string;
  mask?: string;
  error?: string;
}

const Input = forwardRef<HTMLInputElement, InputProps>(
  ({ label, mask, error, ...rest }, ref) => {
    const inputProps = mask ? { mask, ...rest } : rest;

    return (
      <>
        <S.Label>
          <p>{label}</p>
          {mask ? (
            <InputMask
              ref={ref}
              {...(inputProps as any)}
              className={error && "error"}
            />
          ) : (
            <input ref={ref} {...inputProps} className={error && "error"} />
          )}
          {error && <span className="error-message">{error}</span>}
        </S.Label>
      </>
    );
  }
);

export default Input;

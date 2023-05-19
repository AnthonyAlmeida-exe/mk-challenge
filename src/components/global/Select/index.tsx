import { Ref, forwardRef } from "react";
import * as S from "./styles";
import ArrowDown from "@/assets/green-arrow-down.svg";

interface SelectProps {
  label: string;
  options: { value: string; option: string }[];
  id: string;
  className?: string;
  ref?: Ref<HTMLSelectElement>;
  error?: string;
}

export const Select = forwardRef<HTMLSelectElement, SelectProps>(
  ({ label, options, error, id, className, ...rest }, ref) => {
    return (
      <S.SelectLabel>
        <p>{label}</p>
        <S.SelectWrapper className={error && "error"}>
          <select id={id} {...rest} ref={ref}>
            {options.map((e) => (
              <option value={e.value} key={e.value}>
                {e.option}
              </option>
            ))}
          </select>

          <img src={ArrowDown} />
        </S.SelectWrapper>
        {error && <span className="error-message">{error}</span>}
      </S.SelectLabel>
    );
  }
);

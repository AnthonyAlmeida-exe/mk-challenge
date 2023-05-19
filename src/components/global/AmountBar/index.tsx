import * as S from "./styles";
import ArrowDown from "../../../assets/green-arrow-down.svg";

export function AmountBar() {
  return (
    <S.AmountBarWrapper>
      <S.DropdownWrapper>
        <p>SubTotal</p>
        <div>
          <span>R$ 114,75</span>
          <img src={ArrowDown} alt="seta verde para baixo" />
        </div>
      </S.DropdownWrapper>
    </S.AmountBarWrapper>
  );
}

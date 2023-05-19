import MkLogo from "../../../assets/mk-logo.svg";
import BellIcon from "../../../assets/bell-icon.svg";
import UserIcon from "../../../assets/user-icon.svg";
import * as S from "./styles";

export function Header() {
  return (
    <S.HeaderWrapper>
      <a href="https://admin.mknext.com.br/" target="_blank">
        <img src={MkLogo} />
      </a>

      <div>
        <img src={BellIcon} />
        <img src={UserIcon} />
      </div>
    </S.HeaderWrapper>
  );
}

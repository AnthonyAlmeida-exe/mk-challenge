import { Meta } from "@storybook/react";
import { AmountBar } from "./";

import * as S from "./styles";
import ArrowDown from "../../../assets/green-arrow-down.svg";

export default {
  title: "Components/AmountBar",
  component: AmountBar,
} as Meta;

const Template = () => (
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

export const Default = Template.bind({});

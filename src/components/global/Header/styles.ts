import styled from "styled-components";

export const HeaderWrapper = styled.header`
  background-color: ${(props) => props.theme.white};
  align-items: flex-start;
  padding: 22px 40px;
  gap: 10px;
  justify-content: space-between;
  flex-direction: row;
  display: flex;
  box-shadow: 0px 0px 30px rgba(0, 0, 0, 0.1);

  div {
    display: flex;
    gap: 24px;
  }

  img {
    cursor: pointer;
  }
`;

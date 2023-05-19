import styled from "styled-components";

export const AmountBarWrapper = styled.div`
  width: 100%;
  max-width: 782px;
  height: 50px;
  margin: 32px 0;
  background-color: white;
  border-radius: 20px;
  align-items: center;
  justify-content: flex-end;
  display: flex;
`;

export const DropdownWrapper = styled.div`
  display: flex;
  padding: 0 22px;
  max-width: 305px;
  width: 100%;
  background-color: ${(props) => props.theme.greenDark};
  border-radius: 20px;
  height: 100%;
  p {
    font-weight: 700;
    font-size: 16px;
    display: flex;
    align-items: center;
    color: white;
  }

  div {
    align-self: center;
    width: 100%;
    justify-content: space-between;
    padding-left: 30px;
    display: flex;
    cursor: pointer;
    span {
      font-weight: 700;
      font-size: 20px;
      line-height: 27px;
      color: ${(props) => props.theme.primary};
    }
  }
`;

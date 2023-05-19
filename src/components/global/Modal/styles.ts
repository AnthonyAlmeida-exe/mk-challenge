import styled from "styled-components";

export const TitleWrapper = styled.div`
  display: flex;
  flex-direction: column;
  margin-bottom: 10px;
  z-index: 50;
`;

export const Title = styled.h1`
  color: ${(props) => props.theme.primaryTextColor};
  font-weight: 700;
  font-size: 18px;
`;

export const FakeBorder = styled.div`
  width: 35px;
  background-color: ${(props) => props.theme.primary};
  height: 3px;
  border-radius: 10px;
`;
export const CtasWrapper = styled.div`
  display: flex;
  width: 100%;
  justify-content: space-between;
  button {
    :nth-child(1) {
      font-weight: 400;
      width: auto;
    }
    :nth-child(2) {
      font-weight: 400;
      width: 93px;
      height: 32;
      background-color: #e8225f;
      border-radius: 4px;
    }
  }
`;

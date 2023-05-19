import styled from "styled-components";

export const FormWrapper = styled.div`
  width: 100%;
  max-width: 782px;
  background-color: white;
  border-radius: 10px;
  padding: 20px 29px;
`;

export const TitleWrapper = styled.div`
  display: flex;
  flex-direction: column;
  margin-bottom: 10px;
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

export const CTAsWrapper = styled.div`
  display: flex;
  justify-content: space-between;

  button {
    :disabled {
      background-color: ${(props) => props.theme.border};
    }
  }
`;

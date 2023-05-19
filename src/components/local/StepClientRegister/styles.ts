import styled from "styled-components";

export const InputsWrapper = styled.div`
  display: flex;
  flex-direction: row;
  width: 100%;
  align-items: flex-end;
  .search {
    width: 80px;
    background-color: ${(props) => props.theme.greenDark};
    border-radius: 4px;
    margin-left: 10px;
  }

  .register-client {
    max-width: 140px;
    background-color: ${(props) => props.theme.secondary};
    border-radius: 4px;
    margin-left: 10px;

    @media (max-width: 1000px) {
      font-size: 10px;
    }
  }
`;

export const FormUserWrapper = styled.div`
  div {
    display: flex;
    max-width: 410px;
    gap: 12px;
    input {
      width: 100%;
    }
  }
`;

export const SecondFormContainer = styled.div`
  .birthday,
  .nationality {
    width: 130px;
  }

  max-width: 298px;
  width: 100%;
`;

export const RefreshButtonWrapper = styled.div`
  button {
    background-color: transparent;
    border: 1px solid ${(props) => props.theme.greenDark};
    font-weight: 700;
    font-size: 13px;
    color: ${(props) => props.theme.greenDark};
  }
`;

export const ThirtyFormContainer = styled.div`
  max-width: 211px;
  width: 100%;
`;

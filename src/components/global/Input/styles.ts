import styled from "styled-components";

export const Label = styled.label`
  display: flex;
  flex-direction: column;
  color: ${(props) => props.theme.greenDark};
  font-weight: 700;
  font-size: 13px;

  max-width: 410px;

  .error-message {
    font-size: 10px;
    position: absolute;
    margin-top: 63px;
    margin-left: 10px;
    color: red;
  }

  input {
    border: 1px solid ${(props) => props.theme.border};
    padding: 5px 14px;
    border-radius: 5px;
    margin: 10px 0;
    font-size: 13px;

    &.error {
      border: 1px solid red;
    }

    ::placeholder {
      font-weight: 400;
      font-size: 13px;
      color: #c6d5db;
    }
  }
`;

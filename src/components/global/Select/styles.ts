import styled from "styled-components";

export const SelectLabel = styled.label`
  width: 100%;
  max-width: 318px;
  p {
    font-weight: 600;
    font-size: 13px;
    color: ${(props) => props.theme.greenDark};
    margin: 10px 0;
  }
  .error-message {
    font-size: 10px;
    position: absolute;
    font-weight: 700;
    margin-left: 10px;
    color: red;
  }
`;

export const SelectWrapper = styled.div`
  padding: 5px 16px 5px 14px;
  height: 32px;
  border: 1px solid #c6d5db;
  &.error {
    border: 1px solid red;
  }
  width: 100%;
  display: flex;
  flex-direction: row;
  select {
    -moz-appearance: none;
    -webkit-appearance: none;
    appearance: none;
    border: none;
    width: 98%;
    padding: 0 15px;
    option {
      width: 150px;
      p {
        font-weight: 400;
        font-size: 13px;
        line-height: 21px;
        color: #205266;
        padding: 0 15px;
        background-color: red;
      }
    }
  }

  img {
    width: 10px;
    margin-right: 5px;
  }
`;

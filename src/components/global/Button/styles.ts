import styled from "styled-components";

export const Button = styled.button`
  width: 140px;
  height: 32px;
  border-radius: 6px;
  border: none;
  background-color: ${(props) => props.theme.primary};
  color: white;
  font-weight: 500;
  cursor: pointer;
  transition: color 1s ease-in;
  font-size: 13px;

  &:hover {
    opacity: 0.8;
    transition: opacity 0.2s ease-in-out;
  }

  &.link {
    background: transparent;
    color: ${(props) => props.theme.primaryTextColor};
    text-decoration: underline;
    font-weight: 700;
    font-size: 13px;
    width: 100px;

    &:hover {
      color: #163643;
      transition: color 0.2s;
    }

    &.green {
      color: ${(props) => props.theme.primary};
      font-weight: 600;
      width: auto;
    }
  }
`;

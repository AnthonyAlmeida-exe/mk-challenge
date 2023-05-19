import styled from "styled-components";

export const StepsWrapper = styled.div`
  border-radius: 50px;
  width: 100%;
  background-color: white;
  display: flex;
  justify-content: space-around;
  height: 30px;
  align-items: center;

  @media (min-width: 481px) {
    flex-direction: row;
    align-items: center;
    height: 57px;
    position: relative;
    max-width: 782px;
    justify-content: flex-start;
    flex-wrap: nowrap;
  }
`;

export const Step = styled.div`
  font-size: 10px;
  height: 100%;
  display: flex;
  align-items: center;
  gap: 5px;
  justify-content: center;
  border-radius: 4px;
  width: 100%;
  font-weight: 700;
  text-align: center;
  border-radius: 20px;
  color: ${(props) => props.theme.secondary};

  span {
    display: none;
  }

  .complement {
    position: absolute;
    margin-left: -70px;
    max-width: 50px;
    width: 100%;
    height: 30px;
    z-index: -3;
  }
  :first-child {
    .complement {
      display: none;
    }
  }
  &.actualStep {
    background-color: ${(props) => props.theme.secondary};
    z-index: 2;
    color: white;
    .complement {
      background: ${(props) => props.theme.secondary};
    }
  }

  &.filled {
    background-color: ${(props) => props.theme.primary};
    color: white;
    z-index: 3;

    span {
      color: white;
    }
    .complement {
      background: ${(props) => props.theme.primary};
    }
  }

  @media (min-width: 481px) {
    font-size: 12px;
    span {
      display: block;
      color: ${(props) => props.theme.primary};
    }

    .complement {
      max-width: 10%;
      height: 100%;
      margin-left: -20%;
    }
    &.filled {
      background-color: ${(props) => props.theme.primary};
      z-index: 3;
    }
    &.actualStep {
      background-color: ${(props) => props.theme.secondary};
      color: white;
      z-index: 2;
      .complement {
        background-color: ${(props) => props.theme.secondary};
      }
    }
  }
`;

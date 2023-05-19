import styled from "styled-components";

export const PageTitle = styled.p`
  font-weight: 700;
  font-size: 16px;
  color: ${(props) => props.theme.greenDark};
`;
export const PageSubTitle = styled.p`
  font-weight: 700;
  font-size: 20px;
  color: ${(props) => props.theme.primary};
  margin-bottom: 32px;
`;
export const PageWrapper = styled.div`
  display: flex;
  width: 100%;
  flex-direction: column;
  padding: 30px 45px;
  @media (max-width: 768px) {
    padding: 10px;
  }
`;

export const WhiteBar = styled.div`
  height: 150vw;
  background-color: white;
  width: 35%;
  max-width: 350px;

  @media (max-width: 768px) {
    display: none;
  }
`;

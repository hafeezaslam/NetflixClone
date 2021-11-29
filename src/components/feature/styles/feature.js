import styled from "styled-components/macro";

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  border-bottom: 8px solid #222;
  text-align: center;
  justify-content: center;
  height: 630px;
  padding: 0 45px;
`;

export const Title = styled.h1`
  color: white;
  font-size: 3.125rem;
  font-weight: 500;
  max-width: 640px;
  margin: 0 auto;
  @media (max-width: 600px) {
    font-size: 35px;
  }
`;

export const SubTitle = styled.h2`
  color: white;
  font-size: 26px;
  font-weight: normal;
  margin: 16px auto;
  @media (max-width: 600px) {
    font-size: 18px;
  }
`;

import styled from "styled-components/macro";

export const Inner = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  max-width: 1100px;
  width: 100%;
  margin: auto;
  box-sizing: border-box;

  &:nth-of-type(even) {
    flex-direction: row-reverse;
  }

  @media (max-width: 1000px) {
    text-align: center;

    &:nth-child(n) {
      flex-direction: column;
    }
  }
`;

export const Item = styled.div`
  border-bottom: 8px solid #222;
  padding: 3rem 5%;
  color: #fff;

  &:nth-child(even) ${Inner} {
    flex-direction: row-reverse;
  }

  @media (max-width: 1000px) {
    &:nth-child(n) ${Inner} {
      flex-direction: column;
    }
  }
`;

export const Container = styled.div``;

export const Pane = styled.div`
  flex: 1;
`;

export const Title = styled.h1`
  font-size: 3rem;
  margin-bottom: 8px;
  line-height: 1.1;

  @media (max-width: 600px) {
    font-size: 2.2rem;
  }
`;

export const SubTitle = styled.h2`
  font-size: 1.7rem;
  font-weight: normal;

  @media (max-width: 600px) {
    font-size: 1.1rem;
  }
`;

export const Image = styled.img`
  max-width: 100%;
  height: auto;
`;

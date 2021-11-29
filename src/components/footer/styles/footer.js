import styled from "styled-components/macro";

export const Container = styled.footer`
  display: grid;
  row-gap: 2rem;
  column-gap: 15px;
  justify-content: center;
  grid-template-columns: repeat(auto-fill, minmax(210px, 1fr));
  max-width: 1000px;
  margin: auto;
  padding: 4.5rem 5%;
  color: #757575;

  @media (max-width: 1000px) {
    grid-template-columns: repeat(auto-fill, minmax(150px, 1fr));
    /* padding: 70px 45px; */
  }
`;

export const Title = styled.p`
  grid-column: 1/-1;
`;

export const Column = styled.div`
  display: flex;
  flex-direction: column;
`;

export const Link = styled.a`
  font-size: 14px;
  text-decoration: none;
  color: #757575;
  margin-bottom: 1rem;

  &:last-of-type {
    margin-bottom: 0;
  }
`;

export const Text = styled.p`
  grid-column: 1/-1;
  margin-bottom: 40px;
`;

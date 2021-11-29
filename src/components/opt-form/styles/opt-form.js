import styled from "styled-components/macro";

export const Container = styled.div`
  margin-top: 20px;
  @media (max-width: 1000px) {
    padding: 0 5%;
  }
`;

export const Pane = styled.div`
  display: flex;
  justify-content: center;

  @media (max-width: 600px) {
    width: 100%;
    flex-direction: column;
  }
`;

export const Input = styled.input`
  /* flex: 1; */
  font-size: 1rem;
  padding: 0 10px;
  width: 100%;
  max-width: 450px;
  box-sizing: border-box;
  border: none;
  height: 60px;
  @media (max-width: 1000px) {
    font-size: 0.9rem;
    max-height: 48px;
    margin-bottom: 1rem;
  }
`;

export const Text = styled.h3`
  font-size: 1.1rem;
  font-weight: normal;
  color: #fff;
  text-align: center;

  @media (min-width: 1000px) {
    font-size: 1.2rem;
  }
`;

export const Button = styled.button`
  display: flex;
  cursor: pointer;
  height: 60px;
  font-size: 26px;
  padding: 0 32px;
  border: none;
  margin-left: 1px;
  color: #fff;
  align-items: center;
  background-color: #e50914;

  &:hover {
    background-color: #f40612;
  }
  img {
    width: 16px;
    margin-left: 0.8rem;
    filter: brightness(0) invert(1);
    @media (max-width: 1000px) {
      width: 10px;
      margin-left: 0.5rem;
    }
  }

  @media (max-width: 1000px) {
    height: 40px;
    font-size: 1.625rem;
    align-self: center;
    padding: 0 1rem;
  }
`;

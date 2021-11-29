import styled from "styled-components/macro";

export const Container = styled.div`
  border-bottom: 8px solid #222;
  padding: 70px 45px;
  @media (max-width: 600px) {
    padding: 50px 0;
  }
`;

export const Inner = styled.div`
  flex-direction: column;
  max-width: 815px;
  margin: 0 auto;
`;

export const Title = styled.h1`
  font-size: 3.125rem;
  line-height: 1.1;
  margin-top: 0;
  margin-bottom: 3rem;
  color: #fff;
  text-align: center;

  @media (max-width: 1000px) {
    font-size: 1.625rem;
  }

  @media (max-width: 600px) {
    padding: 0 5%;
    font-size: 1.625rem;
  }
`;

export const Item = styled.div`
  color: #fff;
  margin-bottom: 10px;
  font-size: 1.625rem;

  &:nth-last-of-type(2) {
    margin-bottom: 3rem;
  }

  @media (max-width: 1000px) {
    font-size: 1.25rem;
  }

  @media (max-width: 600px) {
    font-size: 1.125rem;
  }
`;

export const Header = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 1.3rem 2rem;
  cursor: pointer;
  margin-bottom: 1px;
  font-weight: normal;
  background-color: #303030;

  img {
    filter: brightness(0) invert(1);
    width: 24px;

    @media (max-width: 600px) {
      width: 16px;
    }
  }
`;
export const Body = styled.div`
  display: inline-block;
  background-color: #303030;
  padding: 1.3rem 2rem;
  /* line-height: normal; */
  font-weight: normal;
`;

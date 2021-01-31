// Styled-components

import styled from "styled-components";

export const Container = styled.div`
  --clr-main: #f3c623;
  padding: 80px 60px;
  background: var(--clr-main);
  margin-top: 156px;
  position: relative;

  @media (max-width: 600px) {
    margin-top: 370px;
  }
`;
export const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  max-width: 1000px;
  margin: 0 auto;
`;
export const Column = styled.div`
  display: flex;
  flex-direction: column;
  text-align: left;
  margin-left: 60px;
`;
export const Row = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(230px, 1fr));
  grid-gap: 20px;

  @media (max-width: 1000px) {
    grid-template-columns: repeat(auto-fill, minmax(200px, 1fr));
  }
`;
export const Link = styled.a`
  --clr-light-green: #127681;

  color: var(--clr-light-green);
  margin-bottom: 20px;
  font-size: 18px;
  text-decoration: none;
  cursor: pointer;

  &:hover {
    color: #f4f6ff;
    transition: 200ms ease-in;
  }
`;
export const Title = styled.p`
  --clr-dark-green: #10375c;

  font-size: 24px;
  color: var(--clr-dark-green);
  margin-bottom: 40px;
  font-weight: bold;
`;

import styled from "styled-components";

const Container = styled.div`
  display: flex;
  flex-direction: row;
  align-items: flex-start;
  justify-items: flex-start;
  width: 100%;
`;

const Goods = styled.div`
  width: 100%;
  margin: 0 0 0 10px;
  display: grid;
  grid-template: 1fr / repeat(4, 1fr);
  grid-auto-flow: row;
  justify-content: space-evenly;
  justify-items: center;
  align-content: space-evenly;
`;

export const Styled = {
  Container,
  Goods,
};

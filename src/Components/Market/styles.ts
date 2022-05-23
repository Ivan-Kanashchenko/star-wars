import styled from "styled-components";

const Container = styled.div`
  display: flex;
  flex-direction: row;
  align-items: flex-start;
  justify-items: flex-start;
`;

const Goods = styled.div`
  width: 100%;
  background: var(--accent4);
  margin: 0 0 0 10px;
`;

export const Styled = {
  Container,
  Goods,
};

import styled from "styled-components";

const Container = styled.div`
  background: var(--primary4);
  border-radius: 10px;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  text-align: left;
  padding: 20px;
  margin-top: 7px;
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

import styled from "styled-components";

const Page = styled.div`
  width: 100%;
  background: var(--primary4);
  border-radius: 10px;
  padding: 20px;
  text-align: left;
`;

const Container = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  width: 100%;
  padding: 10px 20px;
`;

export const Styled = {
  Page,
  Container,
};

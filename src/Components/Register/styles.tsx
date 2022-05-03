import styled from "styled-components";

const Container = styled.div`
  flex-grow: 1;
  display: flex;
  flex-direction: row;
  align-content: center;
  justify-content: space-evenly;
`;

const TextBlock = styled.div`
  max-width: 40%;
  display: flex;
  flex-direction: column;
  align-content: center;
  justify-content: center;
  align-self: center;
  text-align: left;
  color: var(--accent4);
`;

const FormBlock = styled.div`
  width: 30%;
  display: flex;
  align-items: center;
  justify-content: center;
`;

export const Styled = {
  Container,
  TextBlock,
  FormBlock,
};

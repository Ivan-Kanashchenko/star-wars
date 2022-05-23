import styled from "styled-components";

const Container = styled.div`
  display: flex;
  flex-direction: row;
  align-items: flex-start;
  justify-items: flex-start;
`;

const SquareButton = styled.button`
  border: 1px solid var(--primary3);
  border-radius: 3px;
  color: var(--primary3);
  text-transform: uppercase;
  padding: 5px 10px;

  &:hover {
    color: var(--primary1);
    border: 1px solid var(--primary1);
  }
  &:active {
    background: var(--primary1);
    color: var(--accent7);
  }
`;

const InputContainer = styled.div`
  display: flex;
  flex-direction: row;
  margin: 5px 0;
`;

const Input = styled.input`
  border: 1px solid var(--primary3);
  border-radius: 3px;
  padding: 10px;
  width: 80px;
  margin-right: 10px;

  &:hover,
  :focus {
    color: var(--primary1);
    border: 1px solid var(--primary1);
  }
`;

const Section = styled.div`
  display: flex;
  flex-direction: column;
  border-top: 1px solid var(--accent4);
  margin-top: 10px;
  padding-bottom: 10px;

  &:last-child {
    border-bottom: 1px solid var(--accent4);
  }
`;
const FiltersBar = styled.div`
  width: 100%;
  max-width: 300px;
  background: var(--accent7);
  border-radius: 10px;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  text-align: left;
  padding: 20px;
`;
const Goods = styled.div`
  width: 100%;
  background: var(--accent4);
  margin: 0 0 0 10px;
`;

export const Styled = {
  Container,
  Section,
  SquareButton,
  InputContainer,
  FiltersBar,
  Goods,
  Input,
};

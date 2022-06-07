import styled from "styled-components";

const InputContainer = styled.div`
  display: flex;
  flex-direction: row;
  margin: 5px 0;
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

const Input = styled.input`
  border: 1px solid var(--primary3);
  border-radius: 3px;
  padding: 10px;
  width: 80px;
  margin-right: 10px;
  background-color: var(--primary4);

  &:hover,
  :focus {
    color: var(--primary1);
    border: 1px solid var(--primary1);
  }
`;

export const Styled = {
  InputContainer,
  SquareButton,
  Input,
};

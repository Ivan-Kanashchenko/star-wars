import * as React from "react";
import styled from "styled-components";

interface CustomCheckboxProps {
  label: string;
  name: string;
}

export const CustomCheckbox: React.FC<CustomCheckboxProps> = ({
  label,
  name,
}) => {
  return (
    <Styled.Container>
      <Styled.Input type="checkbox" name={name} />
      <Styled.Label>{label}</Styled.Label>
    </Styled.Container>
  );
};

const Container = styled.div`
  display: flex;
  justify-content: left;
  align-items: center;
  margin: 5px 0;
`;

const Input = styled.input`
  width: 16px;
  height: 16px;
  cursor: pointer;
`;

const Label = styled.label`
  margin-left: 5px;
`;

const Styled = {
  Container,
  Input,
  Label,
};

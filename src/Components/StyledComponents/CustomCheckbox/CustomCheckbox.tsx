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
  margin: 5px 0;
  justify-content: center;
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

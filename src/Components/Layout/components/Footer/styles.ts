import styled from "styled-components";

const Footer = styled.footer`
  width: 100%;
  height: 60px;
  display: flex;
  align-items: center;
  justify-content: center;
  align-items: center;
  color: var(--primary3);
  font-size: 20px;
  position: relative;
`;

const SquareButton = styled.button`
  border: 1px solid var(--primary3);
  border-radius: 3px;
  color: var(--primary3);
  text-transform: uppercase;
  padding: 5px 10px;
  position: absolute;
  right: 10px;

  &:hover {
    color: var(--accent4);
    border: 1px solid var(--accent4);
  }
`;

export const Styled = {
  Footer,
  SquareButton,
};

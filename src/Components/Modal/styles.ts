import styled from "styled-components";

const Layout = styled.div`
  position: fixed;
  top: 0;
  bottom: 0;
  left: 0;
  right: 0;
  background: var(--secondary2);
  display: flex;
  align-items: center;
  justify-content: center;
`;

const ModalWindow = styled.div`
  border-radius: 10px;
  background-color: white;
  padding: 20px;
`;

export const Styled = {
  Layout,
  ModalWindow,
};

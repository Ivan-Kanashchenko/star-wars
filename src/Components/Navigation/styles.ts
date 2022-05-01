import styled from "styled-components";

const Navigation = styled.ul`
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  border-top: 1px solid var(--primary3);
  border-bottom: 1px solid var(--primary3);
  background-color: var(--primary1);
`;
const Li = styled.li`
  padding: 10px 30px;
  border-left: 1px solid var(--primary3);
  :last-child {
    border-right: 1px solid var(--primary3);
  }
`;

const Styled = {
  Navigation,
  Li,
};

export default Styled;

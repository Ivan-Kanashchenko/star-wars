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
interface Props {
  content: string;
  name: string;
}

const Button = styled.button<Props>`
  text-transform: uppercase;
  font-weight: 700;
  color: ${({ content, name }) =>
    content === name ? `var(--accent4);` : `var(--primary3);`};
  &:hover {
    color: var(--accent4);
  }
`;

const LightSpan = styled.span<Props>`
  display: block;
  height: 1px;
  transition: 0.5s;
  background-color: white;
  width: ${({ content, name }) => (content === name ? `100%` : `0px`)};

  background-color: ${({ content }) => {
    if (content === "films") {
      return `var(--accent1);`;
    }
    if (content === "people") {
      return `var(--accent2);`;
    }
    if (content === "planets") {
      return `var(--accent3);`;
    }
  }};
  box-shadow: ${({ content, name }) => {
    if (content === name) {
      if (content === "films") {
        return `0 0 6px 2px var(--accent1);`;
      }
      if (content === "people") {
        return `0 0 6px 2px var(--accent2);`;
      }
      if (content === "planets") {
        return `0 0 6px 2px var(--accent3);`;
      }
    }
  }};
`;

const Styled = {
  Navigation,
  Li,
  Button,
  LightSpan,
};

export default Styled;

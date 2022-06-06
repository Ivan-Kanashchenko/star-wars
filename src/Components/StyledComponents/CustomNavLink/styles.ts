import styled from "styled-components";
import { Link, PathMatch } from "react-router-dom";

const CustomLink = styled(Link)<{
  match: PathMatch<string>;
}>`
  text-transform: uppercase;
  font-weight: 700;
  color: ${({ match }) => (match ? `var(--accent4);` : `var(--primary3);`)};
  &:hover {
    color: var(--accent4);
  }
`;

const LightSpan = styled.span<{
  match: PathMatch<string>;
  content: string;
}>`
  display: block;
  height: 1px;
  transition: 0.5s;
  background-color: white;
  width: ${({ match }) => (match ? `100%` : `0px`)};

  background-color: ${({ content }) => {
    if (content === "/films") {
      return `var(--accent1);`;
    }
    if (content === "/people") {
      return `var(--accent2);`;
    }
    if (content === "/planets") {
      return `var(--accent3);`;
    }
    if (content === "/market") {
      return `var(--accent6);`;
    }
  }};

  box-shadow: 0 0 6px 2px
    ${({ match, content }) => {
      if (match) {
        if (content === "/films") {
          return `var(--accent1);`;
        }
        if (content === "/people") {
          return `var(--accent2);`;
        }
        if (content === "/planets") {
          return `var(--accent3);`;
        }
        if (content === "/market") {
          return `var(--accent6);`;
        }
      }
    }};
`;

export const Styled = {
  CustomLink,
  LightSpan,
};

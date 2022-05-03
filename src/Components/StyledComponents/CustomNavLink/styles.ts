import { Link, PathMatch, To } from "react-router-dom";
import styled from "styled-components";

const CustomLink = styled(Link)<{
  content: string;
  to: To;
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
  to: To;
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
  }};
  box-shadow: ${({ match, content }) => {
    if (match) {
      if (content === "/films") {
        return `0 0 6px 2px var(--accent1);`;
      }
      if (content === "/people") {
        return `0 0 6px 2px var(--accent2);`;
      }
      if (content === "/planets") {
        return `0 0 6px 2px var(--accent3);`;
      }
    }
  }};
`;

export const Styled = {
  CustomLink,
  LightSpan,
};

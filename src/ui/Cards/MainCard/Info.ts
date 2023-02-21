import styled from "styled-components";

interface Props {
  theme?: string;
}

export const Info = styled.div<Props>`
  flex-grow: 1;
  text-align: left;
  color: var(--primary3);

  ${({ theme }) => {
    if (theme === "/people") {
      return `padding: 20px 0px 20px 20px; border-right: 5px solid var(--accent2);`;
    } else if (theme === "/films") {
      return `padding: 20px 20px 5px 20px; border-left: 5px solid var(--accent1);`;
    } else if (theme === "/planets") {
      return `padding: 20px 20px 5px 40px; border-left: 5px solid var(--accent3);
    border-right: 5px solid var(--accent3);`;
    }
  }}
`;

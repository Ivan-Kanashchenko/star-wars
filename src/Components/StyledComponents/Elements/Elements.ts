import styled from "styled-components";

const H2 = styled.h2`
  font-size: 56px;
  margin-bottom: 30px;
`;
const H3 = styled.h3`
  font-size: 42px;
  margin-bottom: 20px;
  padding-left: 25px;
  color: var(--primary3);
`;
const H4 = styled.h4`
  font-size: 20px;
  color: var(--primary3);
`;

const Ul = styled.ul<{ loginList?: boolean }>`
  padding-left: 30px;
  ${({ loginList }) =>
    loginList &&
    `padding-left: 0px;
    display: flex; 
    flex-direction: column;
    justify-content: left;
    aligh-items: left;
    text-align: left;`}
`;

const Li = styled.li<{ loginList?: boolean; logoutButton?: boolean }>`
  ${({ loginList }) =>
    loginList &&
    `padding: 15px;
    &:hover {
      background-color: var(--accent4);
    }
`}
`;
const Span = styled.span`
  ${({ theme }) => theme === "people" && `color: var(--accent2);`}
  ${({ theme }) => theme === "films" && `color: var(--accent1);`}
  ${({ theme }) => theme === "planets" && `color: var(--accent3);`}
`;
const Paragraph = styled.p``;

interface ContainerProps {
  itemscenter?: boolean;
  flexRow?: boolean;
  flexColumn?: boolean;
  flexWrap?: boolean;
  actorsCard?: boolean;
  absolute?: boolean;
  loginList?: boolean;
}

const Container = styled.div<ContainerProps>`
  display: flex;
  margin: 20px;

  ${({ absolute }) => absolute && `position: absolute;`}
  ${({ itemscenter }) =>
    itemscenter && `text-align:center; justify-content:center;`};
  ${({ flexRow }) => flexRow && `flex-direction: row;`}
  ${({ flexColumn }) => flexColumn && `flex-direction: column;`}
  ${({ flexWrap }) => flexWrap && `flex-wrap: wrap;`}
  ${({ actorsCard }) => actorsCard && `border: 2px solid`}
  ${({ loginList }) =>
    loginList &&
    `
    background-color: var(--primary3);
    margin: 0;
    top: 45px;
    right: 50px;
    z-index: 10;
    `}
`;

const Button = styled.button`
  text-transform: uppercase;
  border: 2px solid var(--primary3);
  border-radius: 20px;
  color: var(--primary3);
  padding: 10px 50px;
  transition: 0.3s;
  &:hover {
    ${({ theme }) => {
      if (theme === "people") {
        return "border-color: var(--accent2); color: var(--accent2);";
      } else if (theme === "films") {
        return "border-color: var(--accent1); color: var(--accent1);";
      } else if (theme === "planets") {
        return "border-color: var(--accent3); color: var(--accent3);";
      }
    }}
  }
  &:disabled {
    border-color: var(--primary3);
    color: var(--primary3);
  }
`;

const StyledElement = {
  H2,
  H3,
  H4,
  Ul,
  Li,
  Span,
  Paragraph,
  Container,
  Button,
};

export default StyledElement;

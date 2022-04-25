import styled from "styled-components";

const Background = styled.div`
  height: 100%;
  width: 100%;
  background-color: white;
  opacity: 0.5;
  position: absolute;
  display: flex;
  align-items: center;
  justify-content: center;
  z-index: 5;
`;

const Container = styled.div`
  width: 100%;
  max-width: 500px;
  position: absolute;
  display: flex;
  flex-direction: column;
  align-items: center;
  border-radius: 7px;
  background-color: white;
  z-index: 6;
  padding: 5px 0px;
`;

const Title = styled.h3`
  font-size: 34px;
`;

const Block = styled.div<{ flexRow?: boolean }>`
  ${({ flexRow }) =>
    flexRow &&
    `display: flex;
  flex-direction: row;
  justify-content: space-evenly;
  `}
  padding: 15px;
  width: 100%;
`;

const Button = styled.button`
  padding: 5px 35px;
  border: 1px solid var(--primary1);
  border-radius: 3px;
  margin: 5px 0px;

  &:hover {
    background-color: var(--primary1);
    color: var(--accent4);
  }
`;

const SocialButton = styled.button<{ icon: string }>`
  width: 40px;
  height: 40px;
  background: black;
  ${({ icon }) => icon && `background: url(${icon}) 0 0/contain no-repeat;`}
`;

const Form = styled.form`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

const Input = styled.input`
  border: 1px solid var(--accent4);
  border-radius: 3px;
  padding: 5px;
  margin: 5px;
  width: 64%;

  &:focus,
  :hover {
    border: 1px solid var(--primary1);
  }
`;

const Link = styled.a`
  font-size: 12px;
  text-decoration: none;
  color: var(--primary1);

  &:hover {
    text-decoration: underline;
  }
`;

const Styled = {
  Background,
  Container,
  Title,
  Block,
  Button,
  SocialButton,
  Form,
  Input,
  Link,
};

export default Styled;

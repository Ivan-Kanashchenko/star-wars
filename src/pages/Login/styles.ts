import { Link } from "react-router-dom";
import styled from "styled-components";

const Background = styled.div<{ bg: string }>`
  background: ${({ bg }) =>
    bg ? `url(${bg}) 0 0/100% auto no-repeat;` : "transparent"};
  overflow: hidden;
  width: 37%;
  height: 100%;
  position: absolute;
  right: 18%;
  bottom: 0%;
`;

const Wrapper = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-evenly;
  height: 100%;
  overflow: hidden;
`;

const Container = styled.div`
  width: 100%;
  height: 500px;
  max-width: 400px;
  display: flex;
  flex-direction: column;
  justify-content: space-evenly;
  align-items: center;
  border-radius: 7px;
  background-color: white;
  padding: 5px 0px;
  position: absolute;
  left: 20%;
  top: 20%;
`;

const Title = styled.h3`
  font-size: 48px;
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

const SocialButton = styled.button<{ icon: string }>`
  width: 40px;
  height: 40px;
  background: black;
  ${({ icon }) => icon && `background: url(${icon}) 0 0/contain no-repeat;`}
`;

const CustomLink = styled(Link)`
  font-size: 12px;
  text-decoration: none;
  color: var(--primary1);

  &:hover {
    text-decoration: underline;
  }
`;

export const Styled = {
  Wrapper,
  Block,
  Container,
  Title,
  CustomLink,
  SocialButton,
  Background,
};

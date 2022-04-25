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
  padding: 10px 30px;
  border: 1px solid black;
  border-radius: 5px;
`;

const SocialButton = styled.button<{ icon: string }>`
  width: 40px;
  height: 40px;
  background: black;
  ${({ icon }) => icon && `background: url(${icon}) 0 0/contain no-repeat;`}
`;

const Styled = {
  Background,
  Container,
  Title,
  Block,
  Button,
  SocialButton,
};

export default Styled;

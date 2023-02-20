import backgroundLeft from "assets/backgrounds/bg_starsLeft.jpeg";
import backgroundRigth from "assets/backgrounds/bg_starsRight.jpeg";
import styled from "styled-components";

const ContentContainer = styled.div`
  width: 100%;
  display: flex;
  justify-content: center;
  position: relative;
  flex-direction: row;
  flex-grow: 1;
`;

const BackgroundLeft = styled.div`
  background-image: url(${backgroundLeft});
  width: 200px;
  background-repeat: repeat-y;
`;
const BackgroundRight = styled.div`
  background-image: url(${backgroundRigth});
  width: 200px;
  background-repeat: repeat-y;
`;

const Content = styled.div`
  padding: 10px 0;
  width: 100%;
  display: flex;
`;

export const Styled = {
  Content,
  ContentContainer,
  BackgroundLeft,
  BackgroundRight,
};

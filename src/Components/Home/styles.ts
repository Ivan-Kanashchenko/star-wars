import backgroundLeft from "../../assets/backgrounds/bg_starsLeft.jpeg";
import backgroundRigth from "../../assets/backgrounds/bg_starsRight.jpeg";
import styled from "styled-components";

const ContentContainer = styled.div`
  width: 100%;
  display: flex;
  justify-content: center;
  position: relative;
  flex-direction: column;
  flex-grow: 1;
`;

const BackgroundLeft = styled.div`
  background-image: url(${backgroundLeft});
  position: absolute;
  left: 0;
  height: 100%;
  width: 200px;
  background-repeat: repeat-y;
  z-index: 2;
`;
const BackgroundRight = styled.div`
  background-image: url(${backgroundRigth});
  position: absolute;
  right: 0;
  height: 100%;
  width: 200px;
  background-repeat: repeat-y;
  z-index: 2;
`;

const Content = styled.div`
  padding: 10px 0;
  width: 100%;
  max-width: 1200px;
  margin: 0 auto;
`;

export const Styled = {
  Content,
  ContentContainer,
  BackgroundLeft,
  BackgroundRight,
};

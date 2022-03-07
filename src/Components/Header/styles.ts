import styled from "styled-components";
import logo from "../../assets/logo/logo.png";
import headerBackground from "../../assets/backgrounds/headerBackground.jpeg";

const Header = styled.header`
  background-image: url(${headerBackground});
  width: 100%;
  height: 120px;
`;
const Logo = styled.a`
  display: block;
  top: 50%;
  width: 100%;
  max-width: 203px;
  height: 100%;
  max-height: 88px;
  margin: 20px auto;
  box-sizing: border-box;
  background-image: url(${logo});
  background-size: contain;
`;

const Styled = {
  Header,
  Logo,
};

export default Styled;

import styled from "styled-components";
import logo from "../../assets/logo/logo.png";
import headerBackground from "../../assets/backgrounds/headerBackground.jpeg";
import { Link } from "react-router-dom";

const Header = styled.header`
  background-image: url(${headerBackground});
  width: 100%;
  height: 120px;
  position: relative;
`;
const Logo = styled(Link)`
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

const Login = styled(Link)<{ userId?: boolean; userPhoto?: string }>`
  display: block;
  border: 1px solid var(--primary3);
  border-radius: 3px;
  color: var(--primary3);
  text-transform: uppercase;
  padding: 5px 10px;
  position: absolute;
  top: 10px;
  right: 50px;
  &:hover {
    color: var(--accent4);
    border: 1px solid var(--accent4);
  }
  ${({ userId, userPhoto }) =>
    userId &&
    `
  background-repeat: no-repeat;
  background-image:url(${userPhoto});
  background-size: contain;
  width: 35px;
  height: 35px;
  `}
`;

const Button = styled.button`
  width: 100%;
  height: 100%;
  text-align: left;
`;

export const Styled = {
  Header,
  Logo,
  Login,
  Button,
};

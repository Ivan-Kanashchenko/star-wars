import styled from "styled-components";

const Button = styled.button`
  width: 100%;
  height: 100%;
  text-align: left;
`;

interface LoginProps {
  isAuth?: boolean;
  userPhoto?: string;
}

const Login = styled.button<LoginProps>`
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
  ${({ isAuth, userPhoto }) =>
    isAuth &&
    `
  background-repeat: no-repeat;
  background-image:url(${userPhoto});
  background-size: contain;
  width: 35px;
  height: 35px;
  `}
`;

const Styled = {
  Button,
  Login,
};

export default Styled;

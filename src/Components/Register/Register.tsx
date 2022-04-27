import * as React from "react";
import SignOnForm from "../Forms/SignOnForm/SignOnForm";
import StyledElement from "../StyledComponents/Elements/Elements";
import Styled from "./styles";

const Register = () => {
  return (
    <Styled.Container>
      <Styled.TextBlock>
        <StyledElement.Paragraph>
          We are glad to see you in our database. This is a small pet-project
          made by Ivan Kanashchenko to study libraries for development. The
          project uses the Starwars API
        </StyledElement.Paragraph>
      </Styled.TextBlock>
      <Styled.FormBlock>
        <SignOnForm message={"To enter the database please create account"} />
      </Styled.FormBlock>
    </Styled.Container>
  );
};

export default Register;

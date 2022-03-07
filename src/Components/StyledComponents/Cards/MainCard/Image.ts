import styled from "styled-components";
import noImage from "../../../../assets/images/no-image.png";

export const Image = styled.div`
  width: 380px;
  max-width: 100%fit-content;
  background: url(${noImage});
  background-size: contain;
  background-repeat: no-repeat;
`;

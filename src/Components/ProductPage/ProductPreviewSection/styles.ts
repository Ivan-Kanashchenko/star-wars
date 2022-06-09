import noImage from "../../../assets/images/no-image.png";
import styled from "styled-components";

const ImageSection = styled.div<{ image: string }>`
  width: 50%;
  height: 400px;
  background: url(${({ image }) => (image ? image : noImage)}) center / contain
    no-repeat;
`;

export const Styled = {
  ImageSection,
};

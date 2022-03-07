import { Info } from "./Info";
import { Image } from "./Image";
import styled from "styled-components";

interface Props {
  flexRow?: boolean;
  flexColumn?: boolean;
}

const Card = styled.div<Props>`
  display: flex;
  ${({ flexRow }) => flexRow && `flex-direction: row;`}
  ${({ flexColumn }) => flexColumn && `flex-direction: column;`}

  background-color: var(--primary3);
  border-radius: 5px;
  margin: 5px 30px;
  padding: 5px;
  height: auto;
  z-index: 5;
  background: var(--secondary);
`;

const StyledCard = {
  Card,
  Info,
  Image,
};

export default StyledCard;

import { Image } from "./Image";
import { Info } from "./Info";
import styled from "styled-components";

interface Props {
  flexRow?: boolean;
  flexColumn?: boolean;
}

const Container = styled.div`
  display: flex;
  flex-direction: column;
  background-color: var(--primary2);
  width: 100%;
  align-items: center;
  justify-content: center;
`;

const Card = styled.div<Props>`
  display: flex;
  width: 100%;
  ${({ flexRow }) => flexRow && `flex-direction: row;`}
  ${({ flexColumn }) => flexColumn && `flex-direction: column;`}

  background-color: var(--primary3);
  border-radius: 5px;
  margin: 5px 30px;
  padding: 5px;
  height: auto;
  background: var(--secondary);
`;

export const StyledCard = {
  Container,
  Card,
  Info,
  Image,
};

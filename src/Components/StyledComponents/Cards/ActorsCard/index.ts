import styled from "styled-components";

interface Props {
  flexRow?: boolean;
  flexColumn?: boolean;
  grid?: boolean;
}

const ActorsCard = styled.div<Props>`
  display: grid;
  grid-template-columns: 1fr 1fr 1fr;
  grid-auto-flow: row;
`;

const StyledActorsCard = {
  ActorsCard,
};

export default StyledActorsCard;

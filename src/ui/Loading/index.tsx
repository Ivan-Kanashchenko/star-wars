import React, { FC } from "react";
import { Styled } from "./styles";

export const Loading: FC = () => {
  return (
    <Styled.LoadingContainer>
      <Styled.Loading />
    </Styled.LoadingContainer>
  );
};

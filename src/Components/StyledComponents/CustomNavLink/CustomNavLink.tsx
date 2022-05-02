import * as React from "react";
import { LinkProps, useMatch, useResolvedPath } from "react-router-dom";
import Styled from "./styles";

type OtherProps = {
  content?: string;
};

export const CustomNavLink = ({
  children,
  to,
  content,
}: LinkProps & OtherProps) => {
  const resolved = useResolvedPath(to);
  const match = useMatch({ path: resolved.pathname, end: true });

  return (
    <div>
      <Styled.CustomLink to={to} content={content} match={match}>
        {children}
      </Styled.CustomLink>
      <Styled.LightSpan to={to} match={match} content={content} />
    </div>
  );
};

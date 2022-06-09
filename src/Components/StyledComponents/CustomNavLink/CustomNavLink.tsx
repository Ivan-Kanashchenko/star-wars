import * as React from "react";
import { Styled } from "./styles";
import { LinkProps, useMatch, useResolvedPath } from "react-router-dom";

type OtherProps = {
  content?: string;
};

export const CustomNavLink: React.FC<LinkProps & OtherProps> = ({
  children,
  to,
  content,
}) => {
  const resolved = useResolvedPath(to);
  const match = useMatch({ path: resolved.pathname, end: true });

  return (
    <div>
      <Styled.CustomLink to={to} match={match}>
        {children}
      </Styled.CustomLink>
      <Styled.LightSpan match={match} content={content} />
    </div>
  );
};

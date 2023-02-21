import React, { FC } from "react";

import { LinkProps, useMatch, useResolvedPath } from "react-router-dom";

import { Styled } from "./styles";

type OtherProps = {
  content?: string;
};

export const CustomNavLink: FC<LinkProps & OtherProps> = ({
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

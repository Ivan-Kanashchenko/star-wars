import * as React from "react";
import { useMemo } from "react";
import { CustomNavLink } from "../StyledComponents/CustomNavLink/CustomNavLink";
import { Styled } from "./styles";

type LinksTypes = {
  id: number;
  name: string;
  link: string;
  type?: string;
}[];

export const Navigation = () => {
  const links = useMemo((): LinksTypes => {
    return [
      {
        id: 1,
        name: "films",
        link: "/films",
        type: "public",
      },
      {
        id: 2,
        name: "people",
        link: "/people",
      },
      {
        id: 3,
        name: "planets",
        link: "/planets",
      },
    ];
  }, []);

  return (
    <Styled.Navigation>
      {links.map((link) => (
        <Styled.Li key={link.id}>
          <CustomNavLink content={link.link} to={link.link}>
            {link.name}
          </CustomNavLink>
        </Styled.Li>
      ))}
    </Styled.Navigation>
  );
};

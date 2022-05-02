import * as React from "react";
import { useMemo } from "react";
import { CustomNavLink } from "../StyledComponents/CustomNavLink/CustomNavLink";
import Styled from "./styles";

type LinksTypes = {
  name: string;
  link: string;
  type?: string;
}[];

export const Navigation = () => {
  const links = useMemo((): LinksTypes => {
    return [
      {
        name: "films",
        link: "/films",
        type: "public",
      },
      {
        name: "people",
        link: "/people",
      },
      {
        name: "planets",
        link: "/planets",
      },
    ];
  }, []);

  return (
    <Styled.Navigation>
      {links.map((link) => (
        <Styled.Li>
          <CustomNavLink content={link.link} to={link.link}>
            {link.name}
          </CustomNavLink>
        </Styled.Li>
      ))}
    </Styled.Navigation>
  );
};

import React, { FC, useState } from "react";
import ExpandMoreIcon from "@material-ui/icons/ExpandMore";
import { StyledElement } from "ui";
import { useQueryStringParams } from "customHooks/useQueryStringParams";
import { CheckboxBlockProps, PriceBlockProps } from "./FiltersBlockTypes";

import { Styled } from "./styles";

export const FiltersBlock: FC<CheckboxBlockProps | PriceBlockProps> = ({
  data,
  title,
  children,
}) => {
  const { searchParams } = useQueryStringParams();

  const [expanded, setExpanded] = useState(
    searchParams.has(data.type) || false
  );

  return (
    <Styled.Accordion
      expanded={expanded}
      onChange={() => setExpanded(!expanded)}
    >
      <Styled.AccordionSummary
        expandIcon={<ExpandMoreIcon />}
        aria-controls="panel1a-content"
        id="panel1a-header"
      >
        <StyledElement.H5>{title}</StyledElement.H5>
      </Styled.AccordionSummary>
      <Styled.AccordionDetails>{children}</Styled.AccordionDetails>
    </Styled.Accordion>
  );
};

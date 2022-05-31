import * as React from "react";
import { Styled } from "./styles";
import ExpandMoreIcon from "@material-ui/icons/ExpandMore";
import { StyledElement } from "../../../StyledComponents/Elements/Elements";
import { useQueryStringParams } from "../../../../customHooks/useQueryStringParams";
import { CheckboxBlockProps, PriceBlockProps } from "./FiltersBlockTypes";

export const FiltersBlock: React.FC<CheckboxBlockProps | PriceBlockProps> = ({
  data,
  title,
  children,
}) => {
  const { searchParams } = useQueryStringParams();

  const [expanded, setExpanded] = React.useState(
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

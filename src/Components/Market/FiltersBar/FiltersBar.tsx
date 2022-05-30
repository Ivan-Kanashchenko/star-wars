import * as React from "react";
import { CompanyForm } from "../../Forms/Market/CompanyForm/CompanyForm";
import { MadeInForm } from "../../Forms/Market/MadeInForm/MadeInForm";
import { PriceForm } from "../../Forms/Market/PriceForm/PriceForm";
import { ProductStatusForm } from "../../Forms/Market/ProductStatusForm/ProductStatusForm";
import { ProductTypeForm } from "../../Forms/Market/ProductTypeForm/ProductTypeForm";
import { StyledElement } from "../../StyledComponents/Elements/Elements";
import { Styled } from "./styles";
import ExpandMoreIcon from "@material-ui/icons/ExpandMore";

export const FiltersBar: React.FC = () => {
  return (
    <Styled.Container>
      <StyledElement.H4>Filters</StyledElement.H4>

      <StyledElement.Section borderTop>
        <Styled.Accordion>
          <Styled.AccordionSummary
            expandIcon={<ExpandMoreIcon />}
            aria-controls="panel1a-content"
            id="panel1a-header"
          >
            <StyledElement.H5>Seller</StyledElement.H5>
          </Styled.AccordionSummary>
          <Styled.AccordionDetails>
            <CompanyForm />
          </Styled.AccordionDetails>
        </Styled.Accordion>
      </StyledElement.Section>

      <StyledElement.Section borderTop>
        <Styled.Accordion>
          <Styled.AccordionSummary
            expandIcon={<ExpandMoreIcon />}
            aria-controls="panel1a-content"
            id="panel1a-header"
          >
            <StyledElement.H5>Price</StyledElement.H5>
          </Styled.AccordionSummary>
          <Styled.AccordionDetails>
            <PriceForm />
          </Styled.AccordionDetails>
        </Styled.Accordion>
      </StyledElement.Section>

      <StyledElement.Section borderTop>
        <Styled.Accordion>
          <Styled.AccordionSummary
            expandIcon={<ExpandMoreIcon />}
            aria-controls="panel1a-content"
            id="panel1a-header"
          >
            <StyledElement.H5>Made In</StyledElement.H5>
          </Styled.AccordionSummary>
          <Styled.AccordionDetails>
            <MadeInForm />
          </Styled.AccordionDetails>
        </Styled.Accordion>
      </StyledElement.Section>

      <StyledElement.Section borderTop>
        <Styled.Accordion>
          <Styled.AccordionSummary
            expandIcon={<ExpandMoreIcon />}
            aria-controls="panel1a-content"
            id="panel1a-header"
          >
            <StyledElement.H5>Type</StyledElement.H5>
          </Styled.AccordionSummary>
          <Styled.AccordionDetails>
            <ProductTypeForm />
          </Styled.AccordionDetails>
        </Styled.Accordion>
      </StyledElement.Section>

      <StyledElement.Section borderTop borderBottom>
        <Styled.Accordion>
          <Styled.AccordionSummary
            expandIcon={<ExpandMoreIcon />}
            aria-controls="panel1a-content"
            id="panel1a-header"
          >
            <StyledElement.H5>Status</StyledElement.H5>
          </Styled.AccordionSummary>
          <Styled.AccordionDetails>
            <ProductStatusForm />
          </Styled.AccordionDetails>
        </Styled.Accordion>
      </StyledElement.Section>
    </Styled.Container>
  );
};

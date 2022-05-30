import { Typography, withStyles } from "@material-ui/core";
import * as React from "react";
import { CompanyForm } from "../../Forms/Market/CompanyForm/CompanyForm";
import { MadeInForm } from "../../Forms/Market/MadeInForm/MadeInForm";
import { PriceForm } from "../../Forms/Market/PriceForm/PriceForm";
import { ProductStatusForm } from "../../Forms/Market/ProductStatusForm/ProductStatusForm";
import { ProductTypeForm } from "../../Forms/Market/ProductTypeForm/ProductTypeForm";
import { RateForm } from "../../Forms/Market/RateForm/RateForm";
import { StyledElement } from "../../StyledComponents/Elements/Elements";
import { Styled } from "./styles";
import ExpandMoreIcon from "@material-ui/icons/ExpandMore";
import MuiAccordion from "@material-ui/core/Accordion";
import MuiAccordionSummary from "@material-ui/core/AccordionSummary";
import MuiAccordionDetails from "@material-ui/core/AccordionDetails";

const Accordion = withStyles({
  root: {
    backgroundColor: "transparent",
    // border: "1px solid rgba(0, 0, 0, .125)",
    margin: 0,
    padding: 0,
    boxShadow: "none",
    "&:not(:last-child)": {
      borderBottom: 0,
    },
    "&:before": {
      display: "none",
    },
    "&$expanded": {
      // margin: "auto",
      margin: 0,
      padding: 0,
    },
  },
  expanded: {},
})(MuiAccordion);

const AccordionSummary = withStyles({
  root: {
    backgroundColor: "transparent",
    // borderBottom: "1px solid rgba(0, 0, 0, .125)",
    marginBottom: -1,
    minHeight: 25,
    padding: 0,
    "&$expanded": {
      minHeight: 25,
    },
  },
  content: {
    margin: "0",
    padding: 0,
    "&$expanded": {
      margin: "0",
      padding: 0,
    },
  },
  expanded: {},
})(MuiAccordionSummary);

const AccordionDetails = withStyles({
  root: {
    backgroundColor: "transparent",
    // border: "1px solid rgba(0, 0, 0, .125)",
    margin: 0,
    padding: 0,
    boxShadow: "none",
    "&:not(:last-child)": {
      borderBottom: 0,
    },
    "&:before": {
      display: "none",
    },
    "&$expanded": {
      // margin: "auto",
      margin: 0,
      padding: 0,
    },
  },
  expanded: {},
})(MuiAccordionDetails);

export const FiltersBar: React.FC = () => {
  return (
    <Styled.Container>
      <StyledElement.H4>Filters</StyledElement.H4>

      <StyledElement.Section borderTop>
        <Accordion>
          <AccordionSummary
            expandIcon={<ExpandMoreIcon />}
            aria-controls="panel1a-content"
            id="panel1a-header"
          >
            <StyledElement.H5>Seller</StyledElement.H5>
          </AccordionSummary>
          <AccordionDetails>
            <CompanyForm />
          </AccordionDetails>
        </Accordion>
      </StyledElement.Section>

      <StyledElement.Section borderTop>
        <Accordion>
          <AccordionSummary
            expandIcon={<ExpandMoreIcon />}
            aria-controls="panel1a-content"
            id="panel1a-header"
          >
            <StyledElement.H5>Price</StyledElement.H5>
          </AccordionSummary>
          <AccordionDetails>
            <PriceForm />
          </AccordionDetails>
        </Accordion>
      </StyledElement.Section>

      <StyledElement.Section borderTop>
        <Accordion>
          <AccordionSummary
            expandIcon={<ExpandMoreIcon />}
            aria-controls="panel1a-content"
            id="panel1a-header"
          >
            <StyledElement.H5>Made In</StyledElement.H5>
          </AccordionSummary>
          <AccordionDetails>
            <MadeInForm />
          </AccordionDetails>
        </Accordion>
      </StyledElement.Section>

      <StyledElement.Section borderTop>
        <Accordion>
          <AccordionSummary
            expandIcon={<ExpandMoreIcon />}
            aria-controls="panel1a-content"
            id="panel1a-header"
          >
            <StyledElement.H5>Type</StyledElement.H5>
          </AccordionSummary>
          <AccordionDetails>
            <ProductTypeForm />
          </AccordionDetails>
        </Accordion>
      </StyledElement.Section>

      <StyledElement.Section borderTop borderBottom>
        <Accordion>
          <AccordionSummary
            expandIcon={<ExpandMoreIcon />}
            aria-controls="panel1a-content"
            id="panel1a-header"
          >
            <StyledElement.H5>Status</StyledElement.H5>
          </AccordionSummary>
          <AccordionDetails>
            <ProductStatusForm />
          </AccordionDetails>
        </Accordion>
      </StyledElement.Section>
    </Styled.Container>
  );
};

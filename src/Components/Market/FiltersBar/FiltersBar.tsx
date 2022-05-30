import * as React from "react";
import { CompanyForm } from "../../Forms/Market/CompanyForm/CompanyForm";
import { MadeInForm } from "../../Forms/Market/MadeInForm/MadeInForm";
import { PriceForm } from "../../Forms/Market/PriceForm/PriceForm";
import { ProductStatusForm } from "../../Forms/Market/ProductStatusForm/ProductStatusForm";
import { ProductTypeForm } from "../../Forms/Market/ProductTypeForm/ProductTypeForm";
import { StyledElement } from "../../StyledComponents/Elements/Elements";
import { Styled } from "./styles";
import ExpandMoreIcon from "@material-ui/icons/ExpandMore";
import { useQueryStringParams } from "../../../customHooks/useQueryStringParams";

export const FiltersBar: React.FC = () => {
  const { searchParams } = useQueryStringParams();

  const initialState = {
    price: !!searchParams.has("price") || false,
    country: !!searchParams.has("country") || false,
    company: !!searchParams.has("company") || false,
    type: !!searchParams.has("type") || false,
    stock: !!searchParams.has("stock") || false,
  };

  const [expanded, setExpanded] = React.useState(initialState);

  const handleChange = (property: string) => {
    setExpanded(
      Object.assign({}, expanded, { [property]: !expanded[property] })
    );
  };
  return (
    <Styled.Container>
      <StyledElement.H4>Filters</StyledElement.H4>

      <StyledElement.Section borderTop>
        <Styled.Accordion
          expanded={expanded.company}
          onChange={() => handleChange("company")}
        >
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
        <Styled.Accordion
          expanded={expanded.price}
          onChange={() => handleChange("price")}
        >
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
        <Styled.Accordion
          expanded={expanded.country}
          onChange={() => handleChange("country")}
        >
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
        <Styled.Accordion
          expanded={expanded.type}
          onChange={() => handleChange("type")}
        >
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
        <Styled.Accordion
          expanded={expanded.stock}
          onChange={() => handleChange("stock")}
        >
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

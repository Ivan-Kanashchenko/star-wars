import * as React from "react";
import { PriceForm } from "../../Forms/Market/PriceForm/PriceForm";
import { StyledElement } from "../../StyledComponents/Elements/Elements";
import { Styled } from "./styles";
import {
  companies,
  countries,
  prices,
  statuses,
  types,
} from "../../../config/marketFiltersConfig";
import { FiltersBlock } from "./FiltersBlock/FiltersBlock";
import { CheckboxFiltersForm } from "../../Forms/Market/CheckboxFiltersForm/CheckboxFiltersForm";

export const FiltersBar: React.FC = () => {
  return (
    <Styled.Container>
      <StyledElement.H4>Filters</StyledElement.H4>

      <StyledElement.Section borderTop>
        <FiltersBlock data={companies} title={companies.title}>
          <CheckboxFiltersForm data={companies} />
        </FiltersBlock>
      </StyledElement.Section>

      <StyledElement.Section borderTop>
        <FiltersBlock data={prices} title={prices.title}>
          <PriceForm data={prices} />
        </FiltersBlock>
      </StyledElement.Section>

      <StyledElement.Section borderTop>
        <FiltersBlock data={countries} title={countries.title}>
          <CheckboxFiltersForm data={countries} />
        </FiltersBlock>
      </StyledElement.Section>

      <StyledElement.Section borderTop>
        <FiltersBlock data={types} title={types.title}>
          <CheckboxFiltersForm data={types} />
        </FiltersBlock>
      </StyledElement.Section>

      <StyledElement.Section borderTop borderBottom>
        <FiltersBlock data={statuses} title={statuses.title}>
          <CheckboxFiltersForm data={statuses} />
        </FiltersBlock>
      </StyledElement.Section>
    </Styled.Container>
  );
};

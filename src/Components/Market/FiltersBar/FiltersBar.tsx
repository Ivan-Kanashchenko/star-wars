import * as React from "react";
import { FC } from "react";
import { PriceForm } from "../../Forms/Market/PriceForm/PriceForm";
import { CustomCheckbox } from "../../StyledComponents/CustomCheckbox/CustomCheckbox";
import { StyledElement } from "../../StyledComponents/Elements/Elements";
import { Styled } from "./styles";

export const FiltersBar: FC = () => {
  return (
    <Styled.Container>
      <StyledElement.H4>Filters</StyledElement.H4>

      <PriceForm />

      <StyledElement.Section>
        <StyledElement.H5>Made in</StyledElement.H5>
        <CustomCheckbox label={"China"} name={"country"} />
        <CustomCheckbox label={"Vietnam"} name={"country"} />
      </StyledElement.Section>
      <StyledElement.Section>
        <StyledElement.H5>Rate</StyledElement.H5>
        <CustomCheckbox label={"5"} name={"rate"} />
        <CustomCheckbox label={"4"} name={"rate"} />
        <CustomCheckbox label={"3"} name={"rate"} />
        <CustomCheckbox label={"2"} name={"rate"} />
        <CustomCheckbox label={"1"} name={"rate"} />
      </StyledElement.Section>
      <StyledElement.Section>
        <StyledElement.H5>Special propositions</StyledElement.H5>
        <CustomCheckbox label={"hit of sales"} name={"propositions"} />
        <CustomCheckbox label={"sale"} name={"propositions"} />
      </StyledElement.Section>
    </Styled.Container>
  );
};

import MuiAccordion from "@material-ui/core/Accordion";
import MuiAccordionDetails from "@material-ui/core/AccordionDetails";
import MuiAccordionSummary from "@material-ui/core/AccordionSummary";
import { withStyles } from "@material-ui/core";
import styled from "styled-components";

const Container = styled.div`
  background: var(--primary4);
  border-radius: 10px;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  text-align: left;
  padding: 20px;
  margin-top: 7px;
`;

const Accordion = withStyles({
  root: {
    backgroundColor: "transparent",
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
      margin: 0,
      padding: 0,
    },
  },
  expanded: {},
})(MuiAccordion);

const AccordionSummary = withStyles({
  root: {
    backgroundColor: "transparent",
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
      margin: 0,
      padding: 0,
    },
  },
  expanded: {},
})(MuiAccordionDetails);

export const Styled = {
  Container,
  Accordion,
  AccordionSummary,
  AccordionDetails,
};

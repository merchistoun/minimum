import styled from "@emotion/styled";
import ArrowForwardIosSharpIcon from "@mui/icons-material/ArrowForwardIosSharp";
import MuiAccordion, { AccordionProps } from "@mui/material/Accordion";
import AccordionDetails from "@mui/material/AccordionDetails";
import MuiAccordionSummary, {
  accordionSummaryClasses,
} from "@mui/material/AccordionSummary";
import * as React from "react";

interface Props extends Omit<AccordionProps, "title"> {
  expander?: React.ReactNode;
}

export const Accordion = (props: Props): React.ReactElement => {
  const {
    expander = <ArrowForwardIosSharpIcon sx={{ fontSize: "0.9rem" }} />,
    children,
    ...rest
  } = props;

  return (
    <StyledAccordion disableGutters elevation={0} square {...rest}>
      <AccordionSummary expandIcon={expander}></AccordionSummary>
      <StyledAccordionDetails>{children}</StyledAccordionDetails>
    </StyledAccordion>
  );
};

const StyledAccordion = styled(MuiAccordion)`
  padding: 0;
  margin: 0;
  background-color: transparent;
}`;

const AccordionSummary = styled(MuiAccordionSummary)`
  display: flex;
  flex-direction: row-reverse;
  &
    .${accordionSummaryClasses.expandIconWrapper}.${accordionSummaryClasses.expanded} {
    transform: rotate(90deg);
  }
  & .${accordionSummaryClasses.content} {
    margin-left: 0.5rem;
  }
`;

const StyledAccordionDetails = styled(AccordionDetails)`
  background: transparent;
  padding: 0;
  margin: 0;
`;

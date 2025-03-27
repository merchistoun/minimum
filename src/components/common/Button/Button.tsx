import styled from "@emotion/styled";
import MuiButton, { ButtonProps } from "@mui/material/Button";
import React from "react";
import { useStore } from "../../../store/useStore";

interface Props extends Omit<ButtonProps, "children"> {
  disabled?: boolean;
  text: string;
}

export const Button = (props: Props): React.ReactElement => {
  const { isBusy } = useStore();
  const { onClick, disabled, ...buttonProps } = props;

  return (
    <StyledButton
      {...buttonProps}
      disabled={isBusy || disabled}
      onClick={onClick}
    >
      {props.text}
    </StyledButton>
  );
};

const StyledButton = styled(MuiButton)`
  text-transform: none;
  border-radius: 0.5rem;
  padding: 0.5rem 1rem;
`;

import { styled } from "@mui/material";
import MuiSwitch, { SwitchProps } from "@mui/material/Switch";
import React from "react";
import { Text } from "../";

interface Props extends Omit<SwitchProps, "onChange"> {
  checkedLabel: string;
  uncheckedLabel: string;
  labelPosition?: "start" | "end";
  onChange: (checked: boolean) => void;
}
export const Switch = (props: Props): React.ReactElement => {
  const {
    labelPosition,
    checked,
    checkedLabel,
    uncheckedLabel,
    onChange,
    ...rest
  } = props;

  const handleOnChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const { checked } = event.target;
    onChange(checked);
  };

  return (
    <SwitchLayout>
      {labelPosition === "start" && (
        <Text text={checked ? checkedLabel : uncheckedLabel} />
      )}
      <MuiSwitch
        {...rest}
        onChange={handleOnChange}
        checked={checked}
        color="warning"
      />
      {labelPosition === "end" && (
        <Text text={checked ? checkedLabel : uncheckedLabel} />
      )}
    </SwitchLayout>
  );
};

const SwitchLayout = styled("div")`
  display: flex;
  flex-direction: row;
  align-items: center;
  gap: 0.5rem;
`;

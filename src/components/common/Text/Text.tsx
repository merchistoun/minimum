import Typography, { TypographyProps } from "@mui/material/Typography";
import React from "react";

interface Props extends Omit<TypographyProps, "children"> {
  text?: string;
}

export const Text = (props: Props): React.ReactElement => {
  const { text, ...typographyProps } = props;

  return <Typography {...typographyProps}>{text}</Typography>;
};

import { styled } from "@mui/material";
import React from "react";
import { NAMESPACE, useTranslate } from "../../localization";
import { Text } from "../common";

export const InfoPanel = (): React.ReactElement => {
  const { translate } = useTranslate(NAMESPACE.infoPanel);

  return (
    <InfoPanelLayout>
      <Text text={translate("title")} variant="h2" />
      <Text text={translate("instructions")} variant="body1" />
    </InfoPanelLayout>
  );
};

const InfoPanelLayout = styled("div")`
  display: flex;
  flex-direction: column;
  gap: 1rem;
  padding: 1rem;
`;

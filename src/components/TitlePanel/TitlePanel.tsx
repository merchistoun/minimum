import { styled } from "@mui/material";
import React from "react";
import { useTranslate } from "../../localization";
import { Button, Text } from "../common";
import { useTitlePanel } from "./useTitlePanel";

export const TitlePanel = (): React.ReactElement => {
  const { isUploadDisabled, onUploadClick } = useTitlePanel();
  const { translate } = useTranslate();

  return (
    <TitlePanelLayout>
      <Text text={translate("title")} variant="h1" />

      <Button
        variant="contained"
        color="primary"
        disabled={isUploadDisabled}
        onClick={onUploadClick}
        text={translate("uploadButton")}
      />
    </TitlePanelLayout>
  );
};

const TitlePanelLayout = styled("div")`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  width: 100%;
  background-color: #00000010;
  border-top: 0.25rem solid #00000030;
  border-radius: 0 0 0.5rem 0.5rem;
  padding: 0.5rem 0.5rem 0.75rem 0.5rem;
`;

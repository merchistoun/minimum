import { styled } from "@mui/material";
import LinearProgress from "@mui/material/LinearProgress";
import React from "react";
import { NAMESPACE, useTranslate } from "../../localization";
import { Button, Text } from "../common";
import { useTitlePanel } from "./useTitlePanel";

export const TitlePanel = (): React.ReactElement => {
  const { isBusy, isUploadDisabled, onUploadClick } = useTitlePanel();
  const { translate } = useTranslate(NAMESPACE.titlePanel);

  return (
    <div>
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

      <Progress>
        {isBusy && (
          <LinearProgress color="primary" sx={{ height: "0.25rem" }} />
        )}
      </Progress>
    </div>
  );
};

const TitlePanelLayout = styled("div")`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  width: 100%;
  background-color: #00000020;
  border-top: 0.25rem solid #00000030;
  border-radius: 0 0 0.5rem 0.5rem;
  padding: 0.5rem 1rem 0.75rem 1rem;
`;

const Progress = styled("div")`
  height: 0.25rem;
  width: 100%;
`;

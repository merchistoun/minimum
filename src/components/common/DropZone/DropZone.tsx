import CloudUploadRoundedIcon from "@mui/icons-material/CloudUploadRounded";
import { styled } from "@mui/material";

import React, { useRef, useState } from "react";
import { GROUP, NAMESPACE, useTranslate } from "../../../localization";
import { Button } from "../Button/Button";
import { Text } from "../Text/Text";
import { useToaster } from "../hooks";

const ALLOWED_FILE_TYPES = [
  "csv",
  "doc",
  "docx",
  "eml",
  "gif",
  "jpg",
  "jpeg",
  "pdf",
  "msg",
  "pdf",
  "png",
  "txt",
  "xls",
  "xlsx",
];

interface Props {
  file?: File;
  onDrop: (file: File) => void;
  onRemove: () => void;
}

export const DropZone = (props: Props): React.ReactElement => {
  const { file, onDrop, onRemove } = props;

  const [onDragOver, setOnDragOver] = useState(false);
  const fileInputRef = useRef<HTMLInputElement>(null);
  const { success, error } = useToaster();
  const { translate } = useTranslate(NAMESPACE.dropZone);

  const validate = (files: File[]) => {
    setOnDragOver(false);

    if (files.length !== 1) {
      error(translate("fileCount", { group: GROUP.toaster }));
      return;
    }

    const extension = files[0].name.split(".").pop()?.toLowerCase();
    if (!extension || !ALLOWED_FILE_TYPES.includes(extension)) {
      error(
        translate("fileTypes", {
          group: GROUP.toaster,
          placeholders: { fileTypes: ALLOWED_FILE_TYPES.join(", ") },
        })
      );
      return;
    }

    success(
      translate("validFile", {
        group: GROUP.toaster,
        placeholders: { fileName: files[0].name },
      })
    );

    onDrop(files[0]);
  };

  const handleFileChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    if (event.target.files) {
      validate(Array.from(event.target.files));
    }
  };

  const handleDrop = (event: React.DragEvent<HTMLDivElement>) => {
    event.preventDefault();
    validate(Array.from(event.dataTransfer.files));
  };

  const handleOnDragOver = (event: React.DragEvent<HTMLDivElement>) => {
    event.preventDefault();
    setOnDragOver(true);
  };

  const handleOnDragLeave = (event: React.DragEvent<HTMLDivElement>) => {
    event.preventDefault();
    setOnDragOver(false);
  };
  return (
    <div>
      <Title>
        <Text text={translate("label")} variant="h2" />
      </Title>

      <DropZonePanel
        isActive={onDragOver}
        onDrop={handleDrop}
        onDragOver={handleOnDragOver}
        onDragLeave={handleOnDragLeave}
      >
        <Icon fontSize="large" />

        {!file ? (
          <>
            <RowLayout>
              <Button
                variant="outlined"
                component="label"
                text={translate("uploadButton")}
                onClick={() => fileInputRef.current?.click()}
              />
              <input
                type="file"
                hidden
                ref={fileInputRef}
                onChange={handleFileChange}
              />
              <Text text={translate("dragAndDrop")} variant="body1" />
            </RowLayout>
            <Text text={translate("fileTypes")} variant="body2" />
          </>
        ) : (
          <>
            <RowLayout>
              <Button
                variant="outlined"
                component="label"
                text={translate("removeButton")}
                onClick={onRemove}
              />
            </RowLayout>
            <Text
              text={translate("fileName", {
                placeholders: { fileName: file.name },
              })}
              variant="body2"
            />
          </>
        )}
      </DropZonePanel>
    </div>
  );
};

const Title = styled("div")`
  display: flex;
  justify-content: center;
  align-items: center;
  margin: 0.5rem;
  padding: 0.5rem;
`;

const DropZonePanel = styled("div")<{ isActive: boolean }>`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 0.5rem;
  margin: 1rem;
  padding: 1rem;
  border: 1px dashed ${({ theme }) => theme.palette.text.primary};
  background-color: ${(props) =>
    props.isActive
      ? props.theme.palette.primary.light
      : props.theme.palette.background.paper};
  border-radius: 1rem;
`;

const Icon = styled(CloudUploadRoundedIcon)`
  color: ${({ theme }) => theme.palette.text.disabled};
`;

const RowLayout = styled("div")`
  display: flex;
  flex-direction: row;
  height: 5rem;
  gap: 0.5rem;
  align-items: center;
`;

import { styled } from "@mui/material";
import React from "react";
import { DropZone, TabBar } from "../common";
import { InfoPanel } from "../InfoPanel/InfoPanel";
import { TitlePanel } from "../TitlePanel/TitlePanel";
import { useMainLayout } from "./useMainLayout";

export const MainLayout = (): React.ReactElement => {
  const {
    tabs,
    selectedTab,
    selectedTabFile,
    onTabChanged,
    onFileDropped,
    onFileRemove,
  } = useMainLayout();

  return (
    <Layout>
      <TitlePanel />
      <InfoPanel />

      <TabBar
        tabs={tabs}
        selectedTab={selectedTab}
        onTabChanged={onTabChanged}
      />

      <DropZone
        file={selectedTabFile}
        onDrop={onFileDropped}
        onRemove={onFileRemove}
      />
    </Layout>
  );
};

const Layout = styled("div")`
  display: flex;
  flex-direction: column;
  width: 100vw;
  max-width: 1024px;
  margin: 0 auto;
  height: 100vh;
  background-color: ${({ theme }) => theme.palette.background.default};
  gap: 1rem;
`;

import { styled } from "@mui/material";
import React from "react";
import { TabBar, Text } from "../common";
import { useMainLayout } from "./useMainLayout";

export const MainLayout = (): React.ReactElement => {
  const { tabs, selectedTab, onTabChanged } = useMainLayout();

  return (
    <Layout>
      <div>
        <Text variant="h1" text="Title Bar" />
        <Text variant="h2" text="Info Panel" />
      </div>

      <TabBar
        tabs={tabs}
        selectedTab={selectedTab}
        onTabChanged={onTabChanged}
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
`;

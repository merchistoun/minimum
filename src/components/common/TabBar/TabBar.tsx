import CheckCircleIcon from "@mui/icons-material/CheckCircle";
import { styled } from "@mui/material";
import Tab from "@mui/material/Tab";
import Tabs, { TabsProps } from "@mui/material/Tabs";
import React from "react";
import { MainTab } from "../../../model";
import { useStore } from "../../../store/useStore";

interface Props extends Omit<TabsProps, "onChange" | "value"> {
  tabs: MainTab[];
  selectedTab: number;
  onTabChanged: (value: number) => void;
}

export const TabBar = (props: Props): React.ReactElement => {
  const { tabs, selectedTab, onTabChanged } = props;
  const { isBusy } = useStore();

  return (
    <StyledTabs
      value={selectedTab}
      onChange={(_, value) => onTabChanged(value)}
    >
      {tabs.map(({ value, name, showIcon }) => (
        <StyledTab
          key={value}
          label={name}
          value={value}
          disabled={isBusy}
          color="primary"
          icon={showIcon ? <CheckIcon /> : <NoIcon />}
          iconPosition="end"
        />
      ))}
    </StyledTabs>
  );
};

const StyledTabs = styled(Tabs)`
  margin: 0;
  padding: 0;
  border-bottom: 1px solid ${({ theme }) => theme.palette.divider};
`;

const StyledTab = styled(Tab)`
  text-transform: none;
  letter-spacing: 0.075rem;
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  border-radius: 1rem 1rem 0 0;
`;

const CheckIcon = styled(CheckCircleIcon)`
  color: ${({ theme }) => theme.palette.success.main};
`;

const NoIcon = styled(CheckCircleIcon)`
  display: none;
`;

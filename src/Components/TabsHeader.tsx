import { Box, Tab, Tabs, styled } from "@mui/material";
import * as React from "react";

type TabsHeaderProps = {
  tabsList: Array<{ displayValue: string; value: string }>;
  selectedValue: string;
  handleChange: (event: React.SyntheticEvent, newValue: string) => void;
  highLight: boolean;
  showIndicator: boolean;
};

export const TabsHeader: React.FC<TabsHeaderProps> = ({
  tabsList,
  selectedValue,
  handleChange,
  highLight,
  showIndicator,
}) => {
  const StyledTabs = styled(Tabs)(({ theme }) => ({
    textTransform: "capitalize",
    width: "100%",
    minWidth: "320px",
    ".MuiTabs-indicator": {
      backgroundColor: showIndicator
        ? theme.palette.primary.main
        : "transparent",
      [theme.breakpoints.down("sm")]: {
        backgroundColor: "transparent",
      },
    },
    "& .MuiTabs-flexContainer": {
      [theme.breakpoints.down("sm")]: {
        flexWrap: "wrap",
      },
    },
  }));
  const AntTab = styled(Tab)(({ theme }) => ({
    ...(!showIndicator
      ? {
          minWidth: "unset",
        }
      : {}),
    "&hover": {
      color: theme.palette.text.primary,
      backgroundColor: "#FFFFFF",
    },
    "&.Mui-selected": {
      backgroundColor: highLight ? "#FFFFFF" : "none",
    },
  }));

  return (
    <Box sx={{ bgcolor: "#E9ECEF" }}>
      <StyledTabs
        value={selectedValue}
        onChange={handleChange}
        aria-label="nav tabs example"
        role="navigation"
      >
        {tabsList.map((tab) => (
          <AntTab value={tab.value} label={tab.displayValue} />
        ))}
      </StyledTabs>
    </Box>
  );
};

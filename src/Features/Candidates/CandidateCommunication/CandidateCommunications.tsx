import TabContext from "@mui/lab/TabContext";
import TabPanel from "@mui/lab/TabPanel";
import { Box, styled } from "@mui/material";
import React from "react";
import { TabsHeader } from "../../../Components/TabsHeader";
import { ComingSoon } from "../../ComingSome";
import { CandidateCommunicationsHeader } from "./CandidateCommunicationsHeader";
import { CandidateNotes } from "./CondidateNotes";

const tabsList = [
  {
    value: "All",
    displayValue: "All",
    component: <ComingSoon variant="body1" />,
  },
  {
    value: "NotesAndCalls",
    displayValue: "Notes and Calls",
    component: <CandidateNotes />,
  },
  {
    value: "Tasks",
    displayValue: "Tasks",
    component: <ComingSoon variant="body1" />,
  },
  {
    value: "Meetings",
    displayValue: "Meetings",
    component: <ComingSoon variant="body1" />,
  },
  {
    value: "Files",
    displayValue: "Files",
    component: <ComingSoon variant="body1" />,
  },
];

const TabContainer = styled("div")({
  backgroundColor: "#f8f9fa",
  padding: "16px",
  display: "flex",
  flexDirection: "column",
  gap: "12px",
  flex: 1,
  height: "100%",
  overflow: "auto",
});

export const CandidateCommunications = () => {
  const [value, setValue] = React.useState(tabsList[1].value);

  const handleChange = (_: unknown, newValue: string) => {
    setValue(newValue);
  };
  return (
    <Box display="flex" flexDirection="column" height="100%">
      <TabContext value={value}>
        <CandidateCommunicationsHeader />
        <Box paddingX="16px">
          <TabsHeader
            tabsList={tabsList}
            highLight={false}
            showIndicator={false}
            selectedValue={value}
            handleChange={handleChange}
          />
        </Box>

        <TabContainer>
          {tabsList.map((tab) => (
            <TabPanel sx={{ padding: 0 }} value={tab.value}>
              {tab.component}
            </TabPanel>
          ))}
        </TabContainer>
      </TabContext>
    </Box>
  );
};

import TabContext from "@mui/lab/TabContext";
import TabPanel from "@mui/lab/TabPanel";
import { styled } from "@mui/material";
import * as React from "react";
import { TabsHeader } from "../../../Components/TabsHeader";
import { ComingSoon } from "../../ComingSome";
import { CandidateAssignedJobs } from "./CandidateAssignedJobs";

const tabsList = [
  {
    value: "AllDetails",
    displayValue: "All Details",
    component: <ComingSoon variant="h5" />,
  },
  {
    value: "AssignedJobs",
    displayValue: "Assigned Jobs",
    component: <CandidateAssignedJobs />,
  },
  {
    value: "RelatedEmails",
    displayValue: "Related Emails",
    component: <ComingSoon variant="h5" />,
  },
  {
    value: "CandidateQuestions",
    displayValue: "Candidate Questions",
    component: <ComingSoon variant="h5" />,
  },
  {
    value: "Hotlists",
    displayValue: "Hotlists",
    component: <ComingSoon variant="h5" />,
  },
  {
    value: "RelatedDeals",
    displayValue: "Related Deals",
    component: <ComingSoon variant="h5" />,
  },
  {
    value: "Contact(s)Pitched",
    displayValue: "Contact(s) Pitched",
    component: <ComingSoon variant="h5" />,
  },
];

const MainContainer = styled("div")({
  display: "flex",
  flexDirection: "column",
  gap: "12px",
});

export const CandidateInfo = () => {
  const [value, setValue] = React.useState(tabsList[1].value);

  const handleChange = (_: unknown, newValue: string) => {
    setValue(newValue);
  };
  return (
    <MainContainer>
      <TabContext value={value}>
        <TabsHeader
          tabsList={tabsList}
          highLight={true}
          showIndicator={true}
          selectedValue={value}
          handleChange={handleChange}
        />
        {tabsList.map((tab) => (
          <TabPanel sx={{ padding: 0, height: "100%" }} value={tab.value}>
            {tab.component}
          </TabPanel>
        ))}
      </TabContext>
    </MainContainer>
  );
};

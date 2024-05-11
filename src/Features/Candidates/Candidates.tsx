import { Drawer, Theme, styled, useMediaQuery } from "@mui/material";
import * as React from "react";
import { EmployeeDetails } from "../../Data";
import { CandidateCommunications } from "./CandidateCommunication/CandidateCommunications";
import { CandidateDetails } from "./CandidateDetails";
import { CandidateHeader } from "./CandidateHeader";
import { CandidateInfo } from "./CandidateInfo/CandidateInfo";

const CandidatesInfoContainer = styled("div")(({ theme }) => ({
  flex: 0.75,
  height: "100%",
  border: `1px solid ${theme.palette.grey[200]}`,
  [theme.breakpoints.down("lg")]: {
    flex: 1,
  },
}));

const UserContainer = styled("div")(({ theme }) => ({
  background: theme.palette.grey[200],
  flex: 0.25,
}));

export const Candidates = () => {
  const match = useMediaQuery((theme: Theme) => theme.breakpoints.up("lg"));
  const [open, setOpen] = React.useState(false);

  const toggleDrawer = (state?: boolean) => {
    if (state !== undefined) {
      console.log(state);
      setOpen(state);
      return;
    }

    setOpen((prev) => !prev);
  };
  return (
    <div style={{ display: "flex" }}>
      <CandidatesInfoContainer>
        <CandidateHeader toggleDrawer={toggleDrawer} />
        <CandidateDetails data={EmployeeDetails} />
        <CandidateInfo />
      </CandidatesInfoContainer>
      {match ? (
        <UserContainer>
          <CandidateCommunications />
        </UserContainer>
      ) : (
        <Drawer
          anchor="right"
          closeAfterTransition
          onClose={() => toggleDrawer(false)}
          variant="temporary"
          open={open}
          sx={{
            flexShrink: 0,
            [`& .MuiDrawer-paper`]: {
              marginTop: "56px",
              maxWidth: "440px",
              boxSizing: "border-box",
            },
          }}>
          <CandidateCommunications />
        </Drawer>
      )}
    </div>
  );
};

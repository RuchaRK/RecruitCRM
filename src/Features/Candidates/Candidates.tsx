import { Drawer, Theme, styled, useMediaQuery } from "@mui/material";
import * as React from "react";
import { Candidate } from "../../App.types";
import { Error } from "../../Components/Error";
import { Loading } from "../../Components/Loading";
import { useFetch } from "../../Hooks/useFetch";
import { CandidateCommunications } from "./CandidateCommunication/CandidateCommunications";
import { CandidateDetails } from "./CandidateDetails";
import { CandidateHeader } from "./CandidateHeader";
import { CandidateInfo } from "./CandidateInfo/CandidateInfo";

const CandidatesInfoContainer = styled("div")(({ theme }) => ({
  flex: 0.75,
  height: "100%",
  overflow: "auto",
  paddingBottom: "24px",
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

  const {
    loading,
    error,
    data: candidateData,
    setData: setCandidateData,
  } = useFetch<Candidate>("http://localhost:4000/candidates/321");

  if (loading) {
    return <Loading />;
  }

  if (error || !candidateData) {
    return <Error />;
  }

  const toggleDrawer = (state?: boolean) => {
    if (state !== undefined) {
      console.log(state);
      setOpen(state);
      return;
    }

    setOpen((prev) => !prev);
  };
  return (
    <div style={{ display: "flex", paddingBottom: "24px" }}>
      <CandidatesInfoContainer>
        <CandidateHeader
          toggleDrawer={toggleDrawer}
          data={candidateData}
          setData={setCandidateData}
        />
        <CandidateDetails data={candidateData} />
        <CandidateInfo data={candidateData} />
      </CandidatesInfoContainer>
      {match ? (
        <UserContainer>
          <CandidateCommunications toggleDrawer={toggleDrawer} />
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
              width: "100%",
            },
          }}
        >
          <CandidateCommunications toggleDrawer={toggleDrawer} />
        </Drawer>
      )}
    </div>
  );
};

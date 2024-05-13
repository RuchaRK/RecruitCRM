import AccessTimeIcon from "@mui/icons-material/AccessTime";
import AccountCircleOutlinedIcon from "@mui/icons-material/AccountCircleOutlined";
import {
  Avatar,
  Box,
  Button,
  Chip,
  Switch,
  Theme,
  Typography,
  styled,
  useMediaQuery,
} from "@mui/material";
import * as React from "react";
import { Job } from "../../../App.types";
import { IconTextContainer } from "../../../Components/IconTextContainer";
import { useFetch } from "../../../Hooks/useFetch";
import { Loading } from "../../../Components/Loading";
import { Error } from "../../../Components/Error";

const MainContainer = styled("div")({
  display: "flex",
  flexDirection: "column",
  gap: "12px",
  paddingBottom: "40px",
});
const ActionsContainer = styled("div")(({ theme }) => ({
  padding: "12px",
  display: "flex",
  justifyContent: "space-between",
  alignItems: "center",
  [theme.breakpoints.down("sm")]: {
    gap: "12px",
    flexDirection: "column",
    alignItems: "start",
    justifyContent: "start",
  },
}));
const AntSwitch = styled(Switch)(({ theme }) => ({
  width: 42,
  height: 24,
  padding: 0,
  display: "flex",
  "&:active": {
    "& .MuiSwitch-thumb": {
      width: "17px",
      height: "17px",
    },
    "& .MuiSwitch-switchBase.Mui-checked": {
      transform: "translateX(18px)",
    },
  },
  "& .MuiSwitch-switchBase": {
    padding: 2,
    "&.Mui-checked": {
      transform: "translateX(19px)",
      color: "#fff",
      "& + .MuiSwitch-track": {
        opacity: 1,
        borderRadius: "12px",
        backgroundColor: theme.palette.mode === "dark" ? "#177ddc" : "#1890ff",
      },
    },
  },
}));

const DetailContainer = styled("div")(({ theme }) => ({
  display: "flex",
  gap: "12px",
  alignItems: "center",
  justifyContent: "space-between",
  padding: "8px 12px",
  border: "1px solid #E9ECEF",
  borderRadius: "5px",
  "& + &": {
    marginTop: "12px",
  },
  [theme.breakpoints.down("sm")]: {
    gap: "12px",
    flexDirection: "column",
    alignItems: "start",
    justifyContent: "start",
  },
}));

const DetailsContainer: React.FC<{
  candidateName: string;
  assignedJob: string;
  description: string;
  assignedFrom: string;
}> = ({ candidateName, assignedJob, description, assignedFrom }) => {
  const matchDownSm = useMediaQuery((theme: Theme) =>
    theme.breakpoints.down("sm"),
  );
  if (matchDownSm) {
    return (
      <DetailContainer>
        <Box
          display="flex"
          alignItems="start"
          justifyContent="space-between"
          width="100%"
        >
          <IconTextContainer>
            <Avatar />
            <Box display="flex" flexDirection="column">
              <Typography variant="subtitle2">{assignedJob}</Typography>
              <Typography variant="caption">{description}</Typography>
            </Box>
          </IconTextContainer>
          <AntSwitch
            defaultChecked
            inputProps={{ "aria-label": "ant design" }}
          />
        </Box>
        <Box display="flex" flexDirection="column">
          <IconTextContainer>
            <AccountCircleOutlinedIcon fontSize="small" />
            <Typography variant="caption">{candidateName}</Typography>
          </IconTextContainer>
          <IconTextContainer>
            <AccessTimeIcon fontSize="small" />
            <Typography variant="caption">{assignedFrom}</Typography>
          </IconTextContainer>
        </Box>
        <Box
          display="flex"
          alignItems="center"
          justifyContent="space-between"
          width="100%"
        >
          <Chip variant="outlined" size="medium" label="Assigned" />
          <Button variant="outlined" size="small">
            View Files
          </Button>
        </Box>
      </DetailContainer>
    );
  }
  return (
    <DetailContainer>
      <IconTextContainer>
        <Avatar />
        <Box display="flex" flexDirection="column">
          <Typography variant="subtitle2">{assignedJob}</Typography>
          <Typography variant="caption">{description}</Typography>
        </Box>
      </IconTextContainer>
      <Box display="flex" flexDirection="column">
        <IconTextContainer>
          <AccountCircleOutlinedIcon fontSize="small" />
          <Typography variant="caption">{candidateName}</Typography>
        </IconTextContainer>
        <IconTextContainer>
          <AccessTimeIcon fontSize="small" />
          <Typography variant="caption">{assignedFrom}</Typography>
        </IconTextContainer>
      </Box>
      <Chip variant="outlined" size="small" label="Assigned" />
      <Button variant="outlined" size="small">
        View Files
      </Button>
      <AntSwitch defaultChecked inputProps={{ "aria-label": "ant design" }} />
    </DetailContainer>
  );
};

export const CandidateAssignedJobs: React.FC<{ candidateName: string }> = ({
  candidateName,
}) => {
  const {
    loading,
    error,
    data: jobs,
  } = useFetch<Array<Job>>("http://localhost:4000/jobs");

  if (loading) {
    return <Loading />;
  }

  if (error || !jobs) {
    return <Error />;
  }

  return (
    <MainContainer>
      <ActionsContainer>
        <Typography variant="subtitle2">
          Assigned Job to William Sample
        </Typography>
        <div style={{ display: "flex", gap: "12px" }}>
          <Button variant="contained" size="small">
            Assign To Job
          </Button>
          <Button variant="outlined" size="small">
            View All Assigned Jobs
          </Button>
        </div>
      </ActionsContainer>
      <Box p="12px">
        {jobs.map((job) => (
          <DetailsContainer
            candidateName={candidateName}
            assignedJob={job.assignedJob}
            description={job.description}
            assignedFrom={job.assignedFrom}
          />
        ))}
      </Box>
    </MainContainer>
  );
};

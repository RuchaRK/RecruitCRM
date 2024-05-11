import AccountCircleOutlinedIcon from "@mui/icons-material/AccountCircleOutlined";
import AssistantIcon from "@mui/icons-material/Assistant";
import EditIcon from "@mui/icons-material/Edit";
import EmailOutlinedIcon from "@mui/icons-material/EmailOutlined";
import FacebookIcon from "@mui/icons-material/FacebookRounded";
import HistoryIcon from "@mui/icons-material/History";
import LinkIcon from "@mui/icons-material/Link";
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import GitHubIcon from '@mui/icons-material/GitHub';
import LocalFireDepartmentIcon from "@mui/icons-material/LocalFireDepartment";
import LocalPhoneOutlinedIcon from "@mui/icons-material/LocalPhoneOutlined";
import MoreHorizIcon from "@mui/icons-material/MoreHoriz";
import NavigateBeforeIcon from "@mui/icons-material/NavigateBefore";
import NavigateNextIcon from "@mui/icons-material/NavigateNext";
import StarIcon from "@mui/icons-material/Star";
import TwitterIcon from "@mui/icons-material/Twitter";
import UpdateIcon from "@mui/icons-material/Update";
import { Avatar, Button, Chip, Typography, useMediaQuery } from "@mui/material";
import Breadcrumbs from "@mui/material/Breadcrumbs";
import { Theme, styled } from "@mui/material/styles";
import { format } from "date-fns";
import { Link } from "react-router-dom";
import { ButtonsContainer } from "../../Components/GlobalHeader";
import { IconTextContainer } from "../../Components/IconTextContainer";
import { EmployeeDetails } from "../../Data";
const HeaderContainer = styled("div")(({ theme }) => ({
  display: "flex",
  height: "50px",
  alignItems: "center",
  justifyContent: "space-between",
  backgroundColor: theme.palette.grey[200],
  padding: "15px",
  [theme.breakpoints.down("sm")]: {
    gap: "16px",
    flexDirection: "column",
    alignItems: "start",
    justifyContent: "start",
    height: "fit-content",
  },
}));

const CardHeader = styled("div")({
  display: "flex",
  flexDirection: "column",
  gap: "6px",
});

const MiddleHeader = styled("div")(({ theme }) => ({
  display: "flex",
  alignItems: "start",
  justifyContent: "space-between",
  padding: "12px",
  [theme.breakpoints.down("sm")]: {
    gap: "16px",
    flexDirection: "column",
    alignItems: "start",
    justifyContent: "start",
  },
}));

const Info = styled("div")(({ theme }) => ({
  display: "flex",
  gap: "8px",
  alignItems: "center",
  [theme.breakpoints.down("sm")]: {
    gap: "2px",
    flexDirection: "column",
    alignItems: "start",
    justifyContent: "start",
  },
}));

const LogoContainer = styled("div")({
  display: "flex",
  gap: "8px",
  alignItems: "center",
});

const ContactDetails = styled("div")(({ theme }) => ({
  display: "flex",
  justifyContent: "space-between",
  alignItems: "center",
  gap: "16px",
  height: "50px",
  padding: "12px 20px",
  border: `1px solid ${theme.palette.grey[200]}`,
  [theme.breakpoints.down("sm")]: {
    gap: "2px",
    flexDirection: "column",
    alignItems: "start",
    height: "fit-content",
    justifyContent: "start",
  },
}));

const DetailStyling = styled("div")(({ theme }) => ({
  display: "flex",
  justifyContent: "space-between",
  alignItems: "center",
  gap: "12px",
  [theme.breakpoints.down("sm")]: {
    gap: "2px",
    flexDirection: "column",
    alignItems: "start",
    height: "fit-content",
    justifyContent: "start",
  },
}));

const ButtonGroupContainer = styled("div")({
  display: "flex",
  alignItems: "center",
  gap: "12px",
});

export const CandidateHeader: React.FC<{
  toggleDrawer: (state?: boolean) => void;
}> = ({ toggleDrawer }) => {
  const match = useMediaQuery((theme: Theme) => theme.breakpoints.up("lg"));
  const matchDownMd = useMediaQuery((theme: Theme) =>
    theme.breakpoints.down("md")
  );
  return (
    <>
      <HeaderContainer>
        <div>
          <Breadcrumbs separator={<NavigateNextIcon />} sx={{flexWrap:"nowrap"}}>
            <Link to="/">
              <Typography variant="subtitle2" noWrap>Candidates</Typography>
            </Link>
            <Typography variant="subtitle2">{EmployeeDetails.name}</Typography>
            <Chip
              label={`ID - ${EmployeeDetails.id}`}
              variant="outlined"
              size="small"
            />
          </Breadcrumbs>
        </div>
        <ButtonsContainer>
          <Button variant="outlined" size="small">
            {!matchDownMd ? "Request Profile Update" : <UpdateIcon />}
          </Button>
          <Button variant="outlined" size="small">
            {!matchDownMd ? "Previous" : <NavigateBeforeIcon />}
          </Button>
          <Button variant="outlined" size="small">
            {!matchDownMd ? "Next" : <NavigateNextIcon />}
          </Button>
        </ButtonsContainer>
      </HeaderContainer>
      <MiddleHeader>
        <IconTextContainer style={{ alignItems: "start" }}>
          <Avatar sx={{ height: "64px", width: "64px" }} />
          <CardHeader>
            <Info>
              <Typography variant="h6">{EmployeeDetails.name}</Typography>
              <LogoContainer>
                <FacebookIcon htmlColor="#1877F2" fontSize="small" />
                <TwitterIcon htmlColor="#1DA1F2" fontSize="small" />
                <LinkedInIcon htmlColor="#0077B5" fontSize="small" />
                <GitHubIcon htmlColor="#2b3137" fontSize="small" />
              </LogoContainer>
            </Info>
            <Info>
              <Typography variant="caption">
                {EmployeeDetails.designation}
              </Typography>
              {match ? (
                <>
                  <Typography variant="caption">
                    {EmployeeDetails.fullAddress.country}
                  </Typography>
                  <Typography variant="caption">
                    {EmployeeDetails.fullAddress.city}
                  </Typography>
                </>
              ) : (
                <Typography variant="caption">
                  {`${EmployeeDetails.fullAddress.country}, ${EmployeeDetails.fullAddress.city}`}
                </Typography>
              )}
            </Info>
          </CardHeader>
        </IconTextContainer>

        <ButtonGroupContainer>
          <Button variant="outlined" size="small" color="error">
            {match ? "Contact Linked" : <LinkIcon fontSize="small" />}
          </Button>
          <Button variant="outlined" size="small">
            <StarIcon fontSize="small" />
          </Button>
          <Button variant="outlined" size="small">
            <LocalFireDepartmentIcon fontSize="small" />
          </Button>
          <Button variant="outlined" size="small">
            <EditIcon fontSize="small" />
          </Button>
          {!match && (
            <Button
              variant="outlined"
              size="small"
              sx={{ minWidth: "unset" }}
              onClick={() => toggleDrawer()}>
              <AssistantIcon fontSize="small" />
            </Button>
          )}
          <Button variant="outlined" size="small" sx={{ minWidth: "unset" }}>
            <MoreHorizIcon fontSize="small" />
          </Button>
        </ButtonGroupContainer>
      </MiddleHeader>

      <ContactDetails>
        <DetailStyling>
          <IconTextContainer>
            <EmailOutlinedIcon fontSize="small" />
            <Typography variant="caption" color="blue">
              {EmployeeDetails.email}
            </Typography>
          </IconTextContainer>
          <IconTextContainer>
            <LocalPhoneOutlinedIcon fontSize="small" />
            <Typography variant="caption" color="blue"  >
              {`+91 ${EmployeeDetails.phone}`}
            </Typography>
          </IconTextContainer>
        </DetailStyling>

        <DetailStyling>
          <IconTextContainer>
            <AccountCircleOutlinedIcon fontSize="small" />
            <Typography variant="caption">Phyllis Yang</Typography>
          </IconTextContainer>
          <IconTextContainer>
            <HistoryIcon fontSize="small" />
            <Typography variant="caption">
              {format(new Date(), "MMM dd',' yyyy, hh:mm a")}
            </Typography>
          </IconTextContainer>
        </DetailStyling>
      </ContactDetails>
    </>
  );
};

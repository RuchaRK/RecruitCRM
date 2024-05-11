import CheckCircleIcon from "@mui/icons-material/CheckCircle";
import EventIcon from "@mui/icons-material/Event";
import PhoneInTalkIcon from "@mui/icons-material/PhoneInTalk";
import StickyNote2Icon from "@mui/icons-material/StickyNote2";
import { Button, styled } from "@mui/material";

export const CircularIconButton = styled(Button)({
  borderRadius: "50%",
  minWidth: "unset",
  padding: 0,
  height: "40px",
  width: "40px",
  backgroundColor: "#e6f1ff",
});
const ButtonGroupContainer = styled("div")(({ theme }) => ({
  display: "flex",
  alignItems: "center",
  gap: "24px",
  height: "84px",
  padding: "12px 20px",
  background: theme.palette.common.white,
}));

export const CandidateCommunicationsHeader = () => {
  return (
    <div>
      <ButtonGroupContainer>
        <CircularIconButton>
          <StickyNote2Icon fontSize="small" />
        </CircularIconButton>
        <CircularIconButton>
          <PhoneInTalkIcon fontSize="small" />
        </CircularIconButton>
        <CircularIconButton>
          <CheckCircleIcon fontSize="small" />
        </CircularIconButton>
        <CircularIconButton>
          <EventIcon fontSize="small" />
        </CircularIconButton>
      </ButtonGroupContainer>
    </div>
  );
};

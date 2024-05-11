import AccessTimeOutlinedIcon from "@mui/icons-material/AccessTimeOutlined";
import AccountCircleOutlinedIcon from "@mui/icons-material/AccountCircleOutlined";
import StickyNote2Icon from "@mui/icons-material/StickyNote2";
import { Chip, ChipProps, Typography, styled } from "@mui/material";
import { format } from "date-fns";
import { IconTextContainer } from "../../../Components/IconTextContainer";

const NoteCardContainer = styled("div")({
  padding: "16px",
  display: "flex",
  flexDirection: "column",
  gap: "12px",
  justifyContent: "center",
  backgroundColor: "#ffffff",
  border: "1px solid #E9ECEF",
  borderRadius: "5px",
});

const Header = styled("div")({
  display: "flex",
  gap: "12px",
  justifyContent: "flex-start",
});

const UserAndDateContainer = styled("div")({
  display: "flex",
  justifyContent: "space-between",
  alignItems: "center",
});

enum NoteStatus {
  TODO = "todo",
  IN_PROGRESS = "inprogress",
  DONE = "done",
}

const statusToText = {
  [NoteStatus.TODO]: "To do",
  [NoteStatus.IN_PROGRESS]: "In progress",
  [NoteStatus.DONE]: "Done",
};

const notes = [
  {
    title: "Note 1",
    status: NoteStatus.TODO,
    description:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Commodi eaiusto, nam neque assumenda cum animi, eius harum debitis dicta exercitationem odit mollitia doloremque, eos tempore aspernatur inventore delectus! Eveniet.",
    associationCount: 1,
    author: "John Deo",
    date: "2023-04-30T18:30:00.000Z",
  },
  {
    title: "Note 2",
    status: NoteStatus.IN_PROGRESS,
    description:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Commodi eaiusto, nam neque assumenda cum animi, eius harum debitis dicta exercitationem odit mollitia doloremque, eos tempore aspernatur inventore delectus! Eveniet.",
    associationCount: 1,
    author: "John Deo",
    date: "2023-04-30T18:30:00.000Z",
  },
  {
    title: "Note 3",
    status: NoteStatus.TODO,
    description:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Commodi eaiusto, nam neque assumenda cum animi, eius harum debitis dicta exercitationem odit mollitia doloremque, eos tempore aspernatur inventore delectus! Eveniet.",
    associationCount: 1,
    author: "John Deo",
    date: "2023-04-30T18:30:00.000Z",
  },
];

const getColor = (status: NoteStatus): ChipProps["color"] => {
  switch (status) {
    case "todo":
      return "default";
    case "inprogress":
      return "info";
    case "done":
      return "success";
  }
};

export const CandidateNotes = () => {
  return notes.map((note) => {
    return (
      <NoteCardContainer>
        <Header>
          <IconTextContainer>
            <StickyNote2Icon fontSize="small" />
            <Typography variant="subtitle2" color="#548fd5">
              {note.title}
            </Typography>
          </IconTextContainer>
          <Chip
            label={statusToText[note.status]}
            variant="filled"
            size="small"
            color={getColor(note.status)}
          />
        </Header>
        <Typography variant="body1">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Commodi ea
          iusto, nam neque assumenda cum animi, eius harum debitis dicta
          exercitationem odit mollitia doloremque, eos tempore aspernatur
          inventore delectus! Eveniet.
        </Typography>
        <Typography variant="subtitle2" color={"blue"}>
          1 Association(s)
        </Typography>
        <UserAndDateContainer>
          <IconTextContainer>
            <AccountCircleOutlinedIcon fontSize="small" />
            <Typography variant="caption">John Deo</Typography>
          </IconTextContainer>
          <IconTextContainer>
            <AccessTimeOutlinedIcon fontSize="small" />
            <Typography variant="caption">
              {format(new Date(), "MMM dd',' yyyy, hh:mm a")}
            </Typography>
          </IconTextContainer>
        </UserAndDateContainer>
      </NoteCardContainer>
    );
  });
};

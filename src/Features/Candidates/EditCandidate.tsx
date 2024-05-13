import {
  Button,
  Dialog,
  DialogActions,
  DialogContent,
  DialogContentText,
  DialogTitle,
  FormControl,
  InputLabel,
  MenuItem,
  Select,
  SelectChangeEvent,
  styled,
  useMediaQuery,
  useTheme,
} from "@mui/material";
import TextField from "@mui/material/TextField";
import { format } from "date-fns";
import * as React from "react";
import { Candidate } from "../../App.types";

interface Props {
  closeWizard: () => void;
  handleSubmit: (formData: Candidate) => void;
  initialState: Candidate;
}

const StyledDialogueBox = styled(DialogContentText)({
  width: "500px",
  display: "grid",
  gridTemplateColumns: "1fr 1fr",
  gridGap: "24px",
  padding: "12px 0px",
});

export const EditCandidate: React.FC<Props> = ({
  closeWizard,
  handleSubmit,
  initialState,
}) => {
  const theme = useTheme();
  const fullScreen = useMediaQuery(theme.breakpoints.down("sm"));
  const [formData, setFormData] = React.useState(initialState);

  const handleChange = (
    event:
      | React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
      | SelectChangeEvent<string>,
  ) => {
    console.log(event.target.value);
    setFormData((prev) => ({
      ...prev,
      [event.target.name]: event?.target.value,
    }));
  };

  const handleDateChange = (
    event: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>,
  ) => {
    setFormData((prev) => ({
      ...prev,
      [event.target.name]: new Date(event?.target.value).toISOString(),
    }));
  };

  const handleArrayValueChange = (
    event: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>,
  ) => {
    console.log(event.target.value);
    setFormData((prev) => ({
      ...prev,
      [event.target.name]: event.target.value.split(","),
    }));
  };

  return (
    <React.Fragment>
      <Dialog
        fullScreen={fullScreen}
        open
        onClose={closeWizard}
        sx={{ maxWidth: "unset" }}
      >
        <DialogTitle>Edit Candidate Details</DialogTitle>
        <DialogContent>
          <StyledDialogueBox>
            <TextField
              label="Name"
              name="name"
              value={formData.name}
              onChange={handleChange}
            />

            <TextField
              label="Email"
              type="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
            />

            <TextField
              label="Phone"
              type="number"
              name="phone"
              value={formData.phone}
              onChange={handleChange}
            />

            <TextField
              label="Date of Birth"
              type="date"
              name="dob"
              value={format(new Date(formData.dob), "yyyy-MM-dd")}
              onChange={handleDateChange}
            />

            <TextField
              label="Avaliable From"
              type="date"
              name="availableFrom"
              value={format(new Date(formData.availableFrom), "yyyy-MM-dd")}
              onChange={handleDateChange}
            />

            <TextField
              label="Skills"
              name="skills"
              value={formData.skills.join(",")}
              onChange={handleArrayValueChange}
            />

            <TextField
              label="Current Organization"
              name="currentOrganization"
              value={formData.currentOrganization}
              onChange={handleChange}
            />

            <TextField
              type="number"
              label="Total Experiance"
              name="totalExperience"
              value={formData.totalExperience}
              onChange={handleChange}
            />

            <TextField
              label="Designation"
              name="designation"
              value={formData.designation}
              onChange={handleChange}
            />

            <TextField
              label="Current Salary"
              type="number"
              name="currentSalary"
              value={formData.currentSalary}
              onChange={handleChange}
            />

            <TextField
              label="Notice Period"
              type="number"
              name="noticePeriod"
              value={formData.noticePeriod}
              onChange={handleChange}
            />

            <FormControl>
              <InputLabel id="employment-label">Employment Status</InputLabel>
              <Select
                labelId="employement-label"
                label="Employement Status"
                name="currentEmploymentStatus"
                value={formData.currentEmploymentStatus}
                onChange={handleChange}
              >
                <MenuItem value="intern">Intern</MenuItem>
                <MenuItem value="employed">Employed</MenuItem>
                <MenuItem value="servingNotice">Serving Notice Period</MenuItem>
                <MenuItem value="resigned">Resigned</MenuItem>
              </Select>
            </FormControl>
          </StyledDialogueBox>
        </DialogContent>
        <DialogActions>
          <Button autoFocus onClick={closeWizard}>
            Close
          </Button>
          <Button onClick={() => handleSubmit(formData)} autoFocus>
            Save
          </Button>
        </DialogActions>
      </Dialog>
    </React.Fragment>
  );
};

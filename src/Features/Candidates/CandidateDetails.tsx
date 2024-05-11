import { Typography, styled } from "@mui/material";
import { format } from "date-fns";
import { Employee } from "../../Data";

const MainDetailContainer = styled("div")(({ theme }) => ({
  display: "grid",
  gridTemplateColumns: "1fr 1fr 1fr 1fr ",
  gridGap: "20px",
  padding: "12px",
  textAlign: "left",
  [theme.breakpoints.down("sm")]: {
    gridTemplateColumns: "1fr 1fr",
    gridGap: "10px",
  },
}));

const KeyValuePair: React.FC<{ keyText: string; valueText: string }> = ({
  keyText,
  valueText,
}) => {
  return (
    <>
      <Typography variant="body1" fontWeight="500" fontSize="12px">
        {keyText}
      </Typography>
      <Typography variant="body1" fontSize="12px">
        {valueText}
      </Typography>
    </>
  );
};

export const CandidateDetails: React.FC<{ data: Employee }> = ({ data }) => {
  return (
    <MainDetailContainer>
      <KeyValuePair
        keyText="Current Organization"
        valueText={data.currentOrganization}
      />
      <KeyValuePair keyText="Summary" valueText={data.summary} />
      <KeyValuePair keyText="Skills" valueText={data.skills.join(", ")} />
      <KeyValuePair
        keyText="Current Employment Status"
        valueText={data.currentEmploymentStatus}
      />
      <KeyValuePair
        keyText="Available From"
        valueText={format(new Date(data.availableFrom), "dd MMM yyyy")}
      />
      <KeyValuePair
        keyText="Date of Birth"
        valueText={format(new Date(data.dob), "dd MMM yyyy")}
      />
      <KeyValuePair
        keyText="Current Salary"
        valueText={`$ ${data.currentSalary}`}
      />
      <KeyValuePair
        keyText="Relevant Experience"
        valueText={`${data.relevantExperience} years`}
      />

      <KeyValuePair
        keyText="Notice Period"
        valueText={`${data.noticePeriod} days`}
      />
      <KeyValuePair
        keyText="Salary Expectation"
        valueText={`$ ${data.salaryExpectation}`}
      />
      <KeyValuePair
        keyText="Full Address"
        valueText={`${data.fullAddress.line1},${data.fullAddress.city}`}
      />
      <KeyValuePair keyText="Status" valueText={`${data.status}`} />
      <KeyValuePair keyText="Resume" valueText={`${data.resume}`} />
      <KeyValuePair keyText="Salary Type" valueText={`${data.salaryType}`} />
      <KeyValuePair
        keyText="Total Experience"
        valueText={`${data.totalExperience} years`}
      />
      <KeyValuePair
        keyText="Language Skills"
        valueText={`${data.languageSkills[0].name} (${data.languageSkills[0].level} proficiency)`}
      />
    </MainDetailContainer>
  );
};

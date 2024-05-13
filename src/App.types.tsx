export type Candidate = {
  id: string;
  name: string;
  email: string;
  phone: string;
  dob: string;
  currentOrganization: string;
  designation: string;
  skills: string[];
  availableFrom: string;
  currentSalary: number;
  noticePeriod: number;
  fullAddress: {
    line1: string;
    city: string;
    state: string;
    country: string;
  };
  resume: string;
  totalExperience: number;
  relevantExperience: number;
  summary: string;
  currentEmploymentStatus: string;
  salaryExpectation: number;
  status: string;
  salaryType: string;
  languageSkills: { name: string; level: string }[];
};

export type Job = {
  id: string;
  assignedJob: string;
  description: string;
  assignedFrom: string;
};

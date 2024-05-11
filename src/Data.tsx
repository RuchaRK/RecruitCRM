export type Employee = {
  id: number;
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

type Job = {
  assignedJob: string;
  description: string;
  assignedFrom: string;
};

export const EmployeeDetails: Employee = {
  id: 321,
  name: "William Sample",
  email: "williamsample@gmail.com",
  phone: "9078564523",
  dob: "1994-06-14T18:30:00.000Z",
  currentOrganization: "World Bank Group",
  designation: "Senior Product Manager",
  skills: ["HTML", "CSS", "Javascript"],
  availableFrom: "2023-07-13T18:30:00.000Z",
  currentSalary: 90000,
  noticePeriod: 90,
  fullAddress: {
    line1: "5501 Morella Ave",
    city: "Dallas",
    state: "Texas",
    country: "United States",
  },
  resume: "Resume",
  totalExperience: 9,
  relevantExperience: 7,
  summary: "Current organization",
  currentEmploymentStatus: "Employed",
  salaryExpectation: 9000,
  status: "Submitted to client.",
  salaryType: "Annual",
  languageSkills: [{ name: "English", level: "Elementary" }],
};

export const jobs: Job[] = [
  {
    assignedJob: "Senior Project Manager",
    description: "Recruit CRM",
    assignedFrom: "2023-07-09T18:30:00.000Z",
  },
  {
    assignedJob: "Senior Project Manager",
    description: "Recruit CRM",
    assignedFrom: "2023-06-29T18:30:00.000Z",
  },
  {
    assignedJob: "Senior Project Manager",
    description: "Recruit CRM",
    assignedFrom: "2023-04-30T18:30:00.000Z",
  },
];

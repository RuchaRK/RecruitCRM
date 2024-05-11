import { Theme } from "@mui/material";

export const midScreenBreakPoint = (theme: Theme) =>
  theme.breakpoints.between("sm", "md");
export const smallScreenPoint = (theme: Theme) => theme.breakpoints.down("sm");
export const mediumToLarge = (theme: Theme) =>
  theme.breakpoints.between("md", "lg");

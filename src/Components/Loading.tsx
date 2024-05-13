import {
  Theme,
  Typography,
  TypographyProps,
  useMediaQuery,
} from "@mui/material";

import { styled } from "@mui/material";

interface Prop {
  variant?: TypographyProps["variant"];
}

const MainContainer = styled("div")({
  display: "flex",
  justifyContent: "center",
  alignItems: "center",
  height: "100%",
  minHeight: "200px",
});

export const Loading: React.FC<Prop> = ({ variant = "h2" }) => {
  const match = useMediaQuery((theme: Theme) => theme.breakpoints.down("sm"));
  return (
    <MainContainer>
      <Typography variant={match ? "body1" : variant}>Loading...</Typography>
    </MainContainer>
  );
};

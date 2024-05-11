import { Typography, TypographyProps } from "@mui/material";

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

export const ComingSoon: React.FC<Prop> = ({ variant = "h2" }) => {
  return (
    <MainContainer>
      <Typography variant={variant}>Coming Soon...</Typography>
    </MainContainer>
  );
};

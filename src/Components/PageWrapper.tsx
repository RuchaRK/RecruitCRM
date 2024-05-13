import { styled } from "@mui/material";
import * as React from "react";
import { GlobalHeader } from "./GlobalHeader";
import { SideNavBar } from "./SideNavBar";
import { NAV_BAR_SIZE } from "../Theme/theme.constants";

export const PageWrapper: React.FC<{ children: React.ReactNode }> = ({
  children,
}) => {
  const [open, setOpen] = React.useState(false);

  const toggleDrawer = (state?: boolean) => {
    if (state !== undefined) {
      console.log(state);
      setOpen(state);
      return;
    }

    setOpen((prev) => !prev);
  };

  const Page = styled("div")({
    display: "flex",
    height: "100%",
    padding: "0px",
  });

  const PageWrapperContainer = styled("div")({
    height: "100%",
    padding: "0px",
    width: "100%",
  });

  const ChildContainer = styled("div")(({ theme }) => ({
    margin: `${NAV_BAR_SIZE} 0 0 ${NAV_BAR_SIZE}`,
    height: "auto",
    width: "100%",
    border: `1px solid ${theme.palette.grey[200]}`,
    [theme.breakpoints.down("sm")]: {
      margin: `${NAV_BAR_SIZE} 0 0 0`,
    },
  }));

  return (
    <Page>
      <GlobalHeader toggleDrawer={toggleDrawer} />
      <PageWrapperContainer style={{ display: "flex" }}>
        <SideNavBar open={open} toggleDrawer={toggleDrawer} />
        <ChildContainer>{children}</ChildContainer>
      </PageWrapperContainer>
    </Page>
  );
};

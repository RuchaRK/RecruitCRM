import {
  Drawer,
  IconButton,
  Typography,
  alpha,
  useMediaQuery,
  Theme,
} from "@mui/material";
import { styled } from "@mui/material/styles";
import React from "react";
import { NavLink } from "react-router-dom";
import { routeName } from "../App.routes";
import { IconTextContainer } from "./IconTextContainer";
import { NAV_BAR_SIZE } from "../Theme/theme.constants";

const DrawerHeader = styled("div")(({ theme }) => ({
  display: "flex",
  flexDirection: "column",
  alignItems: "start",
  justifyContent: "flex-start",
  gap: "16px",
  height: "100%",
  marginTop: NAV_BAR_SIZE,
  padding: "8px",
  color: theme.palette.common.white,
  backgroundColor: "#143E6F",
}));

interface Props {
  readonly open: boolean;
  readonly toggleDrawer: (state?: boolean) => void;
}

export const SideNavBar: React.FC<Props> = ({ open, toggleDrawer }) => {
  const match = useMediaQuery((theme: Theme) => theme.breakpoints.down("sm"));
  return (
    <Drawer
      closeAfterTransition
      onClose={() => toggleDrawer(false)}
      variant={match ? "temporary" : "permanent"}
      open={open}
      sx={{
        flexShrink: 0,
        [`& .MuiDrawer-paper`]: open
          ? {
              width: 236,
              boxSizing: "border-box",
            }
          : { width: "57px" },
      }}
    >
      <DrawerHeader>
        {routeName.map((page) => {
          const Icon = page.icons;
          return (
            <NavLink to={page.path} onClick={() => toggleDrawer(false)}>
              {({ isActive }) => {
                return (
                  <IconTextContainer>
                    <IconButton
                      sx={({ palette }) =>
                        isActive
                          ? {
                              backgroundColor: alpha(palette.primary.dark, 0.6),
                            }
                          : {}
                      }
                    >
                      <Icon htmlColor="white" />
                    </IconButton>
                    {open && <Typography color="white">{page.name}</Typography>}
                  </IconTextContainer>
                );
              }}
            </NavLink>
          );
        })}
      </DrawerHeader>
    </Drawer>
  );
};

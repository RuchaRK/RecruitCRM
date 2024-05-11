import { Drawer, IconButton, Typography, alpha } from "@mui/material";
import { styled } from "@mui/material/styles";
import React from "react";
import { NavLink } from "react-router-dom";
import { routeName } from "../App.routes";
import { IconTextContainer } from "./IconTextContainer";

const DrawerHeader = styled("div")(({ theme }) => ({
  display: "flex",
  flexDirection: "column",
  alignItems: "start",
  justifyContent: "flex-start",
  gap: "16px",
  height: "100%",
  marginTop: "56px",
  padding: "8px",
  color: theme.palette.common.white,
  backgroundColor: "#143E6F",
}));

interface Props {
  readonly open: boolean;
  readonly toggleDrawer: (state?: boolean) => void;
}

export const SideNavBar: React.FC<Props> = ({ open, toggleDrawer }) => {
  return (
    <Drawer
      closeAfterTransition
      onClose={() => toggleDrawer(false)}
      variant="permanent"
      open={open}
      sx={{
        flexShrink: 0,
        [`& .MuiDrawer-paper`]: open
          ? {
              width: 236,
              boxSizing: "border-box",
            }
          : { width: "56px" },
      }}>
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
                      }>
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

import AddIcon from "@mui/icons-material/Add";
import CardGiftcardIcon from "@mui/icons-material/CardGiftcard";
import GridViewIcon from "@mui/icons-material/GridView";
import MailOutlineIcon from "@mui/icons-material/MailOutline";
import NotificationsNoneIcon from "@mui/icons-material/NotificationsNone";
import SearchIcon from "@mui/icons-material/Search";
import {
  AppBar,
  Avatar,
  Divider,
  IconButton,
  InputBase,
  Typography,
  useMediaQuery,
} from "@mui/material";
import Box from "@mui/material/Box";
import Menu from "@mui/material/Menu";
import MenuItem from "@mui/material/MenuItem";
import Tooltip from "@mui/material/Tooltip";
import { Theme, styled } from "@mui/material/styles";
import * as React from "react";
import { IconTextContainer } from "./IconTextContainer";
import { StyledCircularIconButton } from "./StyledIconButton";
import { NAV_BAR_SIZE } from "../Theme/theme.constants";

interface Props {
  readonly toggleDrawer: () => void;
}

const StyledAppBar = styled(AppBar)(({ theme }) => ({
  backgroundColor: theme.palette.background.paper,
  height: NAV_BAR_SIZE,
  flexDirection: "row",
  color: theme.palette.text.primary,
  display: "flex",
  alignItems: "center",
  justifyContent: "start",
  padding: 0,
  boxShadow: "none",
}));

const AppBarContainer = styled("div")(({ theme }) => ({
  display: "flex",
  width: "100%",
  alignItems: "center",
  justifyContent: "space-between",
  padding: "8px 16px",
  color: theme.palette.text.primary,
}));

const Search = styled("div")(({ theme }) => ({
  borderRadius: theme.shape.borderRadius,
  backgroundColor: theme.palette.grey[200],
  display: "flex",
  alignItems: "center",
  gap: "8px",
  width: "360px",
  height: "40px",
  padding: "12px 12px",
  [theme.breakpoints.down("md")]: {
    display: "none",
  },
}));

export const ButtonsContainer = styled("div")({
  display: "flex",
  alignItems: "center",
  gap: "16px",
});

const UserProfileContainer = styled("div")({
  display: "flex",
  flexDirection: "column",
  alignItems: "start",
  justifyContent: "start",
});

const MenuContainer = styled("div")(({ theme }) => ({
  backgroundColor: "#143E6F",
  height: NAV_BAR_SIZE,
  minWidth: NAV_BAR_SIZE,
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
  color: theme.palette.common.white,
}));

export const GlobalHeader: React.FC<Props> = ({ toggleDrawer }) => {
  const match = useMediaQuery((theme: Theme) => theme.breakpoints.up("lg"));
  const [anchorEl, setAnchorEl] = React.useState<null | HTMLElement>(null);
  const open = Boolean(anchorEl);
  const handleClick = (event: React.MouseEvent<HTMLElement>) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };
  return (
    <StyledAppBar
      position="fixed"
      sx={{ zIndex: (theme) => theme.zIndex.drawer + 1 }}
    >
      <MenuContainer>
        <IconButton
          color="inherit"
          aria-label="open drawer"
          onClick={() => toggleDrawer()}
        >
          <GridViewIcon />
        </IconButton>
      </MenuContainer>
      {match ? (
        <AppBarContainer>
          <Search>
            <SearchIcon fontSize="medium" color="action" />
            <InputBase
              placeholder="Search…"
              inputProps={{ "aria-label": "search" }}
            />
          </Search>

          <div>
            <img src="/Images/Logo.svg" />
          </div>

          <ButtonsContainer>
            <StyledCircularIconButton variant="contained" color="primary">
              <AddIcon />
            </StyledCircularIconButton>
            <Divider
              orientation="vertical"
              variant="middle"
              style={{ borderWidth: "2px", height: "36px" }}
            />
            <StyledCircularIconButton variant="outlined">
              <CardGiftcardIcon />
            </StyledCircularIconButton>
            <StyledCircularIconButton variant="outlined">
              <MailOutlineIcon />
            </StyledCircularIconButton>
            <StyledCircularIconButton variant="outlined">
              <NotificationsNoneIcon />
            </StyledCircularIconButton>
            <IconTextContainer>
              <Avatar alt="Remy Sharp" />
              <UserProfileContainer>
                <Typography variant="subtitle2">Phyllis Yang</Typography>
                <Typography variant="caption">Silicon Links Inc</Typography>
              </UserProfileContainer>
            </IconTextContainer>
          </ButtonsContainer>
        </AppBarContainer>
      ) : (
        <AppBarContainer>
          <div>
            <img src="/Images/Logo.svg" />
          </div>

          <Search>
            <SearchIcon fontSize="medium" color="action" />
            <InputBase
              placeholder="Search…"
              inputProps={{ "aria-label": "search" }}
            />
          </Search>

          <React.Fragment>
            <Box
              sx={{
                display: "flex",
                alignItems: "center",
                textAlign: "center",
              }}
            >
              <Tooltip title="Account settings">
                <IconButton onClick={handleClick} size="small" sx={{ ml: 2 }}>
                  <Avatar alt="Remy Sharp" />{" "}
                </IconButton>
              </Tooltip>
            </Box>
            <Menu
              anchorEl={anchorEl}
              id="account-menu"
              open={open}
              onClose={handleClose}
              onClick={handleClose}
              transformOrigin={{ horizontal: "right", vertical: "top" }}
              anchorOrigin={{ horizontal: "right", vertical: "bottom" }}
            >
              <MenuItem onClick={handleClose}>
                <IconTextContainer>
                  <Avatar alt="Remy Sharp" />
                  <UserProfileContainer>
                    <Typography variant="subtitle2">Phyllis Yang</Typography>
                    <Typography variant="caption">Silicon Links Inc</Typography>
                  </UserProfileContainer>
                </IconTextContainer>
              </MenuItem>
              <Divider />
              <MenuItem onClick={handleClose}>
                <IconTextContainer>
                  <CardGiftcardIcon />
                  Gift
                </IconTextContainer>
              </MenuItem>

              <MenuItem onClick={handleClose}>
                <IconTextContainer>
                  <MailOutlineIcon />
                  Mails
                </IconTextContainer>
              </MenuItem>
              <MenuItem onClick={handleClose}>
                <IconTextContainer>
                  <NotificationsNoneIcon />
                  Notifications
                </IconTextContainer>
              </MenuItem>
            </Menu>
          </React.Fragment>
        </AppBarContainer>
      )}
    </StyledAppBar>
  );
};

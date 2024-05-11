import { Business } from "@mui/icons-material";
import AccountCircleOutlinedIcon from "@mui/icons-material/AccountCircleOutlined";
import BusinessCenterOutlinedIcon from "@mui/icons-material/BusinessCenterOutlined";
import CreditCardOutlinedIcon from "@mui/icons-material/CreditCardOutlined";
import DonutSmallOutlinedIcon from "@mui/icons-material/DonutSmallOutlined";
import EmailOutlinedIcon from "@mui/icons-material/EmailOutlined";
import MonetizationOnOutlinedIcon from "@mui/icons-material/MonetizationOnOutlined";
import MoreHorizOutlinedIcon from "@mui/icons-material/MoreHorizOutlined";
import PortraitIcon from "@mui/icons-material/Portrait";
import SettingsOutlinedIcon from "@mui/icons-material/SettingsOutlined";
import TodayOutlinedIcon from "@mui/icons-material/TodayOutlined";
import { Candidates } from "./Features/Candidates/Candidates";
import { ComingSoon } from "./Features/ComingSome";

export const routeName = [
  {
    name: "Profile",
    path: "/",
    icons: AccountCircleOutlinedIcon,
    component: <Candidates />,
  },
  {
    name: "Group",
    path: "/group",
    icons: Business,
    component: <ComingSoon />,
  },
  {
    name: "Portrait",
    path: "/people",
    icons: PortraitIcon,
    component: <ComingSoon />,
  },
  {
    name: "BusinessBag",
    path: "/jobs",
    icons: BusinessCenterOutlinedIcon,
    component: <ComingSoon />,
  },
  {
    name: "Email",
    path: "/mails",
    icons: EmailOutlinedIcon,
    component: <ComingSoon />,
  },
  {
    name: "Calender",
    path: "/calender",
    icons: TodayOutlinedIcon,
    component: <ComingSoon />,
  },

  {
    name: "Dollar",
    path: "/finance",
    icons: MonetizationOnOutlinedIcon,
    component: <ComingSoon />,
  },
  {
    name: "Graph",
    path: "/dashboard",
    icons: DonutSmallOutlinedIcon,
    component: <ComingSoon />,
  },
  {
    name: "CreditCard",
    path: "/cards",
    icons: CreditCardOutlinedIcon,
    component: <ComingSoon />,
  },
  {
    name: "Settings",
    path: "/settings",
    icons: SettingsOutlinedIcon,
    component: <ComingSoon />,
  },
  {
    name: "Three Dots",
    path: "/more",
    icons: MoreHorizOutlinedIcon,
    component: <ComingSoon />,
  },
];

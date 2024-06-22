import { HiOutlineViewGrid } from "react-icons/hi";
import {
  PiClockCounterClockwiseDuotone,
  PiCourtBasketballLight,
} from "react-icons/pi";
import { IoCalendarOutline } from "react-icons/io5";
import { BsClock, BsEnvelopePaper } from "react-icons/bs";

import { CiSettings } from "react-icons/ci";
import { IoLogOutOutline } from "react-icons/io5";
import Reservations from "../../components/Admin/Reservations";
import AddStadium from "../../components/Admin/AddStadium";
import PlayGroundData from "../../components/Admin/PlayGroundData";
import AddMatches from "../../components/Admin/AddMatches";

export const SidebarTopData = [
  {
    key: "dashboard",
    label: "dashboard",
    path: "",
    curruntPath: "/Admin",
    icon: <HiOutlineViewGrid />,
    component: <Reservations />,
  },
  {
    key: "reservations",
    label: "reservations",
    path: "reservations",
    curruntPath: "/Admin/reservations",
    icon: <IoCalendarOutline />,
    component: <Reservations />,
  },
  {
    key: "addMatches",
    label: "addMatches",
    path: "addMatches",
    curruntPath: "/Admin/addMatches",
    icon: <BsClock />,
    component: <AddMatches />,
  },
  // {
  //   key: "playgroundData",
  //   label: "playgroundData",
  //   path: "playgroundData",
  //   curruntPath: "/Admin/playgroundData",
  //   icon: <PiCourtBasketballLight />,
  //   component: <PlayGroundData />,
  // },
  {
    key: "addStadium",
    label: "addStadium",
    path: "addStadium",
    curruntPath: "/Admin/addStadium",
    icon: <PiCourtBasketballLight />,
    component: <AddStadium />,
  },
];

export const SidebarBottomData = [
  {
    key: "settings",
    label: "settings",
    path: "settings",
    icon: <CiSettings />,
    component: <Reservations />,
  },
  {
    key: "logout",
    label: "logout",
    path: "logout",
    icon: <IoLogOutOutline />,
    component: <Reservations />,
  },
];

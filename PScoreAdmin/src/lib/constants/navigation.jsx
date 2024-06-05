import { HiOutlineViewGrid } from "react-icons/hi";
import { PiCourtBasketballLight } from "react-icons/pi";
import { IoCalendarOutline } from "react-icons/io5";
import { BsEnvelopePaper } from "react-icons/bs";

import { CiSettings } from "react-icons/ci";
import { IoLogOutOutline } from "react-icons/io5";
import Reservations from "../../components/Admin/Reservations";
import AddStadium from "../../components/Admin/AddStadium";

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
    key: "masegges",
    label: "messages",
    path: "messages",
    curruntPath: "/Admin/messages",
    icon: <BsEnvelopePaper />,
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
    key: "playgroundData",
    label: "playgroundData",
    path: "playgroundData",
    curruntPath: "/Admin/playgroundData",
    icon: <PiCourtBasketballLight />,
    component: <AddStadium />,
  },
  {
    key: "addStadium",
    label: "addStadium",
    path: "addStadium",
    curruntPath: "/Admin/addStadium",
    icon: <PiCourtBasketballLight />,
    component: <Reservations />,
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

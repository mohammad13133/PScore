import { HiOutlineViewGrid } from "react-icons/hi";
import { PiCourtBasketballLight } from "react-icons/pi";
import { IoCalendarOutline } from "react-icons/io5";
import { BsEnvelopePaper } from "react-icons/bs";

import { CiSettings } from "react-icons/ci";
import { IoLogOutOutline } from "react-icons/io5";

export const SidebarTopData = [
  {
    key: "dashboard",
    label: "dashboard",
    path: "",
    icon: <HiOutlineViewGrid />,
  },
  {
    key: "masegges",
    label: "messages",
    path: "messages",
    icon: <BsEnvelopePaper />,
  },
  {
    key: "reservations",
    label: "reservations",
    path: "reservations",
    icon: <IoCalendarOutline />,
  },
  {
    key: "playgroundData",
    label: "playgroundData",
    path: "playgroundData",
    icon: <PiCourtBasketballLight />,
  },
  {
    key: "addStadium",
    label: "addStadium",
    path: "addStadium",
    icon: <PiCourtBasketballLight />,
  },
];

export const SidebarBottomData = [
  {
    key: "settings",
    label: "settings",
    path: "settings",
    icon: <CiSettings />,
  },
  {
    key: "logout",
    label: "logout",
    path: "logout",
    icon: <IoLogOutOutline />,
  },
];

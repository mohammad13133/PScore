import React from "react";
import { IoIosFootball } from "react-icons/io";
import { SidebarBottomData, SidebarTopData } from "../lib/constants/navigation";
import { Link, useLocation } from "react-router-dom";
export default function Sidebar() {
  return (
    <div className="p-3 bg-slate-900 w-60 flex flex-col text-white">
      <div className="flex-1">
        <div className="flex flex-row items-center gap-1">
          <IoIosFootball size={24} />
          <span className="text-lg">PScore</span>
        </div>
        <div className="flex flex-col pt-6 space-y-1">
          {SidebarTopData.map((item) => (
            <SidebarLink item={item} />
          ))}
        </div>
        top
      </div>
      <div className="flex flex-col space-y-1">
        {SidebarBottomData.map((item) => (
          <SidebarLink item={item} />
        ))}
      </div>
    </div>
  );
}
function SidebarLink({ item }) {
  const { pathname } = useLocation();
  const dd =
    pathname == item.curruntPath ? "bg-slate-700 text-white" : "text-slate-300";
  return (
    <Link
      to={item.path}
      className={`flex items-center font-normal hover:bg-slate-700 hover:text-white  py-2 px-1 gap-1 ${dd}`}
    >
      {item.icon}
      <span>{item.label}</span>
    </Link>
  );
}

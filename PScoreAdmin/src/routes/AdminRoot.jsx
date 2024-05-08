import { Outlet } from "react-router-dom";
import Sidebar from "../components/Sidebar";
import Header from "../components/Header";

export default function Root() {
  return (
    <div className="flex flex-row h-screen w-screen bg-neutral-100">
      <Sidebar />
      <div className="flex-1">
        <Header />
        <div id="detail">
          <Outlet /> 
        </div>
      </div>
    </div>
  );
}

import { Outlet } from "react-router-dom";

export default function Root() {
  return (
    <>
      <p>Header</p>
      <p>sidepar</p>
      <div id="detail">
        <Outlet />
      </div>
    </>
  );
}

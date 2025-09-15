import { Outlet } from "react-router-dom";
import Navbar from "../component/navbar/Navbar";

function AppLayout() {
  return (
    <div>
      <header className="sticky top-0">
        <Navbar />
      </header>
      <main className="m-3">
        <Outlet />
      </main>
    </div>
  );
}

export default AppLayout;

import { NavLink } from "react-router-dom";
import { cn } from "@/lib/utils";
import {
  Home,
  LayoutDashboardIcon,
  LucideLoader,
  ServerIcon,
} from "lucide-react";

const Sidebar = () => {
  return (
    <aside className="h-screen shadow-2xl p-5 sticky top-0 left-0">
      <nav className="flex flex-col gap-2">
        <NavLink
          to="/"
          className={() =>
            cn(
              "flex gap-2 p-3 rounded-sm hover:bg-secondary items-center hover:text-white transition-all"
            )
          }
        >
          <Home className="w-5" />
          <span className="text-lg">Home</span>
        </NavLink>

        <NavLink
          to="/dashboard"
          className={() =>
            cn(
              "flex gap-2  p-3 rounded-sm hover:bg-secondary items-center hover:text-white transition-all"
            )
          }
        >
          <LayoutDashboardIcon className="w-5" />
          <span className="text-lg">Dashboard</span>
        </NavLink>

        <NavLink
          to="/dashboard/supplies"
          className={() =>
            cn(
              "flex gap-2 items-center p-3 rounded-sm hover:bg-secondary hover:text-white transition-all"
            )
          }
        >
          <ServerIcon className="w-5" />
          <span className="text-lg">Supply Posts</span>
        </NavLink>

        <NavLink
          to="/dashboard/create-supply"
          className={() =>
            cn(
              "flex gap-2 items-center p-3 rounded-sm hover:bg-secondary hover:text-white transition-all"
            )
          }
        >
          <ServerIcon className=" w-5" />
          <span className="text-lg">Create Supply</span>
        </NavLink>

        <NavLink
          to="/dashboard/leaderboard"
          className={() =>
            cn(
              "flex gap-2 p-3 rounded-sm hover:bg-secondary items-center hover:text-white transition-all"
            )
          }
        >
          <LucideLoader className="w-5" />
          <span className="text-lg">Leaderboard</span>
        </NavLink>

        <NavLink
          to="/dashboard/create-testimonial"
          className={() =>
            cn(
              "flex gap-2 p-3 rounded-sm hover:bg-secondary items-center hover:text-white transition-all"
            )
          }
        >
          <LayoutDashboardIcon className="w-5" />
          <span className="text-lg">A. Testimonial</span>
        </NavLink>
      </nav>
    </aside>
  );
};

export default Sidebar;

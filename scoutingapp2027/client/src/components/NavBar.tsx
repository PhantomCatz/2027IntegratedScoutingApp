import { useState } from "react";
import { NavLink, Outlet, useNavigate } from "react-router-dom";
import { getScoutNameCookie } from "../lib/scoutCookie";

import {
  HomeIcon,
  Bars3Icon,
  XMarkIcon,
  UserGroupIcon,
  MagnifyingGlassIcon,
  ClipboardDocumentListIcon,
  Cog6ToothIcon,
  BriefcaseIcon,
  ArrowRightOnRectangleIcon,
} from "@heroicons/react/24/outline";

const sections = [
  {
    title: "Scouting App",
    divider: false,
    items: [
      { label: "Home", icon: HomeIcon, to: "/" },
      { label: "Match Scout", icon: UserGroupIcon, to: "/scouting/matchscout" },
      { label: "Strategic Scout", icon: UserGroupIcon, to: "/scouting/strategicscout" },
      { label: "Pit Scout", icon: UserGroupIcon, to: "/scouting/pitscout" },
    ],
  },
  {
    title: "Data Lookup",
    divider: true,
    items: [
      { label: "Drive Team Feeder", icon: BriefcaseIcon, to: "/dtf" },
      { label: "Team Lookup", icon: MagnifyingGlassIcon, to: "/teamlookup" },
    ],
  },
  {
    title: "Strategy",
    divider: true,
    items: [
      { label: "Picklist", icon: ClipboardDocumentListIcon, to: "/picklist" },
      { label: "Picklist config", icon: ClipboardDocumentListIcon, to: "/picklist" },
    ],
  },
  {
    title: "Config",
    divider: true,
    items: [
      { label: "DB config", icon: Cog6ToothIcon, to: "#" },
      { label: "Customization", icon: Cog6ToothIcon, to: "#" },
    ],
  },
];

function Sidebar({ onNavigate }: { onNavigate?: () => void }) {
  const navigate = useNavigate();
  const scoutName = getScoutNameCookie();

  const handleLogout = () => {
    sessionStorage.removeItem("signedIn");
    sessionStorage.removeItem("scoutName");
    onNavigate?.();
    navigate("/login");
  };

  return (
    <div className="flex h-full flex-col bg-zinc-900 text-white">
      <div className="flex-1 overflow-y-auto">
        {sections.map((section) => (
          <div
            key={section.title}
            className={section.divider ? "border-t border-zinc-700 pt-5" : ""}
          >
            <h2 className="px-7 pb-4 pt-6 text-sm text-zinc-300">
              {section.title}
            </h2>

            <div className="space-y-1 px-3">
              {section.items.map((item) => (
                <NavLink
                  key={item.label}
                  to={item.to}
                  onClick={onNavigate}
                  className={({ isActive }) =>
                    `flex w-full items-center gap-3 rounded-full px-4 py-3 transition ${
                      isActive
                        ? "bg-slate-600 text-white"
                        : "text-zinc-300 hover:bg-zinc-800 hover:text-white"
                    }`
                  }
                >
                  <item.icon className="h-5 w-5 shrink-0" />
                  <span>{item.label}</span>
                </NavLink>
              ))}
            </div>
          </div>
        ))}
      </div>

      <div className="border-t border-zinc-700 p-3">
        {scoutName ? (
          <p className="px-4 pb-2 text-sm text-zinc-400">Signed in as {scoutName}</p>
        ) : null}
        <button
          type="button"
          onClick={handleLogout}
          className="flex w-full items-center gap-3 rounded-full px-4 py-3 text-zinc-300 transition hover:bg-zinc-800 hover:text-white"
        >
          <ArrowRightOnRectangleIcon className="h-5 w-5 shrink-0" />
          <span>Log out</span>
        </button>
      </div>
    </div>
  );
}

export default function Navbar() {
  const [open, setOpen] = useState(false);

  return (
    <>
      {/* Mobile header */}
      <header className="flex h-16 items-center bg-team px-4 lg:hidden">
        <button
          onClick={() => setOpen(true)}
          className="rounded-md p-2 hover:bg-zinc-800"
        >
          <Bars3Icon className="h-6 w-6 text-white" />
        </button>

        <img
          src="https://www.thebluealliance.com/avatar/2026/frc2637.png"
          alt="Logo"
          className="ml-2 h-10 w-10"
        />

        <span className="ml-4 text-xl font-bold text-white">
          2637 Scouting App
        </span>
      </header>

      {/* Overlay */}
      <div
        onClick={() => setOpen(false)}
        className={`fixed inset-0 z-40 bg-black/50 transition-opacity lg:hidden ${
          open
            ? "pointer-events-auto opacity-100"
            : "pointer-events-none opacity-0"
        }`}
      />

      {/* Mobile drawer */}
      <aside
        className={`fixed left-0 top-0 z-50 flex h-screen w-80 transform flex-col bg-black shadow-xl transition-transform duration-300 lg:hidden ${
          open ? "translate-x-0" : "-translate-x-full"
        }`}
      >
        <button
          onClick={() => setOpen(false)}
          className="absolute right-4 top-4 z-10 rounded-md p-2 hover:bg-zinc-800"
        >
          <XMarkIcon className="h-6 w-6 text-white" />
        </button>

        <div
          className="flex-1 overflow-y-auto"
          style={{ WebkitOverflowScrolling: "touch" }}
        >
          <Sidebar onNavigate={() => setOpen(false)} />
        </div>
      </aside>

      {/* Desktop layout */}
      <div className="hidden h-screen lg:flex">
        <aside className="w-80 shrink-0 overflow-y-auto border-r border-zinc-800 bg-zinc-900">
          <Sidebar />
        </aside>

        <main className="flex-1 overflow-auto">
          <Outlet />
        </main>
      </div>

      {/* Mobile content */}
      <main className="lg:hidden">
        <Outlet />
      </main>
    </>
  );
}

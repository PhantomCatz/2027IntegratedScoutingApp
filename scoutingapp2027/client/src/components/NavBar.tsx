import { useState } from "react";
import { NavLink, Outlet } from "react-router-dom";

import {
  HomeIcon,
  Bars3Icon,
  XMarkIcon,
  UserGroupIcon,
  MagnifyingGlassIcon,
  ClipboardDocumentListIcon,
  Cog6ToothIcon,
  BriefcaseIcon,
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
      { label: "Match Data Lookup", icon: MagnifyingGlassIcon, to: "/scouting/datalookup" },
      { label: "Strategic Data Lookup", icon: MagnifyingGlassIcon, to: "/scouting/datalookup" },
      { label: "Pit Data Lookup", icon: MagnifyingGlassIcon, to: "/scouting/datalookup" },
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
  return (
    <div className="flex h-full flex-col bg-zinc-900 text-white">
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
  );
}
export default function Navbar() {
  const [open, setOpen] = useState(false);

  return (
    <>
      {/* Mobile header */}
      <header className="flex h-16 items-center border-b border-zinc-800 bg-zinc-900 px-4 lg:hidden">
        <button
          onClick={() => setOpen(true)}
          className="rounded-md p-2 hover:bg-zinc-800"
        >
          <Bars3Icon className="h-6 w-6 text-white" />
        </button>

        <span className="ml-4 text-lg font-medium text-white">
          Scouting App
        </span>
      </header>

      {/* Overlay */}
      <div
        onClick={() => setOpen(false)}
        className={`fixed inset-0 z-40 bg-black/50 transition-opacity lg:hidden
          ${
            open
              ? "pointer-events-auto opacity-100"
              : "pointer-events-none opacity-0"
          }`}
      />

      {/* Mobile drawer */}
      <aside
        className={`fixed left-0 top-0 z-50 h-screen w-80 transform bg-zinc-900 shadow-xl transition-transform duration-300 lg:hidden
          ${open ? "translate-x-0" : "-translate-x-full"}`}
      >
        <button
          onClick={() => setOpen(false)}
          className="absolute right-4 top-4 rounded-md p-2 hover:bg-zinc-800"
        >
          <XMarkIcon className="h-6 w-6 text-white" />
        </button>

        <Sidebar onNavigate={() => setOpen(false)} />
      </aside>

      {/* Desktop sidebar */}
      <aside className="hidden h-screen w-80 border-r border-zinc-800 bg-zinc-900 lg:block">
        <Sidebar />
      </aside>
      <Outlet />
    </>
  );
}
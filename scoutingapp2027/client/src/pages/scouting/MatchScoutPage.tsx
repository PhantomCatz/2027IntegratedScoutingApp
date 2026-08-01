import { useState } from "react";
import { NavLink, Outlet } from "react-router-dom";

import { DirectoryShell } from "../../components/DirectoryShell";

function autonMatch(): React.ReactElement {
  return (
    <>
      <div className="flex flex-col gap-4">
        <h2>Match (Placeholder)</h2>
        <h2>Robot (Placeholder)</h2>

        <div>
          <h2 className="font-bold text-white">Auto Fuel Scored</h2>
          <input type="number" placeholder="###" className="input" />
        </div>

        <div className="join">
          <button className="btn btn-primary w-36 h-48 text-[24px]">-</button>
          <button className="btn btn-primary w-36 h-48 text-[24px]">+</button>
        </div>

        <div className="join">
          <input
            type="radio"
            name="options"
            className="join-item btn w-24"
            aria-label="1x"
          />
          <input
            type="radio"
            name="options"
            className="join-item btn w-24"
            aria-label="5x"
          />
          <input
            type="radio"
            name="options"
            className="join-item btn w-24"
            aria-label="10x"
          />
        </div>

        <div>
          <h2 className="font-bold text-white">Climb</h2>
          <select className="select select-bordered w-full max-w-xs">
            <option disabled selected hidden>
              Select One...
            </option>
            <option>No Attempt</option>
            <option>L1 Fail</option>
            <option>L1 Success</option>
          </select>
        </div>
      </div>
    </>
  );
}

function teleopMatch(): React.ReactElement {
  return (
    <>
      <div className="flex flex-col gap-4">
        <div>
          <h2 className="font-bold text-white">Teleop Fuel Scored</h2>
          <input type="number" placeholder="###" className="input" />
        </div>

        <div className="join">
          <button className="btn btn-primary w-36 h-48 text-[24px]">-</button>
          <button className="btn btn-primary w-36 h-48 text-[24px]">+</button>
        </div>

        <div className="join">
          <input
            type="radio"
            name="options"
            className="join-item btn w-24"
            aria-label="1x"
          />
          <input
            type="radio"
            name="options"
            className="join-item btn w-24"
            aria-label="5x"
          />
          <input
            type="radio"
            name="options"
            className="join-item btn w-24"
            aria-label="10x"
          />
        </div>

        <div>
          <h2 className="font-bold text-white">Fuel Hoarded</h2>
          <select className="select select-bordered w-full max-w-xs">
            <option disabled selected hidden>
              Select One...
            </option>
            <option>None</option>
            <option>Low</option>
            <option>Medium</option>
            <option>High</option>
          </select>
        </div>

        <div>
          <h2 className="font-bold text-white">Hoard Type</h2>
          <select className="select select-bordered w-full max-w-xs" multiple>
            <option disabled selected hidden>
              Select Multiple...
            </option>
            <option>None</option>
            <option>Shoot Hoard</option>
            <option>Push Hoard</option>
            <option>Dump Hoard</option>
          </select>
        </div>

        <div>
          <h2 className="font-bold text-white">Climb</h2>
          <select className="select select-bordered w-full max-w-xs">
            <option disabled selected hidden>
              Select One...
            </option>
            <option>No Attempt</option>
            <option>Attempt Fail</option>
            <option>L1</option>
            <option>L2</option>
            <option>L3</option>
          </select>
        </div>
      </div>
    </>
  );
}

function overallMatch(): React.ReactElement {
  return (
    <>
      <div className="flex flex-col gap-4">
        <label className="btn btn-outline has-[:checked]:btn-primary">
          <input type="checkbox" className="hidden" />
          <span>Robot Died?</span>
        </label>

        <label className="btn btn-outline has-[:checked]:btn-primary">
          <input type="checkbox" className="hidden" />
          <span>Robot Played Defense?</span>
        </label>

        <select className="select select-bordered w-full max-w-xs" multiple>
          <option disabled selected hidden>
            Select Multiple...
          </option>
          <option>R1</option>
          <option>R2</option>
          <option>R3</option>
        </select>

        <label className="btn btn-outline has-[:checked]:btn-primary">
          <input type="checkbox" className="hidden" />
          <span>Robot Got Defended?</span>
        </label>

        <select className="select select-bordered w-full max-w-xs" multiple>
          <option disabled selected hidden>
            Select Multiple...
          </option>
          <option>R1</option>
          <option>R2</option>
          <option>R3</option>
        </select>

        <label className="btn btn-outline has-[:checked]:btn-primary">
          <input type="checkbox" className="hidden" />
          <span>Robot Displayed Shoot on the Move?</span>
        </label>

        <div>
          <h2 className="font-bold text-white">Comments</h2>
          <textarea className="textarea h-48 resize-none" placeholder="Bio"></textarea>
        </div>
      </div>
    </>
  );
}

function TabsComponent() {
  return (
    <div className="tabs tabs-border">
      <input type="radio" name="matchTabs" className="tab" aria-label="Auton" />
      <div className="tab-content border-base-300 bg-base-100 p-10">
        {autonMatch()}
      </div>

      <input
        type="radio"
        name="matchTabs"
        className="tab"
        aria-label="Teleop"
        defaultChecked
      />
      <div className="tab-content border-base-300 bg-base-100 p-10">
        {teleopMatch()}
      </div>

      <input
        type="radio"
        name="matchTabs"
        className="tab"
        aria-label="Overall"
      />
      <div className="tab-content border-base-300 bg-base-100 p-10">
        {overallMatch()}
      </div>
    </div>
  );
}

export function MatchScoutPage() {
  return (
    <DirectoryShell title="Match Scout" subtitle="2637 match scoutinglolol">
      <section className="grid gap-6 lg:grid-cols-[1.2fr_0.8fr]">
        <TabsComponent />
        <div className="rounded-3xl border border-white/10 bg-white/5 p-6 shadow-xl shadow-black/20">
          <h2 className="text-xl font-bold text-white">Match Scout</h2>
          <p className="mt-1 text-sm text-slate-400">
            Record match performance, notes, and live observations.
          </p>
          <div className="mt-5 space-y-4">
            <div className="rounded-2xl border border-white/10 bg-slate-900/80 p-4 text-sm text-slate-300">
              Auto routine quality
            </div>
            <div className="rounded-2xl border border-white/10 bg-slate-900/80 p-4 text-sm text-slate-300">
              Defense effectiveness
            </div>
            <div className="rounded-2xl border border-white/10 bg-slate-900/80 p-4 text-sm text-slate-300">
              Endgame consistency
            </div>
          </div>
        </div>
        <aside className="rounded-3xl border border-cyan-400/20 bg-gradient-to-br from-cyan-400/10 via-slate-900 to-slate-950 p-6 shadow-xl shadow-cyan-950/20">
          <h2 className="text-xl font-bold text-white">Quick actions</h2>
          <div className="mt-5 flex flex-wrap gap-3">
            <button className="rounded-full bg-cyan-400 px-5 py-2.5 text-sm font-semibold text-slate-950">
              Save match scout
            </button>
            <button className="rounded-full border border-white/15 bg-white/5 px-5 py-2.5 text-sm font-semibold text-slate-100">
              Reset
            </button>
          </div>
        </aside>
      </section>
    </DirectoryShell>
  );
}

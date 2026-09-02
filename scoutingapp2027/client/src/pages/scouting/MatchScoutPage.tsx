import { useState } from "react";
import { NavLink, Outlet } from "react-router-dom";

import { DirectoryShell } from "../../components/DirectoryShell";

export function MatchScoutPage() {
  const [tabNumber, setTabNumber] = useState("1");
  const [auton_fuel_number, setAutonFuelNumber] = useState(0);
  const [teleop_fuel_number, setTeleopFuelNumber] = useState(0);
  const [multiplier, setMultiplier] = useState(1);
  const [hoardTypeIsVisible, setHoardTypeIsVisible] = useState(false);

  function autonMatch(): React.ReactElement {
    const auton_climb = [
      { label: "No Attempt", value: "No Attempt" },
      { label: "L1 Fail", value: "L1 Fail" },
      { label: "L1 Success", value: "L1 Success" },
    ];

    return (
      <>
        <div className="flex flex-col gap-4">
          <h2>Match (Placeholder)</h2>
          <h2>Robot (Placeholder)</h2>

          <div>
            <h2 className="font-bold text-white">Auto Fuel Scored</h2>
            <input
              type="number"
              placeholder="###"
              className="input"
              value={auton_fuel_number}
            />
          </div>

          <div className="join">
            <button
              className="btn btn-primary w-36 h-48 text-[24px]"
              onClick={() => {
                let new_fuel_number = auton_fuel_number - multiplier;
                if (new_fuel_number < 0) {
                  new_fuel_number = 0;
                }
                setAutonFuelNumber(new_fuel_number);
              }}
            >
              -{multiplier}
            </button>
            <button
              className="btn btn-primary w-36 h-48 text-[24px]"
              onClick={() => {
                setAutonFuelNumber(auton_fuel_number + multiplier);
              }}
            >
              +{multiplier}
            </button>
          </div>

          <div className="join">
            <input
              type="radio"
              name="options"
              className="join-item btn w-24"
              aria-label="1x"
              onChange={() => setMultiplier(1)}
            />
            <input
              type="radio"
              name="options"
              className="join-item btn w-24"
              aria-label="5x"
              onChange={() => setMultiplier(5)}
            />
            <input
              type="radio"
              name="options"
              className="join-item btn w-24"
              aria-label="10x"
              onChange={() => setMultiplier(10)}
            />
          </div>

          <div>
            <h2 className="font-bold text-white">Climb</h2>
            <select className="select select-bordered w-full max-w-xs" defaultValue="">
              <option value="" disabled selected hidden>
                Select One...
              </option>
              {auton_climb.map((option) => (
                <option key={option.value} value={option.value}>
                  {option.label}
                </option>
              ))}
            </select>
          </div>

          <div>
            <button
              className="btn btn-primary"
              onClick={() => setTabNumber("2")}
            >
              Next
            </button>
          </div>
        </div>
      </>
    );
  }

  function teleopMatch(): React.ReactElement {
    const teleop_fuel_hoarded_amount = [
      { label: "High", value: "High" },
      { label: "Medium", value: "Medium" },
      { label: "Low", value: "Low" },
      { label: "None", value: "None" },
    ];

    const teleop_hoard_type = [
      { label: "Shoot Hoard", value: "Shoot Hoard" },
      { label: "Push Hoard", value: "Push Hoard" },
      { label: "Dump Hoard", value: "Dump Hoard" },
    ];

    const teleop_climb = [
      { label: "High", value: "High" },
      { label: "Medium", value: "Medium" },
      { label: "Low", value: "Low" },
      { label: "None", value: "None" },
    ];

    return (
      <>
        <div className="flex flex-col gap-4">
          <div>
            <h2 className="font-bold text-white">Teleop Fuel Scored</h2>
            <input
              type="number"
              placeholder="###"
              className="input"
              value={teleop_fuel_number}
            />
          </div>

          <div className="join">
            <button
              className="btn btn-primary w-36 h-48 text-[24px]"
              onClick={() => {
                let new_fuel_number = teleop_fuel_number - multiplier;
                if (new_fuel_number < 0) {
                  new_fuel_number = 0;
                }
                setTeleopFuelNumber(new_fuel_number);
              }}
            >
              -{multiplier}
            </button>
            <button
              className="btn btn-primary w-36 h-48 text-[24px]"
              onClick={() => {
                setTeleopFuelNumber(teleop_fuel_number + multiplier);
              }}
            >
              +{multiplier}
            </button>
          </div>

          <div className="join">
            <input
              type="radio"
              name="options"
              className="join-item btn w-24"
              aria-label="1x"
              onChange={() => setMultiplier(1)}
            />
            <input
              type="radio"
              name="options"
              className="join-item btn w-24"
              aria-label="5x"
              onChange={() => setMultiplier(5)}
            />
            <input
              type="radio"
              name="options"
              className="join-item btn w-24"
              aria-label="10x"
              onChange={() => setMultiplier(10)}
            />
          </div>

          <div>
            <h2 className="font-bold text-white">Fuel Hoarded</h2>
            <select
              className="select select-bordered w-full max-w-xs"
              defaultValue=""
              onChange={(event) => {
                setHoardTypeIsVisible(event.target.value !== "None");
              }}
            >
              <option value="" disabled hidden>
                Select One...
              </option>

              {teleop_fuel_hoarded_amount.map((option) => (
                <option key={option.value} value={option.value}>
                  {option.label}
                </option>
              ))}
            </select>
          </div>

          <div
            style={{
              display: hoardTypeIsVisible ? "inherit" : "none",
            }}
          >
            <h2 className="font-bold text-white">Hoard Type</h2>
            <select
              className="select select-bordered w-full max-w-xs"
              multiple
              required={hoardTypeIsVisible}
            >
              {teleop_hoard_type.map((option) => (
                <option key={option.value} value={option.value}>
                  {option.label}
                </option>
              ))}
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

          <div className="flex gap-2">
            <button
              className="btn btn-primary"
              onClick={() => setTabNumber("1")}
            >
              Back
            </button>

            <button
              className="btn btn-primary"
              onClick={() => setTabNumber("3")}
            >
              Next
            </button>
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
            <h2 className="font-bold text-white">Robot Comments</h2>
            <textarea className="textarea h-65 resize-none"></textarea>
          </div>

          <div className="flex gap-2">
            <button
              className="btn btn-primary"
              onClick={() => setTabNumber("2")}
            >
              Back
            </button>

            <button
              className="btn btn-primary"
              onClick={() => console.log("it works")}
            >
              Submit
            </button>
          </div>
        </div>
      </>
    );
  }

  function TabsComponent() {
    return (
      <div className="tabs tabs-border">
        <input
          type="radio"
          name="matchTabs"
          className="tab"
          aria-label="Auton"
          checked={tabNumber === "1"}
          onChange={() => setTabNumber("1")}
        />
        <div className="tab-content border-base-300 bg-base-100 p-10">
          {autonMatch()}
        </div>

        <input
          type="radio"
          name="matchTabs"
          className="tab"
          aria-label="Teleop"
          checked={tabNumber === "2"}
          onChange={() => setTabNumber("2")}
        />
        <div className="tab-content border-base-300 bg-base-100 p-10">
          {teleopMatch()}
        </div>

        <input
          type="radio"
          name="matchTabs"
          className="tab"
          aria-label="Overall"
          checked={tabNumber === "3"}
          onChange={() => setTabNumber("3")}
        />
        <div className="tab-content border-base-300 bg-base-100 p-10">
          {overallMatch()}
        </div>
      </div>
    );
  }

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

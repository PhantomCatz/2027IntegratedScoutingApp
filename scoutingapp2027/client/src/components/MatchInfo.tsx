import {useState} from 'react';
import { InformationCircleIcon } from "@heroicons/react/24/outline";

type MatchInfoProp = {
  robotPosition: string;
  onChangePosition: (value: string) => void;
  match: number;
  onChangeMatch: (value: number) => void;
}

export function MatchInfoBar ( { robotPosition, match }: MatchInfoProp ) {
  

  const allianceColor =
    robotPosition?.[0]?.toUpperCase() === "R"
      ? "border-red-400/40 bg-red-950/80"
      : robotPosition?.[0]?.toUpperCase() === "B"
        ? "border-blue-400/40 bg-blue-950/80"
        : "border-white/10 bg-white/5";

  return (
    <>
    { robotPosition && match &&
      <aside
        role="status"
        aria-live="polite"
        className={`sticky top-4 z-20 rounded-3xl border p-4 shadow-xl shadow-black/20 backdrop-blur text-center ${allianceColor}`}
      >
        <div className="flex items-start gap-3">
          <InformationCircleIcon className="h-6 w-6 shrink-0 text-slate-300" /> 
          <div>
            <h1 className="mt-1 text-sm text-slate-300">
              Scouting {robotPosition} during Match {match}
            </h1>
          </div>
        </div>
      </aside>
    }
    { !robotPosition && match && 
      <aside
        role="status"
        aria-live="polite"
        className={`sticky top-4 z-20 rounded-3xl border p-4 shadow-xl shadow-black/20 backdrop-blur text-center border-yellow-400/40 bg-yellow-950/80`}
      >
        <div className="flex items-start gap-3">
          <InformationCircleIcon className="h-6 w-6 shrink-0 text-slate-300" /> 
          <div>
            <h1 className="mt-1 text-sm text-slate-300">
              WARNING: YOU HAVE NOT INPUTTED A DRIVER POSITION YET.
            </h1>
          </div>
        </div>
      </aside>
    }
    { robotPosition && !match && 
      <aside
        role="status"
        aria-live="polite"
        className={`sticky top-4 z-20 rounded-3xl border p-4 shadow-xl shadow-black/20 backdrop-blur text-center border-yellow-400/40 bg-yellow-950/80`}
      >
        <div className="flex items-start gap-3">
          <InformationCircleIcon className="h-6 w-6 shrink-0 text-slate-300" /> 
          <div>
            <h1 className="mt-1 text-sm text-slate-300">
              WARNING: YOU HAVE NOT INPUTTED A MATCH YET.
            </h1>
          </div>
        </div>
      </aside>
    }
    { !robotPosition && !match && 
      <aside
        role="status"
        aria-live="polite"
        className={`sticky top-4 z-20 rounded-3xl border p-4 shadow-xl shadow-black/20 backdrop-blur text-center border-yellow-400/40 bg-yellow-950/80`}
      >
        <div className="flex items-start gap-3">
          <InformationCircleIcon className="h-6 w-6 shrink-0 text-slate-300" /> 
          <div>
            <h1 className="mt-1 text-sm text-slate-300">
              WARNING: YOU HAVE NOT INPUTTED ANY MATCH DATA YET.
            </h1>
          </div>
        </div>
      </aside>
    }
    </>
  );
}

export function MatchInfoInputs ({ match, robotPosition }: MatchInfoProp) {
  /*const [match, setMatch] = useState('');
  const [robotPosition, setRobotPosition] = useState('');
  type robotPosition = "r1" | "r2" | "r3" | "b1" | "b2" | "b3";*/
  const robotPositionOptions : {label: string, value: robotPosition} []= [
    {label: "Red 1", value: "r1"},
    {label: "Red 2", value: "r2"},
    {label: "Red 3", value: "r3"},
    {label: "Blue 1", value: "b1"},
    {label: "Blue 2", value: "b2"},
    {label: "Blue 3", value: "b3"},
  ]
  return (
      <>
      <section className="grid gap-4 lg:grid-cols-3">
        <article className="rounded-3xl border border-white/10 bg-white/5 p-6 shadow-xl shadow-black/20">
          <h2 className="text-lg font-bold text-white">Match Number</h2>
          <textarea
            className="mt-2 text-sm text-slate-400 bg-slate-800 text-white rounded-2xl border border-white"
            value={match}
            onChange={(e) => setMatch(e.target.value)}
          />
        </article>

        <article className="rounded-3xl border border-white/10 bg-white/5 p-6 shadow-xl shadow-black/20">
          <h2 className="text-lg font-bold text-white">Robot Position</h2>
          <select
            value={robotPosition}
            onChange={(e) => setRobotPosition(e.target.value)}
            className="mt-2 w-full rounded-xl bg-slate-800 text-white border border-white p-3 text-sm text-slate-200 focus:border-sky-500 focus:outline-none focus:ring-1 focus:ring-sky-500"
          >
            {robotPositionOptions.map((option) => (
              <option key={option.value} value={option.value}>
                {option.label}
              </option>
            ))}
          </select>
        </article>
      </section>
    </>
  );
}
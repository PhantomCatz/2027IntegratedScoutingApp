import {useState} from 'react';
import { InformationCircleIcon } from "@heroicons/react/24/outline";

type MatchInfoProp = {
  robotPosition: string;
  match: number;
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
import { useNavigate, useParams } from "react-router-dom";
import { useState } from "react";
import { getQualMatchData, getAllianceTeams } from "../../components/tbaLookup";
import { DataDisplayInformationCircle } from "../../components/DataDisplayInformationCircle";
import { MatchDataDisplay } from "../../components/MatchDataDisplay";
import { CommentDataDisplay } from "../../components/CommentDataDisplay";
import { PitDataDisplay } from "../../components/PitDataDisplay";

export function TeamLookup() {
  const { teams } = useParams();
  const navigate = useNavigate();
  const [loading, setLoading] = useState(false);
  const [team, setTeam] = useState<number>(0);
  const [openTeams, setOpenTeams] = useState<number[]>(
    teams
      ?.split(",")
      .map(Number)
      .filter((n) => n > 0) ?? [],
  );

  function handleSubmit(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault();
    console.log(team);
    if (!team) return;

    const next = openTeams.includes(team) ? openTeams : [...openTeams, team];
    setOpenTeams(next);
    setTeam(0);
    syncUrl(next);
  }

  function syncUrl(next: number[]) {
    navigate(next.length ? `/teamlookup/${next.join(",")}` : "/teamlookup", {
      replace: true,
    });
  }

  return (
    <div className="flex flex-col gap-4">
      <form
        onSubmit={(e) => {
          handleSubmit(e);
        }}
        className="flex flex-col gap-4"
      >
        <fieldset className="fieldset rounded-box p-4">
          <legend className="fieldset-legend text-xl">
            <span className="flex items-center gap-2">
            Team Lookup
            {openTeams.length > 0 && (
              <DataDisplayInformationCircle />
      )}
      </span>
          </legend>
          
          <input
            type="number"
            className="input input-field input-info validator"
            value={team || ""}
            onChange={(e) => setTeam(Number(e.target.value))}
          />
          <button
            className="btn btn-xl btn-success"
            type="submit"
            disabled={loading}
          >
            {loading ? (
              <>
                <span className="loading loading-spinner loading-xl"></span>
                Loading...
              </>
            ) : (
              "Submit"
            )}
          </button>
        </fieldset>
      </form>
      
      {openTeams.map((t) => (
        <div
          key={t}
          className="collapse collapse-arrow bg-base-200 border border-base-300 rounded-box"
        >
          <input type="checkbox" defaultChecked />
          <div className="collapse-title font-medium flex items-center gap-2 pe-12">
            <button
              type="button"
              className="btn btn-ghost btn-xs relative z-10"
              onClick={(e) => {
                e.preventDefault();
                e.stopPropagation();
                const next = openTeams.filter((x) => x !== t);
                setOpenTeams(next);
                syncUrl(next);
              }}
            >
              ✕
            </button>
            <span className="flex-1">Team {t}</span>
          </div>
          <div className="collapse-content">
            <div className="tabs tabs-lift justify-center">
              {/* Match */}
              <input
                type="radio"
                name={`main_tabs_${t}`}
                className="tab border-white text-white text-xl"
                aria-label="Match"
                defaultChecked
              />
              <div className="tab-content">
                <MatchDataDisplay team={t} />
              </div>
              {/* Comments */}
              <input
                type="radio"
                name={`main_tabs_${t}`}
                className="tab border-white text-white text-xl"
                aria-label="Comments"
              />
              <div className="tab-content">
                <CommentDataDisplay team={t} />
              </div>

              {/* Pit */}
              <input
                type="radio"
                name={`main_tabs_${t}`}
                className="tab border-white text-white text-xl"
                aria-label="Summary"
              />
              <div className="tab-content">
                <PitDataDisplay team={t} />
              </div>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
}

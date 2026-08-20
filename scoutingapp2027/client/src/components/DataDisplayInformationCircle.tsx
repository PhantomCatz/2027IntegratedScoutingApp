import { InformationCircleIcon } from "@heroicons/react/24/outline";

export function DataDisplayInformationCircle() {
  return (
    <div className="dropdown dropdown-center">
      <div
        tabIndex={0}
        role="button"
        className="btn btn-circle btn-ghost btn-xs text-info"
      >
        <InformationCircleIcon />
      </div>
      <div
        tabIndex={0}
        className="card card-sm dropdown-content bg-base-100 rounded-box z-1 w-64 shadow-sm border border-white"
      >
        <div tabIndex={0} className="card-body">
          <p></p>
          <p>
            Qual: <label className="text-warning">Yellow</label> = Played
            defense
          </p>
          <p>
            Auto/Climb: <label className="text-error">Red</label> = Attempt Fail
          </p>
          <p>
            <label className="text-success">Green</label> = Attempt Success
          </p>
          <p>
            <label>White</label> = No Attempt
          </p>
          <p>
            Total: <label className="text-error">Red</label> = Defense played
            against this robot
          </p>
        </div>
      </div>
    </div>
  );
}

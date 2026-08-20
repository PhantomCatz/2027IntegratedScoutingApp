import { InformationCircleIcon } from "@heroicons/react/24/outline";

type DataDisplayProp = {
  team: number;
};

export function MatchDataDisplay({ team }: DataDisplayProp) {
  return (
    <div className="overflow-x-auto">
      <table className="table table-zebra text-lg">
        {/* head */}
        <thead>
          <tr>
            <th>Match</th>
            <th>Auto</th>
            <th>Teleop</th>
            <th>Climb</th>
            <th>Total</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <th>Q1</th>
            <td className="text-warning">10</td>
            <td>20</td>
            <td>5</td>
            <td>35</td>
          </tr>
          <tr>
            <th>Q</th>
            <td>10</td>
            <td>20</td>
            <td>5</td>
            <td>35</td>
          </tr>
          <tr>
            <th>Q1</th>
            <td>10</td>
            <td>20</td>
            <td>5</td>
            <td>35</td>
          </tr>
          <tr>
            <th>Q1</th>
            <td>10</td>
            <td>20</td>
            <td>5</td>
            <td>35</td>
          </tr>
        </tbody>
      </table>
    </div>
  );
}

export function CommentDataDisplay({ team }: DataDisplayProp) {
  return (
    <div className="overflow-x-auto">
      <table className="table table-zebra text-lg">
        <tbody>
          <tr>
            <th>Strat</th>
            <td>TODO</td>
          </tr>
          <tr>
            <th>Strat</th>
            <td>TODO</td>
          </tr>
          <tr>
            <th>Strat</th>
            <td>TODO</td>
          </tr>
          <tr>
            <th>Pit</th>
            <td>TODO</td>
          </tr>
          <tr>
            <th>Pit</th>
            <td>TODO</td>
          </tr>
          <tr>
            <th>Pit</th>
            <td>TODO</td>
          </tr>
          <tr>
            <th>Match</th>
            <td>TODO</td>
          </tr>
          <tr>
            <th>Match</th>
            <td>TODO</td>
          </tr>
          <tr>
            <th>Match</th>
            <td>TODO</td>
          </tr>
        </tbody>
      </table>
    </div>
  );
}

export function PitDataDisplay({ team }: DataDisplayProp) {
  return (
    <div className="overflow-x-auto">
      <table className="table table-zebra text-lg">
        <tbody>
          <tr>
            <th>Propulsion motor</th>
            <td>TODO</td>
          </tr>
          <tr>
            <th>Steering motor</th>
            <td>TODO</td>
          </tr>
          <tr>
            <th>Notable Mechanisms</th>
            <td>TODO</td>
          </tr>
          <tr>
            <th>Hoard Range</th>
            <td>TODO</td>
          </tr>
          <tr>
            <th>Scoring Range</th>
            <td>TODO</td>
          </tr>
          <tr>
            <th>Climb</th>
            <td>TODO</td>
          </tr>
          <tr>
            <th>Fuel Capacity</th>
            <td>TODO</td>
          </tr>
          <tr>
            <th>SOTM</th>
            <td>TODO</td>
          </tr>
          <tr>
            <th>Robot Weight</th>
            <td>TODO</td>
          </tr>
          <tr>
            <th>Shooter Type</th>
            <td>TODO</td>
          </tr>
          <tr>
            <th>Intake Type</th>
            <td>TODO</td>
          </tr>
          <tr>
            <th>Swerve Wheel Type</th>
            <td>TODO</td>
          </tr>
        </tbody>
      </table>
    </div>
  );
}

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

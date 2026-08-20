type PitDataDisplayProp = {
  team: number;
};

export function PitDataDisplay({ team }: PitDataDisplayProp) {
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

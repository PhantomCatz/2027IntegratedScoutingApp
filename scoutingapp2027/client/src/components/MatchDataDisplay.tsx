type MatchDataDisplayProp = {
  team: number;
};

export function MatchDataDisplay({ team }: MatchDataDisplayProp) {
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

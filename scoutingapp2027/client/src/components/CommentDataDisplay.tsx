type CommentDataDisplayProp = {
  team: number;
};

export function CommentDataDisplay({ team }: CommentDataDisplayProp) {
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

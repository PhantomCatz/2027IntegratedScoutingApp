import { useParams } from "react-router-dom";

import { InformationCircleIcon } from "@heroicons/react/24/outline";

export function DtfPage() {
	const { teams } = useParams();

	const teamNumbers = teams?.split(",").filter((team) => team.length > 0) ?? [];

	const redTeams = teamNumbers.slice(0, 3);
	const blueTeams = teamNumbers.slice(3, 6);
	const summaryTeams = blueTeams.length > 0 ? blueTeams : redTeams;
	const summaryColumns =
		summaryTeams.length === 3 ? summaryTeams : ["4414", "3476", "8119"];

	return (
		<fieldset className="fieldset rounded-box p-4">
			<legend className="fieldset-legend" />

			<div className="tabs tabs-lift justify-center">
				{/* Red */}
				<input
					type="radio"
					name="main_tabs"
					className="tab text-xl text-error border-error"
					aria-label="Red"
					defaultChecked
				/>
				<div className="tab-content">
					<div className="tabs tabs-box justify-center">
						{redTeams.map((team, i) => (
							//NK: react warns about non-unique keys, but fragment is required for tabs to work
							<>
								<input
									key={`red-tab-${i}`}
									type="radio"
									name="red_tabs"
									className="tab text-error text-lg"
									aria-label={team}
									defaultChecked={i === 0}
								/>
								<div className="tab-content">
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
								</div>
							</>
						))}
						<div className="dropdown dropdown-end">
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
										Qual: <label className="text-warning">Yellow</label> =
										Played defense
									</p>
									<p>
										Auto/Climb: <label className="text-error">Red</label> =
										Attempt Fail
									</p>
									<p>
										<label className="text-success">Green</label> = Attempt
										Success
									</p>
									<p>
										<label>White</label> = No Attempt
									</p>
									<p>
										Total: <label className="text-error">Red</label> = Defense
										played against this robot
									</p>
								</div>
							</div>
						</div>
					</div>
					<label className="select">
						<span className="label">Comment Type</span>
						<select>
							<option defaultChecked></option>
							<option>Match</option>
							<option>Strategic</option>
							<option>Pit</option>
						</select>
					</label>
				</div>
				{blueTeams.length > 0 && (
					<>
						{/* Blue */}
						<input
							type="radio"
							name="main_tabs"
							className="tab text-xl text-info border-info"
							aria-label="Blue"
						/>
						<div className="tab-content">
							<div className="tabs tabs-box justify-center">
								{blueTeams.map((team, i) => (
									//NK: react warns about non-unique keys, but fragment is required for tabs to work
									<>
										<input
											key={`blue-tab-${i}`}
											type="radio"
											name="blue_tabs"
											className="tab text-info text-lg"
											aria-label={team}
											defaultChecked={i === 0}
										/>
										<div className="tab-content">
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
										</div>
									</>
								))}
								<div className="dropdown dropdown-end">
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
												Qual: <label className="text-warning">Yellow</label> =
												Played defense
											</p>
											<p>
												Auto/Climb: <label className="text-error">Red</label> =
												Attempt Fail
											</p>
											<p>
												<label className="text-success">Green</label> = Attempt
												Success
											</p>
											<p>
												<label>White</label> = No Attempt
											</p>
											<p>
												Total: <label className="text-error">Red</label> =
												Defense played against this robot
											</p>
										</div>
									</div>
								</div>
							</div>
							<label className="select">
								<span className="label">Comment Type</span>
								<select>
									<option defaultChecked></option>
									<option>Match</option>
									<option>Strategic</option>
									<option>Pit</option>
								</select>
							</label>
						</div>
					</>
				)}
				{/* Summary */}
				<input
					type="radio"
					name="main_tabs"
					className="tab border-white text-white text-xl"
					aria-label="Summary"
				/>
				<div className="tab-content">
					<div className="overflow-x-auto">
						<table className="table table-zebra text-lg">
							{/* head */}
							<thead>
								<tr>
									<th>Team</th>
									<th>Auto</th>
									<th>Teleop</th>
									<th>Climb</th>
									<th>Total</th>
								</tr>
							</thead>
							<tbody>
								<tr>
									<th>R1</th>
									<td className="text-warning">10</td>
									<td>20</td>
									<td>5</td>
									<td>35</td>
								</tr>
								<tr>
									<th>R2</th>
									<td>10</td>
									<td>20</td>
									<td>5</td>
									<td>35</td>
								</tr>
								<tr>
									<th>R3</th>
									<td>10</td>
									<td>20</td>
									<td>5</td>
									<td>35</td>
								</tr>
								<tr>
									<th>b1</th>
									<td>10</td>
									<td>20</td>
									<td>5</td>
									<td>35</td>
								</tr>
								<tr>
									<th>b2</th>
									<td>10</td>
									<td>20</td>
									<td>5</td>
									<td>35</td>
								</tr>
								<tr>
									<th>b3</th>
									<td>10</td>
									<td>20</td>
									<td>5</td>
									<td>35</td>
								</tr>
							</tbody>
						</table>
						<div className="divider"></div>

						<div className="tabs tabs-box justify-center">
							<input
								type="radio"
								name="sum_tabs"
								className="tab text-xl text-error border-info"
								aria-label="Red"
								defaultChecked
							/>
							<div className="tab-content">
								<div className="overflow-x-auto">
									<table className="table table-zebra text-lg">
										{/* head */}
										<thead>
											<tr>
												<th></th>
												<th>{redTeams[0] ?? ""}</th>
												<th>{redTeams[1] ?? ""}</th>
												<th>{redTeams[2] ?? ""}</th>
											</tr>
										</thead>
										<tbody>
											<tr>
												<th>Robot Death</th>
												<td className="text-warning">10</td>
												<td>20</td>
												<td>5</td>
											</tr>
											<tr>
												<th>Fuel Capacity</th>
												<td>10</td>
												<td>20</td>
												<td>5</td>
											</tr>
											<tr>
												<th>Hoard Type</th>
												<td>10</td>
												<td>20</td>
												<td>5</td>
											</tr>
											<tr>
												<th>SOTM</th>
												<td>10</td>
												<td>20</td>
												<td>5</td>
											</tr>
											<tr>
												<th>Drivetrain</th>
												<td>10</td>
												<td>20</td>
												<td>5</td>
											</tr>
											<tr>
												<th>Motor Type</th>
												<td>10</td>
												<td>20</td>
												<td>5</td>
											</tr>
											<tr>
												<th># Def. Match</th>
												<td>10</td>
												<td>20</td>
												<td>5</td>
											</tr>
										</tbody>
									</table>
								</div>
							</div>
							<input
								type="radio"
								name="sum_tabs"
								className="tab text-xl text-info border-info"
								aria-label="Blue"
							/>
							<div className="tab-content">
								<div className="overflow-x-auto">
									<table className="table table-zebra text-lg">
										{/* head */}
										<thead>
											<tr>
												<th></th>
												<th>{blueTeams[0] ?? ""}</th>
												<th>{blueTeams[1] ?? ""}</th>
												<th>{blueTeams[2] ?? ""}</th>
											</tr>
										</thead>
										<tbody>
											<tr>
												<th>Robot Death</th>
												<td className="text-warning">10</td>
												<td>20</td>
												<td>5</td>
											</tr>
											<tr>
												<th>Fuel Capacity</th>
												<td>10</td>
												<td>20</td>
												<td>5</td>
											</tr>
											<tr>
												<th>Hoard Type</th>
												<td>10</td>
												<td>20</td>
												<td>5</td>
											</tr>
											<tr>
												<th>SOTM</th>
												<td>10</td>
												<td>20</td>
												<td>5</td>
											</tr>
											<tr>
												<th>Drivetrain</th>
												<td>10</td>
												<td>20</td>
												<td>5</td>
											</tr>
											<tr>
												<th>Motor Type</th>
												<td>10</td>
												<td>20</td>
												<td>5</td>
											</tr>
											<tr>
												<th># Def. Match</th>
												<td>10</td>
												<td>20</td>
												<td>5</td>
											</tr>
										</tbody>
									</table>
								</div>
							</div>
						</div>
					</div>
				</div>
			</div>
		</fieldset>
	);
}

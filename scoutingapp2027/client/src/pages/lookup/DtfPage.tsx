import { useParams } from "react-router-dom";

export function DtfPage() {
	const { teams } = useParams();

	const teamNumbers = teams?.split(",").filter((team) => team.length > 0) ?? [];

	const redTeams = teamNumbers.slice(0, 3);
	const blueTeams = teamNumbers.slice(3, 6).length
		? teamNumbers.slice(3, 6)
		: ["None"];
	return (
		<fieldset className="fieldset rounded-box p-4">
			<legend className="fieldset-legend">
				<div className="breadcrumbs text-xl">
					<ul>
						<li>
							<a href="../dtf/">DTF</a>
						</li>
						<li className="text-lg font-bold">
							<a className="text-error">
								{redTeams.map((team, i) => ` ${team}`)}
							</a>
							&nbsp;vs&nbsp;
							<a className="text-info">
								{blueTeams.map((team, i) => ` ${team}`)}
							</a>
						</li>
					</ul>
				</div>
			</legend>
			{/* name of each tab group should be unique */}
			<div className="tabs tabs-box">
				<input
					type="radio"
					name="my_tabs_6"
					className="tab"
					aria-label="Tab 1"
				/>
				<div className="tab-content bg-base-100 border-base-300 p-6">
					Tab content 1
				</div>

				<input
					type="radio"
					name="my_tabs_6"
					className="tab"
					aria-label="Tab 2"
					defaultChecked
				/>
				<div className="tab-content bg-base-100 border-base-300 p-6">
					Tab content 2
				</div>

				<input
					type="radio"
					name="my_tabs_6"
					className="tab"
					aria-label="Tab 3"
				/>
				<div className="tab-content bg-base-100 border-base-300 p-6">
					Tab content 3
				</div>
			</div>
		</fieldset>
	);
}

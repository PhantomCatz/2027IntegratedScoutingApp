import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { getQualMatchData, getAllianceTeams } from "../../components/tbaLookup";

export function DtfHome() {
	const [matchNumber, setMatchNumber] = useState<number>(0);
	const [loading, setLoading] = useState(false);

	const [redTeams, setRedTeams] = useState<number[]>([0, 0, 0]);
	const [blueTeams, setBlueTeams] = useState<number[]>([0, 0, 0]);

	const navigate = useNavigate();

	async function fetchMatchTeams(number: number) {
		const data = await getQualMatchData(number);

		return {
			red: data.alliances.red.team_keys.map((team: string) =>
				Number(team.replace("frc", "")),
			),
			blue: data.alliances.blue.team_keys.map((team: string) =>
				Number(team.replace("frc", "")),
			),
		};
	}

	async function loadMatch(number: number) {
		setLoading(true);

		try {
			const teams = await fetchMatchTeams(number);

			setRedTeams(teams.red);
			setBlueTeams(teams.blue);
		} catch (error) {
			console.error("Error fetching match data:", error);
		} finally {
			setLoading(false);
		}
	}

	async function handleMatchNumberChange(
		event: React.ChangeEvent<HTMLInputElement>,
	) {
		const number = parseInt(event.target.value, 10);

		if (isNaN(number)) return;

		setMatchNumber(number);
		await loadMatch(number);
	}

	async function changeMatchNumber(amount: number) {
		const newNumber = Math.max(1, matchNumber + amount);

		setMatchNumber(newNumber);
		await loadMatch(newNumber);
	}

	async function handleAllianceChange(
		event: React.ChangeEvent<HTMLSelectElement>,
		isRed: boolean,
	) {
		const alliance = event.target.value;

		if (!alliance) return;

		setLoading(true);

		try {
			const teams = await getAllianceTeams(alliance);

			if (isRed) {
				setRedTeams(teams);
			} else {
				setBlueTeams(teams);
			}
		} catch (error) {
			console.error("Error fetching alliance teams:", error);
		} finally {
			setLoading(false);
		}
	}

	function updateTeam(index: number, value: number, isRed: boolean) {
		if (isRed) {
			const updated = [...redTeams];
			updated[index] = value;
			setRedTeams(updated);
		} else {
			const updated = [...blueTeams];
			updated[index] = value;
			setBlueTeams(updated);
		}
	}

	function handleSubmit(event: React.FormEvent<HTMLFormElement>) {
		event.preventDefault();
		const teams = [...redTeams, ...blueTeams].filter((team) => team > 0);
		console.log(teams);
		navigate(`../dtf/${teams.join(",")}`);
	}

	return (
		<form
			onSubmit={(e) => {
				handleSubmit(e);
			}}
			className="flex flex-col gap-4"
		>
			<fieldset className="fieldset rounded-box p-4">
				<legend className="fieldset-legend text-xl">
					Drive Team Feeder
				</legend>
				<label className="label flex items-center gap-2">
					<span>Match #</span>
					{loading && (
						<span className="loading loading-spinner loading-sm text-primary"></span>
					)}
				</label>

				<div className="join">
					<button
						type="button"
						className="btn join-item text-xl"
						onClick={() => changeMatchNumber(-1)}
						disabled={loading}
					>
						-
					</button>

					<input
						type="number"
						className="input input-field validator join-item"
						value={matchNumber}
						onChange={handleMatchNumberChange}
						disabled={loading}
					/>

					<button
						type="button"
						className="btn join-item text-xl"
						onClick={() => changeMatchNumber(1)}
						disabled={loading}
					>
						+
					</button>
				</div>

				<label className="label text-lg font-bold">Red Alliance</label>

				{redTeams.map((team, i) => (
					<div key={`red-${i}`}>
						<label className="label">Team {i + 1}</label>
						<input
							type="number"
							className="input input-field input-error validator"
							value={team || ""}
							required={i === 0}
							onChange={(e) => updateTeam(i, Number(e.target.value), true)}
						/>
					</div>
				))}

				<label className="label text-lg font-bold">Blue Alliance</label>

				{blueTeams.map((team, i) => (
					<div key={`blue-${i}`}>
						<label className="label">Team {i + 1}</label>
						<input
							type="number"
							className="input input-field input-info validator"
							value={team || ""}
							onChange={(e) => updateTeam(i, Number(e.target.value), false)}
						/>
					</div>
				))}

				<label className="label">Red Alliance</label>

				<select
					className="select select-error"
					onChange={(e) => handleAllianceChange(e, true)}
					disabled={loading}
				>
					<option />
					<option>Alliance 1</option>
					<option>Alliance 2</option>
					<option>Alliance 3</option>
					<option>Alliance 4</option>
					<option>Alliance 5</option>
					<option>Alliance 6</option>
					<option>Alliance 7</option>
					<option>Alliance 8</option>
				</select>

				<label className="label">Blue Alliance</label>

				<select
					className="select select-info"
					onChange={(e) => handleAllianceChange(e, false)}
					disabled={loading}
				>
					<option />
					<option>Alliance 1</option>
					<option>Alliance 2</option>
					<option>Alliance 3</option>
					<option>Alliance 4</option>
					<option>Alliance 5</option>
					<option>Alliance 6</option>
					<option>Alliance 7</option>
					<option>Alliance 8</option>
				</select>

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
	);
}

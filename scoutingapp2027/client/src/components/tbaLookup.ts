var API_KEY =
	"sslVXdCsTZppMqheBd7MMVSxDrIdUuf1kyI4HFpR2RzsYibdHhFPvLyKltKr5XHz";
var EVENT_KEY = "2026capoh";

export async function getQualMatchData(number: number) {
	const response = await fetch(
		`https://www.thebluealliance.com/api/v3/match/${EVENT_KEY}_qm${number}`,
		{
			method: "GET",
			headers: {
				"X-TBA-Auth-Key": API_KEY,
			},
		},
	);
	if (!response.ok) {
		throw new Error(`Failed to fetch match data: ${response.statusText}`);
	}
	const jsonData = await response.json();
	return jsonData;
}

export async function getElimsMatchData(number: number) {
	const response = await fetch(
		`https://www.thebluealliance.com/api/v3/match/${EVENT_KEY}_sf${number}m1`,
		{
			method: "GET",
			headers: {
				"X-TBA-Auth-Key": API_KEY,
			},
		},
	);
	if (!response.ok) {
		throw new Error(`Failed to fetch match data: ${response.statusText}`);
	}
	const jsonData = await response.json();
	console.log(jsonData);
	return jsonData;
}

export async function getAllianceTeams(alliance: string) {
	const response = await fetch(`https://www.thebluealliance.com/api/v3/event/${EVENT_KEY}/alliances/`, {
		method: "GET",
		headers: {
			"X-TBA-Auth-Key": API_KEY,
		},
	});

	if (!response.ok) {
		throw new Error(`TBA Error: ${response.status}`);
	}

	const data = await response.json();

	return data
		.find((a: any) => a.name === alliance)
		.picks.map((team: string) => Number(team.replace("frc", "")));
}

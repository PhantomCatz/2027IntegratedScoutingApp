// just get these from https://www.thebluealliance.com/apidocs/v3
export type Comp_Level = "ef" | "f" | "sf" | "qf" | "qm";
export type AllianceColor = "blue" | "red";
export type EventKey = `${number}${string}`;
// export type MatchKey = `${EventKey}_${Comp_Level}m${number}`;
export type MatchKey = `${EventKey}_${Comp_Level}${number}${`m${number}` | ""}`;

/******* /match/{match_key} **********/
export type Match = {
	key: MatchKey;
	comp_level: Comp_Level;
	set_number: number;
	match_number: number;
	alliances: {
		blue: MatchAlliance;
		red: MatchAlliance;
	};
	winning_alliance: AllianceColor | "";
	event_key: string;
	time: number | null;
	actual_time: number | null;
	predicted_time: number | null;
	post_result_time: number | null;
	score_breakdown: Match_Score_Breakdown_2026;
	videos: {
		type: "youtube" | "tba";
		key: string;
	}[];
};

// TODO: change per year according to TBA "/match/{match_key}"
export type Match_Score_Breakdown_2026 = {
	blue: Match_Score_Breakdown_2026_Alliance;
	red: Match_Score_Breakdown_2026_Alliance;
};
export type Match_Score_Breakdown_2026_Alliance = {
	adjustPoints: number;
	autoTowerPoints: number;
	autoTowerRobot1: TowerLevel;
	autoTowerRobot2: TowerLevel;
	autoTowerRobot3: TowerLevel;
	endGameTowerPoints: number;
	endGameTowerRobot1: TowerLevel;
	endGameTowerRobot2: TowerLevel;
	endGameTowerRobot3: TowerLevel;
	energizedAchieved: boolean;
	foulPoints: number;
	g206Penalty: boolean;
	hubScore: {
		autoCount: number;
		autoPoints: number;
		endgameCount: number;
		endgamePoints: number;
		shift1Count: number;
		shift1Points: number;
		shift2Count: number;
		shift2Points: number;
		shift3Count: number;
		shift3Points: number;
		shift4Count: number;
		shift4Points: number;
		teleopCount: number;
		teleopPoints: number;
		totalCount: number;
		totalPoints: number;
		transitionCount: number;
		transitionPoints: number;
	};
	majorFoulCount: number;
	minorFoulCount: number;
	rp: number;
	superchargedAchieved: number;
	totalAutoPoints: number;
	totalTeleopPoints: number;
	totalTowerPoints: number;
	traversalAchieved: boolean;
};
export type TowerLevel = "Level1" | "Level2" | "Level3" | "None";
export type MatchAlliance = {
	score: number;
	team_keys: TeamKey[];
	surrogate_team_keys: TeamKey[];
	dq_team_keys: TeamKey[];
};
export type TeamKey = `frc${number}`;
/******* end /match/{match_key} **********/

/******* /event/{event_key}/teams/simple ***********/
export type TeamsSimple = {
	key: TeamKey;
	team_number: number;
	nickname: string;
	name: string;
	city: string | null;
	state_prov: string | null;
	country: string | null;
}[];

export type Elimination_Alliance = {
	name: string;
	backup: null | {
		in: string;
		out: string;
	};
	declines: TeamKey[];
	picks: TeamKey[];
	status: {
		playoff_average: null | number;
		playoff_type: null | number;
		level: Comp_Level;
		record: OutcomeRecord;
		current_level_record: OutcomeRecord;
		status: "eliminated" | "playing" | "won";
		advanced_to_round_robin_finals: boolean;
		double_elim_round: DoubleElimRound;
		round_robin_rank: number;
	};
};
export type OutcomeRecord = {
	losses: number;
	ties: number;
	wins: number;
};
export type DoubleElimRound = "Finals" | "Round 1" | "Round 2" | "Round 3" | "Round 4" | "Round 5";

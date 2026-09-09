import * as TbaApi from "./tbaApi";
import * as TbaRequest from "./tbaRequest";

export type Comment = {
	comments: string;
};

export type SubmitBody = {
	event_key: TbaApi.EventKey;
	team_number: number;
	scouter_initials: string;
	comp_level: TbaApi.Comp_Level;
	match_number: number;
	robot_position: TbaRequest.RobotPosition;
	comments: string;
};

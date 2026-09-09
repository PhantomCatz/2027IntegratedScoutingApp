import * as TbaApi from "./tbaApi";
import * as TbaRequest from "./tbaRequest";

export type Tinyint = 0 | 1;

export type MatchEntry = {
	id: number;
	event_key: TbaApi.EventKey;
	team_number: number;
	scouter_initials: string;
	comp_level: TbaApi.Comp_Level;
	match_number: number;
	robot_position: TbaRequest.RobotPosition;
	auton_fuel_scored: number;
	auton_climb_attempted: Tinyint;
	auton_climb_successful: Tinyint;
	teleop_fuel_scored: number;
	teleop_fuel_hoarded_amount: string;
	teleop_hoard_types: string;
	teleop_climb_status: string;
	teleop_climb_level: number;
	overall_robot_died: Tinyint;
	overall_defended_others: Tinyint;
	overall_was_defended: Tinyint;
	overall_defended: string;
	overall_defended_by: string;
	overall_shot_while_moving: Tinyint;
	overall_shot_hoarded_pieces: Tinyint;
	overall_comments: string;
	robot_appeared: Tinyint;
};

export type StrategicEntry = {
	id: number;
	event_key: TbaApi.EventKey;
	team_number: number;
	scouter_initials: string;
	comp_level: TbaApi.Comp_Level;
	match_number: number;
	robot_position: TbaRequest.RobotPosition;
	comments: string;
};

export type PitDataEntry = {
	id: number;
	event_key: string;
	team_number: number;
	driving_restrictions: Tinyint;
	intake_type: string;
	shooter_type: string;
	notable_mechanism: string;
	drivetrain_type: string;
	propulsion_motor_type: string;
	drivetrain_wheel_type: string;
	scoring_range: string;
	max_hoard_range: string;
	shoot_on_the_move: string;
	gracious_professionalism: Tinyint;
	comments: string;
};

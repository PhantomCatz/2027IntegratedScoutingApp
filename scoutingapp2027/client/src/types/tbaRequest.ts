export * as RequestTypes from "./requestTypes";
export * as ResultTypes from "./resultTypes";

export type RobotPosition = "R1" | "R2" | "R3" | "B1" | "B2" | "B3";
export type AllianceStructure = {
	blue: "B1" | "B2" | "B3";
	red: "R1" | "R2" | "R3";
};

USE testdb;

DROP TABLE IF EXISTS match_data;

CREATE TABLE match_data(
    id                                INT NOT NULL AUTO_INCREMENT,
    event_key                         VARCHAR(13) NOT NULL,
    team_number                       INT NOT NULL,
    scouter_initials                  VARCHAR(4) NOT NULL,
    comp_level                        VARCHAR(30) NOT NULL,
    match_number                      SMALLINT NOT NULL,
    robot_position                    VARCHAR(10) NOT NULL,
    auton_fuel_scored                 SMALLINT NOT NULL,
    auton_shoot_location              VARCHAR(30) NOT NULL,
    auton_intake_location             VARCHAR(30) NOT NULL,
    auton_climb_attempted             TINYINT NOT NULL,
    auton_climb_successful            TINYINT NOT NULL,
    teleop_fuel_scored                SMALLINT NOT NULL,
    teleop_fuel_hoarded_amount        VARCHAR(50) NOT NULL,
    teleop_primary_hoard_type         VARCHAR(50) NOT NULL,
    endgame_climb_attempted           TINYINT NOT NULL,
    endgame_climb_level               VARCHAR(10) NOT NULL,
    endgame_climb_successful          TINYINT NOT NULL,
    overall_robot_died                TINYINT NOT NULL,
    overall_defended_others           TINYINT NOT NULL,
    overall_was_defended              TINYINT NOT NULL,
    overall_defended                  VARCHAR(50) NOT NULL,
    overall_defended_by               VARCHAR(50) NOT NULL,
    overall_path_to_neutral_zone      VARCHAR(10) NOT NULL,
    overall_shot_while_moving         TINYINT NOT NULL,
    overall_shot_hoarded_pieces       TINYINT NOT NULL,
    overall_comments                  VARCHAR(500),
    robot_appeared                    TINYINT NOT NULL,

    PRIMARY KEY (id)
);
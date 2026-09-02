USE testdb;

DROP TABLE IF EXISTS pit_data;

CREATE TABLE pit_data (
    id INT NOT NULL AUTO_INCREMENT,

    -- Match / Team Info
    event_key      VARCHAR(10) NOT NULL,
    team_number      INT NOT NULL,
    scouter_initials VARCHAR(4) NOT NULL,

    -- Robot Specs
    robot_weight                  FLOAT NOT NULL,
    drive_train_type              VARCHAR(30) NOT NULL,
    driving_motor_type            VARCHAR(30) NOT NULL,
    number_of_driving_motors      SMALLINT NOT NULL,
    wheel_type                    VARCHAR(50) NOT NULL,

    -- Intake / Shooting
    fuel_intake_location          VARCHAR(50) NOT NULL,
    intake_type                   VARCHAR(50) NOT NULL,
    intake_width                  VARCHAR(50) NOT NULL,
    max_fuel_capacity             INT NOT NULL,
    max_shot_range                VARCHAR(50) NOT NULL,

    -- Capabilities (0 = No, 1 = Yes)
    auto_aim                      TINYINT NOT NULL,
    trench_capability             TINYINT NOT NULL,
    climb_during_auto             TINYINT NOT NULL,
    can_climb_l1                  TINYINT NOT NULL,
    can_climb_l2                  TINYINT NOT NULL,
    can_climb_l3                  TINYINT NOT NULL,

    -- Team Evaluation
    pit_organization              SMALLINT NOT NULL,
    team_safety                   SMALLINT NOT NULL,
    team_workmanship              SMALLINT NOT NULL,
    gracious_professionalism      SMALLINT NOT NULL,

    -- Notes
    comments              VARCHAR(1000) NOT NULL,

    PRIMARY KEY (id)
);

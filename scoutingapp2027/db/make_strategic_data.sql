USE testdb;

DROP TABLE IF EXISTS strategic_data;

CREATE TABLE strategic_data(
    id                INT NOT NULL AUTO_INCREMENT,
    event_key         VARCHAR(10) NOT NULL,
    team_number       SMALLINT NOT NULL,
    scouter_initials  VARCHAR(4) NOT NULL,
    comp_level        VARCHAR(30) NOT NULL,
    match_number      SMALLINT NOT NULL,
    robot_position    VARCHAR(10) NOT NULL,
    blue_alliance     VARCHAR(20) NOT NULL,
    red_alliance      VARCHAR(20) NOT NULL,
    comments          VARCHAR(1000) NOT NULL,

    PRIMARY KEY (id)
);
USE testdb;

DROP TABLE IF EXISTS pit_picture_data;

CREATE TABLE pit_picture_data(
    id               INT NOT NULL AUTO_INCREMENT,
    event_key        VARCHAR(10) NOT NULL,
    team_number      INT NOT NULL,
    scouter_initials VARCHAR(4) NOT NULL,
    robot_image_uri  MEDIUMTEXT NOT NULL,

    PRIMARY KEY (id)
);

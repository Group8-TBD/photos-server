DROP DATABASE IF EXISTS properties;

CREATE DATABASE properties;

\c properties;

CREATE SCHEMA housing;

CREATE TABLE housing.properties (
  property_id SERIAL NOT NULL,
  property_name text,
  PRIMARY KEY (property_id)
);

CREATE TABLE housing.images (
  property_id INT,
  image_id SERIAL NOT NULL,
  url text,
  description text,
  PRIMARY KEY (image_id),
  FOREIGN KEY (property_id) REFERENCES housing.properties (property_id)
);

CREATE INDEX property_index ON housing.images (property_id);

COPY housing.properties FROM '/Users/patmac510/Documents/hackreactor/SDC-project/photo-server/db/postgres_seeder/seed_records/primary_seed.csv' DELIMITER ',' CSV HEADER;

COPY housing.images FROM '/Users/patmac510/Documents/hackreactor/SDC-project/photo-server/db/postgres_seeder/seed_records/images_seed.csv' DELIMITER ',' CSV HEADER;

ALTER SEQUENCE housing.properties_property_id_seq RESTART WITH 10000001;

ALTER SEQUENCE housing.images_image_id_seq RESTART WITH 210000001;